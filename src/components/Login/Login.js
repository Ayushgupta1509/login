// import React, { useState } from 'react';
// import Redirect  from "react-router-dom";
// const Login = (props) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [redirect, setRedirect] = useState(false);
//     const submit = async (e) => {
//         e.preventDefault();
//         const response = fetch('http://192.168.0.173:8081/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//             credentials: 'include',
//             body: JSON.stringify({
//                 username,
//                 password
//             })
//         });
//         const content = response.json();
//         setRedirect(true);
//         props.setName(content.name);
//     };
//     if (redirect) {
//         return React.createElement(Redirect, { to: "/" });
//     }
//     return (React.createElement("form", { onSubmit: submit },
//         React.createElement("h1", { className: "h3 mb-3 fw-normal" }, "Please sign in"),
//         React.createElement("input", { type: "username", className: "form-control", placeholder: "Email address", required: true, onChange: e => setUsername(e.target.value) }),
//         React.createElement("input", { type: "password", className: "form-control", placeholder: "Password", required: true, onChange: e => setPassword(e.target.value) }),
//         React.createElement("button", { className: "w-100 btn btn-lg btn-primary", type: "submit" }, "Sign in")));
// };
// export default Login;













import React from 'react'
import {useState } from 'react'
function Login() {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
 
  async function submitForm()
  {
      console.warn("data",username,password)
      let item={username,password}
      let result= await fetch('http://192.168.0.173:8081/login',{
         method:'POST',
         headers:{
            'Accept':'application/json',
            'Content-Type':'application/x-www-form-urlencoded'
         },
         body:JSON.stringify(item)
  });
  result = result.json();
  localStorage.setItem('user-info',JSON.stringify(result));
}
  return (
    <div>
      <h3>Login Page</h3> 

       <form action='http://192.168.0.173:8081/login' method='POST'>
  <div className="mb-3 my-3">
    <label >Username or Email</label>
    <input type="username" className="form-control" name='username' onChange={e=>setUsername(e.target.value)} id="username" placeholder='Enter username'/>
  </div>
  <div className="mb-3">
    <label>Password</label>
    <input type="password" className="form-control" onChange={e=>setPassword(e.target.value)} id="password" name='password' placeholder='Enter Password'/>
  </div>
  <button type="button" onClick={submitForm} className="btn btn-primary">Login</button>
</form>
    </div>
  )
}

export default Login;