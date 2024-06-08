![img.png](img.png)
-> 블록 다이어그램 사진

# 파일 구조

<details>
<summary>Backend</summary>
├── gradle/wrapper<br>
├── review-api<br>
└── src/main<br>
└── java/com/example/demo<br>
├── Main<br>
├── apiPayload<br>
├── config<br>
├── constant<br>
├── controller<br>
│ ├── AdminController.java<br>
│ ├── CourseController.java<br>
│ ├── HomeController.java<br>
│ ├── LoginController.java<br>
│ ├── MainController.java<br>
│ ├── ProjectController.java<br>
│ ├── ProjectLikeController.java<br>
│ ├── StatusController.java<br>
│ └── UserController.java<br>
├── domain<br>
│ ├── Course.java<br>
│ ├── Project.java<br>
│ ├── ProjectLike.java<br>
│ ├── Status.java<br>
│ └── User.java<br>
├── dto<br>
│ ├── CourseDTO.java<br>
│ ├── LoginDTO.java<br>
│ ├── ProjectDTO.java<br>
│ ├── ProjectLikeDTO.java<br>
│ ├── StatusDTO.java<br>
│ └── UserDTO.java<br>
│ └── mapper<br>
├── repository<br>
│ ├── CourseRepository.java<br>
│ ├── ProjectLikeRepository.java<br>
│ ├── ProjectRepository.java<br>
│ ├── StatusRepository.java<br>
│ └── UserRepository.java<br>
├── response<br>
├── service<br>
│ ├── CourseService.java<br>
│ ├── LoginService.java<br>
│ ├── ProjectLikeService.java<br>
│ ├── ProjectService.java<br>
│ ├── StatusService.java<br>
│ └── UserService.java<br>
└── templates<br>
</details>

<details>
<summary>Frontend</summary>
├── public<br>
└── src<br>
├── api<br>
│ ├── base.ts<br>
│ ├── getMainInfo.ts<br>
│ ├── getProjectDetails.ts<br>
│ ├── getProjectList.ts<br>
│ ├── getUserInfo.ts<br>
│ ├── getUserProjectManageAply.ts<br>
│ ├── getUserProjectManageRecommend.ts<br>
│ ├── getUserprojectList.ts<br>
│ ├── postProjectCreate.ts<br>
│ ├── postUpdateUrs.ts<br>
│ ├── postUserJoin.ts<br>
│ ├── postUserLogin.ts<br>
│ ├── postUserLogout.ts<br>
│ ├── postUserProjectManageHire.ts<br>
├── assets/images<br>
├── components<br>
│ ├── CommonHeader<br>
│ ├── Display<br>
│ ├── ManageProjectCard<br>
│ ├── ProjectCard<br>
│ ├── ProjectCardDongguk<br>
│ ├── Question<br>
│ └── QuestionnaireModal<br>
├── constants<br>
│ ├── json<br>
│ ├── project<br>
│ └── system<br>
├── hooks<br>
├── pages<br>
│ ├── Admin<br>
│ ├── Join<br>
│ ├── Login<br>
│ ├── Main<br>
│ ├── Project<br>
│ ├── Recommend/RecommendUsers<br>
│ ├── Resume<br>
│ └── User<br>
├── styles<br>
├── types<br>
├── utils<br>
│ ├── global.d.ts<br>
│ ├── index.tsx<br>
├── .eslintignore<br>
├── .eslintrc.json<br>
├── .prettierrc<br>
├── package-lock.json<br>
├── package.json<br>
├── pre-deploy.sh<br>
└── tsconfig.json<br>
</details>

# 주요 기능별 파일 경로
## Backend 
### 회원가입 및 로그인

#### 구글 로그인

| 파일명                | 역할       | 설명                                              |
|-----------------------|------------|---------------------------------------------------|
| **controller**        |            |                                                   |
| LoginController.java  | Controller | 구글 로그인 관련 사용자 요청을 받아 서비스 메소드 호출 |
| **dto**               |            |                                                   |
| LoginDTO.java         | DTO        | 구글 로그인 관련 데이터 전송 객체                   |
| **service**           |            |                                                   |
| LoginService.java     | Service    | 구글 로그인 관련 비즈니스 로직 구현                |

#### 일반 회원가입 및 로그인

| 파일명                | 역할       | 설명                                              |
|-----------------------|------------|---------------------------------------------------|
| **controller**        |            |                                                   |
| UserController.java   | Controller | 일반 회원가입 및 로그인 관련 사용자 요청을 받아 서비스 메소드 호출 |
| **domain**            |            |                                                   |
| User.java             | Domain     | 일반 회원가입 및 로그인을 위한 사용자 엔티티 클래스   |
| **dto**               |            |                                                   |
| UserDTO.java          | DTO        | 일반 회원가입 및 로그인 관련 데이터 전송 객체        |
| **mapper**            |            |                                                   |
| UserMapper.java       | Mapper     | 일반 회원가입 및 로그인 관련 DTO와 엔티티 간의 변환 담당 |
| **service**           |            |                                                   |
| UserService.java      | Service    | 일반 회원가입 및 로그인 관련 비즈니스 로직 구현      |

### 팀 빌딩 및 관리
| 파일명                        | 역할                                                      | 설명                                                                                      |
|-------------------------------|-----------------------------------------------------------|-------------------------------------------------------------------------------------------|
| **controller**                |                                                           |                                                                                           |
| ProjectController.java        | Controller                                                | 사용자 요청을 받아 서비스 메소드 호출, 프로젝트 생성, 업데이트, 삭제, 조회 등의 작업 수행   |
| **service**                   |                                                           |                                                                                           |
| ProjectService.java           | Service                                                   | 비즈니스 로직 구현, 데이터 접근 레이어와 상호작용                                           |
| **repository**                |                                                           |                                                                                           |
| ProjectRepository.java        | Repository                                                | 데이터베이스와 상호작용, CRUD 작업 수행                                                    |
| **domain**                    |                                                           |                                                                                           |
| Project.java                  | Domain                                                    | 데이터베이스 테이블과 매핑되는 엔티티 클래스                                                |
| **dto**                       |                                                           |                                                                                           |
| ProjectDTO.java               | Data Transfer Object (DTO)                                | Controller와 Service 간 데이터 전송 객체                                                    |
| **mapper**                    |                                                           |                                                                                           |
| ProjectMapper.java            | Mapper                                                    | DTO와 엔티티 간의 변환 담당                                                               |

### 강의 개설 및 관리

| 파일명                | 역할       | 설명                                                      |
|-----------------------|------------|-----------------------------------------------------------|
| **controller**        |            |                                                           |
| CourseController.java | Controller | 사용자 요청을 받아 서비스 메소드 호출, 강의 생성, 업데이트, 삭제, 조회 등의 작업 수행   |
| **domain**            |            |                                                           |
| Course.java           | Domain     | 데이터베이스 테이블과 매핑되는 강의 엔티티 클래스                                          |
| **dto**               |            |                                                           |
| CourseDTO.java        | DTO        | Controller와 Service 간 데이터 전송 객체                                               |
| **mapper**            |            |                                                           |
| CourseMapper.java     | Mapper     | DTO와 엔티티 간의 변환 담당                                                              |
| **repository**        |            |                                                           |
| CourseRepository.java | Repository | 데이터베이스와 상호작용, CRUD 작업 수행                                                  |
| **service**           |            |                                                           |
| CourseService.java    | Service    | 비즈니스 로직 구현, 데이터 접근 레이어와 상호작용                                          |

### 이력서 작성 및 편집

| 파일명                | 역할       | 설명                                                      |
|-----------------------|------------|-----------------------------------------------------------|
| **controller**        |            |                                                           |
| UserController.java   | Controller | 이력서 작성, 수정, 삭제 및 조회 관련 사용자 요청을 받아 서비스 메소드 호출 |
| **domain**            |            |                                                           |
| User.java             | Domain     | 데이터베이스 테이블과 매핑되는 사용자 엔티티 클래스                                         |
| **dto**               |            |                                                           |
| UserDTO.java          | DTO        | Controller와 Service 간 데이터 전송 객체                                               |
| **mapper**            |            |                                                           |
| UserMapper.java       | Mapper     | DTO와 엔티티 간의 변환 담당                                                              |
| **repository**        |            |                                                           |
| UserRepository.java   | Repository | 데이터베이스와 상호작용, CRUD 작업 수행                                                  |
| **service**           |            |                                                           |
| UserService.java      | Service    | 이력서 관련 비즈니스 로직 구현, 데이터 접근 레이어와 상호작용                              |

## Frontend

### 회원가입 및 로그인

| 기능       | 경로                                      |
|------------|-------------------------------------------|
| 회원가입   | frontend/src/pages/Join                   |
| 로그인     | frontend/src/pages/Login                  |

### 팀 빌딩 및 관리

| 기능                         | 경로                                                   |
|------------------------------|--------------------------------------------------------|
| 강의별 프로젝트 메인페이지    | frontend/src/pages/project/ListDongguk                 |
| 강의별 프로젝트 상세페이지    | frontend/src/pages/project/DetailDongguk               |
| 강의별 프로젝트 관리페이지    | frontend/src/pages/user/project/manage                 |

### 강의 개설 및 관리

| 기능         | 경로                                                   |
|--------------|--------------------------------------------------------|
| 강의 개설    | frontend/src/pages/user/project/create                 |
| 강의 개설 관리 | frontend/src/pages/project/user/project/manage          |

### 이력서 작성 및 편집

| 기능        | 경로                                                   |
|-------------|--------------------------------------------------------|
| 이력서 작성 | frontend/src/pages/Resume/createResume                 |
| 이력서 뷰어 | frontend/src/pages/Resume/ViewResume                   |


# 이전 프로젝트 참고 비율

<div style="display: flex; justify-content: space-around; align-items: center; width: 100%;">

  <div style="text-align: center;">
    <h3>백엔드</h3>
    <div style="width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(#4CAF50 0% 20%, #FF5722 20% 100%); display: flex; align-items: center; justify-content: center; margin: 0 auto;">
      <span style="color: white; font-size: 20px;">20%</span>
    </div>
  </div>

  <div style="text-align: center;">
    <h3>프론트엔드</h3>
    <div style="width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(#2196F3 0% 70%, #FF5722 70% 100%); display: flex; align-items: center; justify-content: center; margin: 0 auto;">
      <span style="color: white; font-size: 20px;">70%</span>
    </div>
  </div>

</div>

### 참고 레포지토리
[티밍 레포지토리](https://github.com/CSID-DGU/2023-1-OSSP1-colorful-7?tab=readme-ov-file)

# 개발 부분

| 구분         | 백엔드            | 프론트엔드         |
|--------------|---------------------|----------------------|
| **신규 개발**|  구글 로그인        |  강의별 팀 구성 페이지 |
|              |  강의 생성, 수정, 삭제 |  이력서 관리하기 페이지 |
|              |  매칭 상태 확인      |  이력서 확인 페이지   |
| **수정 개발**|  프로젝트 생성, 수정, 삭제 |  프로젝트 세부 페이지  |
|              |  일반 회원가입 / 로그인 |  프로젝트 생성하기 페이지 |
