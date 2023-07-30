// inital data - dynamic data strutre works
import menHero from "../public/Mens/menHero.jpg";
import womenHero from "../public/Womens/womenHero.jpg";
import kidHero from "../public/Kids/kidHero.jpg";
import eyeglasses from "../public/Mens/eyeglasses.jpg"
import overcoat from "../public/Mens/overcoat.jpg"
import sneaker from "../public/Mens/sneaker.jpg"
import tie from "../public/Mens/tie.jpg"

export const initalCrousel = [
  { idx: 1, img: menHero, title: "Men's" },
  { idx: 2, img: womenHero, title: "Women's" },
  { idx: 3, img: kidHero, title: "Kid's" },

];


export const initalState = [
  { idx: 1, pos: 1, text: "1", active: true ,img: eyeglasses,type: "Accessories" , name: "Police" , price: "$1500"},
  { idx: 2, pos: 2, text: "2", active: true ,img: overcoat,type: "Cloths" , name: "Grad" , price: "$10" },
  { idx: 3, pos: 3, text: "3", active: true ,img: sneaker,type: "Shoes" , name: "Nike" , price: "$500" },
  { idx: 4, pos: 4, text: "4", active: false ,img: tie,type: "Accessories" , name: "Grad" , price: "$1500" },
  
];
