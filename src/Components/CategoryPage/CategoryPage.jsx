import React from 'react'
import Banner from '../../Tools/Banner'
import { productslist } from '../../Data/products'
import Card from '../../Tools/Card'

const CategoryPage = ({title , bgImage ,categories=[]}) => {

  let filteredItems = categories.includes('All')
  ? productslist
  : productslist.filter(item => categories.includes(item.category))

    const renderproduct = filteredItems.map(item => {
        return(
            <Card image={item.image} name={item.name} price={item.price}/>
        )
    })

  return (
    <div>
      <Banner title = {title} bgImage = {bgImage} />
      <div className='grid  grid-cols-1 gap-9 p-20 md:grid-cols-4 max-w-300 mx-auto px-10'>
        {renderproduct}
      </div>
    </div>
  )
}

export default CategoryPage
