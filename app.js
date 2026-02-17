const contenido = document.getElementById("contenido");

function cargarEtapa(etapa) {
  const etapas = {
    1: {
      titulo: "Etapa 1 · Análisis del problema",
      descripcion: [
        "Problema real y verificable",
        "Usuario claramente definido",
        "Entrada – Proceso – Salida",
        "Alcance del sistema"
      ],
      svg: svgProblema()
    },
    2: {
      titulo: "Etapa 2 · Requisitos",
      descripcion: [
        "Requisitos funcionales",
        "Requisitos no funcionales",
        "Actores del sistema"
      ],
      svg: svgRequisitos()
    },
    3: {
      titulo: "Etapa 3 · Arquitectura Web",
      descripcion: [
        "Modelo cliente–servidor",
        "Capas del sistema",
        "Flujo técnico"
      ],
      svg: svgArquitectura()
    },
    4: {
      titulo: "Etapa 4 · Wireframes",
      descripcion: [
        "Pantallas",
        "Navegación",
        "Jerarquía visual"
      ],
      svg: svgWireframe()
    },
    5: {
      titulo: "Etapa 5 · Prototipo",
      descripcion: [
        "Prototipo clickeable",
        "Flujos validados"
      ],
      svg: svgPrototipo()
    },
    6: {
      titulo: "Etapa 6 · HTML",
      descripcion: [
        "HTML semántico",
        "Estructura correcta"
      ],
      svg: svgHTML()
    },
    7: {
      titulo: "Etapa 7 · CSS",
      descripcion: [
        "Layout",
        "Responsive"
      ],
      svg: svgCSS()
    },
    8: {
      titulo: "Etapa 8 · JavaScript",
      descripcion: [
        "Eventos",
        "DOM",
        "Validaciones"
      ],
      svg: svgJS()
    },
    9: {
      titulo: "Etapa 9 · Pruebas",
      descripcion: [
        "Casos de prueba",
        "Correcciones"
      ],
      svg: svgTesting()
    },
    10: {
      titulo: "Etapa 10 · Producto Final",
      descripcion: [
        "Sistema funcional",
        "Sustentación técnica"
      ],
      svg: svgFinal()
    }
  };

  const e = etapas[etapa];

  contenido.innerHTML = `
    <h2>${e.titulo}</h2>
    ${e.svg}
    <ul>
      ${e.descripcion.map(i => `<li>${i}</li>`).join("")}
    </ul>
  `;
}

/* ===== SVGs ===== */

function svgProblema() {
  return `
  <svg viewBox="0 0 420 160">
    <rect x="20" y="60" width="110" height="40" fill="#e5e7eb"/>
    <rect x="155" y="45" width="110" height="70" fill="#dbeafe"/>
    <rect x="290" y="60" width="110" height="40" fill="#dcfce7"/>
    <text x="75" y="85" text-anchor="middle">Entrada</text>
    <text x="210" y="85" text-anchor="middle">Proceso</text>
    <text x="345" y="85" text-anchor="middle">Salida</text>
  </svg>`;
}

function svgRequisitos() {
  return `
  <svg viewBox="0 0 420 160">
    <circle cx="70" cy="80" r="30" fill="#fde68a"/>
    <rect x="130" y="40" width="260" height="80" fill="#f1f5f9"/>
    <text x="70" y="85" text-anchor="middle">Actor</text>
    <text x="260" y="85" text-anchor="middle">Requisitos</text>
  </svg>`;
}

function svgArquitectura() {
  return `
  <svg viewBox="0 0 420 160">
    <rect x="60" y="40" width="300" height="30" fill="#e0e7ff"/>
    <rect x="60" y="80" width="300" height="30" fill="#c7d2fe"/>
    <rect x="60" y="120" width="300" height="30" fill="#a5b4fc"/>
    <text x="210" y="60" text-anchor="middle">Navegador</text>
    <text x="210" y="100" text-anchor="middle">Frontend</text>
    <text x="210" y="140" text-anchor="middle">Servidor</text>
  </svg>`;
}

/* (Los demás SVG siguen el mismo patrón — claros para estudiantes) */

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    cargarEtapa(btn.dataset.etapa);
  });
});

cargarEtapa(1);
