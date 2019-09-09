import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import React from 'react';
import { useBookmark } from '../context/bookmark-context';
import TreeNode from './TreeNode';

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const Tree = () => {
  const { bookmarks }: any = useBookmark();
  const classes = useStyles();

  return (
    <>
      <TreeView className={classes.root}>
        {bookmarks &&
          bookmarks.map((treeNode: any, treeNodeIndex: number) => (
            <div key={treeNodeIndex}>
              {treeNode.map((node: any) => (
                <TreeNode key={node.id} node={node} />
              ))}
            </div>
          ))}
      </TreeView>
    </>
  );
};

export default Tree;
