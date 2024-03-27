import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';

function HomeScreen() {

    const [rooms, setrooms] = useState([])
    const [loading, setloading] = useState()
    const [error, seterror] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true)
                const data = (await axios.get('/api/rooms/getallrooms')).data;
                setrooms(data)
                setloading(false)

            } catch (error) {
                seterror(true)
                console.log(error)
                setloading(false)
            }
        };

        fetchData(); // Call the inner async function
    }, []);

    return (
        <div classname="container">
            <div classname="row justify-cintent-center mt-5">

                {
                    loading ? (
                        <h1>Loading..</h1>
                    ) : error ? (
                        <h1>Error</h1>
                    ) : (
                        rooms.map(room => (
                             <div className="col-md-9 mt-2" key={room.id}>
                                <Room room={room} />
                            </div>
                        ))
                    )
                }

            </div>


        </div>
    )

}

export default HomeScreen;
