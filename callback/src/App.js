import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{},[])
  let calculateResult =(engMarks,telMarks,hinMarks,matMarks,sciMarks,socMarks,studentName,passFn,failFn)=>{};
  let passMarks = 35;
  if('engMarks' >= passMarks &&
    'telmarks'>= passMarks &&
    'hinMarks' >= passMarks &&
    'matMarks' >= passMarks &&
    'sciMarks' >= passMarks &&
    'socMarks' >= passMarks 
  
  )
  {
   'passFn'();
  }else{
    'failFn'();
  }


calculateResult(90,88,85,76,99,89,"raju",()=>{
  console.log("student passed in tenth");

},()=>{
  console.log("student failed in tenth");
});
let sudheerFirstName = "Sudheer";
let sudheerLastName = "Eaduri";
let sudheerTelMarks = 91;
let sudheerHinMarks = 92;
let sudheerEngMarks = 94;
let sudheerMatMarka = 95;
let sudheerSciMarks = 94;
let sudheerSocMarks = 95;

let vivakTenthDetails = {
  firstName:"Vivak",
  lastName:"reddy",
  telMarks:88,
  hinMarks:78,
  engMarks:88,
  matMarks:96,
  sciMarks:87,
  socMarks:90,
};
console.log(vivakTenthDetails.telMarks);
let likithaDetails ={
  firstName:"Likitha",
  lastName:"B",
  telMarks:87,
  hinMarks:89,
  engMarks:90,
  matMarks:99,
  sciMarks:87,
  socMarks:78,
};
let KavithaDetails = {
  firstName:"kavitha",
  lastName:"N",
  telMarks:90,
  hinMarks:58,
  engMarks:66,
  matMarks:75,
  sciMarks:80,
  socMarks:78,
};

console.log(KavithaDetails.firstName);
let studentsArr = [vivakTenthDetails,likithaDetails,KavithaDetails];
console.log(studentsArr);
};
let shreshtaDetails = ["Shreshta","c",58,66,85,65,96,56,];
let[FN,LN,eng,tel,hin,mat,sci,soc]= shreshtaDetails;
console.log(fn,ln,tel,hin,eng,mat,sci,soc);

let {
  firstName:TejaFN,
  lastName:KaliLN,
  engMarks,telMarks,hinMarks,matMarks,sciMarks,socMarks,
} = TejaTenthDetails;
console.log(TejaFN,TejaLN)
return (
    <div className="App">
      <h1>Learning callback functions,arrys,objects,destructing</h1>
      
     </div>
  );
}

export default "App";