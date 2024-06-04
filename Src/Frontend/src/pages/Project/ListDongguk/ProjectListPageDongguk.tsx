/* eslint-disable  */
import { CommonHeader } from 'components/CommonHeader'
import { ProjectCard } from 'components/ProjectCard'
import projectListSampleJson from 'constants/json/class_list_sample.json'
import React, { FC, useEffect, useState } from 'react'
import { ProjectListType, ProjectType } from 'types/class'
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
} from './styled'
import { locationOptions } from 'constants/project/locationOptions'
import { getmainInfo } from 'api/getMainInfo'
import { GetProjectListResponseType, getProjectList } from 'api/getProjectList'
import { BannerImg } from './styled'
import bannerBackgroundImg from 'assets/images/main/banner_background2.png'
import { ProjectCardDongguk } from 'components/ProjectCardDongguk'

type ProjectListPageProps = {
  className?: string
}

const projectListData = camelizeKey(projectListSampleJson.project_list) as ProjectListType

type OptionType = {
  value: string
  label: string
}

const projectTypeOptions: OptionType[] = [
  { value: '통계학과', label: '통계학과' },
  { value: '경영정보학과', label: '경영정보학과' },
  { value: '산업시스템공학과', label: '산업시스템공학과' },
  { value: '융합소프트웨어', label: '융합소프트웨어' },
  { value: '데이터사이언스', label: '데이터사이언스' },
  { value: 'ect', label: 'ect' },
]

const stackOptions: OptionType[] = [
  { value: '이길섭', label: '이길섭' },
  { value: '박효순', label: '박효순' },
  { value: 'etc', label: '기타' },
]

export const ProjectListPageDongguk: FC<ProjectListPageProps> = ({ className }) => {
  const [search, setSearch] = useState('')
  const [projectTypeSelect, setProjectTypeSelect] = useState('')
  const [stackTypeSelect, setStackTypeSelect] = useState('')
  const [locationTypeSelect, setLocationTypeSelect] = useState('')

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
      projectItem.kindType == 'CLASS' &&
      projectItem.title.toLowerCase().includes(search.toLowerCase()) &&
      projectItem.projectType.toLowerCase().includes(projectTypeSelect.toLowerCase()) &&
      projectItem.professor.toLowerCase().includes(stackTypeSelect.toLowerCase()) &&
      // projectItem.requireMemberList.some((member) => member.developmentStack.toLowerCase().includes(stackTypeSelect)) &&
      (locationTypeSelect === '' || projectItem.location === parseInt(locationTypeSelect))
  )

  const renderProjectListDongguk = () => {
    return (
      <ProjectCardContainer>
        {filteredProjectListData
          .sort((a, b) => a.key - b.key)
          .map((projectItem) => (
            <ProjectCardDongguk projectItem={projectItem} key={`project_card_${projectItem.key}`} />
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

  return (
    <Root className={className}>
      <CommonHeader />
      <BannerImg src={bannerBackgroundImg} alt={'배너 배경 이미지'} />

      <Container>
        <SelectContainer>
          <TitleTypo>전공 검색</TitleTypo>
          <SelectBox
            onChange={(option) => handleProjectTypeSelectChange(option)}
            defaultValue="전공 선택"
            options={projectTypeOptions}
          />
        </SelectContainer>
        <SelectContainer>
          <TitleTypo>교수님 검색</TitleTypo>
          <SelectBox
            onChange={(option) => handleStackTypeSelectChange(option)}
            defaultValue="교수님 선택"
            options={stackOptions}
          />
        </SelectContainer>
        <SelectContainer>
          <TitleTypo>캠퍼스 검색</TitleTypo>
          <SelectBox
            onChange={(option) => handleLocationTypeSelectChange(option)}
            defaultValue="캠퍼스 선택"
            options={locationOptions}
          />
        </SelectContainer>
      </Container>
      <Container>
        <SearchContainer>
          <TitleTypo>강의명 검색</TitleTypo>
          <SearchBox
            type="search"
            id="psearch"
            name="psearch"
            maxLength={20}
            placeholder="강의명 검색"
            onChange={handleSearchChange}
          />
        </SearchContainer>
      </Container>
      {renderProjectListDongguk()}
    </Root>
  )
}
