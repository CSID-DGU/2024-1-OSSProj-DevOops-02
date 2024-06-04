/* eslint-disable  */
import { CommonHeader } from 'components/CommonHeader'
import { ProjectCard } from 'components/ProjectCard'
import projectListSampleJson from 'constants/json/project_list_sample.json'
import React, { FC, useEffect, useState } from 'react'
import { ProjectListType, ProjectType } from 'types/project'
import { camelizeKey } from 'utils/camelizeKey'
import {
  ProjectCardContainer,
  Root,
  Container,
  SelectContainer,
  SearchBox,
  SearchContainer,
  SelectBox,
  TitleTypo,
  markdownContainer,
  ButtonContainer,
} from './styled'
import { locationOptions } from 'constants/project/locationOptions'
import { getmainInfo } from 'api/getMainInfo'
import { GetProjectListResponseType, getProjectList } from 'api/getProjectList'
import { BannerImg } from './styled'
import bannerBackgroundImg from 'assets/images/main/banner_background2.png'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'
import { ProjectCreateButton } from 'pages/User/Project/Create/styled'
import { Viewer } from '@toast-ui/react-editor'
import { UserInfoType } from 'types/class'
import userListSampleJson from 'constants/json/user_list_sample.json'
import { useParams } from 'react-router-dom' // 추가된 부분
import { set } from 'lodash'

type ProjectListPageProps = {
  className?: string
}

const projectListData = camelizeKey(projectListSampleJson.project_list) as ProjectListType
const userListData: UserInfoType[] = camelizeKey(userListSampleJson.user_list) as UserInfoType[]

type OptionType = {
  value: string
  label: string
}

export const ViewResume: FC<ProjectListPageProps> = ({ className }) => {
  const [search, setSearch] = useState('')
  const [projectTypeSelect, setProjectTypeSelect] = useState('')
  const [stackTypeSelect, setStackTypeSelect] = useState('')
  const [locationTypeSelect, setLocationTypeSelect] = useState('')

  let { userid } = useParams() // user_id 값을 문자열로 받아옴
  const user_id2 = userid ? parseInt(userid) : 0 // user_id를 숫자로 변환

  useEffect(() => {
    getProjectList()
      .then((response: GetProjectListResponseType) => {
        if (response.status === 'SUCCESS') {
          console.log('SUCCESS')
          // projectList 받아서 가공하기
        } else {
          console.log('FAIL')
          console.log('Error message:', response.message)
        }
      })
      .catch((error: any) => {
        console.error('Error :', error)
      })
  }, [])

  const filteredProjectListData = projectListData.filter(
    (projectItem) =>
      projectItem.title.toLowerCase().includes(search.toLowerCase()) &&
      projectItem.projectType.toLowerCase().includes(projectTypeSelect.toLowerCase()) &&
      projectItem.requireMemberList.some((member) => member.developmentStack.toLowerCase().includes(stackTypeSelect)) &&
      (locationTypeSelect === '' || projectItem.location === parseInt(locationTypeSelect))
  )

  const renderProjectListDongguk = () => {
    return (
      <ProjectCardContainer>
        {filteredProjectListData
          .sort((a, b) => a.key - b.key)
          .map((projectItem) => (
            <ProjectCard projectItem={projectItem} key={`project_card_${projectItem.key}`} />
          ))}
      </ProjectCardContainer>
    )
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  const handleProjectTypeSelectChange = (option: any) => {
    setProjectTypeSelect(option)
  }

  const handleStackTypeSelectChange = (option: any) => {
    setStackTypeSelect(option)
  }

  const handleLocationTypeSelectChange = (option: any) => {
    setLocationTypeSelect(option)
  }

  // const renderProjectListDongguk = () => {
  //   return (
  //     <ProjectCardContainer>
  //       {filteredProjectListData
  //         .sort((a, b) => a.key - b.key)
  //         .map((projectItem) => (
  //           <ProjectCard projectItem={projectItem} key={`project_card_${projectItem.key}`} />
  //         ))}
  //     </ProjectCardContainer>
  //   )
  // }
  // const userResume = userListData.find((user) => user.userId === user_id2)?.resume
  const userResume = userListData[user_id2].resume // 임시로 첫번째 유저의 이력서를 보여주기 위해 사용

  return (
    <Root className={className}>
      <CommonHeader />
      {/* <BannerImg src={bannerBackgroundImg} alt={'배너 배경 이미지'} /> */}
      <Container>
        {userResume ? (
          <Viewer initialValue={userResume} />
        ) : (
          <Viewer
            initialValue="# 이력서
          자기자신을 한줄로 소개해주세요 !
          ### 학력
          - ㅇㅇ고등학교 (2013~2016)
          - 동국대학교 통계학과 (2016~2020)
          - 동국대학교 융합소프트웨어 (2017~2020)
          - ---
          ### 인턴 및 대외 활동
          - 카카오뱅크(2019~2020)
          - ㅇㅇ은행 서포터즈(2019~2020)
          - 빅데이터학회 (b.a.f)
          - ---
          ### skills
          - flutter
          - react, reactNative
          - Spring "
          />
        )}
        {/* <Viewer initialValue={userResume} /> */}
        {/* <Viewer
          initialValue="# 이력서
          자기자신을 한줄로 소개해주세요 !
         
          ### 학력
          - ㅇㅇ고등학교 (2013~2016)
          - 동국대학교 통계학과 (2016~2020)
          - 동국대학교 융합소프트웨어 (2017~2020)
          - ---
          ### 인턴 및 대외 활동
          - 카카오뱅크(2019~2020)
          - ㅇㅇ은행 서포터즈(2019~2020)
          - 빅데이터학회 (b.a.f)
          - ---
          ### skills
          - flutter
          - react, reactNative
          - Spring "
          // 초기 입력 문구
          // previewStyle="vertical" // 프리뷰 스타일 ['tab', 'vertical']
          // height="500px" // 에디터 높이값
          // initialEditType="markdown" // 페이지 로드 시 기본 에디터 타입 */}
        {/* /> */}
      </Container>
    </Root>
  )
}
