(() => {
  const findButton = document.getElementById('find-me');
  const marker = document.getElementById('find-marker');
  const status = document.getElementById('find-status');
  let language = 'en';
  let found = false;
  const labels = {
    en: { find: 'Find me ↗', hide: 'Hide arrow ×', status: 'That’s me, in the middle of the front row.', title: 'Josué Morales · IT student & creator', description: 'Josué Morales — IT student at Centria University of Applied Sciences. Projects, experience, and a journey from Panama to Finland.' },
    es: { find: 'Encuéntrame ↗', hide: 'Ocultar flecha ×', status: 'Ese soy yo, en el centro de la primera fila.', title: 'Josué Morales · Estudiante de TI y creador', description: 'Josué Morales — estudiante de TI en la Universidad de Ciencias Aplicadas Centria. Proyectos, experiencia y una trayectoria de Panamá a Finlandia.' }
  };
  function updateFindButton() {
    findButton.textContent = labels[language][found ? 'hide' : 'find'];
    findButton.setAttribute('aria-expanded', String(found));
    marker.hidden = !found;
    status.textContent = found ? labels[language].status : '';
  }
  function setLanguage(next) {
    language = next === 'es' ? 'es' : 'en';
    document.documentElement.lang = language;
    document.title = labels[language].title;
    document.querySelector('meta[name="description"]').content = labels[language].description;
    document.querySelectorAll('[data-en]').forEach(element => {
      // Translation strings are authored locally; only the heading line break is markup.
      element.replaceChildren(...element.dataset[language].split('<br>').flatMap((line, i) => i ? [document.createElement('br'), document.createTextNode(line)] : [document.createTextNode(line)]));
    });
    document.querySelectorAll('[data-alt-en]').forEach(element => { element.alt = language === 'es' ? element.dataset.altEs : element.dataset.altEn; });
    document.querySelectorAll('[data-language]').forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.language === language)); });
    document.querySelector('nav').setAttribute('aria-label', language === 'es' ? 'Navegación principal' : 'Main navigation');
    updateFindButton();
    try { localStorage.setItem('josue-language', language); } catch { /* Language switching also works without storage. */ }
  }
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  findButton.addEventListener('click', () => { found = !found; updateFindButton(); });
  let saved;
  try { saved = localStorage.getItem('josue-language'); } catch { /* Use English by default. */ }
  setLanguage(saved || 'en');
  document.getElementById('year').textContent = new Date().getFullYear();
})();
