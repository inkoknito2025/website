const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Add JSON parsing middleware

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/reserve', (req, res) => {
    res.render('reserve');
});

app.get('/private-dining', (req, res) => {
    res.render('private-dining');
});

app.get('/weddings', (req, res) => {
    res.render('weddings');
});

app.get('/corporate', (req, res) => {
    res.render('corporate');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/reviews', (req, res) => {
    res.render('reviews');
});

app.get('/careers', (req, res) => {
    res.render('careers');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// API Routes for form submissions
app.post('/api/reserve', (req, res) => {
    // TODO: Implement reservation logic (database storage, email notifications, etc.)
    console.log('Reservation request received:', req.body);
    res.json({ success: true, message: 'Reservation request received' });
});

app.post('/api/contact', (req, res) => {
    // TODO: Implement contact form logic (email sending, database storage, etc.)
    console.log('Contact form submission received:', req.body);
    res.json({ success: true, message: 'Message received' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('404');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});