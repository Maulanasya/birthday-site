import './style.css'
import confetti from 'canvas-confetti'

const cardData = {
  recipient: 'Jiya Zara Mutiara',
  nickname: 'Jiya',
  stickerDay: '3',
  stickerMonth: 'Mar',
  greeting:
    'Selamat ulang tahun! Semoga di umur yang baru ini, banyak hal baik datang ke kamu. Semoga rencana-rencana yang lagi kamu jalanin bisa berjalan satu per satu, dan kalau ada yang belum belum sesuai harapan, semoga kamu tetap punya alasan untuk terus jalan. Semoga tahun ini lebih banyak cerita baiknya, lebih banyak waktu untuk hal-hal yang kamu suka, dan tentunya lebih banyak alasan buat senyum. Nggak perlu semuanya sempurna, yang penting kamu bisa menikmati prosesnya.',
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

const palette = ['#F2307F', '#FF8DBB', '#FFD0E2', '#FFF7F2', '#3B0A25']
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const fire = (opts) =>
  confetti({ colors: palette, disableForReducedMotion: true, ...opts })

const HEART = 'M50 88 C20 62 4 44 4 27 C4 14 14 5 27 5 C37 5 45 10 50 18 C55 10 63 5 73 5 C86 5 96 14 96 27 C96 44 80 62 50 88 Z'
const SPARK = 'M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z'

document.querySelector('#app').innerHTML = `
  <main class="page">

    <section class="card hero">
      <svg class="spark spark--a" viewBox="0 0 24 24" aria-hidden="true"><path d="${SPARK}"/></svg>
      <svg class="spark spark--b" viewBox="0 0 24 24" aria-hidden="true"><path d="${SPARK}"/></svg>
      <svg class="spark spark--c" viewBox="0 0 24 24" aria-hidden="true"><path d="${SPARK}"/></svg>

      <div class="sticker" aria-hidden="true">
        <svg viewBox="0 0 100 92">
          <path d="${HEART}" fill="#FFF7F2" stroke="#3B0A25" stroke-width="4" stroke-linejoin="round"/>
          <text x="50" y="44" font-size="26">${cardData.stickerDay}</text>
          <text x="50" y="62" font-size="14">${cardData.stickerMonth}</text>
        </svg>
      </div>

      <h1 class="hero__title">
        <span class="line"><span>Selamat</span></span>
        <span class="line"><span>ulang tahun,</span></span>
      </h1>
      <p class="nametag">${cardData.recipient}</p>
    </section>

    <section class="card cake-card" aria-label="Kue ulang tahun">
      <button class="cake" id="cake" type="button" aria-pressed="false" aria-label="Tiup lilin">
        <svg viewBox="8 0 224 244" aria-hidden="true">
          <symbol id="heart" viewBox="0 0 100 92"><path d="${HEART}"/></symbol>

          <rect x="14" y="222" width="212" height="14" rx="7" fill="#FFF7F2" stroke="#3B0A25" stroke-width="3"/>

          <rect x="34" y="146" width="172" height="76" fill="#FFB9D6" stroke="#3B0A25" stroke-width="3"/>
          <g class="face">
            <g class="open">
              <ellipse cx="96" cy="196" rx="4" ry="5.5" fill="#3B0A25"/>
              <ellipse cx="144" cy="196" rx="4" ry="5.5" fill="#3B0A25"/>
              <circle cx="97.4" cy="194" r="1.4" fill="#FFF7F2"/>
              <circle cx="145.4" cy="194" r="1.4" fill="#FFF7F2"/>
            </g>
            <g class="closed" fill="none" stroke="#3B0A25" stroke-width="3" stroke-linecap="round">
              <path d="M89 198 q7 -9 14 0"/>
              <path d="M137 198 q7 -9 14 0"/>
            </g>
            <ellipse cx="78" cy="205" rx="8" ry="4.5" fill="#FF6FA5"/>
            <ellipse cx="162" cy="205" rx="8" ry="4.5" fill="#FF6FA5"/>
            <path class="mouth-a" d="M111 203 q9 8 18 0" fill="none" stroke="#3B0A25" stroke-width="3" stroke-linecap="round"/>
            <path class="mouth-b" d="M108 201 q12 16 24 0 Z" fill="#F2307F" stroke="#3B0A25" stroke-width="3" stroke-linejoin="round"/>
          </g>

          <path d="M34 140 H206 V154 H166 V174 a8 8 0 0 1 -16 0 V154 H114 V164 a8 8 0 0 1 -16 0 V154 H64 V174 a8 8 0 0 1 -16 0 V154 H34 Z"
                fill="#F2307F" stroke="#3B0A25" stroke-width="3" stroke-linejoin="round"/>

          <rect x="64" y="100" width="112" height="46" fill="#FFF7F2" stroke="#3B0A25" stroke-width="3"/>
          <use href="#heart" x="76" y="129" width="15" height="14" fill="#F2307F" stroke="#3B0A25" stroke-width="7" stroke-linejoin="round"/>
          <use href="#heart" x="112" y="129" width="15" height="14" fill="#F2307F" stroke="#3B0A25" stroke-width="7" stroke-linejoin="round"/>
          <use href="#heart" x="148" y="129" width="15" height="14" fill="#F2307F" stroke="#3B0A25" stroke-width="7" stroke-linejoin="round"/>
          <path d="M64 94 H176 V106 H150 V120 a7 7 0 0 1 -14 0 V106 H96 V114 a7 7 0 0 1 -14 0 V106 H64 Z"
                fill="#FF8DBB" stroke="#3B0A25" stroke-width="3" stroke-linejoin="round"/>

          <rect x="114" y="52" width="12" height="42" fill="#FFF7F2" stroke="#3B0A25" stroke-width="3"/>
          <path d="M116.5 62 H123.5 M116.5 74 H123.5 M116.5 86 H123.5" stroke="#F2307F" stroke-width="5"/>
          <path d="M120 52 V44" stroke="#3B0A25" stroke-width="3" stroke-linecap="round"/>

          <g class="flame">
            <path d="M120 8 C132 22 138 32 131 41 C127 46 113 46 109 41 C102 32 108 22 120 8 Z"
                  fill="#FFF7F2" stroke="#3B0A25" stroke-width="3" stroke-linejoin="round"/>
            <path d="M120 24 C125 30 127 34 124 38 C122 40 118 40 116 38 C113 34 115 30 120 24 Z"
                  fill="#F2307F"/>
          </g>

          <circle class="smoke" cx="120" cy="40" r="6" fill="#FFF7F2" stroke="#3B0A25" stroke-width="3"/>
          <circle class="smoke" cx="120" cy="40" r="5" fill="#FFF7F2" stroke="#3B0A25" stroke-width="3"/>
          <circle class="smoke" cx="120" cy="40" r="4" fill="#FFF7F2" stroke="#3B0A25" stroke-width="3"/>
        </svg>
      </button>
      <p class="status" id="cakeStatus" role="status">Klik kuenya untuk meniup lilin.</p>
    </section>

    <section class="card letter" aria-labelledby="letterTitle">
      <div class="card__head">
        <h2 id="letterTitle">Surat untuk ${cardData.nickname}</h2>
        <span class="chip" id="letterChip">Belum dibuka</span>
      </div>

      <button class="envelope" id="envelope" type="button" aria-expanded="false" aria-controls="letterBody">
        <span class="seal">Buka</span>
        <span class="envelope__hint">Ada surat di dalam. Klik untuk membukanya.</span>
      </button>

      <div id="letterBody" hidden>
        <p class="letter__text">
          <span class="sr-only" id="letterFull"></span>
          <span id="typed" aria-hidden="true"></span>
        </p>
        ${cardData.sender ? `<p class="letter__from">${cardData.sender}</p>` : ''}
        <div class="letter__actions">
          <button class="btn" id="closeLetter" type="button">Lipat lagi</button>
        </div>
      </div>
    </section>

    <section class="card notes" aria-labelledby="notesTitle">
      <div class="card__head">
        <h2 id="notesTitle">Harapan untuk setahun ke depan</h2>
        <span class="chip" id="notesPager">1 dari ${cardData.notes.length}</span>
      </div>
      <div class="notes__page" id="notesPage">
        <h3 class="notes__kind" id="notesKind"></h3>
        <ul class="notes__list" id="notesList"></ul>
      </div>
      <div class="notes__nav">
        <button class="btn" id="prevNote" type="button">Sebelumnya</button>
        <button class="btn btn--rose" id="nextNote" type="button">Berikutnya</button>
      </div>
    </section>

    <section class="card music" id="musicCard" aria-labelledby="musicTitle">
      <div class="music__top">
        <div class="vinyl" aria-hidden="true">
          <svg viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="76" fill="#3B0A25"/>
            <circle cx="80" cy="80" r="62" fill="none" stroke="#FF8DBB" stroke-opacity=".35" stroke-width="1.5"/>
            <circle cx="80" cy="80" r="50" fill="none" stroke="#FF8DBB" stroke-opacity=".35" stroke-width="1.5"/>
            <path d="M28 62 A56 56 0 0 1 62 28" fill="none" stroke="#FFF7F2" stroke-opacity=".6" stroke-width="4" stroke-linecap="round"/>
            <circle cx="80" cy="80" r="27" fill="#FF8DBB" stroke="#FFF7F2" stroke-width="3"/>
            <svg x="66" y="67" width="28" height="26" viewBox="0 0 100 92"><path d="${HEART}" fill="#F2307F" stroke="#3B0A25" stroke-width="7" stroke-linejoin="round"/></svg>
          </svg>
        </div>
        <div>
          <h2 id="musicTitle">Teman baca</h2>
          <p>Biar suasananya lebih enak.</p>
          <button class="btn btn--ink" id="musicBtn" type="button">Putar lagu</button>
        </div>
      </div>
      <div class="player" id="playerBox" hidden>
        <div id="yt-player"></div>
      </div>
    </section>

    <section class="party">
      <div class="pearls" aria-hidden="true"></div>
      <div class="party__row">
        <button class="party__btn" id="partyBtn" type="button">Lempar konfeti</button>
        <p class="party__note">Boleh ditekan berkali-kali.</p>
      </div>
    </section>

  </main>
`

const cake = document.getElementById('cake')
const cakeStatus = document.getElementById('cakeStatus')

cake.addEventListener('click', () => {
  const blown = cake.classList.toggle('is-blown')
  cake.setAttribute('aria-pressed', String(blown))
  cake.setAttribute('aria-label', blown ? 'Nyalakan lilin lagi' : 'Tiup lilin')

  if (blown) {
    cakeStatus.textContent = 'Lilinnya padam. Buat permintaan dulu, lalu klik lagi untuk menyalakan.'
    fire({ particleCount: 70, spread: 70, origin: { x: 0.8, y: 0.35 } })
  } else {
    cakeStatus.textContent = 'Klik kuenya untuk meniup lilin.'
  }
})

const envelope = document.getElementById('envelope')
const letterBody = document.getElementById('letterBody')
const letterChip = document.getElementById('letterChip')
const typed = document.getElementById('typed')
const closeLetter = document.getElementById('closeLetter')
document.getElementById('letterFull').textContent = cardData.greeting

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
  closeLetter.focus()
  fire({ particleCount: 40, spread: 55, origin: { y: 0.7 } })

  if (reduceMotion) {
    typed.textContent = cardData.greeting
    return
  }

  typed.textContent = ''
  letterBody.classList.add('is-typing')
  let i = 0
  typeTimer = setInterval(() => {
    i += 2
    typed.textContent = cardData.greeting.slice(0, i)
    if (i >= cardData.greeting.length) finishTyping()
  }, 18)
}

function sealLetter() {
  if (typeTimer) finishTyping()
  letterBody.hidden = true
  envelope.hidden = false
  envelope.setAttribute('aria-expanded', 'false')
  letterChip.textContent = 'Belum dibuka'
  envelope.focus()
}

envelope.addEventListener('click', openLetter)
closeLetter.addEventListener('click', sealLetter)
letterBody.addEventListener('click', () => {
  if (typeTimer) finishTyping()
})

const notesPage = document.getElementById('notesPage')
const notesKind = document.getElementById('notesKind')
const notesList = document.getElementById('notesList')
const notesPager = document.getElementById('notesPager')
const prevNote = document.getElementById('prevNote')
const nextNote = document.getElementById('nextNote')
let noteIndex = 0

function renderNote(animate) {
  const page = cardData.notes[noteIndex]
  const last = noteIndex === cardData.notes.length - 1

  notesPage.dataset.tone = page.tone
  notesKind.textContent = page.title
  notesList.replaceChildren(
    ...page.items.map((text) => {
      const li = document.createElement('li')
      li.textContent = text
      return li
    })
  )
  notesPager.textContent = `${noteIndex + 1} dari ${cardData.notes.length}`
  prevNote.disabled = noteIndex === 0
  nextNote.textContent = last ? 'Selesai' : 'Berikutnya'

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
    fire({ particleCount: 50, spread: 60, origin: { y: 0.8 } })
  }
})

renderNote(false)

const musicCard = document.getElementById('musicCard')
const musicBtn = document.getElementById('musicBtn')
const playerBox = document.getElementById('playerBox')
let ytPlayer = null
let ytStarting = false
let isPlaying = false

function setPlaying(value) {
  isPlaying = value
  musicCard.classList.toggle('is-playing', value)
  musicBtn.textContent = value ? 'Jeda lagu' : 'Putar lagu'
}

function loadYouTubeApi() {
  return new Promise((resolve, reject) => {
    if (window.YT && window.YT.Player) return resolve()
    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      if (previous) previous()
      resolve()
    }
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    script.onerror = reject
    document.head.appendChild(script)
  })
}

async function startMusic() {
  ytStarting = true
  musicBtn.disabled = true
  musicBtn.textContent = 'Memuat lagu'
  playerBox.hidden = false

  try {
    await loadYouTubeApi()
    ytPlayer = new window.YT.Player('yt-player', {
      width: '100%',
      height: '100%',
      videoId: cardData.youtubeId,
      playerVars: { autoplay: 1, controls: 1, loop: 1, playlist: cardData.youtubeId, playsinline: 1, rel: 0 },
      events: {
        onReady: (e) => {
          musicBtn.disabled = false
          e.target.playVideo()
        },
        onStateChange: (e) => {
          const S = window.YT.PlayerState
          if (e.data === S.PLAYING) setPlaying(true)
          else if (e.data === S.PAUSED || e.data === S.ENDED) setPlaying(false)
        },
      },
    })
  } catch {
    playerBox.hidden = true
    musicBtn.disabled = false
    musicBtn.textContent = 'Gagal memuat, coba lagi'
  } finally {
    ytStarting = false
  }
}

musicBtn.addEventListener('click', () => {
  if (!ytPlayer) {
    if (!ytStarting) startMusic()
    return
  }
  if (isPlaying) ytPlayer.pauseVideo()
  else ytPlayer.playVideo()
})

document.getElementById('partyBtn').addEventListener('click', () => {
  fire({ particleCount: 90, angle: 60, spread: 65, startVelocity: 55, origin: { x: 0, y: 0.85 } })
  fire({ particleCount: 90, angle: 120, spread: 65, startVelocity: 55, origin: { x: 1, y: 0.85 } })
})