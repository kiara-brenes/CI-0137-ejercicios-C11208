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

const temaGuardado = localStorage.getItem('tema');
if (temaGuardado) {
  aplicarTema(temaGuardado);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  aplicarTema('oscuro');
} else {
  aplicarTema('claro');
}
