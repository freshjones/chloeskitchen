import React from 'react'

function NewsletterHeader(props){
  return <div class="header-newsletter">
    <div class="wrap">
      <div class="text">
        <a 
          href="" 
          target="_blank" 
        ><strong>Subscribe</strong></a> to get a free eCookbook with our top 25 recipes.
      </div>
      <form 
        class="newsletter-signup" 
        action="" 
        method="post" 
        id="header-newsletter" 
        acceptCharset="utf-8" 
        enctype="multipart/form-data">
        <input 
          name="fullname"
          id="name" 
          placeholder="name" 
          type="text" />
        <input 
          name="email" 
          id="email" 
          placeholder="email" 
          type="email" />
        <button class="button" type="submit" form="header-newsletter" value="Submit">
          <i class="icon-arrow-right"></i>
        </button>
      </form>
    </div>
  </div>
}

export default NewsletterHeader
