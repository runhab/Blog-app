import React,{useState} from 'react'
import PostItem from '../components/PostItem'  


import {DUMMY_POSTS} from '../data'


const AuthorPosts = () => {

  const [posts, setPosts] = useState(DUMMY_POSTS)
  
  return (
    <section className='author-posts'>
          {posts.length>0 ? <div className='container posts_container'>
              {
              posts.map(({ id, thumbnail, category, title, desc, authorID }) =>
                  <PostItem Key={id} postID={id} thumbnail={thumbnail} category={category} title={title}
                      description={desc} authorID={authorID} />
              )
          }
              
          </div>:<h2 className='center'>No Posts Found</h2>}
          
    </section>
  )
}

export default AuthorPosts
