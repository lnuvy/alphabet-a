import React from 'react'
import { toast } from 'react-toastify'

const position = 'top-center'

const Toast = (type: string, content: string) => {
  switch (type) {
    case 'success':
      return toast.success(content, { position, autoClose: 1000 })

    case 'error':
      return toast.error(content, { position, autoClose: 1300, draggable: false })

    case 'info':
      return toast.info(content, { position, autoClose: 1000 })
  }
}

export default Toast
