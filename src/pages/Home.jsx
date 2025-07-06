import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import NearbyHospital from '../components/NearbyHospital'
// import NewsSection from '../components/NewsSection'
import News2 from '../components/News2'
// import News from '../components/News'

const Home = () => {
  return (
    <div>
      <Header />
        <NearbyHospital></NearbyHospital>
      <Banner />
      {/* <NewsSeciton></NewsSeciton> */}
      <News2></News2>
      {/* <NewsSection></NewsSection> */}
    </div>

  )
}

export default Home