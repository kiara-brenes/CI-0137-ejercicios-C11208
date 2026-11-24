import { persona, experiencia, formacion, certificaciones, habilidades, idiomas } from '../datos/curriculum.js';

function datosCurriculum() {
  return {
    persona,
    experiencia,
    formacion,
    certificaciones,
    idiomas,
    lenguajes: habilidades.filter((h) => h.tipo === 'lenguaje'),
    tecnicas: habilidades.filter((h) => h.tipo === 'tecnica'),
    blandas: habilidades.filter((h) => h.tipo === 'blanda'),
  };
}

export function mostrarCurriculum(req, res) {
  res.render('index', { ...datosCurriculum(), error: null, valores: {} });
}

export function recibirContacto(req, res) {
  const nombre = (req.body.nombre ?? '').trim();
  const correo = (req.body.correo ?? '').trim();
  const mensaje = (req.body.mensaje ?? '').trim();

  if (!nombre || !correo || !mensaje) {
    return res.status(400).render('index', {
      ...datosCurriculum(),
      error: 'Por favor llene todos los campos del formulario.',
      valores: { nombre, correo, mensaje },
    });
  }

  console.log('Nuevo mensaje de contacto:', { nombre, correo, mensaje });
  res.render('gracias', { persona, nombre });
}
