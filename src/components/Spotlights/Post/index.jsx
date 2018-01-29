import React from 'react'
import Link from 'gatsby-link'
import Placeholder from './placeholder.png'

function Post(){
  return <div>
    <div>
      <a href="/sesame-zoodles">
        <img 
          src={Placeholder}
          alt="" 
          nopin="nopin" 
          height="183" 
          width="183" 
        />
      </a>
    </div>
    <div>
      <span>Quick and Easy</span><br />
      <a href="/">Spicy Sesame Zoodles with Crispy Tofu</a>
    </div>
  </div>
}

export default Post
