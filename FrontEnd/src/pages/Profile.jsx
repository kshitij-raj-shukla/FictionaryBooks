import React, { useEffect, useState } from 'react'
import SideBar from '../components/Profile/SideBar'
import { Outlet } from "react-router-dom";
import Loader from "../components/Loder/Loader"
import { useSelector } from "react-redux";
import axios from "axios";
import Favourites from '../components/Profile/Favourites';
function Profile() {
  const [Profile, setProfile] = useState();
  // const isLoggedIn = useSelectore();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  }; 
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:1000/api/v1/get-user-information", { headers }
      );
      setProfile(response.data);
    };
    fetch();
  }, []);


  return (
    <div className='bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row w-full py-8 text-white'>
      {!Profile && (
        <div className='w-full h-[100%] flex items-center justify-center'><Loader /></div>
      )}
      {Profile && (
        <>
          <div className='w-full md:w-1/6 h-screen'>
            <SideBar data={Profile} />
          </div>
          <div className='w-full md:w-5/6'>
            <Outlet />
          </div>
        </>
      )}
    </div>
  )
}

export default Profile