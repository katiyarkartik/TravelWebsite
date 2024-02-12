// data.js
import housePlaceholder1 from "../images/housePlaceholder1.jpg";
import housePlaceholder2 from "../images/housePlaceholder2.jpg";
import housePlaceholder3 from "../images/housePlaceholder3.jpg";
import housePlaceholder4 from "../images/housePlaceholder4.jpg";
import housePlaceholder5 from "../images/housePlaceholder5.jpg";
import housePlaceholder6 from "../images/housePlaceholder6.jpg";
import housePlaceholder7 from "../images/housePlaceholder7.jpg";
import housePlaceholder8 from "../images/housePlaceholder8.jpg";
const roomsData = [
  {
    id: 1,
    name: "Luxury Suite",
    image: housePlaceholder1,
    rating: 4.5,
    price: 250,
    info: "Spacious suite with stunning views",
    mapAddress: "123 Main Street, City, Country",
  },
  {
    id: 2,
    name: "Cozy Cabin",
    image: housePlaceholder2,

    rating: 4.2,
    price: 120,
    info: "Rustic cabin in the woods",
    mapAddress: "456 Forest Road, Town, Country",
  },
  {
    id: 3,
    name: "Beachfront Bungalow",
    image: housePlaceholder3,
    rating: 4.8,
    price: 300,
    info: "Bungalow right on the beach",
    mapAddress: "789 Beach Avenue, Coastal City, Country",
    owner_id:4664,
  },
  {
    id: 4,
    name: "Mountain Retreat",
    image: housePlaceholder4,

    rating: 4.6,
    price: 180,
    info: "Secluded retreat in the mountains",
    mapAddress: "101 Mountain View Drive, Mountain Town, Country",
  },
  {
    id: 5,
    name: "City Loft",
    image: housePlaceholder5,

    rating: 4.3,
    price: 200,
    info: "Modern loft in the heart of the city",
    mapAddress: "222 Urban Street, Downtown, Country",
  },
  {
    id: 6,
    name: "Lake House",
    image: housePlaceholder6,

    rating: 4.7,
    price: 280,
    info: "Charming house by the lake",
    mapAddress: "333 Lakeside Road, Lakeside Town, Country",
  },
  {
    id: 7,
    name: "Historic Manor",
    image: housePlaceholder7,

    rating: 4.9,
    price: 400,
    info: "Elegant manor with a rich history",
    mapAddress: "444 Heritage Lane, Historic City, Country",
  },
  {
    id: 8,
    name: "Treehouse Retreat",
    image: housePlaceholder8,

    rating: 4.4,
    price: 150,
    info: "Unique treehouse experience in the forest",
    mapAddress: "555 Tree Canopy Trail, Forest, Country",
  },
  {
    id: 9,
    name: "Ski Chalet",
    image: housePlaceholder1,

    rating: 4.6,
    price: 280,
    info: "Cozy chalet near the ski slopes",
    mapAddress: "666 Snowy Peak Road, Ski Village, Country",
  },
  {
    id: 10,
    name: "Desert Oasis",
    image: housePlaceholder2,

    rating: 4.7,
    price: 220,
    info: "Tranquil oasis in the desert",
    mapAddress: "777 Sandy Dunes Drive, Desert Town, Country",
  },
  // Add more room data as needed
];

export default roomsData;
