
// Atualiza ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

/* ----------------------------
 * Dicionário de traduções (I18N)
 * ---------------------------- */
const I18N = {
  en: {
    nav: { projects: "Projects", about: "About", contact: "Contact" },
    hero: {
      role: "Full‑Stack Developer",
      subtitle:
        "I build modern, accessible, and performant applications — from polished front‑ends to scalable back‑ends and APIs.",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
    },
    projects: {
      title: "Featured Projects",
      subtitle:
        "Selected work showcasing end‑to‑end delivery, code quality, and delightful UX.",
    },
    actions: { demo: "Demo", code: "Code" },
    card: {
      weather: { desc: "Weather search by city or geolocation using OpenWeatherMap API." },
      cards: { desc: "Filter cards by category and text with smooth animations." },
      neon: { desc: "Glowing calculator with keyboard support." },
      notes: { desc: "Create, edit, delete notes persisted in the browser." },
      parallax: { desc: "Layered gallery with motion on scroll and mouse." },
      palette: { desc: "Generate harmonized palettes and copy hex codes." },
      countdown: { desc: "Set a target time and run an animated countdown." },
    },
    about: {
      title: "About me",
      subtitle:
        "I’m a Full‑Stack Developer delivering robust back‑ends and refined front‑ends.",
      whoTitle: "Who I am",
      whoText:
        "I’m <strong>Namir Antunes</strong>, focused on building efficient, accessible, and delightful digital experiences across the stack. I value clean code, testing, performance and maintainability.",
      skillsTitle: "Core skills",
      skillAcc: "Accessibility / Performance / SEO basics",
    },
    contact: {
      title: "Contact",
      subtitle: "Let’s talk! Fill the form or reach out on LinkedIn/GitHub.",
      nameLabel: "Name",
      emailLabel: "Email",
      msgLabel: "Message",
      send: "Send",
      status: {
        fill: "Please fill in all fields.",
        sending: "Sending...",
        success: "Message sent! I’ll get back to you soon.",
        error: "Could not send your message. Please try again later.",
      },
    },
    footer: { allRights: "All rights reserved." },
  },
  pt: {
    nav: { projects: "Projetos", about: "Sobre", contact: "Contato" },
    hero: {
      role: "Desenvolvedor(a) Full‑Stack",
      subtitle:
        "Construo aplicações modernas, acessíveis e performáticas — do front‑end refinado ao back‑end escalável e APIs.",
      ctaProjects: "Ver projetos",
      ctaContact: "Falar comigo",
    },
    projects: {
      title: "Projetos em destaque",
      subtitle:
        "Seleção que demonstra entrega ponta a ponta, qualidade de código e UX agradável.",
    },
    actions: { demo: "Demo", code: "Código" },
    card: {
      weather: {
        desc: "Busca de clima por cidade ou geolocalização usando a OpenWeatherMap API.",
      },
      cards: { desc: "Filtre cards por categoria e texto com animações suaves." },
      neon: { desc: "Calculadora com brilho neon e suporte ao teclado." },
      notes: { desc: "Crie, edite e exclua notas com persistência no navegador." },
      parallax: { desc: "Galeria em camadas com movimento ao scroll e mouse." },
      palette: { desc: "Gere paletas harmonizadas e copie códigos hex." },
      countdown: { desc: "Defina um alvo e rode uma contagem regressiva animada." },
    },
    about: {
      title: "Sobre mim",
      subtitle:
        "Sou Desenvolvedor(a) Full‑Stack, entregando back‑ends robustos e front‑ends refinados.",
      whoTitle: "Quem sou",
      whoText:
        "Sou <strong>Namir Antunes</strong>, focado(a) em experiências digitais eficientes, acessíveis e agradáveis em toda a stack. Valorizo código limpo, testes, performance e manutenibilidade.",
      skillsTitle: "Competências",
      skillAcc: "Acessibilidade / Performance / SEO básico",
    },
    contact: {
      title: "Contato",
      subtitle:
        "Vamos conversar? Preencha o formulário ou me chame no LinkedIn/GitHub.",
      nameLabel: "Nome",
      emailLabel: "E‑mail",
      msgLabel: "Mensagem",
      send: "Enviar",
      status: {
        fill: "Por favor, preencha todos os campos.",
        sending: "Enviando...",
        success: "Mensagem enviada! Vou te responder em breve.",
        error: "Não foi possível enviar sua mensagem. Tente novamente mais tarde.",
      },
    },
    footer: { allRights: "Todos os direitos reservados." },
  },
};

// idioma atual (query ?lang=...)
let currentLang = new URLSearchParams(location.search).get('lang') || 'en';

/* ----------------------------
 * Aplicar traduções (sem tocar nas demo-links aqui)
 * ---------------------------- */
function applyTranslations() {
  const dict = I18N[currentLang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const path = el.getAttribute('data-i18n').split('.');
    let val = dict;
    for (const key of path) val = val?.[key];
    if (typeof val === 'string') el.innerHTML = val;
  });

  document.documentElement.lang = currentLang;
  document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
  document.getElementById('lang-pt').classList.toggle('active', currentLang === 'pt');

  // ⚠️ Importante: NÃO alteramos .demo-link aqui; isso é feito por fixDemoLinks().
}

// Alternância de idioma
document.getElementById('lang-en').addEventListener('click', () => {
  currentLang = 'en';
  applyTranslations();
  history.replaceState({}, '', updateQuery('lang', 'en'));
});
document.getElementById('lang-pt').addEventListener('click', () => {
  currentLang = 'pt';
  applyTranslations();
  history.replaceState({}, '', updateQuery('lang', 'pt'));
});

// Atualiza a querystring de forma idempotente
function updateQuery(key, value) {
  const u = new URL(location.href);
  u.searchParams.set(key, value);
  return u.pathname + '?' + u.searchParams.toString();
}

// Aplica traduções no carregamento
applyTranslations();

/* ----------------------------
 * Efeitos visuais: starfield
 * ---------------------------- */
(function starfield() {
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  let w, h, stars;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    stars = Array.from(
      { length: Math.floor((w * h) / 8000) },
      () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 0.8 + 0.2,
        s: Math.random() * 1.5 + 0.5,
      })
    );
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const st of stars) {
      ctx.fillStyle = `rgba(255,255,255,${st.z})`;
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.s, 0, Math.PI * 2);
      ctx.fill();
      st.x += 0.05 * st.z;
      if (st.x > w) st.x = 0;
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();

/* ----------------------------
 * Efeitos visuais: parallax dos elementos hero
 * ---------------------------- */
(function parallax() {
  const orb = document.querySelector('.orb');
  const avatar = document.querySelector('.avatar');
  window.addEventListener('mousemove', (e) => {
    const cx = innerWidth / 2, cy = innerHeight / 2;
    const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
    if (orb) orb.style.transform = `translate(${dx * 10}px,${dy * 8}px)`;
    if (avatar) avatar.style.transform = `translate(${dx * 6}px,${dy * 5}px)`;
  });
})();

/* ----------------------------
 * Tilt nos cards
 * ---------------------------- */
(function tiltCards() {
  const cards = document.querySelectorAll('.tilt');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const rx = ((y / r.height) - 0.5) * -10;
      const ry = ((x / r.width) - 0.5) * 10;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
    });
  });
})();

/* ----------------------------
 * Formulário (Formspree)
 * ---------------------------- */
const FORMSPREE_FORM_ID = 'mpqwggnw';
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

const form = document.getElementById('contact-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const dict = I18N[currentLang].contact.status;
  const status = document.getElementById('form-status');
  const data = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim(),
    to: 'namirantunespereira@gmail.com',
  };
  if (!data.name || !data.email || !data.message) {
    status.textContent = dict.fill;
    return;
  }
  status.textContent = dict.sending;

  try {
    const fd = new FormData();
    for (const [k, v] of Object.entries(data)) fd.append(k, v);
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: fd,
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    status.textContent = dict.success;
    form.reset();
  } catch (e) {
    console.warn(e);
    status.textContent = dict.error;
  }
});

/* ------------------------------------------------------
 * PATCH: tratamento centralizado das demo-links
 * - Acrescenta ?lang=<currentLang>
 * - Mantém URL COMPLETA (domínio + caminho + query)
 * - Abre em nova aba com segurança
 * ------------------------------------------------------ */
function fixDemoLinks() {
  document.querySelectorAll('.demo-link').forEach((a) => {
    const href = a.getAttribute('href');
    try {
      const url = new URL(href, location.origin);
      url.searchParams.set('lang', (typeof currentLang !== 'undefined' ? currentLang : 'en'));
      a.setAttribute('href', url.toString());
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    } catch (e) {
      // Se não for uma URL válida, não alteramos
    }
  });
}

// Se já existia applyTranslations no escopo global, fazemos um wrapper
const origApply = typeof window !== 'undefined' ? window.applyTranslations : undefined;
if (origApply) {
  window.applyTranslations = function () {
    origApply();
    fixDemoLinks();
  };
}

// Também executa no carregamento inicial
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fixDemoLinks);
} else {
  fixDemoLinks();
}
