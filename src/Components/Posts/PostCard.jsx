import React from 'react'

const PostCard = ({post}) => {
  return (
    <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.category}</p>
    </li>
  )
}

export default PostCard
