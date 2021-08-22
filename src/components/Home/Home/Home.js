import React from 'react';
import AvailableJobs from '../AvailableJobs/AvailableJobs';
import NavBar from '../Header/NavBar/NavBar';
import SearchOption from '../Header/SearchOption/SearchOption';

const Home = () => {
    return (
        <div className="container">
            <NavBar></NavBar>
            <SearchOption></SearchOption>
            <AvailableJobs></AvailableJobs>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;