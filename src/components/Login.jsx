import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios  from 'axios';
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";


const Login = ()=> {
    const [user,setUser] = useState({
        email:"",
        password: ""
    })
    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
        ...user,//spread operator 
        [name]:value
        })
    }

    // const login = async () => {
    //     if (!user) {
    //       const {
    //         user: { refreshToken, providerData },
    //       } = await signInWithPopup(firebaseAuth, provider);
    //       dispatch({
    //         type: actionType.SET_USER,
    //         user: providerData[0],
    //       });
    //       localStorage.setItem("user", JSON.stringify(providerData[0]));
    //     } else {
    //       setIsMenu(!isMenu);
    //     }
    //   };

    const login = e => {
        e.preventDefault()
        console.log(user)
        axios.post("http://localhost:8000/Login",user)
        .then(function (response) {
            console.log(response);
            alert("User Logged In");
            const token = response.data.token;
            
            }
        )
        .catch(
            function (error) {
                console.log(error);
                alert("User Not Logged In");
            }
        )
    }
    
  
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-1/2 bg-white p-10 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-5">Login</h1>
            <form>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                    <input type="email" name="email" id="email" value={user.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                    <input type="password" name="password" id="password" value={user.password} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="mb-5">
                    <button type="submit" className="w-full px-3 py-4 bg-blue-500 text-white rounded-lg focus:bg-blue-600 focus:outline-none" onClick={login}>Login</button>
                    <Link to={"/signup"} className="flex items-center gap-2">
                        <p className="mt-5 text-sm text-center">Don't have an account? <a href="" className="text-blue-500">Register</a></p>
                    </Link>
                </div>
            </form>     
        </div>
    </div>
  );
}

export default Login;