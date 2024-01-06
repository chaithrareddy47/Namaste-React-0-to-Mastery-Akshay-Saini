import RestroCard from './RestroCard';
import { useState } from 'react';
import restroList from '../utils/mockdata';


const Body = () => {
	const [listofRestro, setListofRestro] = useState(restroList);

 
  
	return (
		<div className='body-component'>
			<div className='btn'>
				<button
					className='filter-btn'
					onClick={() => {
						const filteredRestro = listofRestro.filter(
							(res) => res.info.avgRating > 4,
						);
						setListofRestro(filteredRestro);
					}}>
					Top Rated Restro
				</button>

				<input
					type='text'
					placeholder='Search for restros...'
				/>

        <button className='filter-btn'
        onClick={() =>{
          setListofRestro(restroList)
        }}
        >Clear Filter</button>
			</div>

      


			<div className='restro-container'>
				{listofRestro.map((resList) => (
					<RestroCard
						key={resList.info.id}
						resData={resList}
					/>
				))}
			</div>
		</div>
	);
};
export default Body;
