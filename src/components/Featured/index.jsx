import React from 'react'
import Link from 'gatsby-link'
import Placeholder from './placeholder.png'

function Featured(props){
  return <div class="home-featured">
    <h2>
      Make this for <strong>dinner</strong> 
      <a class="more" href="/blog">or skip straight to the blog</a>
    </h2>
    <div>
      <a 
        class="block-link" 
        href="/bangkok-coconut-curry-noodle-bowls"></a>
      <img 
        src={Placeholder} 
        alt="" 
        width="323" 
        height="488"
      />
      <div class="caption">
        <span class="subtitle">Dinner</span> Bangkok Coconut Curry Noodle Bowls
      </div>
    </div>
    <div>
      <a 
        class="block-link" 
        href="/bangkok-coconut-curry-noodle-bowls"></a>
      <img 
        src={Placeholder}
        width="323" 
        height="488"
      />
      <div class="caption">
        <span class="subtitle">Dinner</span> Bangkok Coconut Curry Noodle Bowls
      </div>
    </div>
    <div>
      <a 
        class="block-link" 
        href="/bangkok-coconut-curry-noodle-bowls"></a>
      <img 
        src={Placeholder}
        width="323" 
        height="488"
      />
      <div class="caption">
        <span class="subtitle">Dinner</span> Bangkok Coconut Curry Noodle Bowls
      </div>
    </div>
  </div>
}

export default Featured
