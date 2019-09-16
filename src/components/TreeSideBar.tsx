import React from 'react';
import TreeParent from './TreeParent';

const TreeSideBar = (props: any) => {
  const { treeNode } = props;

  return (
    <>
      {treeNode &&
        treeNode.map((node: any) => {
          if (node.children.length > 0) {
            return (
              <div key={node.id} className="tree-root-element">
                <TreeParent node={node} handleClick={props.handleClick} />
              </div>
            );
          } else {
            return null;
          }
        })}
    </>
  );
};

export default TreeSideBar;
