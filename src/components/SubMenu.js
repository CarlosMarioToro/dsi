import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OtherLevelMenu from './OtherLevelMenu';

const SidebarLink = styled(Link)`
  display: flex;
  color: #222;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #DDD;
    border-left: 3px solid #DDD;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #EEE;
  height: 40px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #222;
  font-size: 18px;

  &:hover {
    background: #DDD;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  // console.log({item});

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          console.log(item.title, index);
          if (!item.subNav){
            return (
              <DropdownLink to={item.path} key={index}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
            );
          }
          return <OtherLevelMenu item={item} key={index} />;
          // return (
          //   <DropdownLink to={item.path} key={index}>
          //     {item.icon}
          //     <SidebarLabel>{item.title}</SidebarLabel>
          //   </DropdownLink>
          // );
        })}
    </>
  );
};

export default SubMenu;

// (<DropdownLink to={item.path} onClick={item.subNav && showSubnav}>
//   <div>
//     {item.icon}
//     <SidebarLabel>{item.title}</SidebarLabel>
//   </div>
//   <div>
//     {item.subNav && subnav
//       ? item.iconOpened
//       : item.subNav
//       ? item.iconClosed
//       : null}
//   </div>
// </DropdownLink>);
