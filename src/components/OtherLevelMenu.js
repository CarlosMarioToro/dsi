import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
const DropdownLink2 = styled(Link)`
  background: #EEE;
  height: 40px;
  padding-left: 4rem;
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

const OtherLevelMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
    // console.log({item});

    return (
        <>
            <DropdownLink to={item.path} onClick={item.subNav && showSubnav}>
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
            </DropdownLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    console.log(item.title, index);return (
                        <DropdownLink2 to={item.path} key={index}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink2>
                        );
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

export default OtherLevelMenu;

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
