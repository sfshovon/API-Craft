"use client"
import Categories from '@/components/Categories'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import PreOrder from '@/components/PreOrder'
import Testimonial from '@/components/Testimonial'
import Trending from '@/components/Trending'
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
