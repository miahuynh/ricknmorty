import React from 'react';

const SignUp = ({ handleSubmit }) => {
    return (
        <div>
            <form className="signUp">
                <label className="label">
                    First Name:  <input type="text" placeholder="firstName" id="firstName"/>
                </label>
                <label className="label">
                    Last Name:  <input type="text" placeholder="lastName" id="lastName"/>
                </label>
                <label className="label">
                    Username:  <input type="text" placeholder="username" id="username"/>
                </label>
                <label className="label">
                    Password:  <input type="password" placeholder="password" id="password"/>
                </label>
                <button type="button" onClick={handleSubmit} className="btn"> Submit</button>
            </form>
        </div>
    )
}





export default SignUp;