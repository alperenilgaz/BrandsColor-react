import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainContext from './MainContext';
import LazyLoad from 'react-lazy-load'
import Download from './Download'
import Brand from './Brand'
import {GrLinkPrevious} from 'react-icons/gr'
function Collection() {
  const {slugs} = useParams()
  const {setSelectedBrands ,selectedBrands,brands} = useContext(MainContext)
  
  console.log(slugs);
  useEffect(()=>{
    setSelectedBrands(slugs.split(','))
  })
  return (
    <main className='content'>
     <header className="header">
     <a className='all-brands' href='/'>
      <button className='back-btn'><GrLinkPrevious/> All Brands</button>
     </a>
      {selectedBrands.length!==0 && <Download/>}
     </header>
     <section className="brands">
      {selectedBrands.map(slug => {
        let brand = brands.find(brand =>brand.slug === slug )
       return (
        <LazyLoad once={true} key={brand.slug} placeholder="Yükleniyor">
        <Brand brand={brand} />
        </LazyLoad>
      )
})}
     </section>
    </main>
  )
}

export default Collection