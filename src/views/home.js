import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Identity Orchestrator</title>
        <meta property="og:title" content="Lead Identity Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home
