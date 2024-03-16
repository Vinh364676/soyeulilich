import React from 'react'
import "./Layout.scss";
import Header from '../header/Header';
import Body from '../body/Body';

function Layout() {
  return (
    <div className='layout'>
      <Header/>
      <Body/>
    </div>
  )
}

export default Layout
