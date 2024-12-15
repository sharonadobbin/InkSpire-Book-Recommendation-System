const books = [
    { title: "The Hobbit", genre: "Fantasy", author: "J.R.R. Tolkien", cover: "images/hobbit.jpg" },
    { title: "Sherlock Holmes", genre: "Mystery", author: "Arthur Conan Doyle", cover: "images/sherlock.jpg" },
    { title: "Dune", genre: "Sci-Fi", author: "Frank Herbert", cover: "images/dune.jpg" },
    { title: "Pride and Prejudice", genre: "Romance", author: "Jane Austen", cover: "images/pride.jpg" },
];

const genres = ["Fantasy", "Mystery", "Sci-Fi", "Romance"];

$(document).ready(function () {
    // Load Featured Books
    const bookGrid = $("#book-grid");
    books.forEach(book => {
        bookGrid.append(`
            <div class="book-card">
                <img src="${book.cover}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
            </div>
        `);
    });

    // Load Genre Buttons
    const genreButtons = $(".genre-buttons");
    genres.forEach(genre => {
        genreButtons.append(`<button class="genre-btn">${genre}</button>`);
    });
});

// scripts.js

// Dummy data for login simulation
const users = [
    { username: 'John Doe', email: 'johndoe@example.com', password: 'password123', aboutMe: 'I love reading fantasy and mystery books!' }
];

// Handle login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Find the user based on email (simulating login check)
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'profile.html';
    } else {
        alert('Invalid email or password');
    }
});

// Handle profile display after login
window.onload = function () {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (user) {
        document.getElementById('username').textContent = user.username;
        document.getElementById('about-me').textContent = user.aboutMe;
        // You can also populate the books list dynamically here
    } else {
        window.location.href = 'login.html';
    }
};

// Check if the user is logged in when visiting the profile page
window.onload = function () {
    // Check if the user is logged in by checking the localStorage
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    // Get the profile link
    const profileLink = document.getElementById('profile-link');

    // If the user is not logged in, redirect the profile link to the login page
    if (!user) {
        profileLink.href = 'login.html';
    } else {
        // If the user is logged in, set the correct href for the profile page
        profileLink.href = 'profile.html';
    }
};

// For the login page, we also need to handle the redirection
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Find the user based on email (simulating login check)
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Store user data in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        // Redirect to the profile page after login
        window.location.href = 'profile.html';
    } else {
        alert('Invalid email or password');
    }
});

document.getElementById('search-button').addEventListener('click', function () {
    // Get the search input value
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();

    // Get all book titles
    const books = document.querySelectorAll('.book-card');

    // Loop through books and show/hide based on search
    books.forEach(book => {
        const title = book.querySelector('.book-title').textContent.toLowerCase();

        if (title.includes(searchTerm)) {
            book.style.display = 'block'; // Show matching book
        } else {
            book.style.display = 'none'; // Hide non-matching book
        }
    });
});

document.getElementById('search-bar').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click(); // Trigger search
    }
});

if (title.includes(searchTerm)) {
    book.classList.remove('hidden');
} else {
    book.classList.add('hidden');
}
