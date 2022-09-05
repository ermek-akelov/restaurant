import React from 'react';

import {Chef, Header, SpecialMenu } from '../../container';
// import { Navbar} from '../../components';

import './Tavern.css';

const Tavern = () => (
  <div>
    <Header />
    <SpecialMenu />
    <Chef />
  </div>
);

export default Tavern