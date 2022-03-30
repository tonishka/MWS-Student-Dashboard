import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Subject from '../Subject/Subject';
import useToken from './useToken';


function App() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Subject" element={<Subject />} />
            </Routes>
        </div>
    );
}

export default App;