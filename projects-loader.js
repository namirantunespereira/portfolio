
(async function loadProjects(){
  try {
    const res = await fetch('projects.json');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const items = await res.json();
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
    const dict = (typeof I18N !== 'undefined') ? I18N[lang] : null;

    const frag = document.createDocumentFragment();

    items.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card tilt reveal';

      const img = document.createElement('img');
      img.src = p.thumbnail;
      img.alt = p.title + ' thumbnail';
      img.loading = 'lazy';
      img.width = 1200; img.height = 675; // evita CLS
      card.appendChild(img);

      const body = document.createElement('div');
      body.className = 'card-body';

      const h3 = document.createElement('h3');
      h3.textContent = p.title;
      body.appendChild(h3);

      const desc = document.createElement('p');
      desc.className = 'muted';
      desc.innerHTML = dict?.card?.[p.i18nKey]?.desc || '';
      body.appendChild(desc);

      const tags = document.createElement('ul');
      tags.className = 'tags';
      p.tech.forEach(t => { const li = document.createElement('li'); li.textContent = t; tags.appendChild(li); });
      body.appendChild(tags);

      const actions = document.createElement('div');
      actions.className = 'actions';

      const aDemo = document.createElement('a');
      aDemo.className = 'btn btn-primary demo-link';
      aDemo.href = p.demo; aDemo.target = '_blank'; aDemo.rel = 'noopener noreferrer';
      aDemo.textContent = dict?.actions?.demo || 'Demo';
      actions.appendChild(aDemo);

      const aCode = document.createElement('a');
      aCode.className = 'btn btn-secondary';
      aCode.href = p.code; aCode.target = '_blank'; aCode.rel = 'noopener noreferrer';
      aCode.textContent = dict?.actions?.code || 'Code';
      actions.appendChild(aCode);

      body.appendChild(actions);
      card.appendChild(body);
      frag.appendChild(card);
    });

    grid.innerHTML = '';
    grid.appendChild(frag);

    requestAnimationFrame(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('show'));
    });
  } catch (e) { console.warn('Could not load projects.json:', e); }
})();
