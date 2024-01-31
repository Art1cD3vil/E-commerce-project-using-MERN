import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// Then use it in your component:

const Login = () => {
    const [form,setForm]=useState({});
    const navigate = useNavigate();
    
    const handleForm=(e)=>{
       
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        const response= await fetch('http://localhost:8080/demo',{
            method:'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json();
        console.log(data);
        navigate('/boots');
    }
    const getUsers =async()=>{
        const response= await fetch('http://localhost:8080/demo',{
            method:'GET',
        })
        const data=await response.json();
        console.log(data);
    }
    
    useEffect(()=>{
        getUsers();
    },[])
    
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'white' }}>
            <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#ff758c' }}>Login</h2>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '6px', color: '#333' }}>Username</label>
                    <input type="text" name='username' onChange={handleForm} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '6px', color: '#333' }}>Password</label>
                    <input type="password" name='password' onChange={handleForm} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>
                <button type="submit" style={{ backgroundColor: '#ff758c', color: '#fff', padding: '12px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>Submit</button>

            </form>
        </div>
  )
}

export default Login