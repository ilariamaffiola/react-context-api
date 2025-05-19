import React from 'react'
import { useContext } from 'react'
import PostListContext from '../../contexts/PostListContext'
const PostsList = () => {
  return (
    <div>
      const {posts} = useContext(PostListContext);
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.category}</p>
        </div>
      ))}
    </div>
  )
}

export default PostsList
