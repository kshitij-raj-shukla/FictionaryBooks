import axios from 'axios';
import React, { useState } from 'react'

const AddBook = () => {
    const [Data, setData] = useState({
        url: "",
        title: "",
        author: "",
        price: "",
        desc: "",
        language: "",
    });
    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const change = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    };
    const submit =async()=>{
        try{
            if(
                Data.url === "" ||
                Data.title === "" ||
                Data.author === "" ||
                Data.price === "" ||
                Data.desc === "" ||
                Data.language === ""
            )