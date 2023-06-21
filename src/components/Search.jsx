import React, { useContext } from 'react'
import {GrSearch} from 'react-icons/gr'
import MainContext from './MainContext'
function Search(props) {
  const {search,setSearch}=useContext(MainContext)
  return (
    <div className="search">
        <div className="icon">
          <GrSearch/>
        </div>
        <input onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder='search brands' />
    </div>
  )
}

export default Search