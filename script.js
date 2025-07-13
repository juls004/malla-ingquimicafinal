// script.js

const materias = [
  { id: "calculo1", nombre: "Cálculo I", correlativas: [] },
  { id: "quimica_general", nombre: "Química General", correlativas: [] },
  { id: "intro_ingenieria", nombre: "Intro a la Ingeniería Química", correlativas: [] },
  { id: "intro_fisica", nombre: "Intro a la Física", correlativas: [] },

  { id: "algebra", nombre: "Álgebra Lineal", correlativas: [] },
  { id: "fisica", nombre: "Física", correlativas: ["intro_fisica"] },
  { id: "quimica_inorganica", nombre: "Química Inorgánica", correlativas: ["quimica_general"] },

  { id: "calculo2", nombre: "Cálculo II", correlativas: ["algebra"] },
  { id: "electromagnetismo", nombre: "Electromagnetismo", correlativas: ["fisica"] },
  { id: "informatica", nombre: "Informática", correlativas: ["algebra"] },
  { id: "dibujo", nombre: "Dibujo", correlativas: ["calculo1", "quimica_general", "intro_ingenieria"] },

  { id: "ec_diferenciales", nombre: "Ecuaciones Diferenciales", correlativas: ["calculo2"] },
  { id: "metodos_numericos", nombre: "Métodos Numéricos", correlativas: ["calculo2", "informatica"] },
  { id: "termodinamica", nombre: "Termodinámica", correlativas: ["calculo2"] },
  { id: "quimica_organica", nombre: "Química Orgánica", correlativas: ["quimica_inorganica"] },

  { id: "fisicoquimica", nombre: "Fisicoquímica", correlativas: ["ec_diferenciales", "metodos_numericos", "termodinamica"] },
  { id: "balance", nombre: "Balance de Masa y Energía", correlativas: ["termodinamica", "informatica"] },
  { id: "fenomenos", nombre: "Fenómenos de Transporte", correlativas: ["calculo2", "termodinamica", "ec_diferenciales"] },

  { id: "probabilidad", nombre: "Probabilidad y Estadística", correlativas: ["algebra"] },
  { id: "ingles1", nombre: "Inglés Técnico I", correlativas: ["calculo1", "quimica_general", "intro_ingenieria"] },
  { id: "estabilidad", nombre: "Elementos de Estabilidad", correlativas: ["algebra", "fisica"] },

  { id: "ingles2", nombre: "Inglés Técnico II", correlativas: ["ingles1"] },
  { id: "mecanica", nombre: "Mecánica y Tec de los Materiales", correlativas: ["estabilidad"] },
  { id: "quimica_analitica", nombre: "Química Analítica", correlativas: ["quimica_organica"] },
  { id: "electrotecnia", nombre: "Electrotecnia", correlativas: ["electromagnetismo"] },

  { id: "op_unit1", nombre: "Operaciones Unitarias I", correlativas: ["fenomenos"] },
  { id: "op_unit2", nombre: "Operaciones Unitarias II", correlativas: ["fenomenos"] },
  { id: "analisis", nombre: "Análisis Instrumental", correlativas: ["quimica_analitica"] },
  { id: "microbio", nombre: "Microbiología", correlativas: ["quimica_analitica"] },

  { id: "op_unit3", nombre: "Operaciones Unitarias III", correlativas: ["op_unit1"] },
  { id: "ing_reacciones", nombre: "Ing. de las Reacciones Químicas I", correlativas: ["probabilidad"] },

  { id: "lab", nombre: "Laboratorio de Procesos", correlativas: ["op_unit1", "op_unit2", "op_unit3", "ing_reacciones"] },
  { id: "tecnologia_servicios", nombre: "Tecnología de los Servicios", correlativas: ["op_unit1", "op_unit2"] },
  { id: "autom_control", nombre: "Automatización y Control", correlativas: ["balance", "ec_diferenciales"] },

  { id: "optativa1", nombre: "Optativa I", correlativas: [] },
  { id: "proyecto", nombre: "Proyecto Industrial", correlativas: ["lab"] },
  { id: "optativa2", nombre: "Optativa II", correlativas: [] },
  { id: "practica", nombre: "Práctica Profesional", correlativas: ["op_unit1", "op_unit2", "op_unit3", "ing_reacciones"] },

  { id: "organizacion", nombre: "Organización Industrial y Legislación", correlativas: [] }
];

const malla = document.getElementById("malla");

materias.forEach(m => {
  const div = document.createElement("div");
  div.className = "materia bloqueada";
  div.id = m.id;
  div.textContent = m.nombre;
  malla.appendChild(div);
});

function actualizarEstado() {
  materias.forEach(m => {
    const div = document.getElementById(m.id);
    const aprobadas = m.correlativas.every(id =>
      document.getElementById(id)?.classList.contains("aprobada")
    );
    if (m.correlativas.length === 0 || aprobadas) {
      div.classList.remove("bloqueada");
    } else {
      div.classList.add("bloqueada");
      div.classList.remove("aprobada");
    }
  });
}

malla.addEventListener("click", e => {
  if (!e.target.classList.contains("materia")) return;
  if (e.target.classList.contains("bloqueada")) return;
  e.target.classList.toggle("aprobada");
  actualizarEstado();
});

actualizarEstado();
