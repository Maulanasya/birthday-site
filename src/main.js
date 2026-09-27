import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Opening, { playOpeningEntrance, hideOpening } from './components/Opening.js'
import confetti from 'canvas-confetti'

import {
  createElement, Heart, Sparkle, Sparkles, Star, Cake, ArrowDown,
  ArrowLeft, ArrowRight, Undo2, Music, Play, Pause, Headphones,
  PartyPopper, Flower, Flower2, MousePointerClick,
} from 'lucide'

gsap.registerPlugin(ScrollTrigger)

/* =========================================================
   ICON HELPER
========================================================= */
function icon(node, { className = 'icon', strokeWidth = 2, fill = 'none' } = {}) {
  return createElement(node, { class: className, 'stroke-width': strokeWidth, fill }).outerHTML
}

const heartInline = (className = 'icon icon-inline') => icon(Heart, { className })
const heartFilled = (className = 'icon icon-inline') => icon(Heart, { className, fill: 'currentColor' })

/* =========================================================
   CARD DATA
========================================================= */
const cardData = {
  recipient: 'Jiya Zara Mutiara',
  nickname: 'Jiya',
  stickerDay: '3',
  stickerMonth: 'Mar',
  greeting:
    'haloo jiya.. selamat ulang tahun yaaa!! semoga di umur jiya yang sekarang ini, banyak banget hal baik yang dateng ke jiya. semoga apa yang lagi jiya usahain dan rencanain sekarang bisa berjalan satu satu, dilancarin semuanya, dan kalo ada beberapa hal yang belum sesuai sama apa yang jiya harapin, semoga jiya tetep punya alasan buat terus jalan dan ga gampang nyerah yaaa. semoga tahun ini lebih banyak cerita cerita baik yang jiya dapetin, lebih banyak waktu buat ngelakuin hal hal yang jiya suka, lebih banyak ketawa, lebih banyak senyum, dan tentunya lebih banyak hal yang bikin jiya bahagiaa. ga harus semuanya sempurna kok, yang penting jiya bisa nikmatin setiap proses yang lagi jiya jalanin hehe. sebenernya aku bingung juga mau ngomong apa lagi wkwkwk, tapi aku cuma pengen nyampein doa doa baik buat jiya di hari ini. semoga panjang umur, sehat selalu, dimudahin dalam segala urusannya, dan semoga hal hal yang jiya semogakan bisa pelan pelan terwujud yaaa. oh iya, maaf juga kalo pemberiannya ga seberapa yaa mungkin sederhana banget, tapi aku kasihnya bener bener dari niat aku sendiri hehe. semoga jiya tetep sukaa, semoga apa yang aku kasih juga bisa berguna buat jiya, dan semoga bisa jadi sedikit hal kecil yang bikin hari ini terasa lebih berkesan, semoga kedepannya jiya selalu dikelilingi orang orang baik, selalu dikasih banyak alasan buat senyum, dan dimanapun jiya berada semoga selalu dipertemukan sama hal hal yang baik. semangatt terus buat kuliahnya yaaa!! jangan lupa istirahat juga hehe ',
  sender: '@maulanasya',
  notes: [
    { tone: 'rose', title: 'Untuk hari ini,', items: [
      'Semoga hari ini jadi hari yang menyenangkan buat kamu',
      'Semoga ada banyak hal kecil yang bikin kamu tersenyum',
      'Nikmati hari ini tanpa perlu mikirin semuanya harus sempurna',
    ]},
    { tone: 'hot', title: 'Untuk hari-hari setelah ini,', items: [
      'Semoga banyak hal baik datang satu per satu',
      'Semoga selalu ada waktu buat istirahat dan melakukan hal yang kamu suka',
      'Semoga setiap urusan yang kamu jalanin selalu dimudahkan',
    ]},
    { tone: 'paper', title: 'Untuk satu tahun ke depan,', items: [
      'Semoga kamu selalu sehat dan punya waktu yang cukup buat diri sendiri',
      'Semoga rencana-rencana yang kamu punya bisa tercapai satu per satu',
      'Semoga ada lebih banyak cerita baik yang bisa kamu kenang nantinya',
    ]},
  ],
  youtubeId: 'KZeI9I875Ig',
}

const palette = ['#F2307F', '#FF8DBB', '#FFD0E2', '#FFF7F2', '#3B0A25']
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
function isDesktopLayout() { return window.matchMedia('(min-width: 861px)').matches }
const fire = (opts = {}) => confetti({ colors: palette, disableForReducedMotion: true, ...opts })

const HEART = 'M50 88 C20 62 4 44 4 27 C4 14 14 5 27 5 C37 5 45 10 50 18 C55 10 63 5 73 5 C86 5 96 14 96 27 C96 44 80 62 50 88 Z'
const SPARK = 'M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z'
const confettiIcons = [Sparkle, Heart, Sparkles, Heart, Sparkle]

/* =========================================================
   MAIN TEMPLATE
========================================================= */
document.querySelector('#app').innerHTML = `
  ${Opening(cardData, HEART)}

  <div class="floating-layer" id="floatingLayer" aria-hidden="true"></div>

  <div class="progress-wrap" id="progressWrap">
    <div class="progress-inner">
      <span class="progress-label">Jiya's birthday ${heartInline()}</span>
      <div class="progress-track"><div class="progress-bar" id="progressBar"></div></div>
      <span class="progress-step" id="progressStep">1 / 6</span>
    </div>
  </div>

  <main class="page">

    <section class="card hero reveal" data-step="1">
      <div class="hero__confetti" aria-hidden="true">
        ${confettiIcons.map((i) => `<span>${icon(i)}</span>`).join('')}
      </div>
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
      <div class="hero__eyebrow">
        <span>${icon(Flower2, { className: 'icon icon-inline' })}</span>
        today is your special day
        <span>${icon(Flower2, { className: 'icon icon-inline' })}</span>
      </div>
      <h1 class="hero__title">
        <span class="line"><span>Selamat</span></span>
        <span class="line"><span>ulang tahun,</span></span>
        <span class="line hero__name"><span>Jiya ${heartInline()}</span></span>
      </h1>
      <p class="hero__subtitle">Ada sedikit sesuatu yang aku siapin buat kamu, hehe :)</p>
      <p class="nametag">${cardData.recipient}</p>
      <div class="scroll-hint"><span>scroll pelan-pelan</span><span class="scroll-arrow">${icon(ArrowDown)}</span></div>
    </section>

    <section class="card cake-card reveal" data-step="2" aria-labelledby="cakeTitle">
      <div class="section-kicker">01 · make a wish</div>
      <h2 id="cakeTitle">Tiup lilinnya dulu ${icon(Cake, { className: 'icon icon-inline' })}</h2>
      <p class="cake-intro">Sebelum lanjut, jangan lupa buat satu harapan kecil dalam hati yaa.</p>
      <div class="cake-stage">
        <div class="cake-glow"></div>
        <button class="cake" id="cake" type="button" aria-pressed="false" aria-label="Tiup lilin">
          <svg viewBox="8 0 224 244" aria-hidden="true">
            <symbol id="heart" viewBox="0 0 100 92"><path d="${HEART}"/></symbol>
            <ellipse class="cake-shadow" cx="120" cy="232" rx="82" ry="8" fill="#3B0A25" opacity=".16"/>
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
            <path d="M34 140 H206 V154 H166 V174 a8 8 0 0 1 -16 0 V154 H114 V164 a8 8 0 0 1 -16 0 V154 H64 V174 a8 8 0 0 1 -16 0 V154 H34 Z" fill="#F2307F" stroke="#3B0A25" stroke-width="3" stroke-linejoin="round"/>
            <rect x="64" y="100" width="112" height="46" fill="#FFF7F2" stroke="#3B0A25" stroke-width="3"/>
            <use href="#heart" x="76" y="129" width="15" height="14" fill="#F2307F" stroke="#3B0A25" stroke-width="7" stroke-linejoin="round"/>
            <use href="#heart" x="112" y="129" width="15" height="14" fill="#F2307F" stroke="#3B0A25" stroke-width="7" stroke-linejoin="round"/>
            <use href="#heart" x="148" y="129" width="15" height="14" fill="#F2307F" stroke="#3B0A25" stroke-width="7" stroke-linejoin="round"/>
            <path d="M64 94 H176 V106 H150 V120 a7 7 0 0 1 -14 0 V106 H96 V114 a7 7 0 0 1 -14 0 V106 H64 Z" fill="#FF8DBB" stroke="#3B0A25" stroke-width="3" stroke-linejoin="round"/>
            <rect x="114" y="52" width="12" height="42" fill="#FFF7F2" stroke="#3B0A25" stroke-width="3"/>
            <path d="M116.5 62 H123.5 M116.5 74 H123.5 M116.5 86 H123.5" stroke="#F2307F" stroke-width="5"/>
            <path d="M120 52 V44" stroke="#3B0A25" stroke-width="3" stroke-linecap="round"/>
            <g class="flame">
              <path d="M120 8 C132 22 138 32 131 41 C127 46 113 46 109 41 C102 32 108 22 120 8 Z" fill="#FFF7F2" stroke="#3B0A25" stroke-width="3" stroke-linejoin="round"/>
              <path d="M120 24 C125 30 127 34 124 38 C122 40 118 40 116 38 C113 34 115 30 120 24 Z" fill="#F2307F"/>
            </g>
            <circle class="smoke smoke--1" cx="120" cy="40" r="6" fill="#FFF7F2" stroke="#3B0A25" stroke-width="3"/>
            <circle class="smoke smoke--2" cx="120" cy="40" r="5" fill="#FFF7F2" stroke="#3B0A25" stroke-width="3"/>
            <circle class="smoke smoke--3" cx="120" cy="40" r="4" fill="#FFF7F2" stroke="#3B0A25" stroke-width="3"/>
          </svg>
        </button>
      </div>
      <p class="status" id="cakeStatus" role="status">Klik kuenya untuk meniup lilin.</p>
      <div class="interaction-hint"><span>${icon(MousePointerClick)}</span>tap the cake</div>
    </section>

    <section class="card letter reveal" data-step="3" aria-labelledby="letterTitle">
      <div class="section-kicker">02 · a little letter</div>
      <div class="card__head">
        <div>
          <h2 id="letterTitle">Sedikit kata buat ${cardData.nickname}</h2>
          <p class="section-subtitle">Sebenernya bingung mau mulai dari mana, tapi ada beberapa hal yang pengen aku sampaikan.</p>
        </div>
        <span class="chip" id="letterChip">Belum dibuka</span>
      </div>
      <button class="envelope" id="envelope" type="button" aria-expanded="false" aria-controls="letterBody">
        <span class="envelope__paper"></span>
        <span class="envelope__heart">${heartInline()}</span>
        <span class="seal">Buka</span>
        <span class="envelope__hint">Ada sedikit sesuatu buat kamu.<br />Klik untuk membukanya ${heartInline()}</span>
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
          ${cardData.sender ? `<p class="letter__from">${cardData.sender}</p>` : ''}
        </div>
        <div class="letter__actions">
          <button class="btn" id="closeLetter" type="button">
            ${icon(Undo2, { className: 'icon icon-inline' })} Lipat lagi
          </button>
        </div>
      </div>
    </section>

    <section class="card notes reveal" data-step="4" aria-labelledby="notesTitle">
      <div class="section-kicker">03 · little wishes</div>
      <div class="card__head">
        <div>
          <h2 id="notesTitle">Untuk satu tahun ke depan</h2>
          <p class="section-subtitle">Semoga hari-hari ke depannya dipenuhi banyak hal baik.</p>
        </div>
        <span class="chip" id="notesPager">1 dari ${cardData.notes.length}</span>
      </div>
      <div class="notes__page" id="notesPage">
        <div class="notes__emoji" id="notesEmoji">${icon(Flower2)}</div>
        <h3 class="notes__kind" id="notesKind"></h3>
        <ul class="notes__list" id="notesList"></ul>
      </div>
      <div class="notes__nav">
        <button class="btn" id="prevNote" type="button">${icon(ArrowLeft, { className: 'icon icon-inline' })} Sebelumnya</button>
        <button class="btn btn--rose" id="nextNote" type="button">Berikutnya ${icon(ArrowRight, { className: 'icon icon-inline' })}</button>
      </div>
    </section>

    <section class="card music reveal" id="musicCard" data-step="5" aria-labelledby="musicTitle">
      <div class="music__stars" aria-hidden="true">
        <span>${icon(Sparkle)}</span><span>${icon(Sparkles)}</span><span>${heartInline()}</span>
        <span>${icon(Sparkle)}</span><span>${heartInline()}</span>
      </div>
      <div class="music__top">
        <div class="vinyl-wrap">
          <div class="vinyl-shadow"></div>
          <div class="vinyl" aria-hidden="true">
            <svg viewBox="0 0 160 160">
              <circle cx="80" cy="80" r="76" fill="#3B0A25"/>
              <circle cx="80" cy="80" r="62" fill="none" stroke="#FF8DBB" stroke-opacity=".35" stroke-width="1.5"/>
              <circle cx="80" cy="80" r="50" fill="none" stroke="#FF8DBB" stroke-opacity=".35" stroke-width="1.5"/>
              <path d="M28 62 A56 56 0 0 1 62 28" fill="none" stroke="#FFF7F2" stroke-opacity=".6" stroke-width="4" stroke-linecap="round"/>
              <circle cx="80" cy="80" r="27" fill="#FF8DBB" stroke="#FFF7F2" stroke-width="3"/>
              <svg x="66" y="67" width="28" height="26" viewBox="0 0 100 92">
                <path d="${HEART}" fill="#F2307F" stroke="#3B0A25" stroke-width="7" stroke-linejoin="round"/>
              </svg>
            </svg>
          </div>
        </div>
        <div class="music__copy">
          <div class="music__badge">${icon(Music, { className: 'icon icon-inline' })} now playing</div>
          <h2 id="musicTitle">Sebelum selesai</h2>
          <p>Kamu sudah sampai di bagian terakhir. Coba dengerin lagu ini yaa, semoga kamu suka ${heartInline()}</p>
          <button class="btn btn--ink music-btn" id="musicBtn" type="button">${icon(Play, { className: 'icon icon-inline' })} Putar lagu</button>
        </div>
      </div>
      <div class="player" id="playerBox" hidden><div id="yt-player"></div></div>
      <div class="music__footer">
        <span>${icon(Headphones, { className: 'icon icon-inline' })} Boleh sambil scroll lagi dari awal :)</span>
        <span>${heartInline()}</span>
      </div>
    </section>

    <section class="party reveal" data-step="6">
      <div class="party__message">
        <span class="party__emoji">${icon(PartyPopper)}</span>
        <h2>That's all for today ${heartInline()}</h2>
        <p>Semoga hari ini jadi salah satu hari yang kamu ingat dengan senyum.</p>
      </div>
      <div class="pearls" aria-hidden="true"></div>
      <div class="party__row">
        <button class="party__btn" id="partyBtn" type="button">
          ${icon(Sparkles, { className: 'icon icon-inline' })} Lempar konfeti ${icon(Sparkles, { className: 'icon icon-inline' })}
        </button>
        <p class="party__note">Boleh ditekan berkali-kali.</p>
      </div>
    </section>

  </main>
`

/* =========================================================
   FONT-READY GATE
========================================================= */
const appEl = document.getElementById('app')
function revealApp() { appEl.classList.add('fonts-ready') }
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(revealApp).catch(revealApp)
  setTimeout(revealApp, 1200)
} else {
  revealApp()
}

/* =========================================================
   OPENING
========================================================= */
const opening = document.getElementById('opening')
const openBirthday = document.getElementById('openBirthday')

document.body.classList.add('is-locked')

playOpeningEntrance({ reduceMotion })

openBirthday.addEventListener('click', () => {
  if (openBirthday.disabled) return
  openBirthday.disabled = true
  openBirthday.innerHTML = `${icon(Heart, { className: 'icon icon-inline' })} Sebentar yaa...`

  startMusic()

  if (isDesktopLayout()) progressStep.textContent = `2 / ${TOTAL_STEPS}`

  // Memulai animasi halaman secara bersamaan dengan fade-out opening overlay
  initRevealAnimations()
  playHeroEntrance()

  hideOpening(opening, {
    reduceMotion,
    onComplete: () => {
      opening.remove()
      window.scrollTo({ top: 0, behavior: 'auto' })
      ScrollTrigger.refresh()
    },
  })

  document.body.classList.remove('is-locked')
})

/* =========================================================
   AMBIENT / INFINITE GSAP LOOPS
========================================================= */
function floatLoop(el, { y = 10, duration = 3, delay = 0, rotate = null } = {}) {
  if (!el || reduceMotion) return
  const vars = { y: -y, duration, delay, ease: 'sine.inOut', yoyo: true, repeat: -1 }
  if (rotate !== null) vars.rotate = rotate
  gsap.to(el, vars)
}

function pulseLoop(el, { scale = 1.1, duration = 1, delay = 0, opacity = null } = {}) {
  if (!el || reduceMotion) return
  const vars = { scale, duration, delay, ease: 'sine.inOut', yoyo: true, repeat: -1 }
  if (opacity !== null) vars.opacity = opacity
  gsap.to(el, vars)
}

// Animasi idle untuk elemen dekoratif hero
document.querySelectorAll('.spark').forEach((el, i) => {
  gsap.set(el, { transformOrigin: '50% 50%' })
  gsap.to(el, { opacity: 1, scale: 1.25, rotate: 90, duration: 1, delay: i * 0.3, ease: 'sine.inOut', yoyo: true, repeat: -1 })
})

document.querySelectorAll('.hero__confetti span').forEach((el, i) => {
  floatLoop(el, { y: 12, duration: 2 + i * 0.3, delay: i * 0.4, rotate: 15 })
})

const stickerEl = document.querySelector('.sticker')
if (stickerEl) {
  gsap.set(stickerEl, { autoAlpha: 0, y: -35, rotate: 25, scale: 0.6 })
}

const scrollArrow = document.querySelector('.scroll-arrow')
floatLoop(scrollArrow, { y: 6, duration: 0.9 })

// Animasi idle untuk envelope
const envelopeHeart = document.querySelector('.envelope__heart')
const sealEl = document.querySelector('.seal')
floatLoop(document.getElementById('envelope'), { y: 6, duration: 1.6 })
pulseLoop(envelopeHeart, { scale: 1.2, duration: 0.9 })
pulseLoop(sealEl, { scale: 1.08, duration: 1 })

// Animasi idle untuk kue dan lilin
const cakeGlow = document.querySelector('.cake-glow')
const flameEl = document.querySelector('.flame')
const cakeShadow = document.querySelector('.cake-shadow')
pulseLoop(cakeGlow, { scale: 1.1, duration: 1, opacity: 0.9 })
if (!reduceMotion) {
  gsap.to(flameEl, { rotate: 3, scaleX: 0.93, scaleY: 1.1, duration: 0.4, ease: 'sine.inOut', yoyo: true, repeat: -1, transformOrigin: '50% 100%' })
  gsap.to(cakeShadow, { scaleX: 0.8, opacity: 0.1, duration: 1.5, ease: 'sine.inOut', yoyo: true, repeat: -1, transformOrigin: '50% 50%' })
}
let cakeIdleTween = null
const cakeBtnEl = document.getElementById('cake')
function startCakeIdle() {
  if (reduceMotion || cakeIdleTween) return
  cakeIdleTween = gsap.to(cakeBtnEl, { y: -7, rotate: 1, duration: 1.5, ease: 'sine.inOut', yoyo: true, repeat: -1 })
}
startCakeIdle()

floatLoop(document.getElementById('notesEmoji'), { y: 7, duration: 1.3, rotate: 3 })

document.querySelectorAll('.music__stars span').forEach((el, i) => {
  gsap.fromTo(el, { y: 0, scale: 0.8, opacity: 0.35 }, { y: -9, scale: 1.2, opacity: 0.9, duration: 1.5, delay: i * 0.3, ease: 'sine.inOut', yoyo: true, repeat: -1 })
})

floatLoop(document.querySelector('.party__emoji'), { y: 6, duration: 1, rotate: 4 })

/* =========================================================
   HERO ENTRANCE
========================================================= */
let heroPlayed = false
function playHeroEntrance() {
  if (heroPlayed) return
  heroPlayed = true

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  if (reduceMotion) {
    gsap.set(['.hero__eyebrow', '.hero__subtitle', '.nametag', '.hero__title .line > span'], { clearProps: 'all' })
    return
  }

  tl.from('.hero__eyebrow', { autoAlpha: 0, y: 16, duration: 0.6 })
    .from('.hero__title .line > span', { yPercent: 115, duration: 0.85, stagger: 0.12, ease: 'power4.out' }, '-=0.35')
    .from('.hero__subtitle', { autoAlpha: 0, y: 16, duration: 0.6 }, '-=0.4')
    .from('.nametag', { autoAlpha: 0, rotate: -8, scale: 0.6, duration: 0.7, ease: 'back.out(2.2)' }, '-=0.35')
    .to(stickerEl, { autoAlpha: 1, y: 0, rotate: 10, scale: 1, duration: 0.8, ease: 'back.out(2)' }, '-=0.6')
    .call(() => floatLoop(stickerEl, { y: 8, duration: 1.7, rotate: 6 }))
}

/* =========================================================
   3D TILT EFFECT
========================================================= */
function add3DTilt(el, { max = 8, scale = 1.03 } = {}) {
  if (!el || reduceMotion) return
  const parent = el.closest('.cake-card, .envelope, .party__btn') || el
  parent.style.transformStyle = 'preserve-3d'
  parent.style.perspective = '800px'

  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    gsap.to(el, { rotateY: px * max * 2, rotateX: -py * max * 2, scale, duration: 0.4, ease: 'power2.out', transformPerspective: 700 })
  })
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.6)' })
  })
}
add3DTilt(document.getElementById('cake'), { max: 6, scale: 1.04 })
add3DTilt(document.getElementById('envelope'), { max: 5, scale: 1.02 })
add3DTilt(document.getElementById('partyBtn'), { max: 10, scale: 1.05 })

/* =========================================================
   CAKE INTERACTION
========================================================= */
const cake = cakeBtnEl
const cakeStatus = document.getElementById('cakeStatus')

cake.addEventListener('click', () => {
  const blown = cake.classList.toggle('is-blown')
  cake.setAttribute('aria-pressed', String(blown))
  cake.setAttribute('aria-label', blown ? 'Nyalakan lilin lagi' : 'Tiup lilin')

  if (blown) {
    cakeStatus.innerHTML = `Lilinnya padam. Buat permintaan dulu ${heartInline()}`

    if (!reduceMotion) {
      const tl = gsap.timeline()
      tl.to(flameEl, { scale: 0, opacity: 0, duration: 0.25, ease: 'power2.in', transformOrigin: '50% 100%' }, 0)
      ;['.smoke--1', '.smoke--2', '.smoke--3'].forEach((sel, i) => {
        const dx = i === 0 ? 0 : i === 1 ? -13 : 13
        tl.fromTo(sel, { opacity: 1, scale: 0.6, x: 0, y: 0 }, { opacity: 0, scale: 1.7, x: dx, y: -80, duration: 1.5, ease: 'power1.out' }, i * 0.12)
      })
      gsap.fromTo(cake, { scale: 1 }, { scale: 1.06, duration: 0.15, yoyo: true, repeat: 1, ease: 'power1.inOut' })
    }

    fire({ particleCount: 90, spread: 75, startVelocity: 35, origin: { x: 0.5, y: 0.45 } })
    createHeartBurst()
  } else {
    cakeStatus.textContent = 'Klik kuenya untuk meniup lilin.'
    gsap.set(['.smoke--1', '.smoke--2', '.smoke--3'], { opacity: 0 })
    gsap.to(flameEl, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(2)' })
  }
})

/* =========================================================
   LETTER INTERACTION
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

function stopTyping() {
  clearInterval(typeTimer)
  typeTimer = null
  letterBody.classList.remove('is-typing')
}

function openLetter() {
  envelope.setAttribute('aria-expanded', 'true')
  letterChip.textContent = 'Sudah dibuka'

  if (!reduceMotion) {
    gsap.set(envelope, { transformPerspective: 900, transformOrigin: '50% 0%', backfaceVisibility: 'hidden' })
    gsap.to(envelope, {
      rotateX: -110, y: -14, autoAlpha: 0,
      duration: 0.5, ease: 'power2.in',
      onComplete: () => {
        envelope.hidden = true
        gsap.set(envelope, { clearProps: 'rotateX,y,autoAlpha' })
        letterBody.hidden = false
        gsap.fromTo(letterBody,
          { autoAlpha: 0, y: 24, scale: 0.97 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, ease: 'power2.out' }
        )
      },
    })
  } else {
    envelope.hidden = true
    letterBody.hidden = false
  }

  fire({ particleCount: 45, spread: 55, origin: { y: 0.7 } })
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
    typed.textContent = cardData.greeting.slice(0, i)
    if (i >= cardData.greeting.length) finishTyping()
  }, 18)

  setTimeout(() => closeLetter.focus(), 100)
}

function sealLetter() {
  if (typeTimer) stopTyping()

  letterBody.hidden = true
  envelope.hidden = false
  envelope.setAttribute('aria-expanded', 'false')
  letterChip.textContent = 'Belum dibuka'

  if (!reduceMotion) {
    gsap.fromTo(envelope,
      { rotateX: -110, y: -14, autoAlpha: 0, transformPerspective: 900, transformOrigin: '50% 0%', backfaceVisibility: 'hidden' },
      { rotateX: 0, y: 0, autoAlpha: 1, duration: 0.45, ease: 'power2.out' }
    )
  }

  envelope.focus()
}

envelope.addEventListener('click', openLetter)
closeLetter.addEventListener('click', sealLetter)
letterBody.addEventListener('click', () => { if (typeTimer) finishTyping() })

/* =========================================================
   NOTES NAVIGATION
========================================================= */
const notesPage = document.getElementById('notesPage')
const notesKind = document.getElementById('notesKind')
const notesList = document.getElementById('notesList')
const notesPager = document.getElementById('notesPager')
const notesEmoji = document.getElementById('notesEmoji')
const prevNote = document.getElementById('prevNote')
const nextNote = document.getElementById('nextNote')

let noteIndex = 0
const noteIcons = [Flower2, Flower, Heart]

function renderNote(animate = false) {
  const page = cardData.notes[noteIndex]
  const last = noteIndex === cardData.notes.length - 1

  notesPage.dataset.tone = page.tone
  notesKind.textContent = page.title

  const noteIconNode = noteIcons[noteIndex] || Heart
  notesEmoji.innerHTML = icon(noteIconNode, { fill: noteIconNode === Heart ? 'currentColor' : 'none' })

  notesList.replaceChildren(
    ...page.items.map((text) => {
      const li = document.createElement('li')
      li.innerHTML = `<span class="note-heart">${heartFilled('icon')}</span><span>${text}</span>`
      return li
    })
  )

  notesPager.textContent = `${noteIndex + 1} dari ${cardData.notes.length}`
  prevNote.disabled = noteIndex === 0

  nextNote.innerHTML = last
    ? `Selesai ${heartInline()}`
    : `Berikutnya ${icon(ArrowRight, { className: 'icon icon-inline' })}`

  if (animate && !reduceMotion) {
    gsap.fromTo(notesPage, { x: 35, rotate: 1, scale: 0.97, autoAlpha: 0 }, { x: 0, rotate: 0, scale: 1, autoAlpha: 1, duration: 0.4, ease: 'power2.out' })
    gsap.from(notesList.children, { autoAlpha: 0, x: -15, duration: 0.4, stagger: 0.07, ease: 'power2.out', delay: 0.08 })
  }
}

prevNote.addEventListener('click', () => {
  if (noteIndex > 0) { noteIndex--; renderNote(true) }
})

nextNote.addEventListener('click', () => {
  if (noteIndex < cardData.notes.length - 1) {
    noteIndex++
    renderNote(true)
  } else {
    fire({ particleCount: 80, spread: 70, startVelocity: 35, origin: { y: 0.75 } })
    createHeartBurst()
    document.getElementById('musicCard').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' })
  }
})

renderNote(false)

/* =========================================================
   MUSIC / YOUTUBE PLAYER
========================================================= */
const musicCard = document.getElementById('musicCard')
const musicBtn = document.getElementById('musicBtn')
const playerBox = document.getElementById('playerBox')
const vinylEl = document.querySelector('.vinyl svg')

let ytPlayer = null
let ytStarting = false
let isPlaying = false
let youtubeApiPromise = null

const vinylTween = vinylEl && !reduceMotion
  ? gsap.to(vinylEl, { rotate: 360, duration: 3.5, ease: 'none', repeat: -1, paused: true, transformOrigin: '50% 50%' })
  : null

function setPlaying(value) {
  isPlaying = value
  musicCard.classList.toggle('is-playing', value)
  vinylTween && (value ? vinylTween.play() : vinylTween.pause())

  musicBtn.innerHTML = value
    ? `${icon(Pause, { className: 'icon icon-inline' })} Jeda lagu`
    : `${icon(Play, { className: 'icon icon-inline' })} Putar lagu`
}

function loadYouTubeApi() {
  if (window.YT && window.YT.Player) return Promise.resolve()
  if (youtubeApiPromise) return youtubeApiPromise

  youtubeApiPromise = new Promise((resolve, reject) => {
    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => { previous && previous(); resolve() }

    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    script.onerror = (error) => { youtubeApiPromise = null; reject(error) }
    document.head.appendChild(script)
  })

  return youtubeApiPromise
}

loadYouTubeApi().catch(() => {})

async function startMusic() {
  if (ytPlayer) { ytPlayer.playVideo(); return }
  if (ytStarting) return

  ytStarting = true
  musicBtn.disabled = true
  musicBtn.textContent = 'Memuat lagu...'
  playerBox.hidden = false
  if (!reduceMotion) gsap.from(playerBox, { autoAlpha: 0, y: 20, scale: 0.97, duration: 0.5, ease: 'power2.out' })

  try {
    await loadYouTubeApi()

    ytPlayer = new window.YT.Player('yt-player', {
      width: '100%',
      height: '100%',
      videoId: cardData.youtubeId,
      playerVars: { autoplay: 1, controls: 1, loop: 1, playlist: cardData.youtubeId, playsinline: 1, rel: 0 },
      events: {
        onReady: (event) => {
          musicBtn.disabled = false
          event.target.playVideo()
          fire({ particleCount: 70, spread: 60, origin: { y: 0.65 } })
        },
        onStateChange: (event) => {
          const S = window.YT.PlayerState
          if (event.data === S.PLAYING) setPlaying(true)
          if (event.data === S.PAUSED || event.data === S.ENDED) setPlaying(false)
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
  if (!ytPlayer) { if (!ytStarting) startMusic(); return }
  isPlaying ? ytPlayer.pauseVideo() : ytPlayer.playVideo()
})

/* =========================================================
   CONFETTI BUTTON
========================================================= */
const partyBtn = document.getElementById('partyBtn')
partyBtn.addEventListener('click', () => {
  if (!reduceMotion) gsap.fromTo(partyBtn, { scale: 1 }, { scale: 0.92, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' })

  fire({ particleCount: 110, angle: 60, spread: 70, startVelocity: 55, origin: { x: 0, y: 0.85 } })
  fire({ particleCount: 110, angle: 120, spread: 70, startVelocity: 55, origin: { x: 1, y: 0.85 } })
  createHeartBurst()
})

/* =========================================================
   FLOATING HEARTS EFFECT
========================================================= */
const floatingLayer = document.getElementById('floatingLayer')
const floatingIconHtml = [icon(Heart), heartFilled('icon'), icon(Sparkle), icon(Sparkles), icon(Star)]

function createFloatingHeart() {
  if (reduceMotion) return

  const element = document.createElement('span')
  element.className = 'floating-heart'
  element.innerHTML = floatingIconHtml[Math.floor(Math.random() * floatingIconHtml.length)]
  element.style.left = `${Math.random() * 100}%`
  element.style.bottom = '-40px'
  element.style.fontSize = `${12 + Math.random() * 14}px`
  element.style.color = 'var(--hot)'

  floatingLayer.appendChild(element)

  const drift = Math.random() * 180 - 90
  const duration = 5 + Math.random() * 4

  gsap.fromTo(element,
    { y: 0, x: 0, rotate: 0, scale: 0.7, opacity: 0 },
    {
      y: '-115vh', x: drift, rotate: 360, scale: 1.2, opacity: 0.7,
      duration, ease: 'none',
      onComplete: () => element.remove(),
    }
  )
}

setInterval(createFloatingHeart, 1800)

/* =========================================================
   HEART BURST ANIMATION
========================================================= */
function createHeartBurst() {
  if (reduceMotion) return

  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const heart = document.createElement('span')
      heart.className = 'burst-heart'
      heart.innerHTML = Math.random() > 0.5 ? icon(Heart) : heartFilled('icon')
      heart.style.left = `${50 + Math.random() * 20 - 10}%`
      heart.style.top = `${50 + Math.random() * 10 - 5}%`
      heart.style.position = 'fixed'
      heart.style.zIndex = '150'
      heart.style.fontSize = '24px'
      heart.style.color = 'var(--hot)'
      heart.style.pointerEvents = 'none'

      floatingLayer.appendChild(heart)

      const x = Math.random() * 240 - 120
      const y = Math.random() * -180 - 40

      gsap.fromTo(heart,
        { x: '-50%', y: '-50%', scale: 0, opacity: 0 },
        {
          x: `calc(-50% + ${x}px)`, y: `calc(-50% + ${y}px)`, rotate: 30, scale: 1, opacity: 1,
          duration: 1.25, ease: 'power2.out',
          onComplete: () => heart.remove(),
        }
      )
    }, i * 45)
  }
}

/* =========================================================
   SCROLL REVEAL (ScrollTrigger)
========================================================= */
let revealInitialised = false

function initRevealAnimations() {
  if (revealInitialised) return
  revealInitialised = true

  gsap.utils.toArray('.reveal').forEach((section) => {
    if (reduceMotion) {
      gsap.set(section, { autoAlpha: 1, y: 0, scale: 1 })
      return
    }

    gsap.fromTo(section,
      { autoAlpha: 0, y: 60, scale: 0.96 },
      {
        autoAlpha: 1, y: 0, scale: 1, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 88%', toggleActions: 'play none none reverse' },
      }
    )
  })
}

/* =========================================================
   PARALLAX EFFECTS
========================================================= */
if (!reduceMotion) {
  gsap.to('.hero__confetti', {
    y: -40, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  })
  gsap.to('.sticker', {
    y: 30, rotate: 4, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  })
  gsap.to('.vinyl-wrap', {
    y: -20, ease: 'none',
    scrollTrigger: { trigger: '.music', start: 'top bottom', end: 'bottom top', scrub: true },
  })
}

/* =========================================================
   PROGRESS BAR
========================================================= */
const progressBar = document.getElementById('progressBar')
const progressStep = document.getElementById('progressStep')
const progressSections = document.querySelectorAll('[data-step]')
const TOTAL_STEPS = progressSections.length

ScrollTrigger.create({
  trigger: document.body,
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => { progressBar.style.width = `${Math.min(100, self.progress * 100)}%` },
})

progressSections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top 55%',
    end: 'bottom 55%',
    onEnter: () => { progressStep.textContent = `${index + 1} / ${TOTAL_STEPS}` },
    onEnterBack: () => { progressStep.textContent = `${index + 1} / ${TOTAL_STEPS}` },
  })
})

window.addEventListener('resize', () => ScrollTrigger.refresh(), { passive: true })

/* =========================================================
   MUSIC CARD EXTRA ATTENTION
========================================================= */
ScrollTrigger.create({
  trigger: musicCard,
  start: 'top 60%',
  onEnter: () => {
    if (isPlaying || reduceMotion) return
    gsap.fromTo(musicCard, { scale: 1, rotate: 0 },
      { scale: 1.02, rotate: 0.4, duration: 0.2, yoyo: true, repeat: 3, ease: 'sine.inOut' })
  },
})