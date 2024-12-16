import React from 'react'
import { Helmet } from 'react-helmet';
import CommingSoon from '../components/CommingSoon';

const Blog = () => {
  return (
    <div  className='w-full md:-mt-[210px]'>
       <Helmet>
              <title>Services - Your Website</title>
            </Helmet>
    <CommingSoon/>
    </div>
  )
}

export default Blog
