import React from 'react';
import {  Article } from '../../components';
import  { blog01, blog02, blog03, blog04, blog05 }  from './imports'
import  './blog.css';

function Blog() {
  return (
    <div  className='gpt3__blog section__padding'>
      <div  className='gpt3__blog-heading gradient__text'>
        <h1>A lot is happening, We are blogging about it.</h1>
      </div>
      <div  className='gpt3__blog-container'>
        <div  className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01}  title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
        </div>
        <div  className='gpt3__blog-container_groupB'>
          <Article  imgUrl={blog01} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
          <Article  imgUrl={blog02} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
          <Article  imgUrl={blog03} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
          <Article  imgUrl={blog04} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
        </div>
      </div>
    </div>
  )
}

export default Blog