/* eslint-disable */
import projectTitleIconImg from 'assets/images/project/titleIcon.png'
import { CommonHeader } from 'components/CommonHeader'
import { FC, useState } from 'react'
import {
  Container,
  ProjectOptionContainer,
  Root,
  TitleContainer,
  TitleLogoImg,
  TitleTypo,
  InputTitle,
  ProjectOptionLeftContainer,
  ProjectOptionRightContainer,
  InputContainer,
  LeaderPositionContainer,
  InputTitleRequired,
  SearchContainer,
  ProjectMemberInputTitleContainer,
  ProjectMemberExplainIcon,
  ProjectMemberExplainWrapper,
  ProjectMemberExplainContentWrapper,
  ProjectMemberExplainTitle,
  ProjectMemberExplainText,
  ProjectMemberInputContainer,
  ProjectDateContainer,
  ProjectCreateButton,
  LocationContainer,
  InputTitleContainer,
  RecommendButton,
  RecommendButtonText,
  SpaceDiv,
} from './styled'
// antd 적용하기
import { Form, Input, Select, DatePicker, Row, Col, Slider, Radio, RadioChangeEvent } from 'antd'
import { CreateProjectSection } from './CreateProjectSection'
import type { SliderMarks } from 'antd/es/slider'
import { locationOptions } from 'constants/project/locationOptions'
import { DevelopmentStackType, ProjectRequireMemberListType, ProjectType } from 'types/project'
import { PostProjectCreateResponseType, postprojectCreate } from 'api/postProjectCreate'
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'antd'

import { stacks } from 'types/stacks' // 전체 기술 스택
import RecommendModal from 'pages/Recommend/RecommendUsers/RecommendModal' // 팝업창 컴포넌트 추가

type UserProjectCreatePageProps = {
  className?: string
}

const { Option } = Select

interface StackType {
  id: number
  label: string
  key: string
}

const stackName: StackType[] = [
  { id: 0, label: '기획 및 경영', key: 'FRONTEND' },
  { id: 1, label: '기술 팀원', key: 'BACKEND' },
  { id: 3, label: '디자인', key: 'ETC' },
]

const marks: SliderMarks = {
  0: {
    style: {
      fontSize: '30px',
    },
    label: '🥚',
  },
  25: {
    style: {
      fontSize: '30px',
    },
    label: '🐣',
  },
  50: {
    style: {
      fontSize: '30px',
    },
    label: '🐥',
  },
  75: {
    style: {
      fontSize: '30px',
    },
    label: '🐔',
  },
  100: {
    style: {
      fontSize: '30px',
    },
    label: '🦢',
  },
}

const content = (
  <ProjectMemberExplainContentWrapper>
    <ProjectMemberExplainTitle>원하는 팀원의 실력을 정해주세요.</ProjectMemberExplainTitle>
    <ProjectMemberExplainText>다음은 회원가입 시 푸는 퀴즈에 따라 분류된 등급입니다.</ProjectMemberExplainText>
    <Slider marks={marks} defaultValue={100} disabled={true} />
  </ProjectMemberExplainContentWrapper>
)

const { RangePicker } = DatePicker

const dateFormat = 'YYYY/MM/DD'

export const UserProjectCreatePage: FC<UserProjectCreatePageProps> = ({ className }) => {
  const navigate = useNavigate()

  const [title, setTitle] = useState<string>('')
  const [projectType, setProjectType] = useState<ProjectType>()
  const [requireMemberList, setRequireMemberList] = useState<ProjectRequireMemberListType>([
    {
      developmentStack: 'FRONTEND',
      positionStacks: [],
      number: undefined,
    },
    {
      developmentStack: 'BACKEND',
      positionStacks: [],
      number: undefined,
    },
    {
      developmentStack: 'ETC',
      positionStacks: [],
      number: undefined,
    },
  ])
  const [leaderDevelopmentStack, setLeaderDevelopmentStack] = useState<DevelopmentStackType>()
  const [location, setLocation] = useState<number>()
  const [projectStartDate, setProjectStartDate] = useState<string>()
  const [projectEndDate, setProjectEndDate] = useState<string>()
  const [projectContent, setProjectContent] = useState<string>('')

  const onClickProjectCreate = () => {
    if (
      title.length > 0 &&
      projectType !== undefined &&
      leaderDevelopmentStack !== undefined &&
      location !== undefined &&
      projectStartDate !== undefined &&
      projectEndDate !== undefined &&
      projectContent.length > 0
    ) {
      const filteredrequireMemberList = requireMemberList.filter(
        (member) =>
          member.number !== undefined &&
          member.number > 0 &&
          member.positionStacks !== undefined &&
          member.positionStacks.length > 0
      )
      if (filteredrequireMemberList.length === 0) {
        // eslint-disable-next-line no-undef
        alert('입력값을 모두 채워주세요.')
        return
      }

      const data = {
        title: title,
        projectType: projectType, //학과
        requireMemberList: filteredrequireMemberList,
        leaderDevelopmentStack: leaderDevelopmentStack, //모집종류
        location: location,
        projectStartDate: projectStartDate,
        projectEndDate: projectEndDate,
        projectContent: projectContent,
      }
      // api 호출하기
      postprojectCreate('/project/create', data)
        .then((response: PostProjectCreateResponseType) => {
          if (response.status === 'SUCCESS') {
            // eslint-disable-next-line no-undef
            console.log('SUCCESS')
            navigate('/')
          } else {
            // eslint-disable-next-line no-undef
            console.log('FAIL')
            // eslint-disable-next-line no-undef
            console.log('Error message:', response.message)
          }
        })
        .catch((error: any) => {
          // eslint-disable-next-line no-undef
          console.error('Error :', error)
        })
      console.log(projectContent)
    } else {
      // eslint-disable-next-line no-undef
      alert('프로젝트가 생성되었습니다.')
      navigate('/')
    }
  }

  const onChangeProjectType = (e: RadioChangeEvent) => {
    setProjectType(e.target.value)
  }

  const onChangeProjectMemberNumber = (e: any, key: string) => {
    setRequireMemberList(
      requireMemberList.map((member) =>
        member.developmentStack === key ? { ...member, number: parseInt(e.target.value) } : member
      )
    )
  }

  const onProjectDateChange = (dates: any, dateStrings: string[]) => {
    if (dates) {
      setProjectStartDate(dateStrings[0])
      setProjectEndDate(dateStrings[1])
    } else {
      setProjectStartDate(undefined)
      setProjectEndDate(undefined)
    }
  }

  // 기술 스택 선택을 위한 것들
  const [isStackModalVisible, setIsStackModalVisible] = useState(false)

  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const onHandlePositionStack = (selectedValues: string[]) => {
    setSelectedItems(selectedValues)
  }

  // 추가된 부분 시작
  // 추가된 부분 시작
  const showStackModal = () => {
    if (selectedItems.length > 0) {
      setIsStackModalVisible(true)
    } else {
      // 선택된 스택이 없을 때의 처리 (예: 에러 메시지 출력)
    }
  }

  const handleStackModalCancel = () => {
    setIsStackModalVisible(false)
  }
  // 추가된 부분 끝

  return (
    <Root className={className}>
      <CommonHeader />
      <Container>
        <TitleContainer>
          <TitleLogoImg src={projectTitleIconImg} alt={'요즘 뜨는 프로젝트 로고 이미지'} />
          <TitleTypo>프로젝트 생성하기</TitleTypo>
        </TitleContainer>
        <ProjectOptionContainer>
          <ProjectOptionLeftContainer>
            <Form layout="vertical" autoComplete="off">
              <Form.Item style={{ marginBottom: 0 }}>
                <ProjectMemberInputTitleContainer>
                  <InputTitleRequired>모집인원</InputTitleRequired>
                  {/* <ProjectMemberExplainWrapper content={content} title="등급 안내" placement="right">
                    <ProjectMemberExplainIcon />
                  </ProjectMemberExplainWrapper> */}
                </ProjectMemberInputTitleContainer>
                {stackName.map((stackItem) => (
                  <ProjectMemberInputContainer key={stackItem.id}>
                    <Form.Item
                      name="memberStack"
                      style={{ display: 'inline-block', width: 'calc(25% - 8px)', marginBottom: '5px' }}
                    >
                      <div>{stackItem.label}</div>
                    </Form.Item>
                    <Form.Item
                      name={`number_${stackItem.key}`}
                      style={{ display: 'inline-block', width: 'calc(20% - 8px)', marginLeft: '5px', marginBottom: 0 }}
                    >
                      <Input
                        onChange={(e) => onChangeProjectMemberNumber(e, stackItem.key)}
                        type="number"
                        placeholder="인원"
                        min={0} // 0 미만의 값은 입력할 수 없도록 설정
                      />
                    </Form.Item>

                    {/* 기술 스택 입력 - 다중 선택 */}
                    <Form.Item
                      name={`grade_${stackItem.key}`}
                      style={{ display: 'inline-block', width: 'calc(45% - 8px)', marginLeft: '5px', marginBottom: 0 }}
                    >
                      <Select
                        mode="multiple"
                        placeholder="기술스택"
                        onChange={onHandlePositionStack}
                        value={selectedItems}
                      >
                        {stacks.map((stack) => (
                          <Option key={stack.value} value={stack.value}>
                            {stack.label}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <SpaceDiv></SpaceDiv>
                    {/* <RecommendButton onClick={showStackModal}>
                      <RecommendButtonText>추천 팀원 보기</RecommendButtonText>
                    </RecommendButton>
                    <RecommendModal
                      visible={isStackModalVisible}
                      selectedItems={selectedItems}
                      onCancel={handleStackModalCancel}
                      onHandlePositionStack={onHandlePositionStack}
                    /> */}
                  </ProjectMemberInputContainer>
                ))}
              </Form.Item>
            </Form>
          </ProjectOptionLeftContainer>
          <ProjectOptionRightContainer>
            <Form layout="vertical" autoComplete="off">
              <InputTitleContainer>
                <InputTitleRequired>프로젝트 제목</InputTitleRequired>
                <Input onClick={(e) => setTitle(e.currentTarget.value)} placeholder="프로젝트 보고서" />
              </InputTitleContainer>
              <InputContainer>
                <LeaderPositionContainer>
                  <InputTitleRequired>모집 종류</InputTitleRequired>
                  <Form.Item name="leader-position">
                    <Select placeholder="모집 종류" onChange={(value) => setLeaderDevelopmentStack(value)}>
                      <Option value="COMPETITION">공모전</Option>
                      <Option value="CLASS">강의</Option>
                    </Select>
                  </Form.Item>
                </LeaderPositionContainer>
                <ProjectDateContainer>
                  <InputTitleRequired>프로젝트 기간</InputTitleRequired>
                  <InputContainer>
                    <RangePicker format={dateFormat} onChange={onProjectDateChange} />
                  </InputContainer>
                </ProjectDateContainer>
              </InputContainer>
              <Form.Item>
                <InputTitleRequired>분야</InputTitleRequired>
                <Form.Item name="category">
                  <Select
                    placeholder="분야"
                    onChange={(value) => setLeaderDevelopmentStack(value)}
                    style={{ width: '160px' }}
                  >
                    <Option value="WEB">WEB</Option>
                    <Option value="MOBILE APP">MOBILE APP</Option>
                    <Option value="DESKTOP APP">DESKTOP APP</Option>
                    <Option value="BIGDATA">BIGDATA</Option>
                    <Option value="IDEA">IDEA</Option>
                    <Option value="PAINTING">PAINTING</Option>
                    <Option value="ETC">ETC</Option>
                  </Select>
                </Form.Item>
              </Form.Item>
            </Form>
          </ProjectOptionRightContainer>
        </ProjectOptionContainer>
        <SearchContainer>
          <LocationContainer>
            <InputTitle>지역</InputTitle>
            <Select
              onChange={(value) => setLocation(value)}
              defaultValue={0}
              options={locationOptions}
              size="large"
              placeholder="지역 선택"
              style={{ width: 200 }}
            />
          </LocationContainer>
          <ProjectCreateButton type="primary" onClick={onClickProjectCreate}>
            프로젝트 생성하기
          </ProjectCreateButton>
        </SearchContainer>
        <CreateProjectSection setProjectContent={setProjectContent} />
      </Container>
    </Root>
  )
}
