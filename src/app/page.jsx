"use client"
import Categories from '@/components/Categories/Categories'
import Feature from '@/components/Feature/Feature'
import Hero from '@/components/Hero/Hero'
import PreOrder from '@/components/PreOrder/PreOrder'
import Testimonial from '@/components/Testimonial/Testimonial'
import Trending from '@/components/Trending/Trending'
import { useState } from 'react'

export default function Home() {
  const [categoryProducts, setCategoryProducts] = useState([])
  return (
    <>
      <Hero setCategoryProducts={setCategoryProducts}/>
      <Trending/>
      <Categories categoryProducts={categoryProducts}/>
      <PreOrder/>
      <Feature/>
      <Testimonial/>
    </>

  )
}
