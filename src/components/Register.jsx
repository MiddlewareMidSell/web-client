import React , {useState} from 'react'
import axios from "axios";
import Logo from "../img/reg.png";

const Register = () => {
    const [user,setUser] = useState({
        name:"",
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
    const register = e =>{
        e.preventDefault()
        console.log(user)
        axios.post("http://localhost:5000/api/auth/register",user)
        .then(
            function (response) {
                console.log(response);
                alert("User Registered");
              }
        )
        .catch(
            function (error) {
                console.log(error);
                alert("User Not Registered");
            }
        )
    }

    return (   
        <div className="grid grid-cols-2">
        <div>
       <img src={Logo} className="w-[42rem] object-cover" alt="logo" />
       </div>
       <div>
        <div className="col-span-5 h-[53rem] mt-44">
            <h1 className="text-3xl font-bold mb-5">Register</h1>
                <form>
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                        <input type="text" name="name" id="name" value={user.name} onChange={handleChange} className="w-[40rem] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input type="email" name="email" id="email" value={user.email} onChange={handleChange} className="w-[40rem] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input type="password" name="password" id="password" value={user.password} onChange={handleChange} className="w-[40rem] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="mb-5">
                        <button type="submit" className="w-[40rem] px-3 py-4 bg-orange-400 text-white rounded-lg focus:bg-orange-700 focus:outline-none" onClick={register}>Register</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
};

export default Register