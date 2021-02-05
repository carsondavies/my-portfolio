import React from 'react';
import config from '../../config';
import '../assets/sass/layout/_skills.scss'
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>
          I am always looking to learn, develop and to help further a company's mission! Please contact me with any questions or opportunities.
        </p>
        <ul className="contact">
          <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li>

          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
          <div className='contact-buttons'>
            <button>
              <a href='https://docs.google.com/document/d/1MMjK8d_ZhRul7-TI9DfeX7YSDs1DvP09XIS4ZJCwxWw/edit?usp=sharing'>Resume</a>
            </button>
            <button>
              <a href='https://linkedin.com/in/carsondavies'>LinkedIn</a>
            </button>
            <button>
              <a href='https://github.com/carsondavies'>GitHub</a>
            </button>
          </div>
        </ul>
        <ul className="copyright">
          <li>&copy; Solid State. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
