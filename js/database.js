import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBOfOkP5mmOt5sdqa0T75Ls0FRpQkP8i4E",
    authDomain: "sat-academy-d91e6.firebaseapp.com",
    projectId: "sat-academy-d91e6",
    storageBucket: "sat-academy-d91e6.firebasestorage.app",
    messagingSenderId: "141303844951",
    appId: "1:141303844951:web:706f09c9926cc6a8ee5312"
};

// Inicializamos una sola vez
const app = initializeApp(firebaseConfig);

// Exportamos las instancias para que otros archivos las usen
export const auth = getAuth(app);
export const db = getFirestore(app);

// Tu función de perfil (mantenla igual)
export async function cargarPerfil(uid, email) {
    const docRef = doc(db, "estudiantes", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        const nuevoPerfil = {
            correo: email,
            xp: 0,
            nivel: 1,
            logros: []
        };
        await setDoc(docRef, nuevoPerfil);
        return nuevoPerfil;
    }
}

// Función para sumar puntos al usuario
export async function sumarXP(uid, cantidad) {
    const docRef = doc(db, "estudiantes", uid);
    try {
        await updateDoc(docRef, {
            xp: increment(cantidad) // Esto suma automáticamente en la nube
        });
        console.log(`Se sumaron ${cantidad} XP con éxito`);
    } catch (error) {
        console.error("Error al actualizar XP:", error);
    }
}