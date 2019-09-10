import TreeItem from '@material-ui/lab/TreeItem';
import React from 'react';

const TreeParent = (props: any) => {
  const { node } = props;

  const handleClick = (event: any) => {
    // tslint:disable-next-line: no-console
    console.log(event.target.parentNode.parentNode);
  };

  return (
    <TreeItem
      nodeId={node.id}
      label={node.title}
      data-parentid={node.parentId}
      data-nodeid={node.id}
      onClick={handleClick}
    >
      {node.children
        .filter((child: any) => child.children)
        .map((child: any) => (
          <div key={child.id}>
            <TreeParent key={child.id} node={child} />
          </div>
        ))}
    </TreeItem>
  );
};

export default TreeParent;
