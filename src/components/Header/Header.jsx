import React from 'react';
import './Header.css';

const Header = () => {

  //note: if making title changes, the info between the spans flickers
  return (
    <div className='headerDiv'>
        <b>The <span>Mov</span>ies<span> Sa</span>ga!</b>
    </div>
  )
}

export default Header