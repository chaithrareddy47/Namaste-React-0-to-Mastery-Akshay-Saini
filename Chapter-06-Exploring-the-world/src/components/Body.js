// import { useEffect, useState } from "react";
// import RestroCard from "./RestroCard";
// import { SWIGGY_API_URL } from "../constants/constants";
// import ShimmerUi from "./ShimmerUi";

// const Body = () =>{
// 	/*
// 	here we used hard coded data - mocak data which i s not live
// 	 const [listOfRestro, setListOfRestro] = useState(restaurantsList);
// 	*/
// 	const [listOfRestro, setListOfRestro] = useState([]);
// 	const [searchText, setSearchText] = useState("")
// 	const [filterRestro, setFilterRestro] = useState([])


// 	useEffect(() => {
// 		fetchData();
// 	}, []);

// 	// fetch data function for fetching live data

// 	const fetchData = async () => {
// 		// fetched data from the swiggy api url
// 		const data = await fetch(SWIGGY_API_URL);

// 		// converting data in to json
// 		const json = await data.json();
// 		console.log(json);

// 		// rendering with live data how to do that?
// 		// updateding listofrestro with new data fetch frpm api

// 		// json is where data is fetched
// 		/*
// 		 	json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
// 				?.restaurants - this is how data is  stored in nesting
// 		*/

// 		setListOfRestro(
// 			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
// 				?.restaurants,
// 		);
// 	};

// 	//filtereingbrestro accoridung to data typed in input filed


// 	//  function for handling the top rated resto
// 	function handleBtnClick() {
// 		console.log('button clicked');
// 		const filterButton = listOfRestro.filter((filterData) => {
// 			return filterData?.info?.avgRating > 4;
// 		});
// 		console.log(filterButton);
// 		setListOfRestro(filterButton);
// 	}

// function filterData(searchText, restaurants) {
// 	const resFilterData = restaurants.filter((restaurant) =>
// 		restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()),
// 	);
// 	return resFilterData;
// }

// const serchData = (searchText, restaurants)=>{
// 	if (searchText !== ' ') {
// 		const filterdData = filterData(searchText, restaurants);
// 		setFilterRestro(filterdData);
// 		if (filterdData?.length === 0) {
// 			console.log("Not Found");
// 		}
// 	}else{
// 		setFilterRestro(restaurants)
// 	}
// }


// if (listOfRestro.length === 0) {
// 	return <ShimmerUi/>
// }




//  return (
// 		<div className='body-container'>
// 			<div className='search-container'>
// 				<button
// 					className='restro-btn'
// 					onClick={handleBtnClick}>
// 					Top rated Restro
// 				</button>

// 				<input
// 				  onChange={(e) =>{
// 						setSearchText(e.target.value)
// 					}}
// 					type='text'
// 					placeholder='Search for Reastro'
// 					value={searchText}
// 				/>
// 				<button 
// 				onClick={()=>{
// 					serchData(searchText, listOfRestro)
// 				}}
// 				className='search-btn'>
// 					<i className='fa-solid fa-magnifying-glass'></i>
// 				</button>

// 				<button
// 					className='restro-btn'
// 					style={{ marginLeft: '10px' }}>
// 					Clear Filter
// 				</button>
// 			</div>

// 			{/* restro container */}

			
// 			<div className='restro-container'>
// 				{listOfRestro.map((resList) => (
// 					<RestroCard
// 						key={resList.info.id}
// 						resObj={resList}
// 					/>
// 				))}
// 			</div>

// 		</div>
// 	);
// }



// export default Body;


// import { useEffect, useState } from 'react';
// import RestroCard from './RestroCard';
// import { SWIGGY_API_URL } from '../constants/constants';
// import ShimmerUi from './ShimmerUi';

// const Body = () => {
// 	const [listOfRestro, setListOfRestro] = useState([]);
// 	const [searchText, setSearchText] = useState('');
// 	const [filterRestro, setFilterRestro] = useState([]);

// 	useEffect(() => {
// 		fetchData();
// 	}, []);

// 	const fetchData = async () => {
// 		const data = await fetch(SWIGGY_API_URL);
// 		const json = await data.json();

// 		setListOfRestro(
// 			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
// 				?.restaurants,
// 		);
// 	};

// 	function handleBtnClick() {
// 		const filterButton = listOfRestro.filter((filterData) => {
// 			return filterData?.info?.avgRating > 4;
// 		});
// 		setListOfRestro(filterButton);
// 	}

// 	function filterData(searchText, restaurants) {
// 		const resFilterData = restaurants.filter((restaurant) =>
// 			restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()),
// 		);
// 		return resFilterData;
// 	}

// 	const searchData = (searchText, restaurants) => {
// 		if (searchText !== '') {
// 			const filteredData = filterData(searchText, restaurants);
// 			setFilterRestro(filteredData);
// 			if (filteredData.length === 0) {
// 				console.log('Not Found');
// 			}
// 		} else {
// 			setFilterRestro(restaurants);
// 		}
// 	};

// 	if (listOfRestro.length === 0) {
// 		return <ShimmerUi />;
// 	}

// 	return (
// 		<div className='body-container'>
// 			<div className='search-container'>
// 				<button
// 					className='restro-btn'
// 					onClick={handleBtnClick}>
// 					Top rated Restro
// 				</button>
// 				<input
// 					onChange={(e) => {
// 						setSearchText(e.target.value);
// 					}}
// 					type='text'
// 					placeholder='Search for Reastro'
// 					value={searchText}
// 				/>
// 				<button
// 					onClick={() => {
// 						searchData(searchText, listOfRestro);
// 					}}
// 					className='search-btn'>
// 					<i className='fa-solid fa-magnifying-glass'></i>
// 				</button>
// 				<button
// 					className='restro-btn'
// 					style={{ marginLeft: '10px' }}>
// 					Clear Filter
// 				</button>
// 			</div>

// 			<div className='restro-container'>
// 				{filterRestro.length > 0
// 					? filterRestro.map((resList) => (
// 							<RestroCard
// 								key={resList.info.id}
// 								resObj={resList}
// 							/>
// 					  ))
// 					: listOfRestro.map((resList) => (
// 							<RestroCard
// 								key={resList.info.id}
// 								resObj={resList}
// 							/>
// 					  ))}
// 			</div>
// 		</div>
// 	);
// };

// export default Body;

import { useEffect, useState } from 'react';
import RestroCard from './RestroCard';
import { SWIGGY_API_URL } from '../constants/constants';
import ShimmerUi from '../components/ShimmerUi'

const Body = () => {
		console.log('Body rendered ');

	// * use states
	const [allResturants, setAllResturants] = useState([]);
	const [filteredResturants, setFilteredResturants] = useState([]);
	const [clearFilter, setClearFilter] = useState([]);
	const [searchText, setSearchText] = useState('');

	// * featching data from the api
	useEffect(() => {
		fetchRestroData();
	}, []);

	// !  function to fetch data from the api
	async function fetchRestroData() {
		const response = await fetch(SWIGGY_API_URL);
		const jsonData = await response.json();
		// * json ddata has sucessfuly fetched and logged
		// console.log(jsonData);
	

		async function checkJsonData() {
			for (let i = 0; i < jsonData?.data?.cards.length; i++) {
				// checking where the data is fount
				let checkData =
					jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
						?.restaurants;
				// console.log(checkData);
				if (checkData !== undefined) {
					return checkData;
				}
			}
		}

		const resData = await checkJsonData(jsonData);
		setAllResturants(resData);
		//! nedd to updated both the data wile fetcjg the data from api else it shows blank ui
		setFilteredResturants(resData)
		setClearFilter(resData)
	}


	function filterBtn(){
		const filteredBtn = allResturants.filter((res) =>{
			return res?.info?.avgRating > 4.5;
		})
		setAllResturants(filteredBtn);
		setFilteredResturants(filteredBtn)
		// console.log("data filtered");
		
	}

	function clearFilteredBtn(){
		console.log('button clicked');
		setFilteredResturants(clearFilter);
		setAllResturants(clearFilter)
		setSearchText('')
	}


 

	return (
		<div className='body-container'>
			<div className='buttons'>
				<button
					onClick={filterBtn}
					className='btn  btn-primary'>
					Top Rated Restro
				</button>

				<div className='search-container'>
					<input
						className='text-input'
						type='text'
						placeholder='Search for restro...'
						value={searchText}
						onChange={(e) => {
							//updated search TEXT
							setSearchText(e.target.value);
						}}
					/>
					{
						filteredResturants.length === 0 && searchText.length === 0 ? (
						<h2 className='error '>No matches resturant found</h2>
					) : (
						<button
							onClick={() => {
								// console.log(searchText, 'text searched');
								const searchFilter = allResturants.filter((res) =>
									res?.info?.name
										.toLowerCase()
										.includes(searchText.toLowerCase()),
								);
								setFilteredResturants(searchFilter);
							}}
							className='search-btn '>
							search
						</button>
					)}
					{/* <button
						onClick={() => {
							// console.log(searchText, 'text searched');
							const searchFilter = allResturants.filter((res) =>
								res?.info?.name
									.toLowerCase()
									.includes(searchText.toLowerCase()),
							);
							setFilteredResturants(searchFilter);
						}}
						className='search-btn '>
						search
					</button> */}
				</div>

				<button
					onClick={clearFilteredBtn}
					className='btn  btn-secondary'>
					Clear filter
				</button>
			</div>

			{/* restro card componenet */}
			{
				allResturants?.length === 0 ? (
				<ShimmerUi />
			) : (
				<div className='restro-container'>
					{
						filteredResturants.map((resData) => (
						<RestroCard
							key={resData?.info?.id}
							resObj={resData}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Body;

