import React from 'react';

import './Nav.css';
import NavItem from '../NavItem/NavItem';

export default props => (
  <aside className="menu-area">
    <nav className="menu">
      <NavItem icon="home" label="Início" />
      <NavItem icon="users" label="Usuários" />
    </nav>
  </aside>
);
