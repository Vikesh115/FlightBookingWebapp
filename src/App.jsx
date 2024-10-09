import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout'; 
import FlightSearch from './components/FlightSearch';
import FlightResults from './components/FlightResults';
import BookedTickets from './components/BookedTickets';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/search" element={<FlightSearch />} />
          <Route path="/results" element={<FlightResults />} />
          <Route path="/booked-tickets" element={<BookedTickets />} />
        </Route>
      </Routes>
    </Router>
  );
};


export default App;
