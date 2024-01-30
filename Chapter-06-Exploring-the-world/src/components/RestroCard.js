import { IMG_URL } from "../constants/constants";


const RestroCard = (props) =>{
 
const {resObj} = props;
const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
	resObj?.info;
const { deliveryTime } = resObj?.info?.sla;



  return (
		<div className='restro-card'>
			<img
				src={`${IMG_URL}${cloudinaryImageId}`}
				alt=''
			/>

			<div className='res-desc'>
				<h3 className='res-heading'>{name}</h3>

				<p className='res-stings'>
					{' '}
					<i
						className='fa-solid fa-star'
						style={{ color: 'green', marginRight: '10px' }}></i>
					<span>{avgRating}</span>
					&#8226; <span style={{ color: '#6F6F6F' }}>{deliveryTime} mins</span>
				</p>

				<h4 style={{ color: '#F29C52', margin: '2px' }}>{costForTwo}</h4>

				<p className='res-cusines'>{cuisines.join(', ')}</p>
			</div>
		</div>
	);
}

export default RestroCard;