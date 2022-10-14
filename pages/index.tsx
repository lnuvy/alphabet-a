import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  const onClickMoveStep1 = () => router.replace('/step1')

  return (
    <div>
      <Head>
        <title>알파벳에이(ffeed) 코딩테스트 이한울</title>
        <meta
          name="lnuvy"
          content="알파벳에이에 지원한 이한울입니다. 이것저것 추가해보고 싶었는데 시간이 부족해 노션 부족한 실력이지만 최선을 다했습니다. 잘부탁드립니다 :)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OtherWords>
        알파벳에이(피드)에 지원한 이한울입니다. 감사하게도 서류합격을 시켜주셔서 즐거운 마음으로 과제 진행했습니다.
        <br />
        보내주신 노션의 영상 화면을 보면서 작업했는데 거의 끝나고 시간이 얼마남지 않았을때 노션 규격들을 확인했습니다...
        step1 페이지의 200x200, step2 400x400 등의 양식이 거의 지켜지지 않아서 죄송합니다.
        <br />
        너그러운 마음으로 이해해주시면 감사하겠습니다!
        <span>
          사용 라이브러리)
          <a href="https://redux-toolkit.js.org" target="_blank" rel="noreferrer">
            redux-toolkit
          </a>
          ,
          <a href="https://emotion.sh/docs/introduction" target="_blank" rel="noreferrer">
            @emotion
          </a>
          ,
          <a href="https://react-slick.neostack.com" target="_blank" rel="noreferrer">
            react-slick
          </a>
          ,
          <a href="https://fkhadra.github.io/react-toastify/introduction" target="_blank" rel="noreferrer">
            react-toastify
          </a>
        </span>
      </OtherWords>

      <div className="card-desc" onClick={onClickMoveStep1}>
        <h2>step1 으로 이동하기 &rarr;</h2>
      </div>
    </div>
  )
}

const OtherWords = styled.div`
  margin: 5rem 0;
  padding: 2rem;
  border-radius: 4px;
  line-height: 24px;
  opacity: 0.1;
  transition: 0.3s;
  z-index: 0;
  &:hover {
    opacity: 1;
  }
  & > div {
    margin: 0 auto 0.5rem;
  }
  & > span {
    display: flex;
    justify-content: center;
    font-size: 13px;
    margin-top: 0.5rem;

    & > a {
      margin-left: 4px;
    }
  }
`

export default Home
