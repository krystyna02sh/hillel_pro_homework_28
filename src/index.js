"use strict"
import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.js';
const mainEl = document.querySelector('body')
const root = ReactDOM.createRoot(mainEl)
root.render(<App />)