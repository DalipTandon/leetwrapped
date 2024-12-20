import Chart from "./Chart";
import Content  from "./Content";
import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";

export function UserProfile() {
  return (
    <BackgroundLines className="flex items-center w-full flex-col  bg-black">
     <div className="bg-[#111111] h-5/6 w-3/6 mt-5 rounded-lg p-6 absolute">
            <h5 className="text-white">Dalip Tandon</h5>
            <p className="bg-gradient-to-r from-purple-600 to-blue-400 text-transparent bg-clip-text">leetcode wrapped 2024</p>
            <div>
                <Chart/>
            </div>
            <div>
                <Content/>
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