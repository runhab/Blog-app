import React,{useState} from 'react'
import PostItem from './PostItem'  

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'


const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This is the title of the very first post on this blog',
        desc: 'Lorem Ipsum is simply.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        authorID:3
        
    },

    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'science',
        title: 'This is the title of the very second post on this blog',
        desc: 'Lorem Ipsum is simply.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        authorID:3
        
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'weather',
        title: 'This is the title of the very first post on this blog',
        desc: 'Lorem Ipsum is simply.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        authorID:3
        
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'farming',
        title: 'This is the title of the very forth post on this blog',
        desc: 'Lorem Ipsum is simply .It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        authorID:3
        
    },
    
]


const Posts = () => {
    const[posts,setPosts]=useState(DUMMY_POSTS)

  return (
      <section className='posts'>
          <div className='container posts_container'>
              {
              posts.map(({ id, thumbnail, category, title, desc, authorID }) =>
                  <PostItem Key={id} postID={id} thumbnail={thumbnail} category={category} title={title}
                      description={desc} authorID={authorID} />
              )
          }
              
          </div>
          
    </section>
  )
}

export default Posts
