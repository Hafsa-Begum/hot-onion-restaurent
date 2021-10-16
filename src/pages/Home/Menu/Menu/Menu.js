import React, { useContext, useEffect, useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FoodContext } from '../../../../App';
import Breakfast from '../Breakfast/Breakfast';
import Category from '../Category/Category';
import './Menu.css'


const Menu = () => {
    const categories = useContext(FoodContext);
    const [filter, setFilter] = useState([]);

    const handleCategory = (category) => {
        const filteredCategory = categories.filter(food => food.category === category)
        setFilter(filteredCategory);
    }


    return (

        <div id='menu'>
            <div className='text-center'>
                <button onClick={() => handleCategory('breakfast')}>Breakfast</button>
                <button onClick={() => handleCategory('lunch')}>Lunch</button>
                <button onClick={() => handleCategory('dinner')}>Dinner</button>
            </div>
            <div className="row">
                {
                    filter.map(food => <Category
                        key={food.id}
                        category={food}
                    ></Category>)
                }
            </div>


            {/* <Breakfast></Breakfast> */}
            {/* <Lunch></Lunch>
            <Dinner></Dinner> */}

            {/* <Router>
            <Switch>
                <Route path='/breakfast'>
                    <Breakfast></Breakfast>
                </Route>
                <Route path='/lunch'>
                    <Lunch></Lunch>
                </Route>
                <Route path='/dinner'>
                    <Dinner></Dinner>
                </Route>
            </Switch>
        </Router> */}
        </div>


    );
};

export default Menu;