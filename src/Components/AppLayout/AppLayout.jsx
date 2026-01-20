import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'

const AppLayout = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Category />
    <Values />
    {/* <Products /> */}
    </>
  )
}

export default AppLayout