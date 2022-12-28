import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import Layout from '../components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}
