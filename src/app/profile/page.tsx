import Chart from "./Chart";
import Content  from "./Content";


const UserProfile=()=>{
    return(
        <div className="h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-8">
            <div className="bg-[#111111] h-5/6 w-3/6 rounded-lg p-6">
            <h5 className="text-white">Dalip Tandon</h5>
            <p className="bg-gradient-to-r from-purple-600 to-blue-400 text-transparent bg-clip-text">leetcode wrapped 2024</p>
            <div>
                <Chart/>
            </div>
            <div>
                <Content/>
            </div>
            </div>
            <div className=" h-1/6 mt-5 w-3/6 p-5    flex justify-center">
            <button className="border border-white text-white p-2 w-40 font-bold text-xl rounded-lg">Download</button>
            <button className="mx-5 border border-white text-white bg-gradient-to-r from-blue-500 to-purple-600 p-2 w-52 font-bold text-md whitespace-nowrap rounded-lg hover:from-blue-600 hover:to-purple-700 transition  ">Generate Your Wrapped</button>
            </div>
        </div>
    )
}


export default UserProfile;