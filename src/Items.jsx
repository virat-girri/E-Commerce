
import './App.css'

export default function Items({dataI , setCat}) {
 

 let list= dataI.map((v,i)=>{
        return(
            <li className="cursor-pointer" onClick={()=>{
                setCat(v.slug)
            }} key={i}  >{v.slug}</li>
        )
          })
 
 
  return (
    <div className='list'>
            <h1 className="text-[30px] text-center font-[sans_bold] text-white ">Our Items</h1>
        <ul>
         {list}
           
        </ul>
    </div>
  )
}
