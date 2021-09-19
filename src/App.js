import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 
  return (
    <div className="App">
     {/* <MyCpmponent></MyCpmponent> */}
     {/* <Blog heading='Of my best firend' author='Jack kalis'></Blog> */}
     <Mobile></Mobile>
    </div>
  );
}


function Mobile (){
  
  const [batteryCharge, setBatteryCharge]=useState(100)
  
    const batteryDown = ()=>{
      if(batteryCharge>0){
        const newbattery= batteryCharge - 10;
        setBatteryCharge(newbattery)
      }
    }
 const batteryCharges = ()=>{
   if(batteryCharge<100){
     const newbattery= batteryCharge + 10;
     setBatteryCharge(newbattery)
   }
 }
  
  
  return (

<div className="batteryBackground">
  <h2 className="text">Battery Down and up!!!!!!!</h2>
  <h3 className="text">Battery: % {batteryCharge}</h3>
  <div className="buttons">
  <button className="batCharge"  onClick={batteryDown}>Bettary Down</button>
  <button className="batCharge" onClick={batteryCharges}>battery Charge</button>
  </div>
</div>
  )
}
// function MyCpmponent (){
//   const MyStyle = {
//     color: 'red',
//     backgroundColor: 'lightblue',
//     border: '2px solid skyblue',
//     borderRadius: '10px',
//     padding: '10px'
//   }
 
//   return (
//     <article className="blog">
//       <h2 style={MyStyle}>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h2>
//       <h4 style={{color: 'lightblue'}}>creative.</h4>
//       <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
//     </article>
//   )
// }

// function Blog (props){
//   return (
//     <div>
//       <div>
//   <h4>Heading: {props.heading}</h4>
//       </div>
//       <div>
//         <h4>author: {props.author} </h4>
//       </div>
     
//     </div>
//   )
// }
export default App;
