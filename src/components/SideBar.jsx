import React from "react";
import { useSelector } from "react-redux";
const SideBar = () => {
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
    if(!isMenuOpen)return null
  return (
    <div className="p-5 m-5 shadow-lg w-48 font-medium  cursor-pointer">
      <h1 className="font-bold shadow-md">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5 shadow-md">Trending</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5 shadow-md">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5 shadow-md">Favourites</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};
export default SideBar;
