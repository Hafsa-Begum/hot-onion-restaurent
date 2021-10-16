import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Category.css'

const Category = ({ category }) => {
    const { id, name, description, price, img } = category;

    return (
        <div className='col-md-4 px-3 text-center'>
            <NavLink style={{
                textDecoration: 'none',
                color: 'black'
            }} to={`/category/${id}`}>
                <div className='m-4 single-food'>
                    <div>
                        <img className='w-100 p-5' src={img} alt="" />
                    </div>
                    <h4 >{name}</h4>
                    <p>{description}</p>
                    <h3>${price}</h3>
                    {/* <Link to={`/category/${id}`}>
                    <button className='btn btn-warning'>Details</button>
                </Link> */}
                </div>
            </NavLink>
        </div>
    );
};

export default Category;