
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded shadow">
          <div className="container-fluid">
            <img src="/octofitapp-small.png" alt="Octofit Logo" className="App-logo" />
            <Link className="navbar-brand fw-bold text-white" to="/">Octofit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link text-white" to="/activities">Activities</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/teams">Teams</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/users">Users</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/workouts">Workouts</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Routes>
              <Route path="/activities" element={<Activities />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/users" element={<Users />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/" element={
                <div className="card text-center shadow">
                  <div className="card-body">
                    <h2 className="card-title display-5 mb-3">Welcome to Octofit Tracker!</h2>
                    <p className="card-text">Track your fitness activities, join teams, and compete on the leaderboard!</p>
                    <Link to="/activities" className="btn btn-success m-2">View Activities</Link>
                    <Link to="/leaderboard" className="btn btn-info m-2">Leaderboard</Link>
                  </div>
                </div>
              } />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
