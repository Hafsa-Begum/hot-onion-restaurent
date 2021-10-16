import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CartContext, FoodContext } from '../../../../App';

const Details = () => {
    const categories = useContext(FoodContext);
    const history = useHistory();
    //console.log(categories)
    const { foodId } = useParams();
    //console.log(foodId)

    const [cart, setCart] = useContext(CartContext);



    const selectedFood = categories.find(food => food.id === +foodId);
    //console.log(selectedFood.img);
    const addToCart = (food) => {
        let newCart = [...cart, food];
        setCart(newCart);
    }


    const handleGoBack = () => {
        history.push('/home');
    }
    return (
        <div>
            <div className='d-flex w-100'>


                <div className='d-flex justify-content-center align-items-center w-50'>
                    <div className='mx-5 px-5 text-start'>
                        <h2>{selectedFood?.name}</h2>
                        <p>Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.</p>
                        <h4>${selectedFood?.price}</h4>
                        <div>
                            <Link to='/cart'><button onClick={() => { addToCart(selectedFood) }} className="btn btn-danger mx-3">Add to Cart</button></Link>
                            <button onClick={handleGoBack} className="btn btn-warning mx-3">Go Back</button>
                        </div>
                    </div>
                </div>
                <div className='w-25 ms-5 ps-5'> <img className='w-100' src={selectedFood?.img} alt="" /></div>

            </div>

        </div>
    );
};

export default Details;