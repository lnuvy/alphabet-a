import type { AppProps } from 'next/app'
import { useCallback, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import GlobalStyles from '@styles/GlobalStyles'
import GlobalNav from '@components/GlobalNav'
import { useRouter } from 'next/router'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  console.log(router.pathname)

  const [title, setTitle] = useState('Home')

  useEffect(() => {
    getTitle(router.pathname)
  }, [router.pathname])

  const getTitle = useCallback((pathname: string) => {
    switch (pathname) {
      case '/':
        setTitle('Home')
        break
      case '/step1':
        setTitle('판매하기')
        break
      case '/step2':
        setTitle('제품 태그하기')
        break
      default:
        setTitle('404 Page')
    }
  }, [])

  return (
    <Provider store={store}>
      <GlobalStyles />
      <ToastContainer />
      <div className="view-screen">
        <GlobalNav title={title} />
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
