import React from 'react'
import Link from 'gatsby-link'
import AboutImage from './about-chloe.png'
import MeetTessa from './meet-tessa.png'

function About(){
  return <div class="home-about">
    <div>
      <img 
        src={AboutImage}
        width="183" 
        height="183"
      />
      <h5>hey! nice to meet you!</h5>
      <p>
        I’m Chloe, small-business owner, mom and part-time blogger. My husband Billy, daughter Olivia and I live in Massachusetts. Favorite things include cooking, going to the ocean, and hanging out with friends and family. 
        <a href="/who-i-am">Learn more</a>
      </p>
    </div>
    <div>
      <a href="/tessa"></a>
      <img 
        src={MeetTessa} 
        width="324" 
        height="168" 
      />
        <span class="summary"><strong>MEET TESSA</strong> our sweet puppy</span>
    </div>
  </div>
}

export default About
