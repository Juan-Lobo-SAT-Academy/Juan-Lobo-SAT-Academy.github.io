import { auth, sumarXP } from "./database.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { modulos } from "./content.js";

const titleEl = document.getElementById('lesson-title');
const contentEl = document.getElementById('lesson-content');
const btnComplete = document.getElementById('btn-complete');

// 1. Buscamos los datos en content.js usando el ID guardado
const idLeccion = localStorage.getItem('leccionActual');
const datosLeccion = modulos.find(m => m.id === idLeccion);

// 2. Si existe, pintamos el contenido AUTOMÁTICAMENTE
if (datosLeccion) {
    titleEl.innerText = datosLeccion.titulo;
    contentEl.innerHTML = datosLeccion.contenido; // <-- Aquí se alimenta de content.js
} else {
    contentEl.innerHTML = "<p>Error: No se encontró el contenido de la lección.</p>";
}

// 3. Lógica de guardado (se mantiene igual pero limpia)
onAuthStateChanged(auth, (user) => {
    if (user) {
        btnComplete.onclick = async () => {
            try {
                btnComplete.disabled = true;
                btnComplete.innerText = "⭐ ¡Nivelando!";
                
                await sumarXP(user.uid, datosLeccion.xp_recompensa);
                
                alert(`¡Excelente! Ganaste ${datosLeccion.xp_recompensa} XP`);
                window.location.href = "dashboard.html";
            } catch (error) {
                console.error("Error al guardar:", error);
                btnComplete.disabled = false;
            }
        };
    } else {
        window.location.href = "index.html";
    }
});