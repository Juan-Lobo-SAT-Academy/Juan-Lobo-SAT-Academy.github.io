import { auth, cargarPerfil } from "./database.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { modulos } from "./content.js";

const userNameDisplay = document.getElementById('user-display-name');
const userXPDisplay = document.getElementById('user-xp');
const userLevelDisplay = document.getElementById('user-level');
const xpFill = document.getElementById('xp-fill');
const btnLogout = document.getElementById('btn-logout');
const modulesGrid = document.getElementById('modules-grid');

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const perfil = await cargarPerfil(user.uid, user.email);
        
        // --- LÓGICA DE GAMIFICACIÓN ---
        const xpPorNivel = 500;
        const nivelCalculado = Math.floor(perfil.xp / xpPorNivel) + 1;
        const xpEnNivelActual = perfil.xp % xpPorNivel;
        const porcentaje = (xpEnNivelActual / xpPorNivel) * 100;

        // Actualizar Interfaz
        userNameDisplay.innerText = user.email.split('@')[0].toUpperCase();
        userXPDisplay.innerText = `${perfil.xp} XP`;
        userLevelDisplay.innerText = nivelCalculado;
        xpFill.style.width = `${porcentaje}%`;

        // Pintar Módulos
        modulesGrid.innerHTML = "";
        modulos.forEach(modulo => {
            const card = document.createElement('div');
            card.className = "module-card";
            card.innerHTML = `
                <div class="card-icon">${modulo.icono}</div>
                <h3>${modulo.titulo}</h3>
                <p>${modulo.descripcion}</p>
                <button class="btn-start" data-id="${modulo.id}">Iniciar +${modulo.xp_recompensa} XP</button>
            `;
            modulesGrid.appendChild(card);
        });
    } else {
        window.location.href = "index.html";
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-start')) {
        localStorage.setItem('leccionActual', e.target.getAttribute('data-id'));
        window.location.href = "leccion.html";
    }
});

btnLogout.onclick = () => signOut(auth);