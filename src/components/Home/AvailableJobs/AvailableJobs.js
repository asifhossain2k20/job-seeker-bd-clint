import React from 'react';
import Job from '../Job/Job';
import { useEffect, useState } from 'react';


const AvailableJobs = () => {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/availableJobs')
        .then(res => res.json())
        .then(data=>{
            setJobs(data)
        })
    },[])
    console.log(jobs);
    return (
        <div>
            <h3 className="text-center">AvailableJobs</h3>
        <div className="d-flex m-5">
            <div className="row">
            {
                jobs.map(job =><Job job={job}></Job>)
            }    
            </div>
        </div>
        </div>
    );
};

export default AvailableJobs;