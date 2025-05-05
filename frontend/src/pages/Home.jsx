import React from 'react'
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';

const Home = () => {
  console.log("Home rendered"); // ✅ Kiểm tra trong Console
  return (
    <div>
   <Header />
   <SpecialityMenu />
    </div>
  )
}

export default Home;
