import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  return <div>
      <h1>welcome to kalvium gallery</h1>
      <div className='gallery'>

        {imageData().map((elt) =>{
          return <img className='image' src={elt.img} alt={elephant}></img>
        })}
      
      </div>
  </div>
  // code here
}

export default App;
