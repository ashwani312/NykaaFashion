import './Home.scss'
import Slider from '../../components/Slider/Slider'
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import Sections from '../../components/Sections/Sections'
import Brand from '../../components/Brands/Brand'
import About from '../../components/About/About'
import Specialcat from '../../components/SpecialCat/Specialcat'
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts'
import Allsection from '../../components/AllSections/Allsection'

const Home = () => {
  return (
    <div className='home'>
      <Slider/> 
      <Sections/>
      <FeatureProducts type = "Featured"/>
      <Categories/>
      <TrendingProducts/>
      <Brand/>
      <Specialcat/>
      <Allsection/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home