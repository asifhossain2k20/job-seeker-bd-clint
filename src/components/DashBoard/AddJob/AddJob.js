import React from 'react';
import { useForm } from "react-hook-form";

const AddJob = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =data=>{
        const eventData={
            name:data.name,
            salary:data.salary,
            description:data.description,
            requirement:data.requirement
        }
        console.log(eventData);

        const url='http://localhost:5000/addJobs'
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(eventData)
        })
        .then(res=>{
            console.log('This is Response ',res);
            alert("Data Added SuccessFully");
        })
    }
    return (
        <div className="container d-flex justify-content-center border bg-light rounded">
         <form onSubmit={handleSubmit(onSubmit)}>
           <h4>Job Name   :</h4>
           <input name="name" type="text" placeholder="Enter Job Title" {...register("name")} />
           <h4>Job Description :</h4>
           <input name="description" cols="20" rows="10" type="text" placeholder="Enter Service Description"  {...register("description")} />
           <h4>Salary      :</h4>
           <input name="salary" type="number" {...register("salary")} placeholder="Enter Salary"/>
           <h4>Requirements  :</h4>
           <input name="requirement" type="text" {...register("requirement")} placeholder="Enter requirements"/>
           <br />
           <input className="btn btn-primary m-3"type="submit" />
           </form>
            
        </div>
    );
};

export default AddJob;