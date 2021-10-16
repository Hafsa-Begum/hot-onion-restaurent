import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero-image mb-5">
            <div className="hero-text">
                <h1>Best Food Waiting for Your Belly</h1>
                {/* <label htmlFor="">
                    <input className='' type="text" placeholder='Search your foods' />
                    <button className='search-btn'>Search</button>
                </label> */}
                <div className="input-group mb-3 ">
                    <label className='input-btn-label' htmlFor="">
                        <input type="text" className="form-control rounded-pill input-field" placeholder="Search your foods" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary rounded-pill search-button" type="button" id="button-addon2">Search</button>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Banner;