import { useState, useEffect } from 'react';

const BookedTickets = () => {
    const [bookedFlights, setBookedFlights] = useState([]);

    useEffect(() => {
        const storedFlights = JSON.parse(localStorage.getItem('bookedFlights')) || [];
        setBookedFlights(storedFlights);
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Booked Tickets</h1>

            {bookedFlights.length === 0 ? (
                <p>No booked tickets yet.</p>
            ) : (
                <ul>
                    {bookedFlights.map((flight, index) => (
                        <li key={index} className="mb-6 p-4 border rounded-lg shadow">
                            <p>Airline: {flight.airline}</p>
                            <p>From: {flight.from} To: {flight.to}</p>
                            <p>Departure Date: {flight.departureDate}</p>
                            <p>Return Date: {flight.returnDate}</p>
                            <p>Duration: {flight.duration}</p>
                            <p>Flight Type: {flight.type}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookedTickets;
