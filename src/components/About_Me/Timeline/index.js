import React from 'react'
import { TimelineContainer } from './style'
import Education from './Education'
import Experience from './Experience'

function Timeline() {
  return (
    <TimelineContainer>
        <Education></Education>
        <Experience></Experience>
    </TimelineContainer>
  )
}

export default Timeline