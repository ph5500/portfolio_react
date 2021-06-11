import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";

const Socialstyling = styled.ul`
  display: flex;
  align-items: flex-start;
`;

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <ul className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </ul>
              <ul>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </ul>
              <ul>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </ul>
              <ul>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </ul>
              <ul>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </ul>
              <ul>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </ul>
            </ul>
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h3
                className="my_description"
                style={{ color: "#ff", fontFamily: "sans-serif" }}
              >
                I am a {resumeData.role}.{resumeData.roleDescription}
              </h3>
              <hr />
              {/* <ul className='social'>
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => { */}
              {/* return ( */}
              <ul className="social_1">
                <Socialstyling>
                  <SocialIcon url="https://www.linkedin.com/in/phil-fives-85a17187/" />
                </Socialstyling>
              </ul>
              <ul className="social_2">
                <Socialstyling>
                  <SocialIcon url="https://github.com/ph5500" />
                </Socialstyling>
              </ul>
              {/* // <li key={item.name}>
                      //   {/* <a href={item.url} target=''> */}
              {/* //   <i className={item.className}></i> */}
              {/* </a> */}
              {/* // </li> */}
              {/* </ul> */}
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
