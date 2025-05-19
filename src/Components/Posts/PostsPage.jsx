import React from 'react'
import PostsList from './PostsList'
const PostsPage = () => {
  return (
    <>
    <header>
        <h1>I NOSTRI POST</h1>
    </header>
    <main>
        <div className='container'>
            <div className="row">
                <PostsList />
            </div>
        </div>
    </main>
    </>
  )
}

export default PostsPage
