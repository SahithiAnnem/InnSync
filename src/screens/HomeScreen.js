import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';

function HomeScreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = (await axios.get('/api/rooms/getallrooms')).data;
                console.log(data);

                // Check if data is an object before converting it into an array
                if (typeof data === 'object' && data !== null) {
                    const roomsArray = Object.values(data);
                    console.log(roomsArray);
                    setRooms(roomsArray);
                } else {
                    // Handle the case where data is not an object
                    console.log('Data is not an object:', data);
                }

                setLoading(false);
            } catch (error) {
                setError(true);
                console.log(error);
                setLoading(false);
            }
        };

        fetchData(); // Call the inner async function
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                {loading ? (
                    <h1>Loading..</h1>
                ) : error ? (
                    <h1>Error</h1>
                ) : (
                    rooms.map(room => (
                        <div className="col-md-9 mt-2" key={room.id}>
                            <Room room={room} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default HomeScreen;
