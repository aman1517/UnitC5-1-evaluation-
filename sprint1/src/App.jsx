
import React, { useState } from 'react'

const Appp={
  width: "70%",
  margin: 'auto',
  border: '1px solid red',
 
}
const banner={
  display:"flex",
  justifyContent:' space-around',
};

// const state=useState();
// const addFour=()=>{
//   setCount(count+1)
  
//   console.log("click");

function App() {
  const addW=()=>{
    I(W+1);
    
  }
  let [W, I] = useState(2)
  let [countb, IncB] = useState(5.0)
  const addBall=()=>{
    IncB(countb+0.1);
    
  }
  
 const addFour=()=>{
   setCount(count+4)
 }
 const addSix=()=>{
  setCount(count+6)
}


  let [count, setCount] = useState(76)
const addOne=()=>{
  setCount(count+1)
  
  console.log("click");
 
};

 
  return (
    <div className="App" style={Appp}>
      <h3>India:</h3>
      <div className="banner" style={banner}>
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              count
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              W
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
             (countb).toFixed(1)
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
     
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={addOne}>Add 1</button>
        <button className="addScore4" onClick={addFour}>Add 4</button>
        <button className="addScore6" onClick={addSix}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={addW}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={addBall}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
