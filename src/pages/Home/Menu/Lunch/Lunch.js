import React, { useEffect } from 'react';
import { useState } from 'react';
import Category from '../Category/Category';


const Lunch = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("./test.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='row px-5'>
            {
                categories.slice(6, 12).map(category => <Category key={category.id} category={category}></Category>)
            }

        </div>
    );
};

export default Lunch;