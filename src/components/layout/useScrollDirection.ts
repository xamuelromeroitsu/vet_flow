import { useEffect, useState } from 'react'

export function useScrollDirection(paused = false) {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    let previousY = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY
      const distance = currentY - previousY

      if (paused || currentY < 100) {
        setIsHidden(false)
      } else if (Math.abs(distance) > 5) {
        setIsHidden(distance > 0)
      }

      previousY = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [paused])

  return isHidden
}
