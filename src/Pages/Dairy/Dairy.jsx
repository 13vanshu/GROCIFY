import React from 'react'
import CategoryPage from '../../Components/CategoryPage/CategoryPage'
import BgDairy from './../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <CategoryPage title = {"Dairy & Eggs"} bgImage={BgDairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy
