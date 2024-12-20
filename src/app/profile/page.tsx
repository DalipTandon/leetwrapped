'use client'
import Chart from "./Chart";
import Content  from "./Content";
import React, { useEffect, useState } from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import {  useSearchParams } from "next/navigation";
import axios from "axios";

async function getUserDetails(leetcodeId:any) {
    const response =await axios.get("https://leetcode-stats-api.herokuapp.com/"+leetcodeId);
    return response.data;
}

export function UserProfile() {
    const searchParams = useSearchParams();
    const leetcodeId = searchParams.get("leetcodeId"); 
    const [userData,setUserData]=useState<any>("");
    const [loading, setLoading] = useState<boolean>(true); // State to handle loading

   // console.log("Leetcode ID:", leetcodeId);

    useEffect(()=>{
        if(!leetcodeId){
            setUserData("No a valid url")
        }
        getUserDetails(leetcodeId)
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    },[leetcodeId])
    
    
  return (
    <BackgroundLines className="flex items-center w-full flex-col  bg-black">
     <div className="bg-[#111111] h-5/6 w-3/6 mt-5 rounded-lg p-6 absolute">
            <h5 className="text-white">{leetcodeId}</h5>
            <p className="bg-gradient-to-r from-purple-600 to-blue-400 text-transparent bg-clip-text">leetcode wrapped 2024</p>
            <div>
                <Chart/>
            </div>
            <div>
                <Content data={userData}/>
            </div>
            </div>
            <div className=" h-fit  mt-5 w-3/6 p-2    flex justify-center absolute bottom-10">
            <button className="border border-white text-white p-2 w-40 font-bold text-xl rounded-lg">Download</button>
            <button className="mx-5 border border-white text-white bg-gradient-to-r from-blue-500 to-purple-600 p-2 w-52 font-bold text-md whitespace-nowrap rounded-lg hover:from-blue-600 hover:to-purple-700 transition  ">Generate Your Wrapped</button>
            </div>
    </BackgroundLines>
  );
}

        


export default UserProfile;