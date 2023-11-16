// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function MyForm(props) {
    var [u_name,set_u_name] = useState(""); 
    var [u_age,set_u_age] = useState(""); 
    var [u_city,set_u_city] = useState(""); 
    var [u_seat,set_u_seat] = useState(""); 

    function form_submit(e){
        e.preventDefault();
        var my_post_body = { user_name: u_name, user_age: u_age, user_city: u_city, user_seat: u_seat }
        // make request
        fetch("http://localhost:8082/data", {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(my_post_body),
        })
    }
  return (
    <div className="row box">
        <div className='col-md-12'>
            <h3>BOOK YOUR SEAT FOR A FLIGHT TO MARS</h3>
            <br></br>
            <form onSubmit={event => form_submit(event)}>
                <label>Name:</label><br/>
                <input id='user_name' type='text'  value={u_name} onChange={(event) => set_u_name(event.target.value)} /><br/>
                <label >age:</label><br/>
                <input id='user_age' type='number' value={u_age} onChange={(event) => set_u_age(event.target.value)} /><br/>
                <label >city:</label><br/>
                <input id='user_city' type='text' value={u_city} onChange={(event) => set_u_city(event.target.value)} /><br/>
                <label >Seats:</label><br/>
                <input id='user_seat' type='text' value={u_seat} onChange={(event) => set_u_seat(event.target.value)} /><br/><br/>
                <input type='submit' />
            </form>
        </div>
        {/* <p>The data you submitted is: {u_name} + {u_age} + {u_city}</p> */}
    </div>
  );
}

export default MyForm;