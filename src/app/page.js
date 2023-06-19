import Categories from '@/components/Categories'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Testimonial from '@/components/Testimonial'
import Trending from '@/components/Trending'

export default function Home() {
  return (
    <>
      <Hero/>
      <Trending/>
      <Categories/>
      <Feature/>
      <Testimonial/>
      <Footer/>
    </>

  )
}
