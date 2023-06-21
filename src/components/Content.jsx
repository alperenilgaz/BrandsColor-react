import React from 'react'
import Search from './Search'
import LazyLoad from 'react-lazy-load'
import MainContext from './MainContext'
import { useContext } from 'react'
import Brand from './Brand'
import Download from './Download'

function Content() {
  const {brands,selectedBrands} = useContext(MainContext)

  return (
    <main className='content'>
     <header className="header">
     <Search/>
      {selectedBrands.length!==0 && <Download/>}
     </header>
     <section className="brands">
      {brands.map(brand => (
        <LazyLoad once={true} key={brand.slug} placeholder="Yükleniyor">
        <Brand brand={brand} />
        </LazyLoad>
      ))}
     </section>
    </main>
  )
}

export default Content