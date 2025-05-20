import React from 'react'

const PostCard = ({post}) => {
  return (
    <li className='list-group-item bg-dark text-light'>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.category}</p>
    </li>
  )
}

export default PostCard
