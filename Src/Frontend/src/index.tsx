import 'antd/dist/reset.css'
import { AdminQuestionnaireDetailsPage } from 'pages/Admin/QuestionnaireDetails'
import { AdminQuestionnaireListPage } from 'pages/Admin/QuestionnaireList'
import { JoinPage } from 'pages/Join'
import { LoginPage } from 'pages/Login'
import { MainPage } from 'pages/Main'
import { ProjectDetailsPage } from 'pages/Project/Details'
import { ProjectListPage } from 'pages/Project/List'
import { ProjectListPageDongguk } from 'pages/Project/ListDongguk'
import { CreateResume } from 'pages/Resume/CreateResume'
import { UserNoticeDetailsPage } from 'pages/User/Notice/Details'
import { UserNoticeListPage } from 'pages/User/Notice/List'
import { UserProfilePage } from 'pages/User/Profile'
// import { UserProjectPage } from 'pages/User/Project'
import { UserProjectCreatePage } from 'pages/User/Project/Create'
import { UserProjectManagePage } from 'pages/User/Project/Manage'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'styles/global.css'
import { ProjectDetailsDonggukPage } from 'pages/Project/DetailsDongguk'
import { ViewResume } from 'pages/Resume/ViewResume'
import { CompetitionUserProjectManagePage } from 'pages/User/Project/Manage copy'

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/questionnaire/list" element={<AdminQuestionnaireListPage />} />
          <Route path="/admin/questionnaire/:questionnaireKey" element={<AdminQuestionnaireDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/user/notice/list" element={<UserNoticeListPage />} />
          <Route path="/resume/createResume" element={<CreateResume />} />
          <Route path="/user/:userid" element={<ViewResume />} />
          {/* <Route path="/user/project" element={<UserProjectPage />} /> */}
          <Route path="/user/project/create" element={<UserProjectCreatePage />} />
          <Route path="/user/project/manage/:projectKey/:projectTitle" element={<UserProjectManagePage />} />
          <Route
            path="/user/competition/manage/:projectKey/:projectTitle"
            element={<CompetitionUserProjectManagePage />}
          />
          <Route path="/project/list" element={<ProjectListPage />} />
          <Route path="/project/listDongguk" element={<ProjectListPageDongguk />} />
          <Route path="/project/:projectKey" element={<ProjectDetailsPage />} />
          <Route path="/projectDongguk/:projectKey" element={<ProjectDetailsDonggukPage />} />
          <Route path="/project/invite/:projectKey" element={<UserNoticeDetailsPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
