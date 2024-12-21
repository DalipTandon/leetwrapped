"use client"
import React, { useEffect, useState } from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import html2canvas from "html2canvas";  // Import html2canvas
import Chart from "./Chart";
import Content from "./Content";

async function getUserDetails(leetcodeId) {
  const response = await axios.get("https://leetcode-stats-api.herokuapp.com/" + leetcodeId);
  return response.data;
}

export function UserProfile() {
  const searchParams = useSearchParams();
  const leetcodeId = searchParams.get("leetcodeId");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!leetcodeId) {
      setUserData(0);
    }
    getUserDetails(leetcodeId)
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
       // console.error("Error fetching user details:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [leetcodeId]);

  if (loading) {
    return <p className="bg-black h-screen text-white text-3xl flex justify-center items-center">Data is being fetched.......  <span>please wait</span></p>;
  }
  if (userData.message === "user does not exist") {
    return <p className="bg-black h-screen text-white text-3xl flex justify-center items-center">No user found, please recheck your leetcode ID 😔😔😔</p>;
  }

  // Function to handle downloading content as an image
  const downloadContent = () => {
    const contentElement = document.getElementById("user-profile-content");

    if (contentElement) {
      html2canvas(contentElement)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = imgData;
          link.download = `${leetcodeId}-wrapped-2024.png`; // Set the file name
          link.click();
        })
        .catch((err) => {
         // console.error("Error generating image:", err);
        });
    }
  };

  return (
    <BackgroundLines className="flex items-center w-full flex-col bg-black">
      <div id="user-profile-content" className="bg-[#000000f6] h-5/6 w-3/6 mt-5  p-6 absolute">
        <h5 className="text-white text-center text-2xl">{leetcodeId}</h5>
        <p className=" text-blue-500 text-center">Leetcode Wrapped 2024</p>
        <div>
          <Chart userData={userData} />
        </div>
        <div>
          <Content data={userData} />
        </div>
      </div>
      <div className="h-fit w-3/6 p-2 flex justify-center absolute bottom-10">
        <button
          onClick={downloadContent}
          className="border border-white text-white p-2 w-40 font-bold text-xl rounded-lg hover:from-blue-600 hover:bg-blue-500 hover:scale-105"
        >
          Download
        </button>
        <Link href={"/"}>
          <button className="mx-5 border border-white text-white bg-gradient-to-r from-blue-500 to-purple-600 p-2 w-52 font-bold text-md whitespace-nowrap rounded-lg hover:from-blue-600 hover:to-purple-700 transition">
            Generate Your Wrapped
          </button>
        </Link>
      </div>
    </BackgroundLines>
  );
}

export default UserProfile;
