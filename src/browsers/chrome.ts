import fs from 'fs';
import os from 'os';
import path from 'path';

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

export default class Chrome {
  platform: string = 'darwin';
  profileList: profileListType = {};
  chromePath: string = '';
  lastActiveProfile: string = '';

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
}
