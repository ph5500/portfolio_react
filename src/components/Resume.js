import React, { Component } from 'react'
import styled from 'styled-components'

const Pstyles1 = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 6em;
`

export default class Resume extends Component {
  render () {
    let resumeData = this.props.resumeData
    console.log('resumeData from resume page', resumeData)
    return (
      <section id='resume'>
        <div className='row_education'>
          <div className='three columns header-col'>
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className='nine columns main-col'>
            {resumeData.education &&
              resumeData.education.map(item => {
                console.log('education shit', resumeData.education)
                return (
                  <div className='row item'>
                    <div className='twelve columns'>
                      <h3>{item.UniversityName}</h3>
                      <p className='info'>
                        {item.specialization}
                        <span>&bull;</span>
                        <em className='date'>
                          <em className='month'>{item.MonthOfPassing}</em>
                          {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        <div className='row work'>
          <div className='three columns header-col'>
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className='nine columns main-col'>
            {resumeData.work &&
              resumeData.work.map(item => {
                return (
                  <div className='row item'>
                    <div className='twelve columns'>
                      <h3>{item.CompanyName}</h3>
                      <p className='info'>
                        {item.specialization}
                        <span>&bull;</span>
                        <em className='date'>
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievments}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        <div className='row_skill'>
          <div className='three columns header-col'>
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <Pstyles1>
            <div className='nine columns main-col'>
              <p>{resumeData.skillsDecription}</p>
              <div className='bars'>
                <ul className='skills'>
                  {resumeData.skills &&
                    resumeData.skills.map(item => {
                      return (
                        <ul className='skills-list'>
                          <span
                            className={`bar-expand${item.skillname.toLowerCase()}`}
                          ></span>
                          <em>{item.skillname}</em>
                        </ul>
                      )
                    })}
                </ul>
              </div>
            </div>
          </Pstyles1>
        </div>
      </section>
    )
  }
}
