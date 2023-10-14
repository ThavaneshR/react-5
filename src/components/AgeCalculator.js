import {useState} from "react"
import './AgeCalculator.css'
function AgeCalculator(){
    const[dob,setdob]=useState('');
    const[res,setres]=useState('');
    const handlechange=(event)=>{
        setdob(event.target.value);
        
    }
    const handleclick=()=>{
        const today=new Date();
        const birth=new Date(dob);
        let diff=today.getFullYear()-birth.getFullYear();
        if(today.getMonth()<birth.getMonth() || 
        (today.getMonth()===birth.getMonth() && today.getDate()<birth.getDate())){
        setres("You are "+(diff-1)+" years old");}
        else{
            setres("You are "+diff+" years old");
        }
    }
    
    return(
        <div>
        <h1>Age Calculator</h1>
        <h5>Enter your date of birth</h5>
        <input type="date" value={dob} onChange={handlechange}/><br/>
        <button onClick={handleclick}>Calculate Age</button>
        <br/>
        <h3>{res}</h3>
        </div>
    )
}
export default AgeCalculator;