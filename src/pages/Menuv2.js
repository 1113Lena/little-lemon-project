import {useState,useEffect} from 'react'


const Menu_URL = "https://foodbukka.herokuapp.com/api/v1/menu"
export default function Menuv2() {

 const [lists,setLists] = useState([])

 useEffect(() => {
    fetch("https://foodbukka.herokuapp.com/api/v1/menu") 
    .then(response => response.json())
    .then(data => console.log(data.menuName))
    .catch(err => console.log("error"))
 },[lists])

  return (
    <div>
      
    </div>
  )
}
