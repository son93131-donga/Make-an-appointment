import React from 'react'
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';

const Home = () => {
  console.log("Home rendered"); // ✅ Kiểm tra trong Console
  return (
    <div>
   <Header />
   <SpecialityMenu />
   <TopDoctors />
    </div>
  )
}

export default Home;
