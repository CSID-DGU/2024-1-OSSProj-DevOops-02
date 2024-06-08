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
## 회원가입 및 로그인

### 구글 로그인

| 파일명                | 역할       | 설명                                              |
|-----------------------|------------|---------------------------------------------------|
| **controller**        |            |                                                   |
| LoginController.java  | Controller | 구글 로그인 관련 사용자 요청을 받아 서비스 메소드 호출 |
| **dto**               |            |                                                   |
| LoginDTO.java         | DTO        | 구글 로그인 관련 데이터 전송 객체                   |
| **service**           |            |                                                   |
| LoginService.java     | Service    | 구글 로그인 관련 비즈니스 로직 구현                |

### 일반 회원가입 및 로그인

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

