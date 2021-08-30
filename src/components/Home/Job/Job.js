import { Card } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Job = ({job}) => {
    console.log(job);
    const history=useHistory()

    const handleClick = (id) => {
        history.push('/orderService')
        sessionStorage.setItem('id', id); 
    }


    return (
        <div className="col-md-4">
         <div className="card m-3" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{job.name}</h5>
                <p className="card-text">{job.description}</p>
                <p className="card-text">{job.salary}</p>
                <p className="card-text">{job.requirement}</p>
                <button onClick={() =>{handleClick(job._id)}} className="btn btn-primary">Go somewhere</button>
            </div>
            </div>
        </div>
    );
};

export default Job;