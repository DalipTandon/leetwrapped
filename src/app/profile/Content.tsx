

const Content=({data}:any)=>{
    const{ranking,totalSolved,totalQuestions,easySolved,totalEasy,mediumSolved,totalMedium,hardSolved,totalHard,contributionPoints}=data;
    
    return(
        <div className="flex flex-wrap  h-72 w-full mt-5  justify-between">
            <div className="bg-[#251B13] h-20 w-[49%]    rounded-lg p-3 text-black font-bold bg-gradient-to-r from-amber-600 to-purple-200">👑 Universal Rank <br/> <p> {ranking}</p></div>
            <div className="bg-[#221921] h-20 w-[49%] rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 p-3 font-bold">🪙 Leet Points <br/> <p>{contributionPoints}</p></div>
            <div className="bg-[#251B43] h-20 w-[49%]  rounded-lg bg-gradient-to-r from-emerald-300 to-green-600 p-3 font-bold">✅ total question solved <br/> <p>{`${totalSolved}/${totalQuestions}`}</p></div>
            <div className="bg-[#251B83] h-20 w-[49%] rounded-lg  bg-gradient-to-r from-amber-500 to-orange-600 p-3 font-bold">😁 Easy Question  <br/> <p>{`${easySolved}/${totalEasy}`}</p></div>
            <div className="bg-[#251B43] h-20 w-[49%] rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 p-3 font-bold">💪 Medium Question<br/> <p>{`${mediumSolved}/${totalMedium}`}</p></div>
            <div className="bg-[#251B13] h-20 w-[49%] rounded-lg bg-gradient-to-r from-amber-600 to-purple-200 p-3 font-bold">😎 Hard Question <br/> <p>{`${hardSolved}/${totalHard}`}</p></div>
        </div>
    )
}

export default Content;