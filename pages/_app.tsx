import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import GlobalStyles from 'styles/GlobalStyles'
import GlobalNav from '@components/GlobalNav'
import { useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  console.log(router.pathname)

  const [title, setTitle] = useState()

  return (
    <Provider store={store}>
      <GlobalStyles />
      <div className="view-screen">
        <GlobalNav />
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
