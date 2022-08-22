import React from 'react';
import './brand.css';
import  {google,  slack,  atlassian,  dropbox, shopify } from './import'

function Brand() {
  return (
    <div  className='gpt3__brand  section__padding'>
      <div  className=''>
          <img src={google} alt="" />
      </div>
      <div  className=''>
          <img src={slack} alt="" />
      </div>
      <div  className=''>
          <img src={atlassian} alt="" />
      </div>
      <div  className=''>
          <img src={dropbox} alt="" />
      </div>
      <div  className=''>
          <img src={shopify} alt="" />
      </div>
    </div>
  )
}

export default Brand