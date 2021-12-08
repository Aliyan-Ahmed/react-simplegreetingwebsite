import React from "react";
import ReactDOM from "react-dom";
import './index.css';

//let curDate = new Date(year,month,date,hour)
let curDate = new Date(2021,10,17,19);
curDate = curDate.getHours();
let greeting = '';
//Dynamically changing the color
const cssStyle = {};

//raat 1 bajey se lay kar dopher k 12 tak
if(curDate >= 1 && curDate <12){
    greeting = 'Good Morning';
    cssStyle.color="green";
}
//dopher k 12 se laykar shaam 19 ghantay matlab 7 tak
else if(curDate >=12 && curDate <19){
  greeting = 'Good Afternoon';
  cssStyle.color="Orange";
}
else{
  greeting = 'Good Night';
  cssStyle.color="Black";
}

ReactDOM.render(
  <>
  <div>
<h1>Hello Sir, <span style = {cssStyle}>{greeting} </span></h1>
</div>
</>
,
document.getElementById("root")
);