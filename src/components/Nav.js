import React from 'react';


export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <a href='#one' onClick={e => {
                onMenuToggle();
              }}>About Me</a>
          </li>
          <li>
            <a href='#two' onClick={e => {
                onMenuToggle();
              }}>Education</a>
          </li>
          <li>
            <a href='#three' onClick={e => {
                onMenuToggle();
              }}>Skills</a>
          </li>
          <li>
            <a href='#four' onClick={e => {
                onMenuToggle();
              }}>Projects</a>
          </li>
          <li>
            <a href='#footer' onClick={e => {
                onMenuToggle();
              }}>Contact</a>
          </li>
        </ul>
        <a
          className="close"
          onClick={e => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#menu"
        >
          {''}
        </a>
      </div>
    </nav>
  );
}
