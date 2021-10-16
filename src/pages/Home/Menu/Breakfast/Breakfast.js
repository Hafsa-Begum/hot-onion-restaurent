import React, { useContext, useEffect, useState } from 'react';
import { FoodContext } from '../../../../App'
import Category from '../Category/Category';


const Breakfast = () => {
    const categories = useContext(FoodContext)
    return (
        <div >
            <div className='row px-5'>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
            {/* <Details singleFood={singleFood}></Details> */}
        </div>
    );
};

export default Breakfast;