import React from 'react';

import Layout from '../components/Layout';

import '../assets/sass/layout/_skills.scss'


import pic10 from '../assets/images/pic10.jpg'
import headshot from '../assets/images/IMG_7700.png'
import JavaScript from '../assets/images/JavaScript.png'
import Node from '../assets/images/Node.png'
import CSS from '../assets/images/CSS.png'
import HTML from '../assets/images/HTML.png'
import Git from '../assets/images/Git.png'
import PostgreSQL from '../assets/images/PostgreSQL.png'
import ReactIcon from '../assets/images/ReactIcon.png'
import Sass from '../assets/images/Sass (2).png'
import ReduxIcon from '../assets/images/ReduxIcon.svg'
import ExpressIcon from '../assets/images/ExpressIcon.png'
import donoPic from '../assets/images/dono_screenshot.png'
import theaterPic from '../assets/images/theaterlink_screenshot.png'
import AmericoPic from '../assets/images/Americo-screenshot.png'

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        {/* <div className="logo">
          <span className="icon fa-power-off"></span>
        </div> */}
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={headshot} alt="" />
          </a>
          <div className="content">
            <h2 className="major">About Me</h2>
            <p>
              I've always been someone who dives headfirst into everything they do. Whether it's Acting, Movies, or Coding.
              I started out at Brigham Young University majoring in Musical Theater. While that is still a passion for me, I realized I needed something a little more stable and reliable for a career. I fell in love with Web Development shortly after.
              <br></br>
              <br></br>
               It brings me so much joy to build something that I used to take for granted every day. Solving the logic puzzles to get a website functioning is incredibly fulfilling! I love working hard on a feature, grinding through the bugs until finally I see it functioning the way I enivisioned. I hope I can help others experience this, and help a company reach its desired vision!
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic10} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Education</h2>
            <p className='education'>Devmountain - Lehi, Utah</p>
            <li>Immersive Full stack Web Development course in a remote format</li>
            <p className='education'>Brigham Young University - Provo, Utah</p>
            <li>Music Dance Theater course work completed</li>
            <p className='education'>Utah Valley University - Orem, Utah</p>
            <li>General course work completed</li>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          {/* <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a> */}
          <div className="content">
            <h2 className="major">Skills</h2>
            <div className='skills-grid'>
              <section className='skills-wrapper'>
                <img className='skills-image' src={JavaScript} alt='JavaScript Icon' />
                <p className='skills-text'>JavaScript</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={ReactIcon} alt='React Icon' />
                <p className='skills-text'>React</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={ReduxIcon} alt='Redux Icon' />
                <p className='skills-text'>Redux</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={HTML} alt='HTML Icon' />
                <p className='skills-text'>HTML5</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={CSS} alt='CSS Icon' />
                <p className='skills-text'>CSS3</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={ExpressIcon} alt='Express Icon' />
                <p className='skills-text'>Express</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={PostgreSQL} alt='PostgreSQL Icon' />
                <p className='skills-text'>PostgreSQL</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={Node} alt='Node Icon' />
                <p className='skills-text'>Node.js</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={Sass} alt='Sass Icon' />
                <p className='skills-text'>Sass</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={Git} alt='Git Icon' />
                <p className='skills-text'>Git</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Projects</h2>
          <section className="features">
            <article>
              <a href='https://www.linktheaters.com' className="image">
                <img src={theaterPic} alt="" />
              </a>
              <h3 className="major">TheaterLink</h3>
              <p>
                As an actor, I always wanted a hub of sorts to be able to connect with theaters, auditions, and to save song ideas for auditions.
                <br></br>
                <br></br>
                TheaterLink is an app that connects local actors to local theaters, previews upcoming auditions, along with a built-in resource browser for finding audition songs.
                <br></br>
                <br></br>
                So I made it myself!
                <br></br>
                <br></br>
                Built with React, JavaScript, HTML, CSS, Sass, PostgreSQL, Express, Massive, Redux, and Nodemailer.
              </p>
              <a href='https://www.linktheaters.com' className="special">
                Live Site
              </a>
            </article>
            <article>
              <a href="https://donationdono.us" className="image">
                <img src={donoPic} alt="" />
              </a>
              <h3 className="major">dono.</h3>
              <p>
                A mobile-designed, multi-sided app for donating items that users no longer need.
                <br></br>
                <br></br>
                Dono. was designed with mobile in mind. Dono is a seamless way for users to get rid of items cluttering the house, and for other users to possibly make a few bucks helping donate them, or even use them for their needs.
                <br></br>
                <br></br>
                Built with React, JavaScript, Redux, PostgreSQL, Sass, CSS, Express, Massive, Nodemailer, Socket.io, and Amazon S3.
              </p>
              <a href="https://donationdono.us" className="special">
                Live Site
              </a>
            </article>
            <article>
              <a href='https://www.americoIPA.com' className="image">
                <img src={AmericoPic} alt="" />
              </a>
              <h3 className="major">AmericoIPA</h3>
              <p>
                This was my first foray into freelancing and it was a great experience!
                <br></br>
                <br></br>
               Here I built a simple but refined website to display important information for this consulting company.
               It was important that it was viewable on many different screen sizes so I made good use of flexbox and media queries to make sure anyone could view it!
                <br></br>
                <br></br>
                Built with React, JavaScript, HTML, and CSS.
              </p>
              <a href='https://www.americoIPA.com' className="special">
                Live Site
              </a>
            </article>
          </section>
          {/* <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul> */}
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
