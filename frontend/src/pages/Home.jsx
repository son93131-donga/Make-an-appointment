import React from 'react'
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';
import Banner from '../components/Banner';

const Home = () => {
  console.log("Home rendered"); // ✅ Kiểm tra trong Console
  return (
    <div>
   <Header />
   <SpecialityMenu />
   <TopDoctors />
   <Banner />
    </div>
  )
}

export default Home;
