import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header class="site-header jw-header" itemscope="" itemtype="https://schema.org/WPHeader">
    <div class="wrap">
      <div class="title-area">
        <p class="site-title" itemprop="headline">
          <a href="/">Chloe's Kitchen</a>
        </p>
      </div>
      <nav 
        class="nav-header" 
        itemscope="" 
        itemtype="https://schema.org/SiteNavigationElement"
      >
        <ul>
          <li><a href="/who-i-am" itemprop="url"><span itemprop="name">About</span></a></li>
          <li><a href="/recipes" itemprop="url"><span itemprop="name">Recipes</span></a></li>
          <li><a href="/shop" itemprop="url"><span itemprop="name">Shop</span></a></li>
          <li class="menu-item socials">
            <a href="https://www.facebook.com/chloes-kitchen" class="social-facebook" target="_blank"><i class="icon-facebook"></i></a> 
            <a href="https://www.instagram.com/chloes-kitchen" class="social-instagram" target="_blank"><i class="icon-instagram"></i></a> 
            <a href="https://www.twitter.com/chloes-kitchen" class="social-twitter" target="_blank"><i class="icon-twitter"></i></a> 
            <a href="https://www.pinterest.com/chloes-kitchen/" class="social-pinterest" target="_blank"><i class="icon-pinterest"></i></a> 
            <a href="https://www.bloglovin.com/blogs/chloes-kitchen" class="social-bloglovin" target="_blank"><i class="icon-bloglovin"></i></a> 
            <a href="https://feeds.feedburner.com/chloes-kitchen" class="social-feedly" target="_blank"><i class="icon-feedly"></i></a>
          </li>
          <li class="menu-item search">
            <form 
              class="search-form" 
              itemprop="potentialAction" 
              itemscope="" 
              itemtype="https://schema.org/SearchAction" 
              method="get" 
              action="https://chloes.kitchen/" 
              role="search"
            >
              <input value="" type="text" placeholder="Search for a Recipe" />
              <input value="Submit" type="submit"  />
            </form>
          </li>
        </ul>
      </nav>
      <div class="clear-line from-theme"></div>
      <a href="#" class="mobile-menu-toggle">
        <span class="top-bar"></span>
        <span class="middle-bar"></span>
        <span class="bottom-bar"></span>
      </a>
    </div>
  </header>
)

export default Header
