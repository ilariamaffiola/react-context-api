import React from 'react'
import PostsList from './PostsList'
const PostsPage = () => {
  return (
    <>
    <header className='mb-4'>
        <h1 className='text-center'>I NOSTRI POST</h1>
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
