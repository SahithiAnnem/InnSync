import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for accessing route parameters
import { Button } from 'react-bootstrap';

function Bookingscreen() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [room, setRoom] = useState();
    const { roomid } = useParams(); // Accessing roomid from route parameters

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.post('/api/rooms/getroombyid', { roomid });
                setRoom(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='m-5'>
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error...</h1>
            ) : (
                <div>
                    <div className="row justify-content-center mt-5 bs"> {/* Fix: className instead of classname */}
                        <div className="col-md-6"> {/* Fix: className instead of classname */}
                            <h1>{room.name}</h1>
                            <img src={room.imageurls[0]} className="bigimg" /> {/* Fix: className instead of classname */}
                        </div>
                        <div className="col-md-6"> {/* Fix: className instead of classname */}
                            <div style={{ textAlign: 'right' }}>
                                <h1>Booking Details</h1>
                                <hr />
                                <b>
                                    <p>Name : </p>
                                    <p>From Date :</p>
                                    <p>To Date : </p>
                                    <p>Max Count : {room.maxPersons}</p>
                                </b>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <b>
                                    <h1>Amount</h1>
                                    <hr />
                                    <h1>Total days : </h1>
                                    <h1>Rent per day : {room.rentperday}</h1>
                                    <h1> Total Amount : </h1>
                                </b>
                            </div>
                            <div style={{ float: 'right' }}>
                                <button className="btn btn-primary"> Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Bookingscreen;
