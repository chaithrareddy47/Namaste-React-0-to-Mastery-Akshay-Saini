import React from "react";
import ReactDOM from "react-dom/client";



const Header = () =>{
  return(
    <div className="header-component">
      <div className="logo">
        India Cafe
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

// Body Componenet
const restObj = [
	{
		card: {
			card: {
				'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
				info: {
					id: '698468',
					name: "Mom's Home Made Food",
					cloudinaryImageId: 'a2ec49c995902d996bf2e9cb810f3d4d',
					locality: 'Vihan Nilaya Upkar Layout',
					areaName: 'Electronic City',
					costForTwo: '₹300 for two',
					cuisines: ['Indian', 'South Indian', 'Biryani', 'Desserts', 'Kebabs'],
					avgRating: 4.1,
					feeDetails: {
						restaurantId: '698468',
						fees: [
							{
								name: 'BASE_DISTANCE',
								fee: 4200,
							},
							{
								name: 'BASE_TIME',
							},
							{
								name: 'ANCILLARY_SURGE_FEE',
							},
						],
						totalFee: 4200,
					},
					parentId: '343122',
					avgRatingString: '4.1',
					totalRatingsString: '50+',
					promoted: true,
					adTrackingId:
						'cid=9649468~p=1~eid=0000018c-3d3c-d980-0030-123500c5017d~srvts=1701834447232~89290',
					sla: {
						deliveryTime: 41,
						lastMileTravel: 4.6,
						serviceability: 'SERVICEABLE',
						slaString: '41 mins',
						lastMileTravelString: '4.6 km',
						iconType: 'ICON_TYPE_EMPTY',
					},
					availability: {
						nextCloseTime: '2023-12-06 20:00:00',
						opened: true,
					},
					badges: {},
					isOpen: true,
					type: 'F',
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {},
							textExtendedBadges: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: '60% OFF',
						subHeader: 'UPTO ₹100',
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
						differentiatedUiMediaDetails: {
							mediaType: 'ADS_MEDIA_ENUM_IMAGE',
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
					restaurantOfferPresentationInfo: {},
				},
				analytics: {},
				cta: {},
				widgetId: 'collectionV5RestaurantListWidget',
			},
		},
	},
	{
		card: {
			card: {
				'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
				info: {
					id: '409523',
					name: 'Anand Sweets',
					cloudinaryImageId: '8d786951646dc137f9bf859727f90391',
					locality: 'Hosur Main Road',
					areaName: 'Bommasandra',
					costForTwo: '₹150 for two',
					cuisines: ['Sweets', 'Desserts', 'Snacks', 'Indian'],
					avgRating: 4.5,
					veg: true,
					feeDetails: {
						restaurantId: '409523',
						fees: [
							{
								name: 'BASE_DISTANCE',
								fee: 4900,
							},
							{
								name: 'BASE_TIME',
							},
							{
								name: 'ANCILLARY_SURGE_FEE',
							},
						],
						totalFee: 4900,
					},
					parentId: '53',
					avgRatingString: '4.5',
					totalRatingsString: '100+',
					sla: {
						deliveryTime: 23,
						lastMileTravel: 4,
						serviceability: 'SERVICEABLE',
						slaString: '23 mins',
						lastMileTravelString: '4.0 km',
						iconType: 'ICON_TYPE_EMPTY',
					},
					availability: {
						nextCloseTime: '2023-12-06 23:59:00',
						opened: true,
					},
					badges: {
						imageBadges: [
							{
								imageId: 'v1695133679/badges/Pure_Veg111.png',
								description: 'pureveg',
							},
						],
						textExtendedBadges: [
							{
								iconId: 'guiltfree/GF_Logo_android_3x',
								shortDescription: 'options available',
								fontColor: '#7E808C',
							},
						],
					},
					isOpen: true,
					type: 'F',
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {
								badgeObject: [
									{
										attributes: {
											description: 'pureveg',
											imageId: 'v1695133679/badges/Pure_Veg111.png',
										},
									},
								],
							},
							textExtendedBadges: {
								badgeObject: [
									{
										attributes: {
											iconId: 'guiltfree/GF_Logo_android_3x',
											description: '',
											shortDescription: 'options available',
											fontColor: '#7E808C',
										},
									},
								],
							},
						},
					},
					aggregatedDiscountInfoV3: {
						header: '60% OFF',
						subHeader: 'UPTO ₹100',
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
						differentiatedUiMediaDetails: {
							mediaType: 'ADS_MEDIA_ENUM_IMAGE',
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
					restaurantOfferPresentationInfo: {},
				},
				analytics: {},
				cta: {},
				widgetId: 'collectionV5RestaurantListWidget',
			},
		},
	},
	{
		card: {
			card: {
				'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
				info: {
					id: '41793',
					name: 'Sweet Truth - Cake and Desserts',
					cloudinaryImageId: '4a3b48488e3aa9bda13efd8cfcd95284',
					locality: 'Bommasandra',
					areaName: 'Vidyanagar',
					costForTwo: '₹450 for two',
					cuisines: ['Snacks', 'Bakery', 'Desserts', 'Beverages'],
					avgRating: 4.1,
					feeDetails: {
						restaurantId: '41793',
						fees: [
							{
								name: 'BASE_DISTANCE',
								fee: 4900,
							},
							{
								name: 'BASE_TIME',
							},
							{
								name: 'ANCILLARY_SURGE_FEE',
							},
						],
						totalFee: 4900,
					},
					parentId: '4444',
					avgRatingString: '4.1',
					totalRatingsString: '500+',
					sla: {
						deliveryTime: 27,
						lastMileTravel: 4,
						serviceability: 'SERVICEABLE',
						slaString: '27 mins',
						lastMileTravelString: '4.0 km',
						iconType: 'ICON_TYPE_EMPTY',
					},
					availability: {
						nextCloseTime: '2023-12-06 23:59:00',
						opened: true,
					},
					badges: {},
					isOpen: true,
					type: 'F',
					badgesV2: {
						entityBadges: {
							textExtendedBadges: {},
							textBased: {},
							imageBased: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: '60% OFF',
						subHeader: 'UPTO ₹100',
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
						differentiatedUiMediaDetails: {
							mediaType: 'ADS_MEDIA_ENUM_IMAGE',
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
					restaurantOfferPresentationInfo: {},
				},
				analytics: {},
				cta: {},
				widgetId: 'collectionV5RestaurantListWidget',
			},
		},
	},
	{
		card: {
			card: {
				'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
				info: {
					id: '437486',
					name: 'Baskin Robbins - Ice Cream Desserts',
					cloudinaryImageId: '85ccae4e3576f9330af102c46ca85395',
					locality: 'Bommasandra',
					areaName: 'Attibele',
					costForTwo: '₹250 for two',
					cuisines: ['Desserts', 'Ice Cream'],
					avgRating: 3.7,
					veg: true,
					feeDetails: {
						restaurantId: '437486',
						fees: [
							{
								name: 'BASE_DISTANCE',
								fee: 4200,
							},
							{
								name: 'BASE_TIME',
							},
							{
								name: 'ANCILLARY_SURGE_FEE',
							},
						],
						totalFee: 4200,
					},
					parentId: '5588',
					avgRatingString: '3.7',
					totalRatingsString: '100+',
					sla: {
						deliveryTime: 33,
						lastMileTravel: 4,
						serviceability: 'SERVICEABLE',
						slaString: '33 mins',
						lastMileTravelString: '4.0 km',
						iconType: 'ICON_TYPE_EMPTY',
					},
					availability: {
						nextCloseTime: '2023-12-06 23:59:00',
						opened: true,
					},
					badges: {},
					isOpen: true,
					type: 'F',
					badgesV2: {
						entityBadges: {
							textExtendedBadges: {},
							textBased: {},
							imageBased: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: '60% OFF',
						subHeader: 'UPTO ₹100',
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
						differentiatedUiMediaDetails: {
							mediaType: 'ADS_MEDIA_ENUM_IMAGE',
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
					restaurantOfferPresentationInfo: {},
				},
				analytics: {},
				cta: {},
				widgetId: 'collectionV5RestaurantListWidget',
			},
		},
	},
	{
		card: {
			card: {
				'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
				info: {
					id: '41784',
					name: 'Faasos - Wraps & Rolls',
					cloudinaryImageId: 'af33b81798b11deba338e94b7585d348',
					locality: 'Bommasandra',
					areaName: 'Vidyanagar',
					costForTwo: '₹200 for two',
					cuisines: [
						'Kebabs',
						'Fast Food',
						'Snacks',
						'North Indian',
						'American',
						'Healthy Food',
						'Desserts',
						'Beverages',
					],
					avgRating: 4.1,
					feeDetails: {
						restaurantId: '41784',
						fees: [
							{
								name: 'BASE_DISTANCE',
								fee: 4200,
							},
							{
								name: 'BASE_TIME',
							},
							{
								name: 'ANCILLARY_SURGE_FEE',
							},
						],
						totalFee: 4200,
					},
					parentId: '21809',
					avgRatingString: '4.1',
					totalRatingsString: '5K+',
					sla: {
						deliveryTime: 34,
						lastMileTravel: 4,
						serviceability: 'SERVICEABLE',
						slaString: '34 mins',
						lastMileTravelString: '4.0 km',
						iconType: 'ICON_TYPE_EMPTY',
					},
					availability: {
						nextCloseTime: '2023-12-06 23:59:00',
						opened: true,
					},
					badges: {
						textExtendedBadges: [
							{
								iconId: 'guiltfree/GF_Logo_android_3x',
								shortDescription: 'options available',
								fontColor: '#7E808C',
							},
						],
					},
					isOpen: true,
					type: 'F',
					badgesV2: {
						entityBadges: {
							textExtendedBadges: {
								badgeObject: [
									{
										attributes: {
											shortDescription: 'options available',
											fontColor: '#7E808C',
											iconId: 'guiltfree/GF_Logo_android_3x',
											description: '',
										},
									},
								],
							},
							textBased: {},
							imageBased: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: '60% OFF',
						subHeader: 'UPTO ₹100',
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
						differentiatedUiMediaDetails: {
							mediaType: 'ADS_MEDIA_ENUM_IMAGE',
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
					restaurantOfferPresentationInfo: {},
				},
				analytics: {},
				cta: {},
				widgetId: 'collectionV5RestaurantListWidget',
			},
		},
	},
	{
		card: {
			card: {
				'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
				info: {
					id: '83005',
					name: 'LunchBox - Meals and Thalis',
					cloudinaryImageId: '4edcfc66d91018d69894941ebb3c8d16',
					locality: 'Bommasandra',
					areaName: 'Vidyanagar',
					costForTwo: '₹200 for two',
					cuisines: [
						'Biryani',
						'North Indian',
						'Punjabi',
						'Healthy Food',
						'Desserts',
						'Beverages',
					],
					avgRating: 4.1,
					feeDetails: {
						restaurantId: '83005',
						fees: [
							{
								name: 'BASE_DISTANCE',
								fee: 4200,
							},
							{
								name: 'BASE_TIME',
							},
							{
								name: 'ANCILLARY_SURGE_FEE',
							},
						],
						totalFee: 4200,
					},
					parentId: '4925',
					avgRatingString: '4.1',
					totalRatingsString: '5K+',
					sla: {
						deliveryTime: 31,
						lastMileTravel: 4,
						serviceability: 'SERVICEABLE',
						slaString: '31 mins',
						lastMileTravelString: '4.0 km',
						iconType: 'ICON_TYPE_EMPTY',
					},
					availability: {
						nextCloseTime: '2023-12-06 23:59:00',
						opened: true,
					},
					badges: {
						textExtendedBadges: [
							{
								iconId: 'guiltfree/GF_Logo_android_3x',
								shortDescription: 'options available',
								fontColor: '#7E808C',
							},
						],
					},
					isOpen: true,
					type: 'F',
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {},
							textExtendedBadges: {
								badgeObject: [
									{
										attributes: {
											description: '',
											shortDescription: 'options available',
											fontColor: '#7E808C',
											iconId: 'guiltfree/GF_Logo_android_3x',
										},
									},
								],
							},
						},
					},
					aggregatedDiscountInfoV3: {
						header: '60% OFF',
						subHeader: 'UPTO ₹100',
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
						differentiatedUiMediaDetails: {
							mediaType: 'ADS_MEDIA_ENUM_IMAGE',
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
					restaurantOfferPresentationInfo: {},
				},
				analytics: {},
				cta: {},
				widgetId: 'collectionV5RestaurantListWidget',
			},
		},
	},
	{
		card: {
			card: {
				'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
				info: {
					id: '335321',
					name: 'Natural Ice Cream',
					cloudinaryImageId: 'zqm2qg9ikj6bsx6kws6d',
					locality: 'Vidyanagar',
					areaName: 'Bommasandra',
					costForTwo: '₹150 for two',
					cuisines: ['Ice Cream', 'Desserts'],
					avgRating: 4.4,
					veg: true,
					feeDetails: {
						restaurantId: '335321',
						fees: [
							{
								name: 'BASE_DISTANCE',
								fee: 4900,
							},
							{
								name: 'BASE_TIME',
							},
							{
								name: 'ANCILLARY_SURGE_FEE',
							},
						],
						totalFee: 4900,
					},
					parentId: '2093',
					avgRatingString: '4.4',
					totalRatingsString: '100+',
					sla: {
						deliveryTime: 22,
						lastMileTravel: 4,
						serviceability: 'SERVICEABLE',
						slaString: '22 mins',
						lastMileTravelString: '4.0 km',
						iconType: 'ICON_TYPE_EMPTY',
					},
					availability: {
						nextCloseTime: '2023-12-06 23:59:00',
						opened: true,
					},
					badges: {},
					isOpen: true,
					type: 'F',
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {},
							textExtendedBadges: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: '60% OFF',
						subHeader: 'UPTO ₹100',
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
						differentiatedUiMediaDetails: {
							mediaType: 'ADS_MEDIA_ENUM_IMAGE',
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
					restaurantOfferPresentationInfo: {},
				},
				analytics: {},
				cta: {},
				widgetId: 'collectionV5RestaurantListWidget',
			},
		},
	},
	{
		card: {
			card: {
				'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
				info: {
					id: '613402',
					name: 'Tea Time',
					cloudinaryImageId: 'zma1lqvqg6rerhtjkfcw',
					locality: 'Hosur Road',
					areaName: 'Bommasandra',
					costForTwo: '₹200 for two',
					cuisines: ['Beverages', 'Snacks'],
					avgRating: 4.5,
					feeDetails: {
						restaurantId: '613402',
						fees: [
							{
								name: 'BASE_DISTANCE',
								fee: 3000,
							},
							{
								name: 'BASE_TIME',
							},
							{
								name: 'ANCILLARY_SURGE_FEE',
							},
						],
						totalFee: 3000,
					},
					parentId: '202784',
					avgRatingString: '4.5',
					totalRatingsString: '50+',
					sla: {
						deliveryTime: 23,
						lastMileTravel: 2.7,
						serviceability: 'SERVICEABLE',
						slaString: '23 mins',
						lastMileTravelString: '2.7 km',
						iconType: 'ICON_TYPE_EMPTY',
					},
					availability: {
						nextCloseTime: '2023-12-06 23:00:00',
						opened: true,
					},
					badges: {
						imageBadges: [
							{
								imageId: 'v1695133679/badges/Pure_Veg111.png',
								description: 'pureveg',
							},
						],
					},
					isOpen: true,
					type: 'F',
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {
								badgeObject: [
									{
										attributes: {
											imageId: 'v1695133679/badges/Pure_Veg111.png',
											description: 'pureveg',
										},
									},
								],
							},
							textExtendedBadges: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: '60% OFF',
						subHeader: 'UPTO ₹100',
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
						differentiatedUiMediaDetails: {
							mediaType: 'ADS_MEDIA_ENUM_IMAGE',
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
					restaurantOfferPresentationInfo: {},
				},
				analytics: {},
				cta: {},
				widgetId: 'collectionV5RestaurantListWidget',
			},
		},
	},
	{
		card: {
			card: {
				'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
				info: {
					id: '263681',
					name: 'Pure Veg Meals by Lunchbox',
					cloudinaryImageId: 's3tijk8vap3l07lxpruc',
					locality: 'Bommasandra',
					areaName: 'Vidyanagar',
					costForTwo: '₹200 for two',
					cuisines: ['Biryani', 'North Indian', 'Desserts', 'Beverages'],
					avgRating: 4,
					veg: true,
					feeDetails: {
						restaurantId: '263681',
						fees: [
							{
								name: 'BASE_DISTANCE',
								fee: 4200,
							},
							{
								name: 'BASE_TIME',
							},
							{
								name: 'ANCILLARY_SURGE_FEE',
							},
						],
						totalFee: 4200,
					},
					parentId: '21938',
					avgRatingString: '4.0',
					totalRatingsString: '100+',
					sla: {
						deliveryTime: 29,
						lastMileTravel: 4,
						serviceability: 'SERVICEABLE',
						slaString: '29 mins',
						lastMileTravelString: '4.0 km',
						iconType: 'ICON_TYPE_EMPTY',
					},
					availability: {
						nextCloseTime: '2023-12-06 23:59:00',
						opened: true,
					},
					badges: {
						imageBadges: [
							{
								imageId: 'v1695133679/badges/Pure_Veg111.png',
								description: 'pureveg',
							},
						],
					},
					isOpen: true,
					type: 'F',
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {
								badgeObject: [
									{
										attributes: {
											imageId: 'v1695133679/badges/Pure_Veg111.png',
											description: 'pureveg',
										},
									},
								],
							},
							textExtendedBadges: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: '60% OFF',
						subHeader: 'UPTO ₹100',
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
						differentiatedUiMediaDetails: {
							mediaType: 'ADS_MEDIA_ENUM_IMAGE',
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
					restaurantOfferPresentationInfo: {},
				},
				analytics: {},
				cta: {},
				widgetId: 'collectionV5RestaurantListWidget',
			},
		},
	},
	{
		card: {
			card: {
				'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
				info: {
					id: '566243',
					name: "Faasos' Signature Wraps & Rolls",
					cloudinaryImageId: 'c583ca6ce40b426797a78ae2ac91f2ec',
					locality: 'Bommasandra',
					areaName: 'Vidyanagar',
					costForTwo: '₹350 for two',
					cuisines: [
						'Fast Food',
						'Snacks',
						'North Indian',
						'Desserts',
						'Beverages',
					],
					avgRating: 4.4,
					feeDetails: {
						restaurantId: '566243',
						fees: [
							{
								name: 'BASE_DISTANCE',
								fee: 4200,
							},
							{
								name: 'BASE_TIME',
							},
							{
								name: 'ANCILLARY_SURGE_FEE',
							},
						],
						totalFee: 4200,
					},
					parentId: '340366',
					avgRatingString: '4.4',
					totalRatingsString: '20+',
					sla: {
						deliveryTime: 33,
						lastMileTravel: 4,
						serviceability: 'SERVICEABLE',
						slaString: '33 mins',
						lastMileTravelString: '4.0 km',
						iconType: 'ICON_TYPE_EMPTY',
					},
					availability: {
						nextCloseTime: '2023-12-06 23:59:00',
						opened: true,
					},
					badges: {
						textExtendedBadges: [
							{
								iconId: 'guiltfree/GF_Logo_android_3x',
								shortDescription: 'options available',
								fontColor: '#7E808C',
							},
						],
					},
					isOpen: true,
					type: 'F',
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {},
							textExtendedBadges: {
								badgeObject: [
									{
										attributes: {
											iconId: 'guiltfree/GF_Logo_android_3x',
											description: '',
											shortDescription: 'options available',
											fontColor: '#7E808C',
										},
									},
								],
							},
						},
					},
					aggregatedDiscountInfoV3: {
						header: '60% OFF',
						subHeader: 'UPTO ₹100',
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
						differentiatedUiMediaDetails: {
							mediaType: 'ADS_MEDIA_ENUM_IMAGE',
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
					restaurantOfferPresentationInfo: {},
				},
				analytics: {},
				cta: {},
				widgetId: 'collectionV5RestaurantListWidget',
			},
		},
	},
	{
		card: {
			card: {
				'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
				info: {
					id: '333586',
					name: 'Shiv Sagar',
					cloudinaryImageId: 'yzld2bna0iwb5opihcbx',
					locality: '2nd Phase',
					areaName: 'Anekal',
					costForTwo: '₹500 for two',
					cuisines: ['North Indian', 'South Indian', 'Chinese', 'Chaat'],
					avgRating: 4.4,
					veg: true,
					feeDetails: {
						restaurantId: '333586',
						fees: [
							{
								name: 'BASE_DISTANCE',
								fee: 5400,
							},
							{
								name: 'BASE_TIME',
							},
							{
								name: 'ANCILLARY_SURGE_FEE',
							},
						],
						totalFee: 5400,
					},
					parentId: '845',
					avgRatingString: '4.4',
					totalRatingsString: '1K+',
					sla: {
						deliveryTime: 34,
						lastMileTravel: 6.2,
						serviceability: 'SERVICEABLE',
						slaString: '34 mins',
						lastMileTravelString: '6.2 km',
						iconType: 'ICON_TYPE_EMPTY',
					},
					availability: {
						nextCloseTime: '2023-12-06 22:30:00',
						opened: true,
					},
					badges: {
						imageBadges: [
							{
								imageId: 'v1695133679/badges/Pure_Veg111.png',
								description: 'pureveg',
							},
						],
					},
					isOpen: true,
					type: 'F',
					badgesV2: {
						entityBadges: {
							textBased: {},
							imageBased: {
								badgeObject: [
									{
										attributes: {
											imageId: 'v1695133679/badges/Pure_Veg111.png',
											description: 'pureveg',
										},
									},
								],
							},
							textExtendedBadges: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: '60% OFF',
						subHeader: 'UPTO ₹100',
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
						differentiatedUiMediaDetails: {
							mediaType: 'ADS_MEDIA_ENUM_IMAGE',
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
					restaurantOfferPresentationInfo: {},
				},
				analytics: {},
				cta: {},
				widgetId: 'collectionV5RestaurantListWidget',
			},
		},
	},
	{
		card: {
			card: {
				'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
				info: {
					id: '206474',
					name: 'Srinidhi Upachar',
					cloudinaryImageId: 'bu3aahtyd0rbenspdtpg',
					locality: 'Attibele',
					areaName: 'Electronic City',
					costForTwo: '₹150 for two',
					cuisines: ['South Indian', 'North Indian'],
					avgRating: 3.9,
					veg: true,
					feeDetails: {
						restaurantId: '206474',
						fees: [
							{
								name: 'BASE_DISTANCE',
								fee: 4800,
							},
							{
								name: 'BASE_TIME',
							},
							{
								name: 'ANCILLARY_SURGE_FEE',
							},
						],
						totalFee: 4800,
					},
					parentId: '20160',
					avgRatingString: '3.9',
					totalRatingsString: '100+',
					sla: {
						deliveryTime: 54,
						lastMileTravel: 5.9,
						serviceability: 'SERVICEABLE',
						slaString: '54 mins',
						lastMileTravelString: '5.9 km',
						iconType: 'ICON_TYPE_EMPTY',
					},
					availability: {
						nextCloseTime: '2023-12-06 21:00:00',
						opened: true,
					},
					badges: {
						imageBadges: [
							{
								imageId: 'v1695133679/badges/Pure_Veg111.png',
								description: 'pureveg',
							},
						],
					},
					isOpen: true,
					type: 'F',
					badgesV2: {
						entityBadges: {
							imageBased: {
								badgeObject: [
									{
										attributes: {
											imageId: 'v1695133679/badges/Pure_Veg111.png',
											description: 'pureveg',
										},
									},
								],
							},
							textExtendedBadges: {},
							textBased: {},
						},
					},
					aggregatedDiscountInfoV3: {
						header: '60% OFF',
						subHeader: 'UPTO ₹100',
					},
					orderabilityCommunication: {
						title: {},
						subTitle: {},
						message: {},
						customIcon: {},
					},
					differentiatedUi: {
						displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
						differentiatedUiMediaDetails: {
							mediaType: 'ADS_MEDIA_ENUM_IMAGE',
							lottie: {},
							video: {},
						},
					},
					reviewsSummary: {},
					displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
					restaurantOfferPresentationInfo: {},
				},
				analytics: {},
				cta: {},
				widgetId: 'collectionV5RestaurantListWidget',
			},
		},
	},
];
console.log(restObj);
const Body = () =>{
  return(
    <div className="body-component">
      <div className="search-container">
        <button>Search</button>
      </div>
      <div className="restro-container">
     {
      restObj.map((restaurant) => (
        <RestroComponent resData={restaurant}/>
      ))
     }
       
      </div>
    </div>
  )
}

const RestroComponent = ({resData}) =>{
  const {name, id, cloudinaryImageId, areaName, costForTwo, cuisines, avgRating, } = resData?.card?.card?.info;
	const {deliveryTime} = resData?.card?.card?.info?.sla;

	
  return (
		<div className='restro-card'>
			<img
				src={
					'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
					cloudinaryImageId
				}
				alt={name}
			/>
			<div className='restro-description'>
				<h3>{name}</h3>
				<p className="restro-rating">
					<i class='bi bi-star-fill'></i> {avgRating}
					<i class='bi bi-dot'></i>
          {deliveryTime} mins
				</p>
				<p className="restro-cuisines">{cuisines.join(',')}</p>
				<p>{areaName}</p>
				<p>{costForTwo}</p>
			</div>
		</div>
	);
}
const Footer = () =>{
  return(
    <div className="footer-component">Footer</div>
  )
}



const AppLayout = () =>{
  return(
    <div>
     <Header/>
     <Body/>
     <Footer/>

    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)