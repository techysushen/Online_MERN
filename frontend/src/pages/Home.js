import React from 'react'
import CategoryList from "../components/CategoryList";
import BannerProduct from '../components/BannerProduct';
import HorizontalCardProduct from '../components/HorizontalCardProduct';
import VerticalCardProduct from '../components/VerticalCardProduct';

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct category={"mobiles"} heading={"Top's Mobile"}/>
      <VerticalCardProduct category={"watches"} heading={"Popular's Watches"}/>
    </div>
  )
}

export default Home
