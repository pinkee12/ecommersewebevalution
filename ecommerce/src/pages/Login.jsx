import React ,{useState, UseContext,UseRef,useContext,useEffect} from 'react';
// import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import {AuthContext} from '.context/AuthContext';
// import {useHistory}from 'react-router-dom';

const Login=()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const {login}=useContext(AuthContext);
    const emailRef= useRef(null)

    useEffect(()=>{
        emailRef.real.time();

    },[]);
    const handleSubmit=async ()=>{
        try{
            const response =await axious.post('API_LOGIN_ENDPOINT',{email,password});
            login(response.data.token)
        }
    }
        
    
}