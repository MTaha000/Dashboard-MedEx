const login = document.querySelector('#login');
login.addEventListener('click', showLogin)

const signup = document.querySelector('#signup');
signup.addEventListener('click', showSignup)

import {
    auth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from './firebaseAuth.js'

function showSignup() {
    document.getElementById('signup-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
}

function showLogin() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('signup-container').style.display = 'none';
}



const signupForm = document.getElementById('signup-form')
let userName;

signupForm.addEventListener('submit', async function (e) {
    e.preventDefault()

    userName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    await createUserWithEmailAndPassword(auth, email, password);

    window.location = './dashboard.html'

    // Simulate authentication
    if (email === '' && password === '') {
        alert('Invalid email or password')
    } else {
        alert('Logged in successfully!')
    }
})

const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', async function (e) {
    try {
        e.preventDefault()

        const email = e.target[0].value
        const password = e.target[1].value
    
        const result = await signInWithEmailAndPassword(auth, email, password);
    
        window.location = './dashboard.html'
    
        // Simulate authentication
        if (email === '' && password === '') {
            alert('Invalid email or password')
        } else {
            alert('Logged in successfully!')
        }
    } catch (error) {
        alert(error.message)
    }
   
})

export { userName }