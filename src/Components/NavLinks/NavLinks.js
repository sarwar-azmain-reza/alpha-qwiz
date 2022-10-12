import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavLinks = (props) => {
  const { rout } = props;
  const location = useLocation();
  return (
    <div className=''>
      <NavLink className = {`mx-4 hover:bg-sky-400  rounded px-2 py-1 ${location.pathname === rout.path ? 'bg-sky-400' : ''}`} to={rout.path}>{rout.name}</NavLink>
      {/* <NavLink className = 'mx-4 hover:bg-slate-400 px-2 py-1' to={rout.path} style={({ isActive }) =>
        isActive ? activeStyle : undefined
      }>{rout.name}</NavLink> */}
    </div>
  );
};

export default NavLinks;