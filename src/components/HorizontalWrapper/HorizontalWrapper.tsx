import React, { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
}
const HorizontalWrapper: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default HorizontalWrapper
