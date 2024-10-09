import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FlightResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { from, to, departureDate, returnDate } = location.state || {};

    const [bookedFlights, setBookedFlights] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const availableFlights = [
        { id: 1, airline: 'Airline 1', type: 'Nonstop', duration: '5h 30m' },
        { id: 2, airline: 'Airline 2', type: '1 Stop', duration: '8h 45m' },
    ];

    useEffect(() => {
        const storedFlights = JSON.parse(localStorage.getItem('bookedFlights')) || [];
        setBookedFlights(storedFlights);
    }, []);

    const handleBookFlight = (flight) => {
        const newFlight = { ...flight, from, to, departureDate, returnDate };

        const updatedFlights = [...bookedFlights, newFlight];
        setBookedFlights(updatedFlights);

        localStorage.setItem('bookedFlights', JSON.stringify(updatedFlights));

        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    const handleViewBookedTickets = () => {
        navigate('/booked-tickets');
    };

    return (
        <div>
            <h2>Flight Results for {from} to {to}</h2>
            <ul>
                {availableFlights.map(flight => (
                    <li key={flight.id} className="mb-4">
                        <p>{flight.airline} - {flight.type} - {flight.duration}</p>
                        <button onClick={() => handleBookFlight(flight)} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Book Flight
                        </button>
                    </li>
                ))}
            </ul>

            {showPopup && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg">
                    Successfully booked your flight!
                </div>
            )}

            {bookedFlights.length > 0 && (
                <button onClick={handleViewBookedTickets} className="bg-gray-800 text-white px-4 py-2 rounded mt-6">
                    View Booked Tickets
                </button>
            )}
        </div>
    );
};

export default FlightResults;
