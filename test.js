//[import React, { useEffect, useState } from 'react';
// import Kategory from '../Kategory/Kategory';
// import Menulists from '../Menulists/Menulists';


// const Menu = () => {
//     const [foods, setFoods] = useState([]);
//     const [activeCategory, setActiveCategory] = useState('');


//     const allCategories = ['all', ...new Set(foods.map(food => food.category))];

//     const [categories, setCategories] = useState(allCategories);
//     console.log(categories)
//     const filterFoods = (category) => {
//         setActiveCategory(category);
//         if (category === "all") {
//             setFoods(foods);
//             return;
//         }
//         const newFoods = foods.filter(food => food.category === category);
//         setCategories(newFoods);
//         console.log(newFoods);
//     }

//     useEffect(() => {
//         fetch("./test.json")
//             .then(res => res.json())
//             .then(data => setFoods(data))
//     }, [])
//     return (
//         <div>
//             <Kategory categories={categories} activeCategory={activeCategory} filterFoods={filterFoods}></Kategory>
//             <div className="row">
//                 {
//                     foods.map(food => <Menulists food={food}></Menulists>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Menu;



// import React from 'react';

// const Menulists = ({ food }) => {
//     const { name, description, price, img } = food;
//     //console.log(name)
//     return (
//         <div className='col-md-4 px-3'>
//             <div>
//                 <img className='w-100' src={img} alt="" />
//             </div>
//             <h4>{name}</h4>
//             <p>{description}</p>
//             <h2>Price: ${price}</h2>
//         </div>
//     );
// };

// export default Menulists;
{
    "id": 1,
        "name": "Bagel and cream cheese",
            "description": "How we dream about our future",
                "price": "6.99",
                    "category": "breakfast",
                        "img": "./public/images/Breakfast/breakfast1.png"
},
{
    "id": 2,
        "name": "Breakfast Sandwich",
            "description": "How we dream about our future",
                "price": "9.99",
                    "category": "breakfast"
},
{
    "id": 3,
        "name": "Baked Chicken",
            "description": "How we dream about our future",
                "price": "23.99",
                    "category": "breakfast"
},
{
    "id": 4,
        "name": "Eggs Benedict",
            "description": "How we dream about our future",
                "price": "8.99",
                    "category": "breakfast"
},
{
    "id": 5,
        "name": "Toast Croissant Fried Egg",
            "description": "How we dream about our future",
                "price": "19.99",
                    "category": "breakfast"
},
{
    "id": 6,
        "name": "Full Breakfast Fried Egg Toast Brunch",
            "description": "How we dream about our future",
                "price": "3.99",
                    "category": "breakfast"
},
{
    "id": 7,
        "name": "Healthy Meal Plan",
            "description": "How we dream about our future",
                "price": "23.99",
                    "category": "lunch"
},
{
    "id": 8,
        "name": "Fried Chicken Bento",
            "description": "How we dream about our future",
                "price": "9.99",
                    "category": "lunch"
},
{
    "id": 9,
        "name": "Terragon-Rubbed-Salmon",
            "description": "How we dream about our future",
                "price": "6.99",
                    "category": "lunch"
},
{
    "id": 10,
        "name": "Indian lunch",
            "description": "How we dream about our future",
                "price": "8.99",
                    "category": "lunch"
},
{
    "id": 11,
        "name": "Beef Steak",
            "description": "How we dream about our future",
                "price": "15.99",
                    "category": "lunch"
},
{
    "id": 12,
        "name": "Honey-Soy-Glazed Salmon with Peppers",
            "description": "How we dream about our future",
                "price": "7.99",
                    "category": "lunch"
},
{
    "id": 13,
        "name": "Salmon with Grapefruit and Lentil Salad",
            "description": "How we dream about our future",
                "price": "9.99",
                    "category": "dinner"
},
{
    "id": 14,
        "name": "Lemony Salmon Piccata",
            "description": "How we dream about our future",
                "price": "10.99",
                    "category": "dinner"
},
{
    "id": 15,
        "name": "Pork Tenderloin with Quinoa Pilaf",
            "description": "How we dream about our future",
                "price": "12.99",
                    "category": "dinner"
},
{
    "id": 16,
        "name": "French Fries with Cheese",
            "description": "How we dream about our future",
                "price": "8.99",
                    "category": "dinner"
},
{
    "id": 17,
        "name": "Garlic Baked Salmon",
            "description": "How we dream about our future",
                "price": "6.99",
                    "category": "dinner"
},
{
    "id": 18,
        "name": "Baked Chicken",
            "description": "How we dream about our future",
                "price": "9.99",
                    "category": "dinner"
}
]