import React from 'react'
import Link from 'gatsby-link'

import RecentPosts from '../components/RecentPosts'
import {PopularPosts,Story} from '../components/Spotlights'

const IndexPage = () => (
  <section
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        display:"flex"
      }}
    >
      <main>
        <RecentPosts />
      </main>
      <aside 
        role="complementary" 
        aria-label="Primary Sidebar" 
        itemscope="" itemtype="https://schema.org/WPSideBar"
      >
        <PopularPosts />
        <Story />
      </aside>
  </section>

)

export default IndexPage
