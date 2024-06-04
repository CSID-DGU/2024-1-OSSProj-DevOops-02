import Avatar from 'assets/images/missing_avatar.png'
import { FC } from 'react'
// import userListSampleJson from 'constants/json/user_list_sample.json'
import { Root, StackTag, UserIcon, UserNameTypo } from './styled'
import { List, Space, Tag } from 'antd'
import { camelizeKey } from 'utils/camelizeKey'
// import { UserInfoListType } from 'types/project'
import { useParams } from 'react-router-dom'
import classListSampleJson from 'constants/json/class_list_sample.json'
import { ProjectListType } from 'types/class'

type ManageMemberSectionProps = {
  className?: string
}

// const userListData = camelizeKey(userListSampleJson.user_list) as UserInfoListType

// 여기에 들어갈 json 데이터 정의 필요!
export const ManageMemberSection: FC<ManageMemberSectionProps> = ({ className }) => {
  let { projectKey } = useParams()
  const projectKey2 = projectKey ? parseInt(projectKey) : 0

  const projectListData = camelizeKey(classListSampleJson.project_list) as ProjectListType
  const projectListData2 = projectListData[projectKey2].userList

  const filteredUserListData = projectListData2.filter(
    (userItem) =>
      userItem.userId++ && userItem.nickname.toLowerCase() && userItem.email && userItem.developmentStackList
  )

  // const filteredUserListData = projectListData[projectKey2].userList

  return (
    <Root className={className}>
      <List
        dataSource={filteredUserListData}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.userId}
            actions={[
              <Tag color="processing" key={`a-${item.userId}`}>
                {item.email}
              </Tag>,
            ]}
          >
            <List.Item.Meta
              avatar={<UserIcon src={Avatar} alt={'프로필 이미지'} />}
              title={<UserNameTypo>{item.nickname}</UserNameTypo>}
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
    </Root>
  )
}
