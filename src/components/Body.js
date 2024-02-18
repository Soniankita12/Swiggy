import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{
    const [listOfRestaurants , setListOfRestaurants] = useState([]);
    const [filteredRestaurant , setFilteredRestaurants] = useState([]);

    const [searchText , setSearchText] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const fetchData = async ()=>{
        const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.4089123%26lng%3D77.3177894%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");

        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false)
        return (
            <h1>Looks like you're offline . Plz check your internet !!</h1>
    )

    return listOfRestaurants.length === 0 ? (<Shimmer/>)
     : (
        <div className="body">
            <div className="filter flex">
                <div className="search p-4 m-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer" onClick={()=>{
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurant);
                    }}
                    >Search</button>
                </div>
                <div className="search p-4 m-4 flex items-center">
                <button className="px-4 py-2 bg-gray-50 rounded-lg cursor-pointer"
                 onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                    (res)=>res.info.avgRating > 2
                );

                setListOfRestaurants(filteredList);

                }}
                    >
                    Top Rated Restaurants</button>
                </div>
               

            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant) => (
              <Link key ={restaurant.info.id} to={"restaurants/" + restaurant.info.id }>
              {restaurant?.info?.veg ? (<RestaurantCardPromoted resData = {restaurant}/>) : (<RestaurantCard resData = {restaurant}/>) }
                </Link>
            ))}

            </div>

        </div>
    );
};
export default Body;