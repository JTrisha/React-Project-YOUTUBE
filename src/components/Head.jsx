import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setSuggestions]=useState([])
  const[showSuggestions,setShowSuggestions]=useState(false)
  const searchCache=useSelector((store)=>store.search)
  const dispatch=useDispatch()
  useEffect(() => {
    const timer=setTimeout(() => 
      {
        if(searchCache[searchQuery]){
          setSuggestions(searchCache[searchQuery]);
        }else{
          getSearchSuggestions();
        }
      }, 1500)
    return()=>{
      clearTimeout(timer)
    };
  }, [searchQuery]);
  // console.log(searchQuery);
  const getSearchSuggestions = async () => {
    console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json();
    console.log(json.items);  // Inspect the items array
  setSuggestions(json.items.map(item => item.snippet.title));
  dispatch(cacheResults({[searchQuery]:json.items.map(item => item.snippet.title)}))
  };
  // const getSearchSuggestions = async () => {
  //   console.log(searchQuery);
  //   const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //   const text = await data.text();  // Get the raw response text
  
    // Extract the array within the function call using a regular expression
  //   const match = text.match(/window\.google\.ac\.h\((.*)\)/);
  //   if (match && match[1]) {
  //     try {
  //       const parsedData = JSON.parse(match[1]);  // Parse the array part
  //       const suggestionsArray = parsedData[1];   // Get the suggestions array from the parsed data
  //       console.log(suggestionsArray);
  //       setSuggestions(suggestionsArray);
  //     } catch (e) {
  //       console.error("Error parsing suggestions:", e);
  //     }
  //   } else {
  //     console.error("Unexpected response format:", text);
  //   }
  // };
  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="grid grid-flow-col">
        <div className="flex">
          <img
            className="h-8 cursor-pointer"
            onClick={() => toggleMenuHandler()}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOS9EEOhmjbrqupspcZiT1URXVGR7EGcs6AQ&s"
            alt="menu"
          />
          <a href="/">
            <img
              className="h-8 mx-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
              alt="youtube-logo"
            />
          </a>
        </div>
        <div className="col-span-10 px-10">
          <div>
          <input
            className="w-1/2 px-5 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="rounded-r-full border border-gray-100 px-5 py-2 bg-gray-100">
            {" "}
            🔍
          </button></div>
          {showSuggestions && (<div className="bg-white fixed py-1 px-1 w-[33rem] shadow-lg rounded-lg border border-gray-200 ">
            <ul>
         {suggestions.map((s,index)=>(<li className="py-2 px-3 shadow-sm hover:bg-gray-300"key={index}>{s}</li>))}

            </ul>
          </div>)}
        </div>
        <div className="col-span-1">
          <img
            className="h-8"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
      </div>
    </>
  );
};
export default Head;
