import logoImg from 'assets/images/logo.png'
import { CommonHeader } from 'components/CommonHeader'
import { FC, useState, useEffect } from 'react'
// import { DevelopmentStackType } from 'types/project'
import {
  Container,
  ContentInput,
  // ContentSelect,
  ContentTextArea,
  InputContainer,
  JoinButton,
  LogoImg,
  LogoTypo,
  Root,
} from './styled'
import { useNavigate } from 'react-router-dom'
import { PostUserJoinResponseType, postuserJoin } from 'api/postUserJoin'

type JoinPageProps = {
  className?: string
}

export const JoinPage: FC<JoinPageProps> = ({ className }) => {
  const navigate = useNavigate()

  const [password, setPassword] = useState<string>('')
  const [passwordCheck, setPasswordCheck] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [gitId, setGitId] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const [introduce, setIntroduce] = useState<string>('')
  // const [developmentStack, setDevelopmentStack] = useState<DevelopmentStackType>();

  // Save to local storage whenever state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      localStorage.setItem('email', email)
    }
  }, [email])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      localStorage.setItem('password', password)
    }
  }, [password])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      localStorage.setItem('passwordCheck', passwordCheck)
    }
  }, [passwordCheck])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      localStorage.setItem('gitId', gitId)
    }
  }, [gitId])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      localStorage.setItem('nickname', nickname)
    }
  }, [nickname])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      localStorage.setItem('introduce', introduce)
    }
  }, [introduce])

  const onClickJoin = () => {
    // api 넣기
    if (
      password.length > 0 &&
      password === passwordCheck &&
      email.length > 0 &&
      gitId.length > 0 &&
      nickname.length > 0 &&
      introduce.length > 0
    ) {
      const data = {
        email: email,
        password: password,
        nickname: nickname,
        introduce: introduce,
        gitId: gitId,
      }

      // userJoin 함수 호출하기
      postuserJoin(`/user/join`, data)
        .then((response: PostUserJoinResponseType) => {
          if (response.status === 'SUCCESS') {
            console.log('SUCCESS')

            const userId = response.data?.id
            if (userId) {
              console.log(userId)
            }

            navigate(`/user/login`)
          } else {
            alert('회원가입에 실패했습니다.')
            console.log('Error message:', response.message)
          }
        })
        .catch((error: any) => {
          console.error('Error :', error)
        })

      alert('회원가입을 완료했습니다.')
      navigate('/login')
    } else {
      alert('회원가입에 실패했습니다.')
    }
  }

  return (
    <Root className={className}>
      <CommonHeader />
      <Container>
        <LogoImg src={logoImg} alt={'로고 이미지'} />
        <LogoTypo>당신의 능력, 팀이지에서 펼쳐보세요!</LogoTypo>
        <InputContainer>
          <ContentInput placeholder="이메일" onChange={(e) => setEmail(e.target.value)} />
          <ContentInput type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
          <ContentInput
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
          <ContentInput placeholder="GitHub 아이디" onChange={(e) => setGitId(e.target.value)} />
          <ContentInput placeholder="닉네임" onChange={(e) => setNickname(e.target.value)} />
          <ContentTextArea placeholder="자기소개" onChange={(e) => setIntroduce(e.target.value)}></ContentTextArea>
        </InputContainer>
        <JoinButton type={'primary'} onClick={onClickJoin}>
          회원가입
        </JoinButton>
      </Container>
    </Root>
  )
}
