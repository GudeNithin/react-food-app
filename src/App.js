import React,{useState} from 'react'
import Product from './Product';
import './App.css'

const App = () => {
  const [search,setSearch]=useState("");
  const [data,setData]=useState([]);
  const YOUR_APP_ID = "bd4becd1";
  const YOUR_APP_KEY ="1a2614c3641363ac93e81b543a39624c	";
  const handler=e=>{
    setSearch(e.target.value);
  }

  const submitHandler=e=>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=18&calories=591-722&health=alcohol-free`, {
        method: "GET",
        headers: {
          "Edamam-Account-User": "nithin508"  
        }
      }).then(
        response=>response.json()
      ).then(
        data=>setData(data.hits)
      )
  }

  return (
    <div>
      <center>
        <h5>React Food Munch</h5>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter the Food Item" value={search} onChange={handler}/> <br/>
            <input type="submit" value="Search"/>
        </form>
        {data.length>0?<Product data={data}/>:null}
      </center>
    </div>
  )
}

export default App

// Deployment Link -- https://react-food-app-iota.vercel.app/
