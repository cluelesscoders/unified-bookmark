import TreeItem from '@material-ui/lab/TreeItem';
import React from 'react';

const TreeNode = (props: any) => {
  const { node } = props;
  return (
    <div key={node.id}>
      {node.children.length > 0 ? (
        <TreeItem nodeId={node.id} label={node.title}>
          {node.children
            .filter((child: any) => child.children)
            .map((child: any) => (
              <TreeItem key={child.id} nodeId={child.id} label={child.title} />
            ))}
        </TreeItem>
      ) : (
        <TreeItem nodeId={node.id} label={node.title} />
      )}
    </div>
  );
};

export default TreeNode;
