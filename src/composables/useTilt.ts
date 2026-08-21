import { onMounted, onUnmounted, type Ref } from 'vue'

// Cursor-tracking 3D tilt for cards, ported from the parental-control project's
// wwwroot/js/tilt.js. Fine-pointer devices get mousemove-driven tilt; touch devices
// get the CSS-driven .tilt-card-idle animation instead (no device-orientation permission
// prompt for a decorative effect); prefers-reduced-motion disables both.
export function useTilt(target: Ref<HTMLElement | null>, maxTiltDeg = 7) {
  let onMove: ((evt: MouseEvent) => void) | null = null
  let onLeave: (() => void) | null = null

  onMounted(() => {
    const el = target.value
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!hasFinePointer) {
      el.classList.add('tilt-card-idle')
      el.style.animationDelay = `${(-Math.random() * 9).toFixed(2)}s`
      return
    }

    onMove = (evt: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (evt.clientX - rect.left) / rect.width
      const y = (evt.clientY - rect.top) / rect.height
      const rotateY = (x - 0.5) * 2 * maxTiltDeg
      const rotateX = (0.5 - y) * 2 * maxTiltDeg
      el.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`
      el.style.boxShadow = `${(-rotateY * 1.5).toFixed(1)}px ${(rotateX * 1.5).toFixed(1)}px 24px rgba(0, 0, 0, 0.35)`
    }

    onLeave = () => {
      el.style.transform = ''
      el.style.boxShadow = ''
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
  })

  onUnmounted(() => {
    const el = target.value
    if (!el) return
    if (onMove) el.removeEventListener('mousemove', onMove)
    if (onLeave) el.removeEventListener('mouseleave', onLeave)
  })
}
