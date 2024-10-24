import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingForm = () => {
    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        password: '',
        destination: '',
        date: '',
        guests: '',
    });
    const changeHandler = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <center>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <label>Name</label>
                    <input type="text" name="name" onChange={changeHandler}></input>
                    <br/>
                    <br/>
                    <label>Email</label>
                    <input type="text" name="email" onChange={changeHandler}></input>
                    <br/><br/>
                    <label>Password</label>
                    <input type="password" name="password" onChange={changeHandler}></input>
                    <br/><br/>
                    <label>Destination</label>
                    <input type="text" name="destination" onChange={changeHandler}></input>
                    <br/><br/>
                    <label>Date</label>
                    <input type="date" name="date" onChange={changeHandler}></input>
                    <br/><br/>
                    <label>Number of Guests</label>
                    <input type="number" name="guests" onChange={changeHandler}></input>
                    <br/><br/>
                    <input type='submit' name='submit'>
                    </input>
                </form>
            </div>
        </center>
    );
};

export default BookingForm;
