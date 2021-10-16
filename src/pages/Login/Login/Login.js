import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Register from '../Register/Register';
import SignIn from '../SignIn/SignIn';

const Login = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    return (
        <div className=''>
            {/* <Form></Form> */}

            <div className="mx-5 form-design">
                {isLoggedIn ? <SignIn></SignIn> : <Register></Register>}

                {isLoggedIn ?
                    <p onClick={() => setIsLoggedIn(false)}>Are you new? Please Register...</p> :
                    <p onClick={() => setIsLoggedIn(true)}>Already have an account?</p>
                }
            </div>


        </div>
    );
};

export default Login;