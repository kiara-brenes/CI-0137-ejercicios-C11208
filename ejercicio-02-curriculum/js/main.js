const experiencia = [
  {
    puesto: 'Asistente de investigación',
    lugar: 'Proyecto "Estado del conocimiento sobre Inteligencia Artificial en el Sector Público", Instituto de Investigaciones en Ciencias Económicas (IICE), UCR',
    descripcion: 'Colaboración con la Dra. Laura Sariego Kluge en el desarrollo de herramientas de IA aplicadas a procesos institucionales:',
    tareas: [
      'Investigación sobre la creación de GPTs personalizados en Copilot',
      'Desarrollo de una herramienta de transcripción',
      'Diseño e impartición de talleres de inteligencia artificial para personal universitario',
    ],
  },
  {
    puesto: 'Asistente de curso',
    lugar: 'Sistemas Operativos y Proyecto Integrado de Redes y Sistemas Operativos, ECCI, UCR',
    descripcion: 'Apoyo docente al profesor Francisco Arroyo:',
    tareas: [
      'Revisión y calificación de proyectos, tareas y quices',
      'Temas: servidores, sistemas de archivos, buzones, NachOS, sockets, switches y Packet Tracer',
    ],
  },
];

const formacion = [
  {
    titulo: 'Bachillerato en Computación con varios énfasis',
    institucion: 'Universidad de Costa Rica, San José',
    fechas: 'Febrero 2022 - graduación estimada en diciembre 2027',
    descripcion: 'Durante la carrera he reforzado conocimientos en algoritmos, estructuras de datos y programación en varios lenguajes, además de redes de comunicación de datos, sistemas operativos, programación concurrente y patrones de diseño. También he trabajado con Linux, control de versiones, desarrollo web y aplicaciones gráficas, documentación técnica y trabajo en equipos de desarrollo.',
  },
];

const certificaciones = [
  { nombre: 'PELEx Inglés', institucion: 'Universidad de Costa Rica', fecha: 'Setiembre 2025' },
  { nombre: 'Inglés Avanzado para Ingeniería', institucion: 'Inglés con Fines Específicos, Universidad de Costa Rica', fecha: 'Agosto 2022 - Febrero 2026' },
  { nombre: 'MenTe en Acción - Mujeres en Tecnología', institucion: 'Ideas en Acción', fecha: 'Julio 2022' },
];

const habilidades = [
  { nombre: 'Python', tipo: 'lenguaje' },
  { nombre: 'C', tipo: 'lenguaje' },
  { nombre: 'C++', tipo: 'lenguaje' },
  { nombre: 'C#', tipo: 'lenguaje' },
  { nombre: 'Java', tipo: 'lenguaje' },
  { nombre: 'SQL', tipo: 'lenguaje' },
  { nombre: 'Ensamblador', tipo: 'lenguaje' },
  { nombre: 'JavaScript', tipo: 'lenguaje' },
  { nombre: 'Manejo de bases de datos', tipo: 'tecnica' },
  { nombre: 'Uso de switches físicos Cisco y redes', tipo: 'tecnica' },
  { nombre: 'Creación de servidores', tipo: 'tecnica' },
  { nombre: 'Patrones de diseño de software', tipo: 'tecnica' },
  { nombre: 'Desarrollo web y de aplicaciones', tipo: 'tecnica' },
  { nombre: 'Linux y Git', tipo: 'tecnica' },
  { nombre: 'Soporte de software', tipo: 'tecnica' },
  { nombre: 'Trabajo en equipo', tipo: 'blanda' },
  { nombre: 'Comunicación', tipo: 'blanda' },
  { nombre: 'Enseñanza y facilitación de talleres', tipo: 'blanda' },
  { nombre: 'Responsabilidad', tipo: 'blanda' },
  { nombre: 'Organización', tipo: 'blanda' },
];

const idiomas = [
  { idioma: 'Español', nivel: 'Nativo' },
  { idioma: 'Inglés', nivel: 'C1' },
];

function crearParrafo(texto, clase) {
  const p = document.createElement('p');
  p.textContent = texto;
  if (clase) p.className = clase;
  return p;
}

function pintarExperiencia() {
  const seccion = document.querySelector('#experiencia');

  experiencia.forEach((trabajo) => {
    const article = document.createElement('article');

    const h3 = document.createElement('h3');
    h3.textContent = trabajo.puesto;

    const ul = document.createElement('ul');
    trabajo.tareas.forEach((tarea) => {
      const li = document.createElement('li');
      li.textContent = tarea;
      ul.append(li);
    });

    article.append(h3, crearParrafo(trabajo.lugar, 'lugar'), crearParrafo(trabajo.descripcion), ul);
    seccion.append(article);
  });
}

function pintarFormacion() {
  const seccion = document.querySelector('#formacion');

  formacion.forEach((estudio) => {
    const article = document.createElement('article');

    const h3 = document.createElement('h3');
    h3.textContent = estudio.titulo;

    article.append(
      h3,
      crearParrafo(estudio.institucion, 'lugar'),
      crearParrafo(estudio.fechas, 'lugar'),
      crearParrafo(estudio.descripcion),
    );
    seccion.append(article);
  });
}

function crearFila(valores) {
  const tr = document.createElement('tr');
  valores.forEach((valor) => {
    const td = document.createElement('td');
    td.textContent = valor;
    tr.append(td);
  });
  return tr;
}

function pintarTablas() {
  const tablaCertificaciones = document.querySelector('#tabla-certificaciones');
  certificaciones.forEach((cert) => {
    tablaCertificaciones.append(crearFila([cert.nombre, cert.institucion, cert.fecha]));
  });

  const tablaIdiomas = document.querySelector('#tabla-idiomas');
  idiomas.forEach((item) => {
    tablaIdiomas.append(crearFila([item.idioma, item.nivel]));
  });
}

function pintarHabilidades() {
  const listas = {
    lenguaje: document.querySelector('#lista-lenguajes'),
    tecnica: document.querySelector('#lista-tecnicas'),
    blanda: document.querySelector('#lista-blandas'),
  };

  habilidades.forEach((habilidad) => {
    const li = document.createElement('li');
    li.textContent = habilidad.nombre;
    listas[habilidad.tipo].append(li);
  });
}

const botonTema = document.querySelector('#boton-tema');
const html = document.documentElement;

function aplicarTema(tema) {
  html.dataset.theme = tema;
  const oscuro = tema === 'oscuro';
  botonTema.textContent = oscuro ? 'Modo claro' : 'Modo oscuro';
  botonTema.setAttribute('aria-pressed', oscuro);
}

botonTema.addEventListener('click', () => {
  const nuevoTema = html.dataset.theme === 'oscuro' ? 'claro' : 'oscuro';
  aplicarTema(nuevoTema);
  localStorage.setItem('tema', nuevoTema);
});

pintarExperiencia();
pintarFormacion();
pintarTablas();
pintarHabilidades();

const temaGuardado = localStorage.getItem('tema');
if (temaGuardado) {
  aplicarTema(temaGuardado);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  aplicarTema('oscuro');
} else {
  aplicarTema('claro');
}
