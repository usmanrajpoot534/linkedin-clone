import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'

function Home() {
  return (
      <div className="home">
          {/* Header */}
          <Header />
          {/* Body */}
          <div className='home-body'>
              <Sidebar />
              <Feed />
          </div>
      </div>
  )
}

export default Home