import React , {useState} from 'react'
import axios from "axios";

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
        axios.post("http://localhost:8000/Register",user)
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
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="w-1/2 bg-white p-10 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-5">Register</h1>
                <form>
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                        <input type="text" name="name" id="name" value={user.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input type="email" name="email" id="email" value={user.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input type="password" name="password" id="password" value={user.password} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="mb-5">
                        <button type="submit" className="w-full px-3 py-4 bg-blue-500 text-white rounded-lg focus:bg-blue-600 focus:outline-none" onClick={register}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Register