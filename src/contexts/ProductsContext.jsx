import { createContext, useState } from "react";
import Product1_1 from "../assets/img/products/1.jpg";
import Product1_2 from "../assets/img/products/otherProducts/armchair1.jpg";
import Product1_3 from "../assets/img/products/otherProducts/armchair2.jpg";
import Product2_1 from "../assets/img/products/2.jpg";
import Product2_2 from "../assets/img/products/otherProducts/toaster1.jpg";
import Product2_3 from "../assets/img/products/otherProducts/toaster2.jpg";
import Product3_1 from "../assets/img/products/3.png";
import Product3_2 from "../assets/img/products/otherProducts/lamp1.webp";
import Product3_3 from "../assets/img/products/otherProducts/lamp2.webp";
import Product4_1 from "../assets/img/products/4.jpg";
import Product4_2 from "../assets/img/products/otherProducts/pulpunit1.jpg";
import Product4_3 from "../assets/img/products/otherProducts/pulpunit2.jpg";
import Product5_1 from "../assets/img/products/5.jpg";
import Product5_2 from "../assets/img/products/otherProducts/moderngold1.webp";
import Product5_3 from "../assets/img/products/otherProducts/moderngold2.webp";
import Product6_1 from "../assets/img/products/6.jpg";
import Product6_2 from "../assets/img/products/otherProducts/bodyoil1.jpg";
import Product6_3 from "../assets/img/products/otherProducts/bodyoil2.jpg";
import Product7_1 from "../assets/img/products/7.jpg";
import Product7_2 from "../assets/img/products/otherProducts/blackandwhite1.webp";
import Product7_3 from "../assets/img/products/otherProducts/blackandwhite2.webp";
import Product8_1 from "../assets/img/products/8.jpg";
import Product8_2 from "../assets/img/products/otherProducts/shelf1.webp";
import Product8_3 from "../assets/img/products/otherProducts/shelf2.webp";
import Product9_1 from "../assets/img/products/9.png";
import Product9_2 from "../assets/img/products/otherProducts/vase1.webp";
import Product9_3 from "../assets/img/products/otherProducts/vase2.webp";
import Product10_1 from "../assets/img/products/10.jpg";
import Product10_2 from "../assets/img/products/otherProducts/chairboom1.webp";
import Product10_3 from "../assets/img/products/otherProducts/chairboom2.webp";
import Product11_1 from "../assets/img/products/11.jpg";
import Product11_2 from "../assets/img/products/otherProducts/blacklamp1.webp";
import Product11_3 from "../assets/img/products/otherProducts/blacklamp2.jpg";
import Product12_1 from "../assets/img/products/12.png";
import Product12_2 from "../assets/img/products/otherProducts/goldenlamp1.webp";
import Product12_3 from "../assets/img/products/otherProducts/goldenlamp2.webp";
import Product13_1 from "../assets/img/products/13.jpg";
import Product13_2 from "../assets/img/products/otherProducts/cotton1.jpg";
import Product13_3 from "../assets/img/products/otherProducts/cotton2.jpg";
import Product14_1 from "../assets/img/products/14.png";
import Product14_2 from "../assets/img/products/otherProducts/woodchair1.webp";
import Product14_3 from "../assets/img/products/otherProducts/woodchair2.webp";
import Product15_1 from "../assets/img/products/15.jpg";
import Product15_2 from "../assets/img/products/otherProducts/copenhagen1.webp";
import Product15_3 from "../assets/img/products/otherProducts/copenhagen2.webp";
import Product16_1 from "../assets/img/products/16.jpg";
import Product16_2 from "../assets/img/products/otherProducts/cam1.webp";
import Product16_3 from "../assets/img/products/otherProducts/cam2.jpg";
import Product17_1 from "../assets/img/products/17.png";
import Product17_2 from "../assets/img/products/otherProducts/tablelamp1.webp";
import Product17_3 from "../assets/img/products/otherProducts/tablelamp2.webp";
import Product18_1 from "../assets/img/products/18.png";
import Product18_2 from "../assets/img/products/otherProducts/mat1.webp";
import Product18_3 from "../assets/img/products/otherProducts/mat2.webp";
import Product19_1 from "../assets/img/products/19.jpg";
import Product19_2 from "../assets/img/products/otherProducts/comfy1.webp";
import Product19_3 from "../assets/img/products/otherProducts/comfy2.webp";
import Product20_1 from "../assets/img/products/20.jpg";
import Product20_2 from "../assets/img/products/otherProducts/bodyoil1.jpg";
import Product20_3 from "../assets/img/products/otherProducts/bodyoil2.jpg";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Little Armchair Sheepskin",
      category: "Chairs",
      price: 3500,
      image: Product1_1,
      otherImages: [Product1_2, Product1_3],
      description:
        "Tradition Little Petra VB1 Armchair Sheepskin Moonlight/ Walnut/ Brass Limited Edition | We give you a special discount when you put this product in the basket.",
      texture: "Sheep Skin",
      weight: "15 kg",
      size: "150cm x 70cm",
      isMostPopular: true,
      isTrendingNow: false,
    },
    {
      id: 2,
      name: "Pop-Up Toaster",
      category: "Kitchen",
      price: 1000,
      image: Product2_1,
      otherImages: [Product2_2, Product2_3],
      description:
        "The rounded square design of the toaster allows it to fit neatly against a wall, or inside a corner. Excellent at defrosting, and with the perfect breadtoheater distance to give crunchy toast with a soft, spongey middle.",
      texture: "Plastic",
      weight: "3.5 kg",
      size: "20cm x 10cm",
      isMostPopular: true,
      isTrendingNow: true,
    },
    {
      id: 3,
      name: "Lamp Light Blue",
      category: "Lamps",
      price: 800,
      image: Product3_1,
      otherImages: [Product3_2, Product3_3],
      description:
        "The Verner Panton Flowerpot , designed in 1968, was originally intended for the restaurant industry and Verner Panton exhibitions.",
      texture: "Plastic",
      weight: "2 kg",
      size: "15cm x 15cm",
      isMostPopular: false,
      isTrendingNow: false,
    },
    {
      id: 4,
      name: "Pulp Unit - 5 Compartments",
      category: "Furniture",
      price: 1500,
      image: Product4_1,
      otherImages: [Product4_2, Product4_3],
      description:
        "Pulp Units are lightweight and durable, and can be used horizontally or vertically. Designed with A4 paper in mind, MUJI angle files and ring binders fit neatly inside.",
      texture: "Wood",
      weight: "45 kg",
      size: "250cm x 60cm",
      isMostPopular: false,
      isTrendingNow: false,
    },
    {
      id: 5,
      name: "Golden Modern Light",
      category: "Lamps",
      price: 1200,
      image: Product5_1,
      otherImages: [Product5_2, Product5_3],
      description:
        "Tom Dixon and FRONT have created an incredibly beautiful pendant, in a completely unique design. The lamp is made using a special metallization technology that makes the look completely unique. The first of its kind. the lamp is transparent when its on and you can see the exciting play of colors.",
      texture: "Plastic",
      weight: "3 kg",
      size: "20cm x 20cm",
      isMostPopular: false,
      isTrendingNow: true,
    },
    {
      id: 6,
      name: "Body Oil 200ml",
      category: "Skin Care",
      price: 500,
      image: Product6_1,
      otherImages: [Product6_2, Product6_3],
      description:
        "Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water",
      texture: "Liquid",
      weight: "200 ml",
      size: "10cm x 5cm",
      isMostPopular: true,
      isTrendingNow: false,
    },
    {
      id: 7,
      name: "Black and White Lamp",
      category: "Lamps",
      price: 1200,
      image: Product7_1,
      otherImages: [Product7_2, Product7_3],
      description:
        "Concept: Dot is inspired by perforated metal and the patterns that light creates when it shines through the small holes. The contrast between the coarse perforated metal and the smooth opal glass makes the Dot a simple and meaningful pendant. With its elegant expression, Shine, whether the light is on or off.",

      texture: "Plastic",
      weight: "6 kg",
      size: "20cm x 20cm",
      isMostPopular: false,
      isTrendingNow: true,
    },
    {
      id: 8,
      name: "Gejst Shelf A Black Ash/Black",
      category: "Furniture",
      price: 700,
      image: Product8_1,
      otherImages: [Product8_2, Product8_3],
      description:
        "Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf.",
      texture: "Wood",
      weight: "10 kg",
      size: "60cm x 20cm",
      isMostPopular: false,
      isTrendingNow: false,
    },
    {
      id: 9,
      name: "Cube Lolo Vase Black",
      category: "Furniture",
      price: 500,
      image: Product9_1,
      otherImages: [Product9_2, Product9_3],
      description:
        "Kubus Vase Lolo was originally designed by Søren Lassen in 2014, but was launched in connection with by Lassens 10 year anniversary 2018. The vase is a natural and sought-after extension of the series, which already counts the Kubus candlesticks and Kubus Bowl Bowl. Set it alone or in a still life, fill it with airy, colorful flowers for a feminine look or leave it alone in all its simplicity and precision.",
      texture: "Ceramic",
      weight: "2 kg",
      size: "45cm x 15cm",
      isMostPopular: true,
      isTrendingNow: true,
    },
    {
      id: 10,
      name: "Traditional Armchair",
      category: "Chairs",
      price: 600,
      image: Product10_1,
      otherImages: [Product10_2, Product10_3],
      description:
        "Concept: &Tradition's Boomerang lounge chair is a classic Danish design with a modern and minimalist expression. The chair was designed by Hvidt & Mølgaard in 1956, and with its stylish cushions and hand-polished wooden frame, it is an ideal Nordic design that gives a personal mark to the home.",
      texture: "Wood",
      weight: "2.5 kg",
      size: "60cm x 40cm",
      isMostPopular: false,
      isTrendingNow: false,
    },
    {
      id: 11,
      name: "The Sun Pendant Black",
      category: "Lamps",
      price: 1200,
      image: Product11_1,
      otherImages: [Product11_2, Product11_3],
      description:
        "The Here Comes The Sun pendant designed by Bertrand Balas is a quality lamp with a unique and magical look. The Here Comes The Sun series has a fantastic expression and especially swhen turned on it creates a very special atmosphere in the room it hangs in. The lamp fits perfectly above both dining room table, kitchen counter, and as living room lighting .",
      texture: "Plastic",
      weight: "3 kg",
      size: "20cm x 20cm",
      isMostPopular: true,
      isTrendingNow: true,
    },
    {
      id: 12,
      name: "Simple Golden Lamp",
      category: "Lamps",
      price: 1200,
      image: Product12_1,
      otherImages: [Product12_2, Product12_3],
      description:
        "Verner Panton Flowerpot, designed in 1968, was originally meant for the hospitality industry and Verner Panton displays and showrooms. The lamp then became popular in private homes, and due to its stylish design and many colour choices, it has made a major comeback in recent years.",
      texture: "Plastic",
      weight: "3 kg",
      size: "15cm x 15cm",
      isMostPopular: false,
      isTrendingNow: false,
    },
    {
      id: 13,
      name: "Unbleached Cotton Pads",
      category: "Skin Care",
      price: 100,
      image: Product13_1,
      otherImages: [Product13_2, Product13_3],
      description:
        "Cotton pads made from soft, unbleached cotton. These are made in Japan and made from 100% cotton.",
      texture: "Cotton",
      weight: "100 g",
      size: "10cm x 10cm",
      isMostPopular: false,
      isTrendingNow: false,
    },
    {
      id: 14,
      name: "Oak Spanish Chair",
      category: "Chairs",
      price: 1200,
      image: Product14_1,
      otherImages: [Product14_2, Product14_3],
      description:
        "When talking about Børge Mogensen, The Spanish Chair is probably one of the first designs you would think of, which makes good sense as it is also one of his most recognized products around the world.",
      texture: "Wood",
      weight: "3 kg",
      size: "60cm x 60cm",
      isMostPopular: false,
      isTrendingNow: false,
    },
    {
      id: 15,
      name: "Copenhagen Armchair",
      category: "Chairs",
      price: 1200,
      image: Product15_1,
      otherImages: [Product15_2, Product15_3],
      description:
        "The Hyg series by Danish Normann Copenhagen is a series of chairs based on the Danish word Hygge. The designer Simon Legald has tried to embody the meaning of the word around security, warmth and convenience in a furniture series. This is expression in the fine organic shapes and hearty curves that provide a high degree of sitting comfort and well-being in the chairs.",
      texture: "Wood",
      weight: "3 kg",
      size: "60cm x 40cm",
      isMostPopular: false,
      isTrendingNow: true,
    },
    {
      id: 16,
      name: "Anti Dark Light",
      category: "Electronics",
      price: 500,
      image: Product16_1,
      otherImages: [Product16_2, Product16_3],
      description:
        "Easy Mini W75 from Antidark lives fully up to its name. Simple design, comfortable light, easy to adjust. The Easy Wall Light has made it easy for the user to handle, well, everything! The Easy lamp can turn 360 degrees and be tipped. An ideal lamp that can be placed in connection with other lamps to achieve light in all corners of the room. Furthermore, the lamp can work as a wall light or ceiling",
      texture: "Metal",
      weight: "1 kg",
      size: "15cm x 10cm",
      isMostPopular: true,
      isTrendingNow: true,
    },
    {
      id: 17,
      name: "Table Lamp",
      category: "Lamps",
      price: 500,
      image: Product17_1,
      otherImages: [Product17_2, Product17_3],
      description:
        "The lamp has also become popular in private homes and has especially made a comeback in recent years. This is not least due to the lamp's stylish design and the many color options that make it fit everywhere.",
      texture: "Metal",
      weight: "1 kg",
      size: "120cm x 40cm",
      isMostPopular: false,
      isTrendingNow: false,
    },
    {
      id: 18,
      name: "Mat Black Lamp",
      category: "Lamps",
      price: 500,
      image: Product18_1,
      otherImages: [Product18_2, Product18_3],
      description:
        "Unique offer We give you a special discount when you put this product in the basket. *Only applies to specific products.",
      texture: "Metal",
      weight: "1 kg",
      size: "15cm x 10cm",
      isMostPopular: true,
      isTrendingNow: false,
    },
    {
      id: 19,
      name: "Comfy Chair",
      category: "Chairs",
      price: 2500,
      image: Product19_1,
      otherImages: [Product19_2, Product19_3],
      description:
        "Sum is a series designed by the Danish designer Simon Legald, who is the epitome of modern elegance. Elegant and resolute as the tip of a wing, the armrests spread out invitingly, as if they want to embrace you in the armchair's soft, homely space.",
      texture: "Comfy Chair",
      weight: "3 kg",
      size: "60cm x 40cm",
      isMostPopular: true,
      isTrendingNow: false,
    },
    {
      id: 20,
      name: "Body Oil 50ml",
      category: "Skin Care",
      price: 100,
      image: Product20_1,
      otherImages: [Product20_2, Product20_3],
      description:
        "Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water.",
      texture: "Liquid",
      weight: "50 ml",
      size: "10cm x 5cm",
      isMostPopular: false,
      isTrendingNow: true,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider };
export default ProductsContext;
