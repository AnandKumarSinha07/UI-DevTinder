import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BASE_URL } from "./utils/constant"; 
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from './utils/userSlice'; 


function Body() {
 
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const userData=useSelector(store=>store.user)
  
  const fetchUser = async () => { 
    if(userData)return;
    try {
      const user = await axios.get(`${BASE_URL}/profile/view`,{}, { withCredentials: true }); 
      console.log("user", user);
      
      dispatch(addUser(user.data));

    } catch (error) {
      if(error.status===401){
        navigate('/login')
      }
      console.error("Error fetching user:", error);
      
    }
  };

  useEffect(() => { 
      fetchUser();   
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Body;
