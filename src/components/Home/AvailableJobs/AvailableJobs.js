import React from 'react';
import Job from '../Job/Job';

const jobs=[
    {
        jobTitle:'Web Developer',
        type:'Part Time',
        sallary:30,
        author:'AKK'
    },
    {
        jobTitle:'Software Developer',
        type:'Part Time',
        sallary:50,
        author:'ROy'
    },
    {
        jobTitle:'Web Developer',
        type:'Full Time',
        sallary:80,
        author:'XYZ'
    }

]

const AvailableJobs = () => {
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