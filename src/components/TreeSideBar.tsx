import TreeItem from '@material-ui/lab/TreeItem';
import React from 'react';
import TreeParent from './TreeParent';

const TreeSideBar = (props: any) => {
  const { treeNode } = props;

  return (
    <>
      {treeNode.map((node: any) => {
        if (node.children.length > 0) {
          return <TreeParent key={node.id} node={node} />;
        } else {
          return <TreeItem nodeId={node.id} label={node.title} />;
        }
      })}
    </>
  );
};

export default TreeSideBar;
