import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const airports = [
    {
        name: "Indira Gandhi International Airport",
        code: "DEL",
        city: "New Delhi",
        country: "India"
    },
    {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        code: "BOM",
        city: "Mumbai",
        country: "India"
    },
    {
        name: "John F. Kennedy International Airport",
        code: "JFK",
        city: "New York",
        country: "United States"
    },
    {
        name: "Dubai International Airport",
        code: "DXB",
        city: "Dubai",
        country: "United Arab Emirates"
    },
    {
        name: "Heathrow Airport",
        code: "LHR",
        city: "London",
        country: "United Kingdom"
    },
    {
        name: "Singapore Changi Airport",
        code: "SIN",
        city: "Singapore",
        country: "Singapore"
    },
    {
        name: "Los Angeles International Airport",
        code: "LAX",
        city: "Los Angeles",
        country: "United States"
    },
    {
        name: "Beijing Capital International Airport",
        code: "PEK",
        city: "Beijing",
        country: "China"
    },
    {
        name: "Sydney Kingsford Smith International Airport",
        code: "SYD",
        city: "Sydney",
        country: "Australia"
    },
    {
        name: "Tokyo Haneda Airport",
        code: "HND",
        city: "Tokyo",
        country: "Japan"
    }
];

const FlightSearch = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const today = new Date().toISOString().split('T')[0];

    const handleSearch = () => {
        if (from === to) {
            setError('From and To locations cannot be the same.');
            return;
        }

        if (!from || !to || !departureDate || !returnDate) {
            setError('Please fill in all fields.');
            return;
        }

        setError('');

        navigate('/results', {
            state: { from, to, departureDate, returnDate }
        });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Search Flights</h2>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <div className="mb-4">
                    <label htmlFor="from" className="block font-medium mb-2">From</label>
                    <select id="from" value={from} onChange={(e) => setFrom(e.target.value)} className="w-full p-2 border rounded">
                        <option value="">Select Airport</option>
                        {airports.map((airport) => (
                            <option key={airport.code} value={airport.code}>
                                {airport.city} ({airport.code})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="to" className="block font-medium mb-2">To</label>
                    <select id="to" value={to} onChange={(e) => setTo(e.target.value)} className="w-full p-2 border rounded">
                        <option value="">Select Airport</option>
                        {airports.map((airport) => (
                            <option key={airport.code} value={airport.code}>
                                {airport.city} ({airport.code})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="departureDate" className="block font-medium mb-2">Departure Date</label>
                    <input
                        type="date"
                        id="departureDate"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        min={today}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="returnDate" className="block font-medium mb-2">Return Date</label>
                    <input
                        type="date"
                        id="returnDate"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        min={departureDate || today}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <button onClick={handleSearch} className="bg-blue-500 text-white w-full p-2 rounded">Search Flights</button>
            </div>
        </div>
    );
};

export default FlightSearch;

