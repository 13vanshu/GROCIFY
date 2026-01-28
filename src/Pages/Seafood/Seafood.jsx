
import CategoryPage from '../../Components/CategoryPage/CategoryPage';
import BgSeafood from './../../assets/seafood-banner.jpg'

const Seafood = () => {
  return (
    <div>
      <CategoryPage title = {"Meat & Seafood"} bgImage={BgSeafood} categories={['Seafood']}/>
    </div>
  )
}

export default Seafood
