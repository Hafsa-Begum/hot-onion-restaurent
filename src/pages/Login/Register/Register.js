import React from 'react';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png'

const Register = () => {
    const { handleNameChange, handleEmailChange, handlePasswordChange, register, handleRegistration } = useAuth();
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className='form-container'>
                <div className='logo'><img className='w-50' src={logo} alt="" /></div>
                <form onSubmit={register}>
                    <div className="input-field">
                        <input onBlur={handleNameChange} type='text' required />
                        <label htmlFor="">Name</label>
                    </div>
                    <div className="input-field">
                        <input onBlur={handleEmailChange} type='email' required />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-field">
                        <input onBlur={handlePasswordChange} type="password" name="" id="" required />
                        {/* <span className='show'>SHOW</span> */}
                        <label htmlFor="">Password</label>
                    </div>
                    <div className="input-field">
                        <input onBlur={handlePasswordChange} type="password" name="" id="" required />
                        {/* <span className='show'>SHOW</span> */}
                        <label htmlFor="">Confirm Password</label>
                    </div>
                    <div className="input-field">
                        <input type="submit"
                            value="Register" />
                    </div>
                    {/* <div className="button">
                        <div className="inner"></div>
                        <button onClick={register} className=''>Register</button>

                    </div> */}
                </form>

            </div>
        </div>
    );
};

export default Register;