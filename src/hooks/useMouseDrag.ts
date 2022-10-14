import { RefObject, useEffect, useState } from 'react'

export const useMouseDrag = (ref: RefObject<HTMLDivElement>) => {
  const [isDown, setIsDown] = useState(false)

  const [startX, setStartX] = useState(0)
  const [currentScrollLeft, setCurrentScrollLeft] = useState(0)

  const handleMouseDown = (e) => {
    const slider = ref.current!
    setIsDown(true)
    setStartX(e.pageX - slider.offsetLeft)
    setCurrentScrollLeft(slider.scrollLeft)
    // slider.scrollLeft =
  }

  const handleMouseLeave = () => setIsDown(false)

  const handleMouseMove = (e) => {
    const slider = ref.current!
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const walk = x - startX
    slider.scrollLeft = currentScrollLeft - walk
  }

  useEffect(() => {
    if (ref.current) {
      const slider = ref.current
      slider.addEventListener('mousedown', handleMouseDown)
      slider.addEventListener('mouseleave', handleMouseLeave)
      slider.addEventListener('mouseup', handleMouseLeave)
      slider.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      if (ref.current) {
        const slider = ref.current
        slider.removeEventListener('mousedown', handleMouseDown)
        slider.removeEventListener('mouseleave', handleMouseLeave)
        slider.removeEventListener('mouseup', handleMouseLeave)
        slider.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return { handleMouseDown, handleMouseLeave, handleMouseMove }
}
