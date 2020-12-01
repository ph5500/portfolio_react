import React, { Component } from 'react'
import neel_work from '../neel_work.jpg'
// import styled from 'styled-components'

// const Workimg = styled.img`
//   width: 20%;
//   height: 20%;
// `

export default class Portfolio extends Component {
  render () {
    let resumeData = this.props.resumeData

    return (
      <section id='portfolio'>
        <div className='row'>
          <div className='twelve columns collapsed'>
            <h1>Check Out Some of My Work</h1>
            <div
              id='portfolio-wrapper'
              className='bgrid-quarters s-bgrid-thirds cf'
              alt="it's an alt"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map(item => {
                  return (
                    <div className='columns portfolio-item'>
                      <div className='item-wrap'>
                        <a href='#modal-01'>
                          <img
                            className='workImg'
                            src={neel_work}
                            // src={`${item.imgurl}`}
                            // className='item-img'
                            alt='this is another alt'
                          />

                          <div className='overlay'>
                            <div className='portfolio-item-meta'>
                              <h5>
                                <a className='project_title' href={item.name}>
                                  Police Force Tracker
                                </a>
                              </h5>
                              <p>
                                <a
                                  className='project_description'
                                  href='https://a.humanrightsfirst.dev/'
                                >
                                  {item.description}
                                </a>
                                {/* Map and timeline visualization to view police
                                violence occuring across the country. Accessed
                                by using a 3rd party API. */}
                              </p>
                              <h5>
                                <a
                                  className='project_title'
                                  href='https://github.com/ph5500/nasa-photo-of-the-day/tree/phil-fives'
                                >
                                  NASA Photo of the Day
                                </a>
                              </h5>
                              <p>
                                <a
                                  className='project_description'
                                  href='https://github.com/ph5500/nasa-photo-of-the-day/tree/phil-fives'
                                >
                                  NASA API that fetches the photo of the day
                                </a>
                              </p>
                              <h5>
                                <a
                                  className='project_title'
                                  href='https://github.com/ph5500/game_of_lifee/tree/Day-4'
                                >
                                  Conway's Game of Life
                                </a>
                              </h5>
                              <p>
                                <a
                                  className='project_description'
                                  href='https://github.com/ph5500/game_of_lifee/tree/Day-4'
                                >
                                  Zero player game thats evolution is determined
                                  by it's initial state{' '}
                                </a>
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
