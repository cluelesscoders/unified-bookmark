import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TreeView from '@material-ui/lab/TreeView';

import { useBookmark } from '../context/bookmark-context';
import TreeSideBar from './TreeSideBar';

declare module 'csstype' {
  interface Properties {
    '--tree-view-color'?: string;
    '--tree-view-bg-color'?: string;
  }
}

const useStyles = makeStyles(
  createStyles({
    root: {
      height: 264,
      flexGrow: 1,
      maxWidth: 400,
    },
  })
);

export default function SideBar() {
  const classes = useStyles();
  const { bookmarks }: any = useBookmark();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      {bookmarks &&
        bookmarks.map((treeNode: any, treeNodeIndex: number) => (
          <TreeSideBar treeNode={treeNode} key={treeNodeIndex} />
        ))}
    </TreeView>
  );
}
