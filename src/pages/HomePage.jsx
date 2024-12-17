import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Simple from '../components/Simple'
import LearnCook from '../components/LearnCook'
import Instagram from '../components/Instagram'
import Foods from '../components/Foods'
import ContactSetion from '../components/ContactSetion'
import PreFooter from '../components/PreFooter'

function HomePage() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Banner />
      <Categories Category="Categories" />
      <Simple bg={true} />
      <LearnCook />
      <Instagram />
      <Foods />
      <ContactSetion />
      <PreFooter />
    </div>
  )
}

export default HomePage