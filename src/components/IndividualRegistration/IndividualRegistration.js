import React from 'react'
import {useState } from 'react'
import './IndividualRegistration.css'
function IndividualRegistration(){
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [mobilePhone,setMobilePhone]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [employee,setEmployee]=useState("");
    const [uniqueToken,setUniqueToken]=useState("");
    function saveUser(){
        console.warn({username,email,mobilePhone,password,confirmPassword,employee,uniqueToken});
        let data ={username,email,mobilePhone,password,confirmPassword,employee,uniqueToken}
        fetch("http://192.168.0.173:8081/employee_register",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            // console.warn('result',result);
            result.json().then((resp)=>{
                console.warn("resp",resp)
            })
        })
    }
    return(
        <div>
            <h3>Individual Registration</h3>
           <div className='main'>
            <h2>Individual Registration</h2>
            
            {/* <form action="http://192.168.0.173:8081/company_register" > */}
            <input type="text" value={username} name="username" placeholder="Username*"  onChange={(e)=>{setUsername(e.target.value)}} required/><br></br> <br></br>
            <input type="email" value={email} name="email" placeholder="Enter your email*" onChange={(e)=>{setEmail(e.target.value)}} required/><br></br> <br></br>
            <input type="text" value={mobilePhone} name="mobilePhone" placeholder="Enter your Phone Number*" onChange={(e)=>{setMobilePhone(e.target.value)}} required/><br></br> <br></br>
            <input type="password" value={password} name="password" placeholder="password*" onChange={(e)=>{setPassword(e.target.value)}} required/><br></br> <br></br>
            <input type="password" value={confirmPassword} name="confirmPassword" placeholder="Confirm password*" onChange={(e)=>{setConfirmPassword(e.target.value)}} required/> <br></br><br></br>
            <input type="text" value={employee} name="employee" placeholder="employee*" onChange={(e)=>{setEmployee(e.target.value)}} required/><br></br><br></br>
            <input type="text" value={uniqueToken} name="uniqueToken" placeholder="uniqueToken*" onChange={(e)=>{setUniqueToken(e.target.value)}} required/>  <br></br><br></br>
            <button type='button' onClick={saveUser}>Sign Up</button>
            {/* </form> */}
            </div>
        </div>
    )
}
export default IndividualRegistration




















// class Login extends React.Component{
//     constructor()
//     {
//         super();
//         this.state={
//             username:null,
//             password:null,
//             login:false,
//             store:null
//         }

//     }
//     login()
//     {
//         fetch("http://192.168.0.173:8081/login",{
//             method:"POST",
//             body:JSON.stringify(this.state)
//         }).then((response)=>{
//             response.json().then((result)=>{
//                 console.warn("result",result);
//                 localStorage.setItem('login',JSON.stringify({
//                     login:true,
//                     token:result.token
//                 }))
//                 this.setState({login:true})
//             })
//         })
//     }
//     render(){
//     return(
//         <div>
//             <div className="main">
//                 <h2>Sign In</h2>
//                     <input type="text" placeholder='Enter your Usernamr or Eamil' onChange={(event)=>{this.setState({username:event.target.value})}}/> <br /><br />
//                     <input type="password"placeholder='Enter Password' onChange={(event)=>{this.setState({password:event.target.value})}}/><br /><br />
//                     <button onClick={()=>{this.login()}}>Sign In</button>
//             </div>
//         </div>

//     )
// };
// }