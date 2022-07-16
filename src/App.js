import React,{ useState }  from 'react';
import './App.css';
import Cards from "C:\\Users\\sanja\\OneDrive\\Desktop\\card\\my-app\\src\\Components\\Card.js";

function App() {
   const data1=["Single User","5GB Storage","Unlimited Public Projects","Community Access"];
   const data2=["Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"];
   const data3=["5 Users","50GB Storage","Unlimited Public Projects", "Community Access", "Unlimited Private Projects","Dedicated Phone Support","Free Subdomain"];
   const data4=["Monthly Status Reports"];
   const data5=["Unlimited Users","150GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects", "Dedicated Phone Support","Unlimited Free Subdomain","Monthly Status Reports"];
   const data6=[];
  return (
    <div className="App">
      <Cards h={"FREE"} e={"0"} a={data1} b={data2}/>
      <Cards h={"PLUS"} e={"9"} a={data3} b={data4}  />
      <Cards h={"PRO"} e={"49"} a={data5} b={data6} />
    </div>
  );
}

export default App;