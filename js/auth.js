import { auth } from "./database.js"; // <--- Importas el auth ya configurado
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const btnLogin = document.getElementById('btn-login');
const btnRegister = document.getElementById('btn-register');

// --- FUNCIÓN PARA REGISTRAR (Crea el usuario en la nube) ---
btnRegister.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    if(email === "" || pass === "") {
        alert("Por favor, llena todos los campos");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        alert("¡Felicidades! Usuario creado exitosamente.");
        console.log("Usuario registrado:", userCredential.user);
    } catch (error) {
        console.error("Error al registrar:", error.code);
        alert("Error: " + error.message);
    }
});

// --- FUNCIÓN PARA LOGIN (Entrar si ya existe el usuario) ---
btnLogin.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    try {
        await signInWithEmailAndPassword(auth, email, pass);
        
        // ¡ESTO ES LO NUEVO! Redirige al alumno a la academia
        window.location.href = "dashboard.html"; 
        
    } catch (error) {
        console.error("Error de login:", error.code);
        alert("Acceso denegado. Revisa tus credenciales.");
    }
});