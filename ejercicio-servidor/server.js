import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import curriculumRutas from './rutas/curriculumRutas.js';
import { persona } from './datos/curriculum.js';

const app = express();
const PUERTO = process.env.PORT || 3000;
const carpeta = path.dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs');
app.set('views', path.join(carpeta, 'views'));

app.use(express.static(path.join(carpeta, 'public')));
app.use(express.urlencoded({ extended: false }));

app.use('/', curriculumRutas);

app.use((req, res) => {
  res.status(404).render('404', { persona, ruta: req.originalUrl });
});

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});
