'use client'
import Chart from "./Chart";
import Content  from "./Content";
import React, { useEffect, useState } from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import {  useSearchParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

async function getUserDetails(leetcodeId:any) {
    const response =await axios.get("https://leetcode-stats-api.herokuapp.com/"+leetcodeId);
    return response.data;
}

export function UserProfile() {
    const searchParams = useSearchParams();
    const leetcodeId = searchParams.get("leetcodeId"); 
    const [userData,setUserData]=useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true); 
    const[error,setError]=useState<any>(null);
   // console.log("Leetcode ID:", leetcodeId);
    useEffect(()=>{
        if(!leetcodeId){
            setUserData(0)
        }
        getUserDetails(leetcodeId)
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
          setError(error)
        })
        .finally(() => {
          setLoading(false);
        });
    },[leetcodeId])
  
    if(loading){
      return <p className="bg-black h-screen text-white text-3xl flex justify-center items-center ">Data is being fetched.......  <span>please wait</span></p>
    }
    if(userData.message==="user does not exist"){
      return <p className="bg-black h-screen text-white text-3xl flex justify-center items-center ">no user found please recheck your leetcode ID 😔😔😔</p>
    }
  return (
    <BackgroundLines className="flex items-center w-full flex-col  bg-black">
     <div className="bg-[#111111] h-5/6 w-3/6 mt-5 rounded-lg p-6 absolute">
            <h5 className="text-white text-center text-2xl">{leetcodeId}</h5>
            <p className="bg-gradient-to-r from-purple-600 to-blue-400 text-transparent bg-clip-text text-center">leetcode wrapped 2024</p>
            <div >
                <Chart userData={userData}/>
            </div>
            <div>
                <Content data={userData}/>
            </div>
            </div>
            <div className=" h-fit  w-3/6 p-2    flex justify-center absolute bottom-10">
            <button className="border border-white text-white p-2 w-40 font-bold text-xl rounded-lg">Download</button>
          <Link href={"/"}> <button className="mx-5 border border-white text-white bg-gradient-to-r from-blue-500 to-purple-600 p-2 w-52 font-bold text-md whitespace-nowrap rounded-lg hover:from-blue-600 hover:to-purple-700 transition  ">Generate Your Wrapped</button></Link> 
            </div>
    </BackgroundLines>
  );
}

        


export default UserProfile;