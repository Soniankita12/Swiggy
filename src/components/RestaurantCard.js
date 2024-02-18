import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData?.info;

    return (
        <div className="p-4 m-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
                <div>
                <label className="absolute rounded-tl-xl rounded-br-xl bg-green-500 text-white text-center rounded-none p-2 m-2 mt-1 ml-3">Veg</label>
                <RestaurantCard {...props}/>
                </div>
        );
    };
};

export default RestaurantCard;