import React from 'react'
import Link from 'gatsby-link'
import Post from './../Post'

function PopularPosts(){
  return <section>
    <div>
      <h4><strong>Popular</strong> Posts</h4>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </section>
}

export default PopularPosts
