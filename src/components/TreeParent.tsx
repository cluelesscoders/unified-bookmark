import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import React from 'react';
import StyledTreeItem from './StyledTreeItem';

const TreeParent = (props: any) => {
  const { node } = props;

  const handleClick = (event: any) => {
    const element = event.target.parentNode.parentNode.parentNode.parentNode;
    const parentId = element.getAttribute('data-parentid');
    const nodeId = element.getAttribute('data-nodeid');
    // tslint:disable-next-line: no-console
    console.log({ nodeId, parentId });
  };

  return (
    <StyledTreeItem
      key={node.id}
      nodeId={node.id}
      labelText={node.title}
      labelIcon={SupervisorAccountIcon}
      labelInfo={node.children.length}
      color="#1a73e8"
      bgColor="#e8f0fe"
      data-parentid={node.parentId}
      data-nodeid={node.id}
      onClick={handleClick}
    >
      {node.children
        .filter((child: any) => child.children)
        .map((child: any) => (
          <TreeParent node={child} key={child.id} />
        ))}
    </StyledTreeItem>
  );
};

export default TreeParent;
