export const modulos = [
    {
        id: "m1",
        titulo: "Hardware y Arquitectura",
        descripcion: "Aprende sobre CPU, RAM y periféricos.",
        contenido: `
            <h3>Fundamentos del Hardware</h3>
            <p>El hardware es todo lo que puedes tocar. Los componentes clave son:</p>
            <ul>
                <li><strong>CPU:</strong> El procesador que ejecuta las instrucciones.</li>
                <li><strong>RAM:</strong> Memoria volátil para datos inmediatos.</li>
                <li><strong>SSD/HDD:</strong> Almacenamiento permanente.</li>
            </ul>
        `,
        xp_recompensa: 100,
        icono: "💻"
    },
    {
        id: "m2",
        titulo: "Software y Sistemas Op.",
        descripcion: "Diferencias entre software de sistema y aplicación.",
        contenido: `
            <h3>Software y Sistemas</h3>
            <p>Sin software, el hardware es solo metal. El software se divide en:</p>
            <p>1. <strong>Software de Sistema:</strong> Windows, Linux, macOS.</p>
            <p>2. <strong>Software de Aplicación:</strong> Navegadores, juegos, Office.</p>
        `,
        xp_recompensa: 150,
        icono: "💿"
    },
    {
        id: "m3",
        titulo: "Arquitectura de PC",
        descripcion: "¿Qué hace cada pieza por dentro? Míralo en acción.",
        contenido: `
            <h3>Componentes del Ordenador</h3>
            <p>Para entender la arquitectura, lo mejor es ver cómo interactúan las piezas en tiempo real.</p>
            
            <div class="video-container" style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 2px solid var(--primary);">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/0zkX6nlpiSk" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>

            <p><strong>Resumen del video:</strong></p>
            <ul>
                <li>La <strong>Placa Base</strong> es el sistema nervioso que conecta todo.</li>
                <li>La <strong>Fuente de Poder</strong> es el corazón que da energía.</li>
                <li>La <strong>Tarjeta Gráfica</strong> se encarga de los cálculos visuales complejos.</li>
            </ul>
        `,
        xp_recompensa: 200,
        icono: "🖥️"
    }
];
