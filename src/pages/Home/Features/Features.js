import React from 'react';

const Features = () => {
    return (
        <div id='features' className='container mt-5' >
            <div className='text-start my-5'>
                <h1>Why you choose us?</h1>
                <p className='fs-4'>Barton waited twenty always repair in within we do. an delighter offending <br />  curiosity my dashwoods at. Boy prosperous increasing surrounded.</p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <img className='w-100' src="../../../images/Image/fast-delivery.png" alt="" />
                    </div>
                    <div>
                        <img className='w-100' src='../../../images/ICON/home-delivery.png' alt="" />
                        <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                    </div>
                    <div>
                        <button>See more</button>
                        <i className="fas fa-arrow-circle-right"></i>
                    </div>

                </div>
                <div className="col-md-4">
                    <div>
                        <img className='w-100' src="../../../images/Image/chef.png" alt="" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className='w-100' src="../../../images/Image/home-delivery.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;