import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Trending from '@/components/Trending'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section>
        <Hero></Hero>
      </section>
      {/* <section>
        <Trending></Trending>
      </section> */}
      <section>
        <Categories></Categories>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </main>
  )
}
