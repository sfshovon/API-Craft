import Categories from '@/components/Categories'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import PreOrder from '@/components/PreOrder'
import Testimonial from '@/components/Testimonial'
import Trending from '@/components/Trending'

export default function Home() {
  return (
    <>
      <Hero/>
      <Trending/>
      <Categories/>
      <PreOrder/>
      <Feature/>
      <Testimonial/>
    </>

  )
}
