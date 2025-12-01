import Palm from "../Images/dillon-kydd-XGvwt544g8k-unsplash 1.png"
import Beverly from "../Images/BeverlySpring.png"
import Cove from "../Images/Cove Red.png"
import CoveTwo from "../Images/Cove Red2.png"
import Faulker from "../Images/Faulker Ave.png"
import Crystal from "../Images/St. Crystal.png"
import CrystalTwo from "../Images/St. Crystal2.png"
import Steele from "../Images/The Old Steele.png"
import Tarpon from "../Images/Tarpon Bay.png"

const properDetails = [
  {
    id: '1',
    imgUrl: Palm,
    price: "$2,095",
    name: "Palm Habor",
    userName: 'Awandi Dasrul',
    location: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    bathrooms: 2,
    squareFeet: "5x7 m²",
    popular: true,
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa  street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.'
  },
  {
    id: '2',
    imgUrl: Beverly,
    price: "$2,700",
    name: "Beverly Springfield",
    userName: 'Jason O’Neill',
    location: "2821 Lake Sevilla, Palm Harbor, TX",
    beds: 4,
    bathrooms: 2,
    squareFeet: "6x7.5 m²",
    popular: true,
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa  street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.'
  },
  {
    id: '3',
    imgUrl: Faulker,
    price: "$4,550",
    name: "Faulkner Ave",
    userName: 'Chris Assouline',
    location: "909 Woodland St, Michigan, IN",
    beds: 4,
    bathrooms: 3,
    squareFeet: "8x10 m²²",
    popular: true,
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa  street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.'
  },
  {
    id: '4',
    imgUrl: Crystal,
    price: "$2,400",
    name: "St. Crystal",
    userName: 'Mark Manaman',
    location: "210 US Highway, Highland Lake, FL",
    beds: 4,
    bathrooms: 2,
    squareFeet: "6x8 m²",
    popular: false,
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa  street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.'
  },
  {
    id: '5',
    imgUrl: Cove,
    price: "$1,500",
    name: "Cove Red",
    userName: 'Sam Smith',
    location: "243 Curlew Road, Palm Harbor, TX",
    beds: 2,
    bathrooms: 1,
    squareFeet: "5x7.5 m²",
    popular: false,
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa  street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.'
  },
  {
    id: '6',
    imgUrl: Steele,
    price: "$1.600",
    name: "The Old Steele",
    userName: 'Gabriel Miller',
    location: "103 Lake Shores, Michigan, IN",
    beds: 3,
    bathrooms: 1,
    squareFeet: "5x7 m²",
    popular: false,
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa  street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.'
  },
  {
    id: '7',
    imgUrl: CrystalTwo,
    price: "$2,400",
    name: "St. Crystal",
    location: "210 US Highway, Highland Lake, FL",
    beds: 4,
    bathrooms: 2,
    squareFeet: "6x8 m²",
    popular: false,
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa  street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.'
  },
  {
    id: '8',
    imgUrl: CoveTwo,
    price: "$1,500",
    name: "Cove Red",
    location: "243 Curlew Road, Palm Harbor, TX",
    beds: 2,
    bathrooms: 1,
    squareFeet: "5x7.5 m²",
    popular: false,
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa  street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.'
  },
  {
    id: '9',
    imgUrl: Tarpon,
    price: "$1,600",
    name: "Tarpon Bay",
    userName: 'Martin Felix',
    location: "103 Lake Shores, Michigan, IN",
    beds: 3,
    bathrooms: 1,
    squareFeet: "5x7 m²",
    popular: false,
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa  street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.'
  }
]

export const favoriteDetails = []

export default properDetails