import useGetRestaurants from "./../services/Restaurant-Service";
import Restaurant from "./Restaurant";
import Shimmer from "./../../../components/Shimmer";
const RestaurantCard = () => {
  const data = useGetRestaurants();
  if (!data) {
    return <Shimmer />;
  }
  return (
    <div className="card-container">
      {data?.map((ele, index) => {
        console.log(ele.data);
        return <Restaurant key={ele.data.id} data={ele.data} />;
      })}
    </div>
  );
};
export default RestaurantCard;
