import SideBar from './components/SideBar';
import './App.css';
import { useEffect, useState } from 'react';
import Content from './components/Content';
import BrandsData from './brand.json'
import MainContext from './components/MainContext';
import Copied from './components/Copied';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Collection from './components/Collection';
function App() {
  const brandsArray=[]
  Object.keys(BrandsData).map(key => (
    brandsArray.push(BrandsData[key])
    ))
  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands,setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [search, setSearch] = useState("")
  const  data = {
      brands,
      setSelectedBrands,
      selectedBrands,
      setCopied,
      setSearch,
      search
    }
    useEffect(()=>{
      console.log(selectedBrands);
    },[selectedBrands])
    useEffect(()=>{
        const timeout = setTimeout(()=>{
          setCopied(false)
        },600)
      return () => {
        clearTimeout(timeout)
      }
    },[copied])
    useEffect(()=>{
      setBrands(brandsArray.filter(brand=> brand.title.toLowerCase().includes(search)))
    },[search])
  return (
    <>
    <MainContext.Provider value={data}>
    {copied && <Copied color={copied}/>}
      <SideBar/>
      <Router>
        <Routes>
          <Route path="/" exact element={<Content/>} />
          <Route path="/collection/:slugs" element={<Collection/>}>
          </Route>
        </Routes>
      </Router>
      </MainContext.Provider>
    </>
  );
}

export default App;
