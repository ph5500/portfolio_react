import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'

export default class Footer extends Component {
  render () {
    // let resumeData = this.props.resumeData

    return (
      <footer>
        <div className='row'>
          <div className='twelve columns'>
            <ul className='social-links'>
              {/* {resumeData.socialLinks &&
                resumeData.socialLinks.map(item => {
                  console.log(
                    resumeData.socialLinks,
                    'socialLinks data from footer page'
                  ) */}

              <ul>
                <ul className='footer_icons'>
                  <SocialIcon url='https://twitter.com/phives5'></SocialIcon>
                </ul>
                <ul className='footer_icons'>
                  <SocialIcon url='https://github.com/ph5500'></SocialIcon>
                </ul>
                <ul className='footer_icons'>
                  <SocialIcon url='https://www.linkedin.com/in/phil-fives-85a17187/'></SocialIcon>
                </ul>
              </ul>
            </ul>
          </div>
          <div id='go-top'>
            <a className='smoothscroll' title='Back to Top' href='#home'>
              <i className='icon-up-open' />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}
