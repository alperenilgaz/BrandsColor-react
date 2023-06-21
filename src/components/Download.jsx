import { useContext,useEffect,useState } from 'react'
import MainContext from './MainContext'
import { GrLink, GrDownload, GrClose } from 'react-icons/gr'

function Download() {
    const { selectedBrands,brands,setSelectedBrands } = useContext(MainContext)
    const [downloadUrl, setDownloadUrl] = useState()
    const [CssMethod,  setCssMethod] = useState('css')
    const getLink =()=>{
        prompt('here\'s URL to share',`http://localhost:3000/collection/${selectedBrands.join(',')}`)
    }
    useEffect(()=>{
        if(selectedBrands.length>0)
        {
            let output=''
            switch(CssMethod)
            {
                case 'css':
                    output += ':root{\n'
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color,key) => {
                            output += `${slug}-${key}: #${color}\n`
                        })
                        })
                        output += '}'
                    break
                case 'scss':
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color,key) => {
                            output += `\$${slug}-${key}: #${color}\n`
                        })
                        })
                    break 
                case 'less':
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color,key) => {
                            output += `@${slug}-${key}: #${color}\n`
                        })
                        })
                    break 
            }


           
            
            const blob = new Blob([output])
            const url = URL.createObjectURL(blob)
            setDownloadUrl(url)
            return () =>{
                URL.revokeObjectURL(url)
                setDownloadUrl("")
            }
        }
    },[selectedBrands,CssMethod])
    return (
        <div className="download">
            <div className="actions">
            <select onChange={(e)=>setCssMethod(e.target.value)}>
                    <option value="css">css</option>
                    <option value="scss">scss</option>
                    <option value="less">less</option>
                </select>
                <a download={`brands.${CssMethod}`} href={downloadUrl}>
                    <GrDownload/>
                </a>
                
                <button onClick={getLink}>
                    <GrLink/>
                </button>
            </div>
            <div className="selected" onClick={()=>setSelectedBrands([])}>
                <GrClose />
                {selectedBrands.length} brand collected

            </div>
        </div>
    )
}

export default Download