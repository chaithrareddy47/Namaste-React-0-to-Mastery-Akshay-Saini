// * ## imlepenting meanu page of each restro cards 

import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "../constants/constants";
import ShimmerUi from "./ShimmerUi";




//  created restro menu compoennet
const RestroMenu = ()=>{
  const [resInfo, setResInfo] = useState(null);

  useEffect(()=>{
    console.log('rendered ');
    fetchMenu()

  }, [])

  async function fetchMenu(){
    const response = await fetch(SWIGGY_MENU_API)
    const json = await response.json();
    console.log(json);

    for (let i=0; i<json?.data?.cards.length; i++) {
      let fetData = json?.data?.cards[i]?.card?.card?.info
      console.log(fetData);
    }
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
  }



  return (resInfo === null) ? (<ShimmerUi/>) : (
    <div className="menu-container">
      <h1>{resInfo.name}</h1>
      <img src="" alt="" />
      <p>Description about the restaurant.</p>
      <ul>
        <li>Biriyani</li>
        <li>Biriyani</li>
        <li>Biriyani</li>
      </ul>
    </div>
  )
}

export default RestroMenu;