import React from 'react'
import { Helmet } from 'react-helmet';
import CommingSoon from '../components/CommingSoon';
const About = () => {
  return (
    <div className='w-full md:-mt-[210px]'>
       <Helmet>
        <title>About Us - Your Website</title>
      </Helmet>
      <CommingSoon/>
      
    </div>
  )
}

export default About
