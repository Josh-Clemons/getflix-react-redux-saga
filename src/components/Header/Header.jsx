import React from 'react';
import './Header.css';

const Header = () => {

  //note: if making title changes, the info between the spans flickers
  return (
    <div className='headerDiv'>
        <b>Jos<span>h's</span> Get<span>fl</span>ix</b>
    </div>
  )
}

export default Header