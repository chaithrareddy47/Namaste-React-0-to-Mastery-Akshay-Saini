import { CDN_URL } from "../utils/constants";
const RestroCard = (props) => {
	const { resData } = props;

	const { name, cloudinaryImageId, avgRating, cuisines, } = resData.info;
	return (
		<div className='restro-card'>
			<img
				src={`${CDN_URL}${cloudinaryImageId}`}
				alt=''
			/>
			<div className='restro-desc'>
				<h3>{name}</h3>
				<p>{avgRating}</p>
				<p>{cuisines.join(', ')}</p>
			</div>
		</div>
	);
};
export default RestroCard;