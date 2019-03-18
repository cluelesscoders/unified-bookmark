import fs from 'fs';
import os from 'os';
import path from 'path';
import { getChildren, normalize, removeDuplicates } from '../utils';

export type profileListType = {
  info_cache ?: {
    [key: string]: {
      active_time: bigint,
      avatar_icon: string,
      background_apps: boolean,
      gaia_given_name: string,
      gaia_id: string,
      gaia_name: string,
      gaia_picture_file_name: string,
      is_ephemeral: boolean,
      is_omitted_from_profile_list: boolean,
      is_using_default_avatar: boolean,
      is_using_default_name: boolean,
      local_auth_credentials: string,
      managed_user_id: string,
      name: string,
      use_gaia_picture: boolean,
      user_name: string
    }
  },
  last_active_profiles?: Array<string>,
  last_used?: string,
  profiles_created?: string
};

export type bookmarkType = {
  checksum?: string,
  roots: {
    [key: string]: {
      date_added?: string,
      date_modified?: string,
      id?: string,
      name?: string,
      type?: string
    },
  },
  version?: number
}

export default class Chrome {
  platform: string = 'darwin';
  profileList: profileListType = {};
  chromePath: string = '';
  lastActiveProfile: string = '';
  bookmarkPath: string = '';
  bookmarksRaw: bookmarkType = {};
  bookmarks: any = [];

  getPlatform() {
    return this.platform;
  }

  setPlatform(platform: string) {
    this.platform = platform;

    return this;
  }

  getChromePath() {
    switch(this.platform) {
      case 'darwin':
        this.chromePath = path.join(
          os.homedir(),
          'Library',
          'Application Support',
          'Google',
          'Chrome'
        );
        break;
      case 'linux':
        this.chromePath = path.join(
          os.homedir(),
          '.config',
          'google-chrome'
        );
        break;
      default:
          this.chromePath = '';
          break;
    }

    return this;
  }

  async getProfileList() {
    if (this.chromePath === '') {
      await this.getChromePath();
    }
    const localStateFile = 'Local\ State';
    const profileFilePath = `${this.chromePath}${path.sep}${localStateFile}`
    const readFile = JSON.parse(await fs.readFileSync(profileFilePath, 'utf-8'));

    this.profileList = (readFile && readFile.profile) || {};

    return this;
  }

  async getLastActiveProfile() {
    if (Object.entries(this.profileList).length === 0) {
      await this.getProfileList();
    }

    this.lastActiveProfile = (this.profileList && this.profileList.last_used) || '';

    return this.lastActiveProfile;
  }

  async getBookmarkPath(profile: string = '') {
    await this.getLastActiveProfile();
    if (profile === '') {
      profile = this.lastActiveProfile;
    }

    this.bookmarkPath = `${this.chromePath}${path.sep}${profile}${path.sep}Bookmarks`;

    return this;
  }

  async getBookmarks() {
    if (this.bookmarkPath === '') {
      await this.getBookmarkPath();
    }

    const localBookmarks = [];

    this.bookmarksRaw = JSON.parse(await fs.readFileSync(this.bookmarkPath, 'utf-8'));

    if (this.bookmarksRaw && this.bookmarksRaw.roots) {
      Object.keys(this.bookmarksRaw.roots)
        .filter(k => k !== 'sync_transaction_version')
        .forEach((key: string) => {
          const rootObject = this.bookmarksRaw.roots[key];
          const children = rootObject.children.length > 0 ? getChildren(rootObject.children) : [];

          if (children.length) {
            children.forEach(child => localBookmarks.push(child));
          }
        });

      const newArray = new Array(localBookmarks.length);
      localBookmarks.forEach((lb, index) => {
        newArray[index] = normalize(localBookmarks[index]);
      });

      this.bookmarks = removeDuplicates(newArray, 'url');

      return this.bookmarks;
    }
  }
}
