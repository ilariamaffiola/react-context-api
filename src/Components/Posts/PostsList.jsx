import React from 'react'
import { useContext } from 'react'
import PostListContext from '../../contexts/PostListContext'
import PostCard from './PostCard';
const PostsList = () => {
    const {posts} = useContext(PostListContext);
  return (
    <div>
        <ul>
        {posts.map((post) => (
            <PostCard post={post}/>
        ))}
        </ul>

    </div>
  )
}

export default PostsList
