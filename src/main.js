import './style.css'
import confetti from 'canvas-confetti'
import {
  createElement,
  Heart,
  Sparkle,
  Sparkles,
  Star,
  Cake,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Undo2,
  Music,
  Play,
  Pause,
  Headphones,
  PartyPopper,
  Flower,
  Flower2,
  MousePointerClick,
} from 'lucide'

/* =========================================================
   ICON HELPER
   Renders a Lucide icon node to an SVG string, sized in `em`
   so it always follows the font-size of whatever wraps it
   (see .icon in style.css). No px/size prop needed per-call.
========================================================= */

function icon(node, { className = 'icon', strokeWidth = 2, fill = 'none' } = {}) {
  return createElement(node, {
    class: className,
    'stroke-width': strokeWidth,
    fill,
  }).outerHTML
}

// Small heart used mid-sentence (e.g. "birthday ♡") — outline style
const heartInline = (className = 'icon icon-inline') =>
  icon(Heart, { className })

// Filled heart variant
const heartFilled = (className = 'icon icon-inline') =>
  icon(Heart, { className, fill: 'currentColor' })

const cardData = {
  recipient: 'Jiya Zara Mutiara',
  nickname: 'Jiya',
  stickerDay: '3',
  stickerMonth: 'Mar',

  greeting:
    'Selamat ulang tahun! Semoga di umur yang baru ini, banyak hal baik datang ke kamu. Semoga rencana-rencana yang lagi kamu jalanin bisa berjalan satu per satu, dan kalau ada yang belum sesuai harapan, semoga kamu tetap punya alasan untuk terus jalan. Semoga tahun ini lebih banyak cerita baiknya, lebih banyak waktu untuk hal-hal yang kamu suka, dan tentunya lebih banyak alasan buat senyum. Nggak perlu semuanya sempurna, yang penting kamu bisa menikmati prosesnya.',

  sender: '@maulanasya',

  notes: [
    {
      tone: 'rose',
      title: 'Untuk hari ini',
      items: [
        'Hari yang berjalan dengan tenang',
        'Ada kabar baik yang nggak disangka',
        'Satu alasan kecil untuk tersenyum',
      ],
    },
    {
      tone: 'hot',
      title: 'Untuk beberapa bulan ke depan',
      items: [
        'Ada hal-hal baik yang mulai berjalan',
        'Punya waktu untuk beristirahat dan bersenang-senang',
        'Bisa melakukan hal-hal yang kamu suka',
      ],
    },
    {
      tone: 'paper',
      title: 'Untuk setahun penuh',
      items: [
        'Tetap sehat dan punya waktu istirahat yang cukup',
        'Rencana yang kamu punya bisa tercapai satu per satu',
        'Punya lebih banyak hal untuk dikenang',
      ],
    },
  ],

  youtubeId: 'KZeI9I875Ig',
}

const palette = [
  '#F2307F',
  '#FF8DBB',
  '#FFD0E2',
  '#FFF7F2',
  '#3B0A25',
]

const reduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

const fire = (opts = {}) =>
  confetti({
    colors: palette,
    disableForReducedMotion: true,
    ...opts,
  })

const HEART =
  'M50 88 C20 62 4 44 4 27 C4 14 14 5 27 5 C37 5 45 10 50 18 C55 10 63 5 73 5 C86 5 96 14 96 27 C96 44 80 62 50 88 Z'

const SPARK =
  'M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z'

// Icon set used for the hero confetti decoration (was: ✦ ♡ ✧ ♡ ✦)
const confettiIcons = [Sparkle, Heart, Sparkles, Heart, Sparkle]

document.querySelector('#app').innerHTML = `
  <div class="floating-layer" id="floatingLayer" aria-hidden="true"></div>

  <div class="progress-wrap" id="progressWrap">
    <div class="progress-inner">
      <span class="progress-label">Jiya's birthday ${heartInline()}</span>
      <div class="progress-track">
        <div class="progress-bar" id="progressBar"></div>
      </div>
      <span class="progress-step" id="progressStep">1 / 6</span>
    </div>
  </div>

  <main class="page">

    <!-- HERO -->
    <section class="card hero reveal" data-step="1">

      <div class="hero__confetti" aria-hidden="true">
        ${confettiIcons.map((i) => `<span>${icon(i)}</span>`).join('')}
      </div>

      <svg
        class="spark spark--a"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="${SPARK}"/>
      </svg>

      <svg
        class="spark spark--b"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="${SPARK}"/>
      </svg>

      <svg
        class="spark spark--c"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="${SPARK}"/>
      </svg>

      <div class="sticker" aria-hidden="true">
        <svg viewBox="0 0 100 92">
          <path
            d="${HEART}"
            fill="#FFF7F2"
            stroke="#3B0A25"
            stroke-width="4"
            stroke-linejoin="round"
          />

          <text x="50" y="44" font-size="26">
            ${cardData.stickerDay}
          </text>

          <text x="50" y="62" font-size="14">
            ${cardData.stickerMonth}
          </text>
        </svg>
      </div>

      <div class="hero__eyebrow">
        <span class="eyebrow-dot"></span>
        today is your special day
        <span class="eyebrow-dot"></span>
      </div>

      <h1 class="hero__title">
        <span class="line">
          <span>Selamat</span>
        </span>

        <span class="line">
          <span>ulang tahun,</span>
        </span>

        <span class="line hero__name">
          <span>Jiya ${heartInline()}</span>
        </span>
      </h1>

      <p class="hero__subtitle">
        Ada sedikit sesuatu yang aku buat khusus buat kamu.
      </p>

      <p class="nametag">
        ${cardData.recipient}
      </p>

      <div class="scroll-hint">
        <span>scroll pelan-pelan</span>
        <span class="scroll-arrow">${icon(ArrowDown)}</span>
      </div>
    </section>

    <!-- CAKE -->
    <section class="card cake-card reveal" data-step="2" aria-labelledby="cakeTitle">

      <div class="section-kicker">01 · make a wish</div>

      <h2 id="cakeTitle">Tiup lilinnya dulu ${icon(Cake, { className: 'icon icon-inline' })}</h2>

      <p class="cake-intro">
        Sebelum lanjut, buat satu permintaan kecil dalam hati.
      </p>

      <div class="cake-stage">
        <div class="cake-glow"></div>

        <button
          class="cake"
          id="cake"
          type="button"
          aria-pressed="false"
          aria-label="Tiup lilin"
        >
          <svg viewBox="8 0 224 244" aria-hidden="true">

            <symbol id="heart" viewBox="0 0 100 92">
              <path d="${HEART}"/>
            </symbol>

            <ellipse
              class="cake-shadow"
              cx="120"
              cy="232"
              rx="82"
              ry="8"
              fill="#3B0A25"
              opacity=".16"
            />

            <rect
              x="14"
              y="222"
              width="212"
              height="14"
              rx="7"
              fill="#FFF7F2"
              stroke="#3B0A25"
              stroke-width="3"
            />

            <rect
              x="34"
              y="146"
              width="172"
              height="76"
              fill="#FFB9D6"
              stroke="#3B0A25"
              stroke-width="3"
            />

            <g class="face">

              <g class="open">
                <ellipse
                  cx="96"
                  cy="196"
                  rx="4"
                  ry="5.5"
                  fill="#3B0A25"
                />

                <ellipse
                  cx="144"
                  cy="196"
                  rx="4"
                  ry="5.5"
                  fill="#3B0A25"
                />

                <circle
                  cx="97.4"
                  cy="194"
                  r="1.4"
                  fill="#FFF7F2"
                />

                <circle
                  cx="145.4"
                  cy="194"
                  r="1.4"
                  fill="#FFF7F2"
                />
              </g>

              <g
                class="closed"
                fill="none"
                stroke="#3B0A25"
                stroke-width="3"
                stroke-linecap="round"
              >
                <path d="M89 198 q7 -9 14 0"/>
                <path d="M137 198 q7 -9 14 0"/>
              </g>

              <ellipse
                cx="78"
                cy="205"
                rx="8"
                ry="4.5"
                fill="#FF6FA5"
              />

              <ellipse
                cx="162"
                cy="205"
                rx="8"
                ry="4.5"
                fill="#FF6FA5"
              />

              <path
                class="mouth-a"
                d="M111 203 q9 8 18 0"
                fill="none"
                stroke="#3B0A25"
                stroke-width="3"
                stroke-linecap="round"
              />

              <path
                class="mouth-b"
                d="M108 201 q12 16 24 0 Z"
                fill="#F2307F"
                stroke="#3B0A25"
                stroke-width="3"
                stroke-linejoin="round"
              />

            </g>

            <path
              d="M34 140 H206 V154 H166 V174 a8 8 0 0 1 -16 0 V154 H114 V164 a8 8 0 0 1 -16 0 V154 H64 V174 a8 8 0 0 1 -16 0 V154 H34 Z"
              fill="#F2307F"
              stroke="#3B0A25"
              stroke-width="3"
              stroke-linejoin="round"
            />

            <rect
              x="64"
              y="100"
              width="112"
              height="46"
              fill="#FFF7F2"
              stroke="#3B0A25"
              stroke-width="3"
            />

            <use
              href="#heart"
              x="76"
              y="129"
              width="15"
              height="14"
              fill="#F2307F"
              stroke="#3B0A25"
              stroke-width="7"
              stroke-linejoin="round"
            />

            <use
              href="#heart"
              x="112"
              y="129"
              width="15"
              height="14"
              fill="#F2307F"
              stroke="#3B0A25"
              stroke-width="7"
              stroke-linejoin="round"
            />

            <use
              href="#heart"
              x="148"
              y="129"
              width="15"
              height="14"
              fill="#F2307F"
              stroke="#3B0A25"
              stroke-width="7"
              stroke-linejoin="round"
            />

            <path
              d="M64 94 H176 V106 H150 V120 a7 7 0 0 1 -14 0 V106 H96 V114 a7 7 0 0 1 -14 0 V106 H64 Z"
              fill="#FF8DBB"
              stroke="#3B0A25"
              stroke-width="3"
              stroke-linejoin="round"
            />

            <rect
              x="114"
              y="52"
              width="12"
              height="42"
              fill="#FFF7F2"
              stroke="#3B0A25"
              stroke-width="3"
            />

            <path
              d="M116.5 62 H123.5 M116.5 74 H123.5 M116.5 86 H123.5"
              stroke="#F2307F"
              stroke-width="5"
            />

            <path
              d="M120 52 V44"
              stroke="#3B0A25"
              stroke-width="3"
              stroke-linecap="round"
            />

            <g class="flame">
              <path
                d="M120 8 C132 22 138 32 131 41 C127 46 113 46 109 41 C102 32 108 22 120 8 Z"
                fill="#FFF7F2"
                stroke="#3B0A25"
                stroke-width="3"
                stroke-linejoin="round"
              />

              <path
                d="M120 24 C125 30 127 34 124 38 C122 40 118 40 116 38 C113 34 115 30 120 24 Z"
                fill="#F2307F"
              />
            </g>

            <circle
              class="smoke smoke--1"
              cx="120"
              cy="40"
              r="6"
              fill="#FFF7F2"
              stroke="#3B0A25"
              stroke-width="3"
            />

            <circle
              class="smoke smoke--2"
              cx="120"
              cy="40"
              r="5"
              fill="#FFF7F2"
              stroke="#3B0A25"
              stroke-width="3"
            />

            <circle
              class="smoke smoke--3"
              cx="120"
              cy="40"
              r="4"
              fill="#FFF7F2"
              stroke="#3B0A25"
              stroke-width="3"
            />

          </svg>
        </button>
      </div>

      <p class="status" id="cakeStatus" role="status">
        Klik kuenya untuk meniup lilin.
      </p>

      <div class="interaction-hint">
        <span>${icon(MousePointerClick)}</span>
        tap the cake
      </div>
    </section>

    <!-- LETTER -->
    <section
      class="card letter reveal"
      data-step="3"
      aria-labelledby="letterTitle"
    >

      <div class="section-kicker">02 · a little letter</div>

      <div class="card__head">
        <div>
          <h2 id="letterTitle">Surat untuk ${cardData.nickname}</h2>
          <p class="section-subtitle">
            Ada beberapa kata yang ingin aku sampaikan.
          </p>
        </div>

        <span class="chip" id="letterChip">
          Belum dibuka
        </span>
      </div>

      <button
        class="envelope"
        id="envelope"
        type="button"
        aria-expanded="false"
        aria-controls="letterBody"
      >

        <span class="envelope__paper"></span>

        <span class="envelope__heart">${heartInline()}</span>

        <span class="seal">
          Buka
        </span>

        <span class="envelope__hint">
          Ada surat di dalam.<br />
          Klik untuk membukanya ${heartInline()}
        </span>

      </button>

      <div id="letterBody" hidden>

        <div class="letter-paper">

          <div class="letter-paper__decor">
            <span>${heartInline()}</span>
            <span>${icon(Sparkle)}</span>
            <span>${heartInline()}</span>
          </div>

          <p class="letter__text">
            <span class="sr-only" id="letterFull"></span>
            <span id="typed" aria-hidden="true"></span>
          </p>

          ${
            cardData.sender
              ? `<p class="letter__from">${cardData.sender}</p>`
              : ''
          }

        </div>

        <div class="letter__actions">
          <button class="btn" id="closeLetter" type="button">
            ${icon(Undo2, { className: 'icon icon-inline' })} Lipat lagi
          </button>
        </div>

      </div>
    </section>

    <!-- NOTES -->
    <section
      class="card notes reveal"
      data-step="4"
      aria-labelledby="notesTitle"
    >

      <div class="section-kicker">03 · little wishes</div>

      <div class="card__head">

        <div>
          <h2 id="notesTitle">
            Harapan untuk setahun ke depan
          </h2>

          <p class="section-subtitle">
            Semoga satu per satu hal baik datang.
          </p>
        </div>

        <span class="chip" id="notesPager">
          1 dari ${cardData.notes.length}
        </span>

      </div>

      <div class="notes__page" id="notesPage">

        <div class="notes__emoji" id="notesEmoji">
          ${icon(Flower2)}
        </div>

        <h3 class="notes__kind" id="notesKind"></h3>

        <ul class="notes__list" id="notesList"></ul>

      </div>

      <div class="notes__nav">

        <button
          class="btn"
          id="prevNote"
          type="button"
        >
          ${icon(ArrowLeft, { className: 'icon icon-inline' })} Sebelumnya
        </button>

        <button
          class="btn btn--rose"
          id="nextNote"
          type="button"
        >
          Berikutnya ${icon(ArrowRight, { className: 'icon icon-inline' })}
        </button>

      </div>

    </section>

    <!-- MUSIC -->
    <section
      class="card music reveal"
      id="musicCard"
      data-step="5"
      aria-labelledby="musicTitle"
    >

      <div class="music__stars" aria-hidden="true">
        <span>${icon(Sparkle)}</span>
        <span>${icon(Sparkles)}</span>
        <span>${heartInline()}</span>
        <span>${icon(Sparkle)}</span>
        <span>${heartInline()}</span>
      </div>

      <div class="music__top">

        <div class="vinyl-wrap">

          <div class="vinyl-shadow"></div>

          <div class="vinyl" aria-hidden="true">

            <svg viewBox="0 0 160 160">

              <circle
                cx="80"
                cy="80"
                r="76"
                fill="#3B0A25"
              />

              <circle
                cx="80"
                cy="80"
                r="62"
                fill="none"
                stroke="#FF8DBB"
                stroke-opacity=".35"
                stroke-width="1.5"
              />

              <circle
                cx="80"
                cy="80"
                r="50"
                fill="none"
                stroke="#FF8DBB"
                stroke-opacity=".35"
                stroke-width="1.5"
              />

              <path
                d="M28 62 A56 56 0 0 1 62 28"
                fill="none"
                stroke="#FFF7F2"
                stroke-opacity=".6"
                stroke-width="4"
                stroke-linecap="round"
              />

              <circle
                cx="80"
                cy="80"
                r="27"
                fill="#FF8DBB"
                stroke="#FFF7F2"
                stroke-width="3"
              />

              <svg
                x="66"
                y="67"
                width="28"
                height="26"
                viewBox="0 0 100 92"
              >
                <path
                  d="${HEART}"
                  fill="#F2307F"
                  stroke="#3B0A25"
                  stroke-width="7"
                  stroke-linejoin="round"
                />
              </svg>

            </svg>

          </div>

        </div>

        <div class="music__copy">

          <div class="music__badge">
            ${icon(Music, { className: 'icon icon-inline' })} now playing
          </div>

          <h2 id="musicTitle">
            Satu lagu untuk kamu
          </h2>

          <p>
            Kamu sudah sampai di bagian terakhir.
            Nyalakan lagu ini dan nikmati suasananya ${heartInline()}
          </p>

          <button
            class="btn btn--ink music-btn"
            id="musicBtn"
            type="button"
          >
            ${icon(Play, { className: 'icon icon-inline' })} Putar lagu
          </button>

        </div>

      </div>

      <div class="player" id="playerBox" hidden>
        <div id="yt-player"></div>
      </div>

      <div class="music__footer">
        <span>${icon(Headphones, { className: 'icon icon-inline' })} listen while scrolling back up</span>
        <span>${heartInline()}</span>
      </div>

    </section>

    <!-- FINAL -->
    <section class="party reveal" data-step="6">

      <div class="party__message">

        <span class="party__emoji">${icon(PartyPopper)}</span>

        <h2>
          That's all for today ${heartInline()}
        </h2>

        <p>
          Semoga hari ini jadi salah satu hari
          yang kamu ingat dengan senyum.
        </p>

      </div>

      <div class="pearls" aria-hidden="true"></div>

      <div class="party__row">

        <button
          class="party__btn"
          id="partyBtn"
          type="button"
        >
          ${icon(Sparkles, { className: 'icon icon-inline' })} Lempar konfeti ${icon(Sparkles, { className: 'icon icon-inline' })}
        </button>

        <p class="party__note">
          Boleh ditekan berkali-kali.
        </p>

      </div>

    </section>

  </main>
`

/* =========================================================
   CAKE
========================================================= */

const cake = document.getElementById('cake')
const cakeStatus = document.getElementById('cakeStatus')

cake.addEventListener('click', () => {
  const blown = cake.classList.toggle('is-blown')

  cake.setAttribute('aria-pressed', String(blown))

  cake.setAttribute(
    'aria-label',
    blown ? 'Nyalakan lilin lagi' : 'Tiup lilin'
  )

  if (blown) {
    cakeStatus.innerHTML =
      `Lilinnya padam. Buat permintaan dulu ${heartInline()}`

    fire({
      particleCount: 90,
      spread: 75,
      startVelocity: 35,
      origin: {
        x: 0.5,
        y: 0.45,
      },
    })

    createHeartBurst()
  } else {
    cakeStatus.textContent =
      'Klik kuenya untuk meniup lilin.'
  }
})

/* =========================================================
   LETTER
========================================================= */

const envelope = document.getElementById('envelope')
const letterBody = document.getElementById('letterBody')
const letterChip = document.getElementById('letterChip')
const typed = document.getElementById('typed')
const closeLetter = document.getElementById('closeLetter')
const letterFull = document.getElementById('letterFull')

letterFull.textContent = cardData.greeting

let typeTimer = null

function finishTyping() {
  clearInterval(typeTimer)
  typeTimer = null

  typed.textContent = cardData.greeting

  letterBody.classList.remove('is-typing')
}

function openLetter() {
  envelope.hidden = true

  envelope.setAttribute('aria-expanded', 'true')

  letterBody.hidden = false

  letterChip.textContent = 'Sudah dibuka'

  fire({
    particleCount: 45,
    spread: 55,
    origin: {
      y: 0.7,
    },
  })

  createHeartBurst()

  if (reduceMotion) {
    typed.textContent = cardData.greeting
    return
  }

  typed.textContent = ''

  letterBody.classList.add('is-typing')

  let i = 0

  typeTimer = setInterval(() => {
    i += 2

    typed.textContent =
      cardData.greeting.slice(0, i)

    if (i >= cardData.greeting.length) {
      finishTyping()
    }
  }, 18)

  setTimeout(() => {
    closeLetter.focus()
  }, 100)
}

function sealLetter() {
  if (typeTimer) {
    finishTyping()
  }

  letterBody.hidden = true

  envelope.hidden = false

  envelope.setAttribute('aria-expanded', 'false')

  letterChip.textContent = 'Belum dibuka'

  envelope.focus()
}

envelope.addEventListener('click', openLetter)
closeLetter.addEventListener('click', sealLetter)

letterBody.addEventListener('click', () => {
  if (typeTimer) {
    finishTyping()
  }
})

/* =========================================================
   NOTES
========================================================= */

const notesPage = document.getElementById('notesPage')
const notesKind = document.getElementById('notesKind')
const notesList = document.getElementById('notesList')
const notesPager = document.getElementById('notesPager')
const notesEmoji = document.getElementById('notesEmoji')
const prevNote = document.getElementById('prevNote')
const nextNote = document.getElementById('nextNote')

let noteIndex = 0

// Icon per note "page" (was: ['🌷', '🌸', '💗'])
const noteIcons = [Flower2, Flower, Heart]

function renderNote(animate = false) {
  const page = cardData.notes[noteIndex]

  const last =
    noteIndex === cardData.notes.length - 1

  notesPage.dataset.tone = page.tone

  notesKind.textContent = page.title

  const noteIconNode = noteIcons[noteIndex] || Heart

  notesEmoji.innerHTML = icon(noteIconNode, {
    fill: noteIconNode === Heart ? 'currentColor' : 'none',
  })

  notesList.replaceChildren(
    ...page.items.map((text, index) => {
      const li = document.createElement('li')

      li.style.setProperty(
        '--item-delay',
        `${index * 70}ms`
      )

      li.innerHTML = `
        <span class="note-heart">${heartFilled('icon')}</span>
        <span>${text}</span>
      `

      return li
    })
  )

  notesPager.textContent =
    `${noteIndex + 1} dari ${cardData.notes.length}`

  prevNote.disabled = noteIndex === 0

  nextNote.innerHTML = last
    ? `Selesai ${heartInline()}`
    : `Berikutnya ${icon(ArrowRight, { className: 'icon icon-inline' })}`

  if (animate) {
    notesPage.classList.remove('turn')

    void notesPage.offsetWidth

    notesPage.classList.add('turn')
  }
}

prevNote.addEventListener('click', () => {
  if (noteIndex > 0) {
    noteIndex--

    renderNote(true)
  }
})

nextNote.addEventListener('click', () => {
  if (noteIndex < cardData.notes.length - 1) {
    noteIndex++

    renderNote(true)
  } else {
    fire({
      particleCount: 80,
      spread: 70,
      startVelocity: 35,
      origin: {
        y: 0.75,
      },
    })

    createHeartBurst()

    document
      .getElementById('musicCard')
      .scrollIntoView({
        behavior: reduceMotion
          ? 'auto'
          : 'smooth',
        block: 'center',
      })
  }
})

renderNote(false)

/* =========================================================
   MUSIC / YOUTUBE
========================================================= */

const musicCard =
  document.getElementById('musicCard')

const musicBtn =
  document.getElementById('musicBtn')

const playerBox =
  document.getElementById('playerBox')

let ytPlayer = null
let ytStarting = false
let isPlaying = false

function setPlaying(value) {
  isPlaying = value

  musicCard.classList.toggle(
    'is-playing',
    value
  )

  musicBtn.innerHTML = value
    ? `${icon(Pause, { className: 'icon icon-inline' })} Jeda lagu`
    : `${icon(Play, { className: 'icon icon-inline' })} Putar lagu`
}

function loadYouTubeApi() {
  return new Promise((resolve, reject) => {
    if (
      window.YT &&
      window.YT.Player
    ) {
      resolve()
      return
    }

    const previous =
      window.onYouTubeIframeAPIReady

    window.onYouTubeIframeAPIReady = () => {
      if (previous) previous()

      resolve()
    }

    const script =
      document.createElement('script')

    script.src =
      'https://www.youtube.com/iframe_api'

    script.onerror = reject

    document.head.appendChild(script)
  })
}

async function startMusic() {
  ytStarting = true

  musicBtn.disabled = true

  musicBtn.textContent = 'Memuat lagu...'

  playerBox.hidden = false

  try {
    await loadYouTubeApi()

    ytPlayer =
      new window.YT.Player('yt-player', {
        width: '100%',
        height: '100%',

        videoId: cardData.youtubeId,

        playerVars: {
          autoplay: 1,
          controls: 1,
          loop: 1,
          playlist: cardData.youtubeId,
          playsinline: 1,
          rel: 0,
        },

        events: {
          onReady: (event) => {
            musicBtn.disabled = false

            event.target.playVideo()

            fire({
              particleCount: 70,
              spread: 60,
              origin: {
                y: 0.65,
              },
            })
          },

          onStateChange: (event) => {
            const S =
              window.YT.PlayerState

            if (
              event.data === S.PLAYING
            ) {
              setPlaying(true)
            }

            if (
              event.data === S.PAUSED ||
              event.data === S.ENDED
            ) {
              setPlaying(false)
            }
          },
        },
      })
  } catch {
    playerBox.hidden = true

    musicBtn.disabled = false

    musicBtn.textContent =
      'Gagal memuat, coba lagi'
  } finally {
    ytStarting = false
  }
}

musicBtn.addEventListener('click', () => {
  if (!ytPlayer) {
    if (!ytStarting) {
      startMusic()
    }

    return
  }

  if (isPlaying) {
    ytPlayer.pauseVideo()
  } else {
    ytPlayer.playVideo()
  }
})

/* =========================================================
   CONFETTI
========================================================= */

const partyBtn =
  document.getElementById('partyBtn')

partyBtn.addEventListener('click', () => {
  fire({
    particleCount: 110,
    angle: 60,
    spread: 70,
    startVelocity: 55,
    origin: {
      x: 0,
      y: 0.85,
    },
  })

  fire({
    particleCount: 110,
    angle: 120,
    spread: 70,
    startVelocity: 55,
    origin: {
      x: 1,
      y: 0.85,
    },
  })

  createHeartBurst()
})

/* =========================================================
   FLOATING HEARTS
========================================================= */

const floatingLayer =
  document.getElementById('floatingLayer')

// Was: ['♡', '♥', '✦', '✧', '⋆']
const floatingIconHtml = [
  icon(Heart),
  heartFilled('icon'),
  icon(Sparkle),
  icon(Sparkles),
  icon(Star),
]

function createFloatingHeart() {
  if (reduceMotion) return

  const element =
    document.createElement('span')

  element.className =
    'floating-heart'

  element.innerHTML =
    floatingIconHtml[
      Math.floor(
        Math.random() *
          floatingIconHtml.length
      )
    ]

  element.style.left =
    `${Math.random() * 100}%`

  element.style.setProperty(
    '--drift',
    `${Math.random() * 180 - 90}px`
  )

  element.style.setProperty(
    '--duration',
    `${5 + Math.random() * 4}s`
  )

  element.style.setProperty(
    '--size',
    `${12 + Math.random() * 14}px`
  )

  floatingLayer.appendChild(element)

  setTimeout(() => {
    element.remove()
  }, 9000)
}

setInterval(
  createFloatingHeart,
  1800
)

/* =========================================================
   HEART BURST
========================================================= */

function createHeartBurst() {
  if (reduceMotion) return

  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const heart =
        document.createElement('span')

      heart.className =
        'burst-heart'

      // Was: Math.random() > 0.5 ? '♡' : '♥'
      heart.innerHTML =
        Math.random() > 0.5
          ? icon(Heart)
          : heartFilled('icon')

      heart.style.left =
        `${50 + Math.random() * 20 - 10}%`

      heart.style.top =
        `${50 + Math.random() * 10 - 5}%`

      heart.style.setProperty(
        '--x',
        `${Math.random() * 240 - 120}px`
      )

      heart.style.setProperty(
        '--y',
        `${Math.random() * -180 - 40}px`
      )

      floatingLayer.appendChild(heart)

      setTimeout(() => {
        heart.remove()
      }, 1300)
    }, i * 45)
  }
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll('.reveal')

const revealObserver =
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            'is-visible'
          )

          revealObserver.unobserve(
            entry.target
          )
        }
      })
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px',
    }
  )

revealElements.forEach((element) => {
  revealObserver.observe(element)
})

/* =========================================================
   PROGRESS
========================================================= */

const progressBar =
  document.getElementById('progressBar')

const progressStep =
  document.getElementById('progressStep')

const progressSections =
  document.querySelectorAll(
    '[data-step]'
  )

const TOTAL_STEPS = progressSections.length

function updateProgress() {
  const scrollTop =
    window.scrollY

  const maxScroll =
    document.documentElement.scrollHeight -
    window.innerHeight

  const percentage =
    maxScroll <= 0
      ? 0
      : (scrollTop / maxScroll) * 100

  progressBar.style.width =
    `${Math.min(100, percentage)}%`

  let current = 1

  progressSections.forEach(
    (section, index) => {
      const rect =
        section.getBoundingClientRect()

      if (
        rect.top <
        window.innerHeight * 0.55
      ) {
        current = index + 1
      }
    }
  )

  progressStep.textContent =
    `${Math.min(current, TOTAL_STEPS)} / ${TOTAL_STEPS}`
}

window.addEventListener(
  'scroll',
  updateProgress,
  { passive: true }
)

updateProgress()

/* =========================================================
   MUSIC CARD EXTRA ATTENTION
========================================================= */

const musicObserver =
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !isPlaying
        ) {
          musicCard.classList.add(
            'music-attention'
          )

          setTimeout(() => {
            musicCard.classList.remove(
              'music-attention'
            )
          }, 1800)
        }
      })
    },
    {
      threshold: 0.5,
    }
  )

musicObserver.observe(musicCard)