import { Card } from '@material-ui/core';
import React from 'react';

const Job = ({job}) => {
    console.log(job);
    return (
        <div className="col-md-4">
         <div className="card m-3" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{job.jobTitle}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>

       
        </div>
    );
};

export default Job;