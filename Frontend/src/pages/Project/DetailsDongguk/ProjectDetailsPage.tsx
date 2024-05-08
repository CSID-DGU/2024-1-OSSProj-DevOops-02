import defaultBackgroundImg from 'assets/images/default_background.png'
import missingAvatarImg from 'assets/images/missing_avatar.png'
import { CommonHeader } from 'components/CommonHeader'
import projectListSampleJson from 'constants/json/class_list_sample.json'
import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectItemType, ProjectListType } from 'types/project'
import { camelizeKey } from 'utils/camelizeKey'
import { generateRandomProjectCardLogoImg } from 'utils/generateRandomProjectCardLogoImg'
import { getDevelopmentStackColor, translateDevelopmentStack } from 'utils/translateDevelopmentStack'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
// import { translateProjectPosition } from 'utils/translatePosition'
import {
  BannerImg,
  Container,
  ContentContainer,
  // ContentLi,
  // ContentTitleTypo,
  ContentTypo,
  // ContentUl,
  DevelopmentStackTag,
  DevelopmentStackTagContainer,
  MainContainer,
  MenuContainer,
  MenuCountContainer,
  MenuCountDivider,
  MenuCountLikeTypo,
  MenuCountVisitedTypo,
  MenuLeaderUserInfoContainer,
  MenuLeaderUserInfoNameTypo,
  MenuLeaderUserInfoProfileImg,
  Root,
  SideSectionManageProjectButton,
  SideSectionApplyProjectButton,
  SideSectionQuitProjectButton,
  SideSectionContainer,
  SideSectionDateRangeContainer,
  SideSectionDateRangeTitleTypo,
  SideSectionDateRangeTypo,
  SideSectionProfileImg,
  SideSectionProfileImgWrapper,
  SideSectionProjectTypeContainer,
  SideSectionProjectTypeTitleTypo,
  SideSectionProjectTypeTypo,
  SideSectionRequireMemberContainer,
  SideSectionRequireMemberContentContainer,
  SideSectionRequireMemberItemContainer,
  SideSectionRequireMemberItemTypo,
  SideSectionRequireMemberTitleTypo,
  TitleTypo,
  LikeButton,
} from './styled'
import { GetProjectDetailsRequestType, GetProjectDetailsResponseType, getProjectDetails } from 'api/getProjectDetails'
import { List, Space, Tag } from 'antd'
// import userListSampleJson from 'constants/json/user_list_sample.json'
import Avatar from 'assets/images/missing_avatar.png'
import { StackTag, UserIcon, UserNameTypo } from './styled'
// import { UserInfoListType } from 'types/project'
import { Link } from 'react-router-dom'

type ProjectDetailsPageProps = {
  className?: string
}

export const ProjectDetailsDonggukPage: FC<ProjectDetailsPageProps> = ({ className }) => {
  const navigate = useNavigate()

  //사용자 리스트

  // const userListData = camelizeKey(userListSampleJson.user_list) as UserInfoListType

  // const filteredUserListData = userListData.filter(
  //   (userItem) =>
  //     userItem.userId++ &&
  //     userItem.nickname.toLowerCase() &&
  //     userItem.email &&
  //     userItem.developmentStackList &&
  //     userItem.status
  // )

  const { projectKey = 0 } = useParams()
  const projectListSampleData: ProjectListType = camelizeKey(projectListSampleJson.project_list) as ProjectListType
  const [projectItem, setProjectItem] = useState<ProjectItemType>()

  const [liked, setLiked] = useState(false)

  const handleLikeToggle = () => {
    setLiked((prevLiked) => !prevLiked)
  }

  const onClickProjectManage = (projectTitle: string) => {
    navigate(`/user/project/manage/${projectKey}/${projectTitle}`)
  }

  const onClickApplyProject = () => {
    const applyType = window.prompt('지원하고자 하는 분야를 선택하세요: 백엔드, 프론트엔드, 기타')
    if (applyType === '백엔드' || applyType === '프론트엔드' || applyType === '기타') {
      alert(`${applyType} 분야에 지원 완료되었습니다.`)
      navigate('/')
    } else {
      alert('유효한 선택이 아닙니다.')
    }
    // eslint-disable-next-line no-undef
  }

  const renderButton = (ProjectItem: ProjectItemType) => {
    if (ProjectItem.valid === 'VALID') {
      if (ProjectItem.position === 'LEADER') {
        return (
          <SideSectionManageProjectButton type={'primary'} onClick={() => onClickProjectManage(ProjectItem.title)}>
            관리하기
          </SideSectionManageProjectButton>
        )
      } else if (ProjectItem.position === 'MEMBER') {
        return (
          <SideSectionQuitProjectButton type={'primary'} disabled>
            참여 중
          </SideSectionQuitProjectButton>
        )
      } else if (ProjectItem.position === 'NORMAL') {
        return (
          <SideSectionApplyProjectButton type={'primary'} onClick={onClickApplyProject}>
            지원하기
          </SideSectionApplyProjectButton>
        )
      }
    } else {
      return (
        <SideSectionQuitProjectButton type={'primary'} disabled>
          만료됨
        </SideSectionQuitProjectButton>
      )
    }
    return null
  }

  useEffect(() => {
    let data: GetProjectDetailsRequestType = {
      projectKey: 0,
    }
    if (projectKey !== 0) {
      data.projectKey = parseInt(projectKey)
    }
    getProjectDetails(data)
      .then((response: GetProjectDetailsResponseType) => {
        if (response.status === 'SUCCESS') {
          // eslint-disable-next-line no-undef
          console.log('SUCCESS')
          // projectDetails 받아서 가공하기
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
    // 이걸 대체하기
    setProjectItem(projectListSampleData[+projectKey])
  }, [])

  return (
    <Root className={className}>
      <CommonHeader />
      <BannerImg src={defaultBackgroundImg} />
      {projectItem && (
        <Container>
          <MainContainer>
            <TitleTypo>{projectItem.title}</TitleTypo>
            <DevelopmentStackTagContainer>
              {projectItem.requireMemberList.map((requireMemberItem, index) => (
                <DevelopmentStackTag
                  color={getDevelopmentStackColor(requireMemberItem.developmentStack)}
                  key={`development_stack_tag_${index}`}
                >
                  {translateDevelopmentStack(requireMemberItem.developmentStack)}
                </DevelopmentStackTag>
              ))}
            </DevelopmentStackTagContainer>
            <MenuContainer>
              <MenuLeaderUserInfoContainer>
                <MenuLeaderUserInfoProfileImg src={missingAvatarImg} />
                <MenuLeaderUserInfoNameTypo>코딩조아</MenuLeaderUserInfoNameTypo>
              </MenuLeaderUserInfoContainer>
              <MenuCountContainer>
                <MenuCountVisitedTypo>조회수: {projectItem.visitedNumber}회</MenuCountVisitedTypo>
                <MenuCountDivider />
                <MenuCountLikeTypo>좋아요: {projectItem.likeNumber}회</MenuCountLikeTypo>
                <LikeButton onClick={handleLikeToggle}>{liked ? <HeartFilled /> : <HeartOutlined />}</LikeButton>
              </MenuCountContainer>
            </MenuContainer>
            <ContentContainer>
              <ContentTypo dangerouslySetInnerHTML={{ __html: projectItem.content || '' }} />

              {/* <ContentTitleTypo>2024-01 오픈소스 프로젝트</ContentTitleTypo>
              <ContentUl>
                <ContentLi>
                  <ContentTypo>전공 : 융합소프트웨어</ContentTypo>
                </ContentLi>
                <ContentLi>
                  <ContentTypo>담당교수 : 이길섭, 박효순</ContentTypo>
                </ContentLi>
              </ContentUl>
              <ContentTitleTypo>웹페이지 프로젝트를 위한 팀구성 페이지입니다.</ContentTitleTypo> */}
            </ContentContainer>

            <List
              dataSource={projectItem.userList}
              bordered
              renderItem={(item) => (
                <List.Item
                  key={item.userId}
                  actions={[
                    <Tag color={`${item.status}` === '매칭완료' ? 'processing' : 'red'} key={`a-${item.userId}`}>
                      {item.status}
                    </Tag>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Link to={`/user/${item.userId}`}>
                        <UserIcon src={Avatar} alt={'프로필 이미지'} />
                      </Link>
                    }
                    title={
                      <Link to={`/user/${item.userId}`}>
                        <UserNameTypo>{item.nickname}</UserNameTypo>
                      </Link>
                    }
                    description={
                      <Space size={[0, 'small']} wrap>
                        {item.developmentStackList.map((stack) => (
                          <StackTag key={stack.stackId}>{stack.developmentStack}</StackTag>
                        ))}
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </MainContainer>
          <SideSectionContainer>
            <SideSectionProfileImgWrapper>
              <SideSectionProfileImg
                src={projectItem.representativeImg ?? generateRandomProjectCardLogoImg(projectItem.key)}
                alt={'프로젝트 대표 이미지'}
              />
            </SideSectionProfileImgWrapper>
            <SideSectionRequireMemberContainer>
              <SideSectionRequireMemberTitleTypo>모집 인원</SideSectionRequireMemberTitleTypo>
              <SideSectionRequireMemberContentContainer>
                {projectItem.requireMemberList.map((requireMemberItem, index) => (
                  <SideSectionRequireMemberItemContainer key={`side_section_require_member_item_${index}`}>
                    <SideSectionRequireMemberItemTypo>
                      {translateDevelopmentStack(requireMemberItem.developmentStack)}
                    </SideSectionRequireMemberItemTypo>
                    <SideSectionRequireMemberItemTypo>0/{requireMemberItem.number}</SideSectionRequireMemberItemTypo>
                  </SideSectionRequireMemberItemContainer>
                ))}
              </SideSectionRequireMemberContentContainer>
            </SideSectionRequireMemberContainer>
            <SideSectionDateRangeContainer>
              <SideSectionDateRangeTitleTypo>프로젝트 기간</SideSectionDateRangeTitleTypo>
              <SideSectionDateRangeTypo>
                {projectItem.projectStartDate} ~ {projectItem.projectEndDate}
              </SideSectionDateRangeTypo>
            </SideSectionDateRangeContainer>
            <SideSectionProjectTypeContainer>
              <SideSectionProjectTypeTitleTypo>분야</SideSectionProjectTypeTitleTypo>
              <SideSectionProjectTypeTypo>{projectItem.projectType}</SideSectionProjectTypeTypo>
            </SideSectionProjectTypeContainer>
            {renderButton(projectItem)}
          </SideSectionContainer>
        </Container>
      )}
    </Root>
  )
}
