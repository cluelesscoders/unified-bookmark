import Folder from '@material-ui/icons/Folder';
import React from 'react';
import StyledTreeItem from './StyledTreeItem';

const TreeParent = (props: any) => {
  const { node, handleClick } = props;

  const handleElementClick = (event: any) => {
    event.preventDefault();

    handleClick({ event, node });
  };

  return (
    <StyledTreeItem
      key={node.id}
      nodeId={node.id}
      labelText={node.title}
      labelIcon={Folder}
      labelInfo={node.children.length}
      color="#1a73e8"
      bgColor="#e8f0fe"
      data-parentid={node.parentId}
      data-nodeid={node.id}
      onClick={handleElementClick}
    >
      {node.children
        .filter((child: any) => child.children)
        .map((child: any) => (
          <TreeParent node={child} key={child.id} handleClick={handleClick} />
        ))}
    </StyledTreeItem>
  );
};

export default TreeParent;
