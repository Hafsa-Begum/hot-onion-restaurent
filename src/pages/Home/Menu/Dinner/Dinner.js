import React from 'react';
import { useState, useEffect } from 'react';
import Category from '../Category/Category';

const Dinner = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("./test.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='row px-5'>
            {
                categories.slice(12, 18).map(category => <Category key={category.id} category={category}></Category>)
            }

        </div>
    );
};

export default Dinner;
