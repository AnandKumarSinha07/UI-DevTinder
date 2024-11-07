import { useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./utils/constant";

function Login() {

  const [email,setEmail]=useState("anandkr7808@gmail.com");
  const [password,setPassword]=useState("Anand123@");
  const [error,setError]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate();


  const handleLogin=async()=>{
      try {
        const result=await axios.post(BASE_URL+"/login",
          {
          email,
          password
          },{withCredentials:true})
       
        dispatch(addUser(result.data))
        navigate('/')
        
        }  catch (error) {
            console.log(error)
            setError(error?.code)
        }

  }
  

  return (
    <div className="flex justify-center items-center mt-12">

      <div className="card bg-base-300 text-white w-96 shadow-lg rounded-lg">

        <div className="card-body flex flex-col gap-4">
          <h2 className="card-title">Enter Email!</h2>

          <input type="email" 
            placeholder="Enter email"
            className="w-full p-2 rounded-md"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />

          <h2 className="card-title">Enter Password!</h2>
            <input type="password" 
              placeholder="Enter Password"
              className="w-full p-2 rounded-md"
              value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />

          <p className="text-red-300 ml-1">{error}</p>
          <button
            className="text-white w-20 ml-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={handleLogin}
            >Login   
           </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
