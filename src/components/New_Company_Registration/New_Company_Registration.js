import React from 'react'
import {useState } from 'react'
import './New_Company_Registration.css'

function New_Company_Registration() {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [phoneNumber,setPhoneNumber]=useState("");
  const [companyName,setCompanyName]=useState("");
  const [selectedTechType,SetselectedTechType]=useState("");
  const [passward,setPassward]=useState("");
  const [confirmPassward,setConfirmPassward]=useState("");
  const [address,setAddress]=useState("");
  const [aadharNumber,setAadharNumber]=useState("");
  function saveUser(){
      console.warn({username,email,phoneNumber,companyName,selectedTechType,passward,confirmPassward,address,aadharNumber});
      let data ={username,email,phoneNumber,companyName,selectedTechType,passward,confirmPassward,address,aadharNumber}
      fetch("http://192.168.0.173:8081/company_register",{
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
          <h3>New Company Registration</h3>
          

         <div className='main'>
          <h2>New Company Registration</h2>
          
          <form action="http://192.168.0.173:8081/company_register" >
          <input type="text" value={username} name="username" placeholder="Username*"  onChange={(e)=>{setUsername(e.target.value)}} required/><br></br> <br></br>
          <input type="email" value={email} name="email" placeholder="Enter your email*" onChange={(e)=>{setEmail(e.target.value)}} required/><br></br> <br></br>
          <input type="text" value={phoneNumber} name="phoneNumber" placeholder="Enter your Phone Number*" onChange={(e)=>{setPhoneNumber(e.target.value)}} required/><br></br> <br></br>
          <input type="text" value={companyName} name="companyName" placeholder="Company Name*" onChange={(e)=>{setCompanyName(e.target.value)}} required/><br></br> <br></br>
          <select type="search" name='selectedTechType'value={selectedTechType} onChange={(e)=>{SetselectedTechType(e.target.value)}} required>
              <option value="">Select Technology Type*</option>
              <option value="LoRaWAN">LoRaWAN</option>
              <option value="LoRaHub">LoRaHub</option>
              <option value="NBIoT">NBIoT</option>
              <option value="BLE">BLE</option>
              <option value="Wi-Fi">Wi-Fi</option>
          </select><br></br> <br></br>
          <input type="password" value={passward} name="passward" placeholder="Enter password*" onChange={(e)=>{setPassward(e.target.value)}} required/> <br></br> <br></br>
          <input type="password" value={confirmPassward} name="confirmPassward" placeholder="Confirm password*" onChange={(e)=>{setConfirmPassward(e.target.value)}} required/> <br></br><br></br>
          <input type="text" value={address} name="address" placeholder="Address*" onChange={(e)=>{setAddress(e.target.value)}} required/><br></br><br></br>
          <input type="text" value={aadharNumber} name="aadharNumber" placeholder="Aadhar Number*" onChange={(e)=>{setAadharNumber(e.target.value)}} required/>  <br></br><br></br>
          <button type='button' onClick={saveUser}>Sign Up</button>
          </form>
          </div>
      </div>
  )
}

export default New_Company_Registration