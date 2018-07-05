import React from 'react';

const SignUp = () => {
    return (
        <div className="signUp">
            <form onSubmit ={this.handleSubmit}>
                <label className="label">
                    Name: 
                </label>
                <input type="text" name="firstName" value='Name?'/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default Signup;