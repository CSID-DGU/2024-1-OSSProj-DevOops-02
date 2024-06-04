import logoImg from 'assets/images/logo.png'
import { CommonHeader } from 'components/CommonHeader'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  ContentInput,
  InputContainer,
  JoinButton,
  JoinContainer,
  JoinInfoTypo,
  LoginButton,
  LogoImg,
  LogoTypo,
  Root,
} from './styled'
// import { PostUserLoginResponseType, postuserLogin } from 'api/postUserLogin';

type LoginPageProps = {
  className?: string
}

export const LoginPage: FC<LoginPageProps> = ({ className }) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onClickJoinButton = () => {
    navigate('/join')
  }

  const onLoginAPI = () => {
    if (email.length === 0 || password.length === 0) {
      // eslint-disable-next-line no-undef
      alert('이메일과 비밀번호를 입력해주세요.') // 알림 추가
      return
    }

    // Retrieve stored credentials from localStorage
    // eslint-disable-next-line no-undef
    const storedEmail = localStorage.getItem('email')
    // eslint-disable-next-line no-undef
    const storedPassword = localStorage.getItem('password')

    // Check if entered credentials match stored credentials
    if (email === storedEmail && password === storedPassword) {
      // If they match, simulate a successful login
      // eslint-disable-next-line no-undef
      console.log('SUCCESS')
      navigate('/')
      // eslint-disable-next-line no-undef
      localStorage.setItem('test_login', 'true')
      // eslint-disable-next-line no-undef
      alert('로그인에 성공했습니다.')
    } else {
      // If they don't match, show an error message
      // eslint-disable-next-line no-undef
      alert('로그인에 실패했습니다. 이메일 또는 비밀번호를 확인해주세요.')
      setEmail('')
      setPassword('')
    }
  }

  const onKeyPressEnter = (e: any) => {
    if (e.key === 'Enter') {
      onLoginAPI()
    }
  }

  const onClickLogin = () => {
    onLoginAPI()
  }

  return (
    <Root className={className}>
      <CommonHeader />
      <Container>
        <LogoImg src={logoImg} alt={'로고 이미지'} />
        <LogoTypo>당신의 능력, 팀이지에서 펼쳐보세요!</LogoTypo>
        <InputContainer>
          <ContentInput placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <ContentInput
            placeholder="비밀번호"
            type="password"
            onKeyDown={onKeyPressEnter}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputContainer>
        <LoginButton type="primary" onClick={onClickLogin}>
          로그인
        </LoginButton>
        <JoinContainer>
          <JoinInfoTypo>아직 회원이 아니세요?</JoinInfoTypo>
          <JoinButton type="text" onClick={onClickJoinButton}>
            회원가입
          </JoinButton>
        </JoinContainer>
      </Container>
    </Root>
  )
}
