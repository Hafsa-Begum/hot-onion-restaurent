import React from 'react';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png';
import './SignIn.css';

const SignIn = () => {
    const { handleEmailChange, handlePasswordChange, SignInUsingEmailAndPassword, signInUsingGoogle } = useAuth();
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className='form-container'>
                <div className='logo'><img className='w-50' src={logo} alt="" /></div>
                <form onSubmit={SignInUsingEmailAndPassword}>
                    <div className="input-field">
                        <input onBlur={handleEmailChange} type='email' required />
                        <label htmlFor="">Email </label>
                    </div>
                    <div className="input-field">
                        <input onBlur={handlePasswordChange} type="password" name="" id="" required />
                        {/* <span className='show'>SHOW</span> */}
                        <label htmlFor="">Password</label>
                    </div>
                    <div className="input-field">
                        <input type="submit"
                            value="Login" />
                    </div>
                    {/* <div className="button">
                        <div className="inner"></div>
                        <button onClick={SignInUsingEmailAndPassword} className=''>Login</button>

                    </div> */}
                </form>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign in</button>
            </div>
        </div>
    );
};

export default SignIn;