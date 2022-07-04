const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');

const express = require('express');
const app = express();
const ket = fs.readFileSync(path.join(__dirname, 'certs/selfsigned.key'));
const cert = fs.readFileSync(path.join(__dirname, 'certs/selfsigned.crt'));
const opyions = {
    key: key,
    cert: cert
};

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'static/index.html'));
});