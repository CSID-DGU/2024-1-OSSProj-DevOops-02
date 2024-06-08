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

# 주요 기능별 로직
## 회원가입 및 로그인
### 구글 로그인
- Controller 폴더 - LoginController.java
- dto 폴더 - LoginDTO.java
- service 폴더 - LoginService.java

