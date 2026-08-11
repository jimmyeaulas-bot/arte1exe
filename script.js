/* ================= DADOS DOS 8 DESAFIOS ================= */
const EX = [
  {
    id: 1,
    ti: '👁 Caça ao Invisível',
    tag: 'Preparação · 8 min',
    tipo: 'timer',
    dur: 480,
    conc: '<b>Preparação (Wallas):</b> toda obra começa com um olhar. Em grupo, escolham UM objeto, gesto ou momento esquecido do dia — aquele que ninguém nota, mas está ali. Pode ser: a poeira no peitoril, o barulho da mochila fechando, o cheiro do lanche, a sombra que o prédio faz às 10h.',
    lemb: 'Quem observa o que ninguém vê, cria o que ninguém criou.',
    st: '🔎 Em grupo, olhem ao redor ou lembrem do dia. Escolham UM "invisível" e escrevam abaixo.',
    hint: 'Dica: o melhor "invisível" é aquele que faz vocês sentirem alguma coisa. Um detalhe. Um som. Um cheiro. Uma ausência.',
    passos: [
      ['Olhem em volta por 1 minuto em silêncio — sem conversar.'],
      ['Em grupo, cada um fala 1 coisa que notou e ninguém mais viu.', 'pensamento divergente: quantidade gera qualidade.'],
      ['Escolham UMA dessas coisas para ser o tema da obra.']
    ],
    gab: 'Qualquer tema que o grupo tenha escolhido — o importante é que tenha sido notado.'
  },
  {
    id: 2,
    ti: '📝 3 Palavras da Alma',
    tag: 'Preparação',
    tipo: 'texto',
    conc: 'Agora que escolheram o invisível, resumam em <b>3 palavras-chave</b> o que ele é para vocês. Essas palavras vão guiar toda a criação.',
    lemb: 'Se vocês não conseguem explicar em 3 palavras, ainda não entenderam o que querem dizer.',
    st: '✍️ Escrevam 3 palavras que definem o "invisível" do grupo (usem vírgula):',
    exemplo: 'exemplo: silêncio, espera, luz-amarela',
    gab: 'Qualquer 3 palavras coerentes com o tema escolhido',
    passos: [
      ['Cada um do grupo fala palavras soltas sobre o tema (brainstorming).'],
      ['Sem julgar — tudo vale nessa fase.', 'pensamento divergente: não julgue ainda.'],
      ['Escolham as 3 que mais representam o sentimento do grupo.']
    ]
  },
  {
    id: 3,
    ti: '🗺️ Chuva de Ideias',
    tag: 'Preparação',
    tipo: 'mc',
    conc: 'Hora de <b>pensar em COMO representar</b> esse invisível. Abram a mente: desenho, colagem, fotografia encenada, performance, texto visual, escultura com o que tiverem no estojo...',
    lemb: 'Nessa fase, QUANTIDADE > QUALIDADE. Anotem tudo!',
    st: '💡 Qual técnica combina mais com o "invisível" do grupo?',
    opts: [
      { tx: '🎨 Desenho/pintura (lápis, caneta, giz)', ok: 1 },
      { tx: '✂️ Colagem (recortes, papéis, texturas)', ok: 1 },
      { tx: '📸 Fotografia encenada (com celular)', ok: 1 },
      { tx: '🎭 Performance / cena curta', ok: 1 },
      { tx: '📝 Poema visual / texto + imagem', ok: 1 },
      { tx: '🪵 Escultura com objetos do estojo/sala', ok: 1 }
    ],
    hint: '💡 Não existe resposta errada! Em arte, a técnica é uma ESCOLHA. Pensem: qual linguagem dá mais voz ao que vocês sentem?',
    passos: [
      ['Leiam cada opção imaginando o "invisível" do grupo nela.'],
      ['Pensem no TEMPO e nos MATERIAIS que vocês têm.', 'verificação: seja realista com o que é possível.'],
      ['Escolham 1 ou 2 técnicas para começar.']
    ],
    gab: 'Todas as opções são válidas — a escolha é do grupo!'
  },
  {
    id: 4,
    ti: '🫁 Pausa Ativa (Incubação)',
    tag: 'Incubação · 3 min',
    tipo: 'breath',
    dur: 180,
    conc: 'A mente descansa, mas trabalha nos bastidores. Fechem os olhos (ou olhem para longe), sigam a bolinha e DEIXEM as ideias se reorganizarem. <b>Não forcem nada.</b>',
    lemb: 'O silêncio também cria. O "Eureka!" vem quando você para de caçá-lo.',
    st: '🌙 Sigam a respiração: INSPIRE (4s) → SEGURE (4s) → EXPIRE (6s). Repitam 3 vezes.',
    hint: '💡 Nesse tempo, pensem em OUTRA COISA: uma música, um sonho, uma lembrança. Quando voltarem, as ideias estarão mais claras.',
    passos: [
      ['Parem o que estão fazendo.'],
      ['Sigam a bolinha que cresce e diminui.', 'a respiração lenta acalma o cérebro criativo.'],
      ['Voltem com a mente fresca para o desafio seguinte.']
    ],
    gab: 'Pausa concluída — vocês incubaram. Agora as ideias vêm mais fáceis.'
  },
  {
    id: 5,
    ti: '💡 Iluminação — O Eureka!',
    tag: 'Iluminação · 3 min',
    tipo: 'texto',
    conc: 'Chegou o momento do "Eureka!" de Graham Wallas: a ideia aparece de repente, mas SÓ porque vocês prepararam o terreno. Agora definam o <b>TÍTULO</b> da obra e a <b>FRASE-CONCEITO</b> (em 1 linha, o que a obra quer dizer).',
    lemb: 'Título bom intriga. Conceito bom emociona. Juntos, viram a obra em um manifesto.',
    st: '✨ Escrevam o TÍTULO da obra (curto e forte) e uma frase que explique o que ela quer dizer.',
    exemplo: 'exemplo: "Silêncio das 10h — quando o pátio respira antes da aula"',
    gab: 'Título + frase-conceito coerentes com o tema',
    passos: [
      ['Pensem em palavras que SURPREENDAM sobre o "invisível".'],
      ['Usem SCAMPER leve: Substitua, Combine, Adapte a ideia.', 'ex: "poeira" vira "estrelas do chão".'],
      ['Definam: TÍTULO + FRASE-CONCEITO em até 15 palavras.']
    ]
  },
  {
    id: 6,
    ti: '🎨 Rascunho Relâmpago',
    tag: 'Verificação · 8 min',
    tipo: 'timer',
    dur: 480,
    conc: 'Hora da <b>Verificação</b>: transformar a ideia em algo real. Usem os 8 minutos para produzir um rascunho rápido da obra — não precisa ficar perfeito. O importante é GANHAR CORPO.',
    lemb: 'Feito é melhor que perfeito. A obra só existe quando sai da cabeça.',
    st: '✏️ Usem os 8 minutos para esboçar a obra do grupo. Podem usar o papel, o estojo, o corpo, o celular — o que for.',
    hint: '💡 Lembrem: o desafio e a habilidade precisam estar equilibrados (FLUXO). Se estiver difícil demais, simplifique. Se estiver fácil demais, ouse mais.',
    passos: [
      ['Decidam papéis: quem desenha, quem escreve, quem organiza.'],
      ['Comecem rápido — o primeiro traço vale mais que 10 ideias.', 'a materialização é o segredo da invenção.'],
      ['Usem o tempo todo — quando o timer tocar, PAREM.']
    ],
    gab: 'Rascunho entregue no tempo — obra ganhou corpo!'
  },
  {
    id: 7,
    ti: '🔧 Ajustes Finais',
    tag: 'Verificação',
    tipo: 'tf',
    conc: 'Antes de apresentar, passem este checklist rápido no trabalho do grupo. Refinar é parte da criação.',
    lemb: 'Crítica construtiva em grupo = obra mais forte.',
    st: '✅ Marquem V (verdadeiro) ou F (falso) para cada pergunta:',
    sts: [
      { tx: 'A obra comunica o "invisível" que escolhemos?', ok: 'V' },
      { tx: 'O título intriga quem ainda não conhece a obra?', ok: 'V' },
      { tx: 'Todos do grupo participaram de alguma forma?', ok: 'V' },
      { tx: 'Dá para apresentar em até 1 minuto para a turma?', ok: 'V' }
    ],
    hint: '💡 Se alguma resposta for F, ajustem RAPIDINHO — vocês ainda têm 2 minutos.',
    passos: [
      ['Leiam as 4 perguntas em voz alta, no grupo.'],
      ['SejHonestos: se algo está F, corrijam agora.', 'a verificação é o que separa ideia de obra.'],
      ['Preparem uma frase curta para apresentar.']
    ],
    gab: 'V · V · V · V — obra pronta para exposição!'
  },
  {
    id: 8,
    ti: '🎤 Galeria Relâmpago',
    tag: 'Exposição · 3 min',
    tipo: 'galeria',
    conc: 'Hora de montar o <b>card da obra</b> do grupo. É isso que vocês vão mostrar para a turma na apresentação final. Capricho na frase-final: ela resume a alma da obra.',
    lemb: 'Toda obra de arte é um convite. Convidem a turma a olhar o invisível com vocês.',
    st: '🎨 Preencham o card da obra com as decisões do grupo:',
    passos: [
      ['Escolham UM porta-voz (ou falem em coro).'],
      ['Decidam a FRASE-FINAL que fecha a apresentação.', 'essa frase fica na cabeça da turma.'],
      ['Ensaie em voz alta 1x antes de apresentar.']
    ],
    gab: 'Card pronto — boa apresentação, artistas! 🎨'
  }
];

/* ================= FLASHCARDS ================= */
const FLASH = [
  { f: 'Quais são as 4 fases do criar, segundo Graham Wallas?', v: 'Preparação → Incubação → Iluminação → Verificação ✔' },
  { f: 'O que é pensamento divergente?', v: 'Modo expansivo: gerar muitas ideias sem julgar. Brainstorming, chuva de ideias. ✔' },
  { f: 'O que é o "estado de fluxo"?', v: 'Quando desafio e habilidade estão equilibrados — o tempo desaparece e criamos nosso melhor trabalho. ✔' },
  { f: 'Qual a diferença entre CRIAR, INVENTAR e INOVAR?', v: 'Criar = imaginar. Inventar = materializar. Inovar = gerar valor pra alguém. ✔' },
  { f: 'O que é o SCAMPER?', v: '7 perguntas pra transformar ideias: Substituir, Combinar, Adaptar, Modificar, Por outro uso, Eliminar, Reorganizar. ✔' }
];

/* ================= UTILITÁRIOS ================= */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const fmt = (s) => {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
};

/* ================= LOCAL STORAGE ================= */
const STORAGE_KEY = 'jornada_arte';
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return { status: {}, timer: { remaining: 3000, paused: true, endTime: '14:30' } };
}
function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

/* ================= RENDER DESAFIOS ================= */
function renderDesafios() {
  const container = $('#desafiosContainer');
  container.innerHTML = EX.map(e => {
    const status = state.status[e.id] || 'none';
    const feito = status === 'feito' ? 'feito' : '';
    const pulado = status === 'pulado' ? 'pulado' : '';
    return `
      <article class="ex ${feito} ${pulado}" id="ex${e.id}">
        <header>
          <h3><span class="num">${String(e.id).padStart(2, '0')}</span> ${e.ti}</h3>
          <span class="tag">${e.tag}</span>
        </header>
        <p class="conc">${e.conc}</p>
        <p class="stmt"><b>🎯 O que o grupo vai fazer:</b> ${e.st}</p>
        ${renderInteracao(e)}
        <div class="acoes">
          <button class="act ver" data-a="ver">👁 Ver dicas do passo</button>
          <button class="act ent" data-a="entender">🧠 Entender gabarito</button>
          <button class="act pul" data-a="pular">⏭ Pular</button>
        </div>
        <div class="gab" hidden>
          <p class="ans">✔ ${e.gab}</p>
          <ol class="steps">${e.passos.map(p => `
            <li>${p[0]}${p[1] ? `<span class="why">${p[1]}</span>` : ''}</li>
          `).join('')}</ol>
        </div>
        <p class="stArea" aria-live="polite">${status === 'feito' ? '<span class="stamp ok">✔ criado!</span>' : status === 'pulado' ? '<span class="stamp sk">⏭ pulado</span>' : ''}</p>
        <p class="postit laranja">📌 <b>${e.lemb}</b></p>
      </article>
    `;
  }).join('');

  // Reaplica status de pulado nos botões
  EX.forEach(e => {
    const sec = document.getElementById(`ex${e.id}`);
    if (!sec) return;
    if (state.status[e.id] === 'pulado') {
      sec.classList.add('pulado');
      const btn = sec.querySelector('[data-a="pular"]');
      if (btn) btn.textContent = '↩ Voltar';
    }
  });
}

function renderInteracao(e) {
  if (e.tipo === 'timer') {
    return `
      <div class="timer-wrap">
        <svg class="timer-circle" viewBox="0 0 120 120">
          <circle class="bg" cx="60" cy="60" r="54"/>
          <circle class="fg" cx="60" cy="60" r="54"
            stroke-dasharray="339.292"
            stroke-dashoffset="0"
            data-dur="${e.dur}"/>
          <text class="timer-time" x="60" y="68" text-anchor="middle">${fmt(e.dur)}</text>
        </svg>
        <button class="act" data-a="timer-tog">▶ Iniciar timer</button>
      </div>
      <p class="dica">💡 ${e.hint || ''}</p>
      <textarea class="rin-txt" placeholder="Anotem aqui as ideias, palavras e decisões do grupo..."></textarea>
    `;
  }
  if (e.tipo === 'breath') {
    return `
      <div class="breath-wrap">
        <div class="breath-ball">respira</div>
        <div class="breath-txt">inspire 4s · segure 4s · expire 6s</div>
      </div>
      <p class="dica">💡 ${e.hint || ''}</p>
      <textarea class="rin-txt" placeholder="Quando voltarem, anotem a ideia que apareceu..."></textarea>
    `;
  }
  if (e.tipo === 'texto') {
    return `
      <p><small>${e.exemplo || ''}</small></p>
      <textarea class="rin-txt" placeholder="Escrevam aqui a resposta do grupo..."></textarea>
    `;
  }
  if (e.tipo === 'mc') {
    return `
      <fieldset class="opt">
        <legend>Escolham as que fazem sentido (pode mais de uma):</legend>
        ${e.opts.map((o, i) => `
          <label>
            <input type="checkbox" name="op${e.id}_${i}" value="${i}">
            <span class="bx"></span>${o.tx}
          </label>`).join('')}
      </fieldset>
    `;
  }
  if (e.tipo === 'tf') {
    return e.sts.map((s, k) => `
      <fieldset class="opt">
        <legend>${k+1}) ${s.tx}</legend>
        <label style="display:inline-block">
          <input type="radio" name="tf${e.id}_${k}" value="V"><span class="bx"></span>V
        </label>
        <label style="display:inline-block">
          <input type="radio" name="tf${e.id}_${k}" value="F"><span class="bx"></span>F
        </label>
      </fieldset>
    `).join('');
  }
  return '';
}

/* ================= RENDER FLASHCARDS ================= */
function renderFlashcards() {
  $('#flashes').innerHTML = FLASH.map((f, i) => `
    <button class="flash" aria-pressed="false">
      <span class="frente">🎴 ${f.f}</span>
      <span class="verso">✨ ${f.v}</span>
    </button>
  `).join('');
}

/* ================= NAVEGAÇÃO ================= */
function renderNav() {
  $('#sum').innerHTML = EX.map(e => `<li><a href="#ex${e.id}">${e.id}</a></li>`).join('');
}

/* ================= PROGRESSO ================= */
function updateProgress() {
  const total = EX.length;
  const done = EX.filter(e => state.status[e.id] === 'feito' || state.status[e.id] === 'pulado').length;
  const pct = Math.round((done / total) * 100);
  const fill = $('#exs .progress-fill');
  const label = $('#pct');
  if (fill) fill.style.width = pct + '%';
  if (label) label.textContent = pct;
  // Atualiza aria-valuenow
  const bar = document.querySelector('.progress-bar');
  if (bar) bar.setAttribute('aria-valuenow', pct);
}

/* ================= TIMER GLOBAL ================= */
let timerInterval = null;

function initTimer() {
  const display = $('#timerDisplay');
  const endTimeInput = $('#endTime');
  if (!display) return;

  // Carregar estado do timer
  const stored = state.timer || { remaining: 3000, paused: true, endTime: '14:30' };
  const remaining = stored.remaining;
  const paused = stored.paused;
  const endTime = stored.endTime || '14:30';
  display.textContent = fmt(remaining);
  if (endTimeInput) endTimeInput.value = endTime;

  // Se não estiver pausado, iniciar o intervalo
  if (!paused && remaining > 0) {
    startTimerLoop();
  }
  updatePauseButtonText(paused);
}

function startTimerLoop() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const display = $('#timerDisplay');
    if (!display) return;
    let remaining = state.timer.remaining || 0;
    if (remaining <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      state.timer.paused = true;
      saveState(state);
      updatePauseButtonText(true);
      return;
    }
    remaining--;
    state.timer.remaining = remaining;
    display.textContent = fmt(remaining);
    saveState(state);
  }, 1000);
}

function updatePauseButtonText(paused) {
  const btn = $('#pauseTimerBtn');
  if (btn) btn.textContent = paused ? '▶️ Iniciar' : '⏸️ Pausar';
}

function toggleTimerPause() {
  const paused = state.timer.paused;
  if (paused) {
    if (state.timer.remaining <= 0) {
      // Se acabou, reinicia com base no horário final ou 50 min
      setTimerFromEndTime();
    }
    state.timer.paused = false;
    startTimerLoop();
  } else {
    state.timer.paused = true;
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }
  saveState(state);
  updatePauseButtonText(state.timer.paused);
}

function setTimerFromEndTime() {
  const input = $('#endTime');
  if (!input) return;
  const val = input.value;
  if (!val) return;
  const [h, m] = val.split(':').map(Number);
  const now = new Date();
  const end = new Date(now);
  end.setHours(h, m, 0, 0);
  let diff = Math.floor((end - now) / 1000);
  if (diff < 0) diff = 0;
  state.timer.remaining = diff;
  state.timer.endTime = val;
  const display = $('#timerDisplay');
  if (display) display.textContent = fmt(diff);
  saveState(state);
}

function resetTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  setTimerFromEndTime();
  state.timer.paused = true;
  saveState(state);
  updatePauseButtonText(true);
  const display = $('#timerDisplay');
  if (display) display.textContent = fmt(state.timer.remaining || 0);
}

/* ================= EVENTOS ================= */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderDesafios();
  renderFlashcards();
  initTimer();
  updateProgress();

  // ——— MODAL ———
  const modal = $('#modalMapa');
  const abrir = $('#abrirMapa');
  const fechar = $('#fecharMapa');
  const imgMapa = $('#mapa-img');

  function openModal() { if (modal) modal.removeAttribute('hidden'); }
  function closeModal() { if (modal) modal.setAttribute('hidden', ''); }

  if (abrir) abrir.addEventListener('click', openModal);
  if (imgMapa) imgMapa.addEventListener('click', openModal);
  if (fechar) fechar.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  // ——— BOTÃO VOLTAR AO TOPO ———
  const back = $('#backToTop');
  if (back) {
    back.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    // Esconde se estiver no topo
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        back.style.display = 'flex';
      } else {
        back.style.display = 'none';
      }
    });
    back.style.display = 'none';
  }

  // ——— TIMER CONTROLS ———
  $('#setTimerBtn')?.addEventListener('click', () => {
    resetTimer();
  });
  $('#resetTimerBtn')?.addEventListener('click', () => {
    // Reseta para 50:00
    state.timer.remaining = 3000;
    state.timer.paused = true;
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    const display = $('#timerDisplay');
    if (display) display.textContent = fmt(3000);
    saveState(state);
    updatePauseButtonText(true);
  });
  $('#pauseTimerBtn')?.addEventListener('click', toggleTimerPause);
  // Ao mudar o input de hora, atualiza o timer se estiver parado
  $('#endTime')?.addEventListener('change', () => {
    if (state.timer.paused) {
      setTimerFromEndTime();
    }
  });

  // ——— FLASHCARDS (clique) ———
  document.addEventListener('click', (e) => {
    const flash = e.target.closest('.flash');
    if (flash) {
      const pressed = flash.getAttribute('aria-pressed') === 'true';
      flash.setAttribute('aria-pressed', !pressed);
    }
  });

  // ——— MARCAR SELECIONADO (checkbox) ———
  document.addEventListener('change', (e) => {
    if (e.target.matches('.opt input')) {
      const sec = e.target.closest('.ex');
      if (!sec) return;
      sec.querySelectorAll('label').forEach(l => {
        const i = l.querySelector('input');
        if (i) l.classList.toggle('sel', i.checked);
      });
    }
  });

  // ——— BOTÕES DOS DESAFIOS (Ver / Entender / Pular) ———
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-a]');
    if (!btn) return;
    const sec = btn.closest('.ex');
    if (!sec) return;
    const id = parseInt(sec.id.replace('ex', ''), 10);
    const action = btn.dataset.a;
    const gab = sec.querySelector('.gab');
    const stArea = sec.querySelector('.stArea');

    if (action === 'ver') {
      if (gab) {
        gab.removeAttribute('hidden');
        gab.classList.add('show');
        gab.classList.remove('ent');
      }
      // Marca como feito
      if (state.status[id] !== 'pulado') {
        state.status[id] = 'feito';
        sec.classList.add('feito');
        sec.classList.remove('pulado');
        if (stArea) stArea.innerHTML = '<span class="stamp ok">✔ criado!</span>';
        // Ajusta texto do botão pular
        const pulBtn = sec.querySelector('[data-a="pular"]');
        if (pulBtn) pulBtn.textContent = '⏭ Pular';
        saveState(state);
        updateProgress();
      }
    }

    if (action === 'entender') {
      if (gab) {
        gab.removeAttribute('hidden');
        gab.classList.add('show', 'ent');
      }
    }

    if (action === 'pular') {
      const isPulado = state.status[id] === 'pulado';
      if (isPulado) {
        // Voltar: remove pulado
        delete state.status[id];
        sec.classList.remove('pulado');
        btn.textContent = '⏭ Pular';
        if (stArea) stArea.innerHTML = '';
        // Se estava feito, mantém?
        if (state.status[id] === 'feito') {
          // já está feito
        }
      } else {
        state.status[id] = 'pulado';
        sec.classList.add('pulado');
        btn.textContent = '↩ Voltar';
        if (stArea) stArea.innerHTML = '<span class="stamp sk">⏭ pulado</span>';
        // Remove classe feito se tiver
        sec.classList.remove('feito');
      }
      saveState(state);
      updateProgress();
    }
  });

  // ——— TIMER INDIVIDUAL DOS DESAFIOS (timer-wrap) ———
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-a="timer-tog"]')) {
      toggleTimerDesafio(e.target);
    }
  });
});

/* ================= TIMER INDIVIDUAL DOS DESAFIOS ================= */
const timersMap = new Map();

function toggleTimerDesafio(btn) {
  const wrap = btn.closest('.timer-wrap');
  if (!wrap) return;
  const sec = wrap.closest('.ex');
  if (!sec) return;
  const id = sec.id;
  const circle = wrap.querySelector('.fg');
  const txt = wrap.querySelector('.timer-time');
  const total = parseInt(circle.dataset.dur, 10);
  const C = 339.292;

  if (timersMap.has(id)) {
    clearInterval(timersMap.get(id));
    timersMap.delete(id);
    btn.textContent = '▶ Retomar';
    return;
  }

  let left = parseInt(circle.dataset.left, 10) || total;
  circle.dataset.left = left;

  const iv = setInterval(() => {
    left--;
    circle.dataset.left = left;
    circle.setAttribute('stroke-dashoffset', C * (1 - left / total));
    txt.textContent = fmt(left);
    if (left <= 0) {
      clearInterval(iv);
      timersMap.delete(id);
      btn.textContent = '✔ Concluído';
      txt.textContent = '0:00';
    }
  }, 1000);
  timersMap.set(id, iv);
  btn.textContent = '⏸ Pausar';
}