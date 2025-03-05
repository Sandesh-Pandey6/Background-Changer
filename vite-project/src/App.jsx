import { useState } from 'react'

import './App.css'



function App() {
  const[color,setcolor]=useState("olive");
  return (
    <div className=" absolute top-0 left-0 w-full h-full flex items-center justify-center"
    style={{backgroundColor: color}} >
      <div className="fixed flex flex-wrap justify-center buttom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl"> 
        <button onClick={() => setcolor("red")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}>red</button>

        <button onClick={() => setcolor("black")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"black"}}>black</button>

        <button onClick={() => setcolor("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"green"}}>Green</button>

         <button onClick={() => setcolor("blue")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"blue"}}>Blue</button>

        <button onClick={()=> setcolor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-white-700 shadow-lg"
        style={{backgroundColor:"yellow"}}>yellow</button>

       <button onClick={()=> setcolor("pink")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"pink"}}>pink</button>

      </div>
      </div>
    </div>
    
  );
}

export default App;


