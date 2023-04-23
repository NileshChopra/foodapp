import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [Credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: Credentials.name,email: Credentials.email,password: Credentials.password,location: Credentials.geolocation})
        });
        const json= await response.json();
        console.log(json);
        if(!json.success){
            alert("Enter valid credentials!")
        }
    }
    const onChange = (event) => {
        setCredentials({ ...Credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">UserName</label>
                    <input type="text" className="form-control" name='name' value={Credentials.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={Credentials.email} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={Credentials.password} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" name='geolocation' value={Credentials.geolocation} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
            </form>
        </div>
        </>
    )
}
