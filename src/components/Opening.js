import './Opening.css'
import { gsap } from 'gsap'
import {
  createElement,
  Heart,
  Sparkle,
  Sparkles,
  ArrowRight,
  Flower2,
} from 'lucide'

function icon(
  node,
  {
    className = 'icon',
    strokeWidth = 2,
    fill = 'none',
  } = {}
) {
  return createElement(node, {
    class: className,
    'stroke-width': strokeWidth,
    fill,
  }).outerHTML
}

const heartInline = (
  className = 'icon icon-inline'
) =>
  icon(Heart, {
    className,
  })

const heartFilled = (
  className = 'icon icon-inline'
) =>
  icon(Heart, {
    className,
    fill: 'currentColor',
  })

export default function Opening(
  cardData,
  HEART
) {
  return `
    <div
      class="opening"
      id="opening"
    >
      <!-- DECORATION -->
      <div
        class="opening__decor opening__decor--a"
        aria-hidden="true"
      >
        ${icon(Sparkle)}
      </div>

      <div
        class="opening__decor opening__decor--b"
        aria-hidden="true"
      >
        ${heartInline()}
      </div>

      <div
        class="opening__decor opening__decor--c"
        aria-hidden="true"
      >
        ${icon(Sparkles)}
      </div>

      <!-- OPENING CARD -->
      <div class="opening__card">
        <!-- DATE STICKER -->
        <div
          class="opening__sticker"
          aria-hidden="true"
        >
          <svg viewBox="0 0 100 92">
            <path
              d="${HEART}"
              fill="#FFF7F2"
              stroke="#3B0A25"
              stroke-width="4"
              stroke-linejoin="round"
            />
            <text
              x="50"
              y="44"
              font-size="26"
            >
              ${cardData.stickerDay}
            </text>
            <text
              x="50"
              y="62"
              font-size="14"
            >
              ${cardData.stickerMonth}
            </text>
          </svg>
        </div>

        <!-- EYEBROW -->
        <div class="opening__eyebrow">
          <span>${icon(Flower2, { className: 'icon icon-inline' })}</span>
          a little something for you
          <span>${icon(Flower2, { className: 'icon icon-inline' })}</span>
        </div>

        <!-- HEART -->
        <div
          class="opening__heart"
          aria-hidden="true"
        >
          ${heartFilled('icon')}
        </div>

        <!-- TITLE -->
        <h1 class="opening__title">
          Haloo, Jiya.
        </h1>

        <!-- DESCRIPTION -->
        <p class="opening__text">
          Ada sedikit sesuatu yang aku siapin<br />
          buat hari ini, hehe :)
        </p>

        <!-- BUTTON -->
        <button
          class="opening__btn"
          id="openBirthday"
          type="button"
        >
          Buka sekarang
          ${icon(ArrowRight, {
            className: 'icon icon-inline',
          })}
        </button>

        <!-- SENDER -->
        <p class="opening__from">
          ${cardData.sender}
        </p>
      </div>
    </div>
  `
}

/* =========================================================
   OPENING ENTRANCE ANIMATION (GSAP)
========================================================= */
export function playOpeningEntrance({ reduceMotion = false } = {}) {
  const card = document.querySelector('.opening__card')
  if (!card) return

  const targets = {
    heart: '.opening__heart',
    eyebrow: '.opening__eyebrow',
    title: '.opening__title',
    text: '.opening__text',
    btn: '.opening__btn',
    from: '.opening__from',
    sticker: '.opening__sticker',
    decor: '.opening__decor',
  }

  if (reduceMotion) {
    gsap.set(
      [card, ...Object.values(targets).map((sel) => document.querySelectorAll(sel))],
      { clearProps: 'all' }
    )
    return
  }

  gsap.set(card, { transformOrigin: '50% 50%' })

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from(card, { autoAlpha: 0, y: 28, scale: 0.94, rotate: -1, duration: 0.85 })
    .from(targets.heart, { autoAlpha: 0, y: -18, rotate: -20, scale: 0.5, duration: 0.6, ease: 'back.out(2.2)' }, '-=0.5')
    .from(targets.eyebrow, { autoAlpha: 0, y: 12, duration: 0.5 }, '-=0.3')
    .from(targets.title, { autoAlpha: 0, y: 20, duration: 0.6 }, '-=0.35')
    .from(targets.text, { autoAlpha: 0, y: 16, duration: 0.5 }, '-=0.35')
    .from(targets.btn, { autoAlpha: 0, y: 16, scale: 0.9, duration: 0.5, ease: 'back.out(2)' }, '-=0.3')
    .from(targets.from, { autoAlpha: 0, y: 10, duration: 0.4 }, '-=0.25')
    .fromTo(
      targets.sticker,
      { autoAlpha: 0, y: -30, rotate: 20, scale: 0.6 },
      { autoAlpha: 1, y: 0, rotate: 9, scale: 1, duration: 0.7, ease: 'back.out(2)' },
      '-=0.55'
    )

  // Jalankan animasi loop ambient setelah entrance selesai
  gsap.to(targets.heart, { y: -7, rotate: 4, duration: 1.1, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1 })
  gsap.to(targets.sticker, { y: -8, rotate: 5, duration: 1.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1 })

  document.querySelectorAll(targets.decor).forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0.45, y: 0, rotate: 0 },
      { opacity: 1, y: -10, rotate: 12, duration: 1.5, delay: 0.9 + i * 0.4, ease: 'sine.inOut', yoyo: true, repeat: -1 }
    )
  })
}

/* =========================================================
   HIDE OPENING OVERLAY (GSAP)
========================================================= */
export function hideOpening(openingEl, { reduceMotion = false, onComplete } = {}) {
  if (!openingEl) { onComplete && onComplete(); return }

  if (reduceMotion) {
    gsap.set(openingEl, { autoAlpha: 0 })
    onComplete && onComplete()
    return
  }

  gsap.to(openingEl, {
    autoAlpha: 0,
    scale: 1.02,
    duration: 0.7,
    ease: 'power2.inOut',
    onComplete,
  })
}