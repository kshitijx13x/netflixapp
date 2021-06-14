import logo from './logo.svg';
import './App.css';
import Card from './Card';
import './Card.css';
import './data.jsx';
import sData from './data.jsx';
import { useState } from 'react';

function App() {
  // const [count,nextValue] = useState(0);
  // function Likes()
  // {
  //   nextValue(count+1);
  // } 
  let dt = new Date().getSeconds();
  
  let [curTime,updTime] = useState(dt)
  function getTime()
  {
    dt = new Date().getSeconds()

    updTime(dt);
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <div>
      {/* {sData.map((val)=>{
        return(<Card heightImg="400px"  imgsrc={val.src} title={val.title} sname={val.name} links={val.links}></Card>);
      })} */}
     <Card heightImg="400px"  imgsrc={sData[0].src} title={sData[0].title} sname={sData[0].name} links={sData[0].links}></Card>
     <Card  heightImg="400px" widthImg="282px" imgsrc={sData[1].src} title={sData[1].title} sname={sData[1].name} links={sData[1].links}/>
     <Card  heightImg="400px" widthImg="285px" imgsrc={sData[2].src} title={sData[2].title} sname={sData[2].name} links={sData[2].links}/>
     <Card  heightImg="350px" widthImg="281px" imgsrc={sData[3].src} title={sData[3].title} sname={sData[3].name} links={sData[3].links}/>
     <Card  heightImg="350px" widthImg="282px" imgsrc={sData[4].src} title={sData[4].title} sname={sData[4].name} links={sData[4].links}/>
     <Card  heightImg="350px" widthImg="283px" imgsrc={sData[5].src} title={sData[5].title} sname={sData[5].name} links={sData[5].links}/>
     <Card  heightImg="350px" widthImg="282px" imgsrc={sData[6].src} title={sData[6].title} sname={sData[6].name} links={sData[6].links}/>
     <Card  heightImg="350px" widthImg="284px" imgsrc={sData[7].src} title={sData[7].title} sname={sData[7].name} links={sData[7].links}/>
    </div>
    {/* <div>
      
    <h1 style={{color:'red',marginLeft:"220px"}}>{count}</h1>
    <button className="likeButton" onClick={Likes}> Like</button>
    </div> */}
    <div>
    <h1 style={{color:'red',marginLeft:"220px"}}>{curTime}</h1>
    <button className="dateButton" onClick={getTime}> Get Time</button>
    </div>
    </>
  );
}

// let [count,Likes]= useState(0);

export default App;
