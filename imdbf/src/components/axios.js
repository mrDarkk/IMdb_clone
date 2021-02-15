// import React from 'react';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://www.omdbapi.com/?i=tt3896198&apikey=b02bc0da'
})

instance.get('/data')

export default instance;  