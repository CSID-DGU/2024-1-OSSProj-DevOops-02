# 범위 및 일정 관리
|                |                         |     |       |       |       |       |       |       |       |
| -------------- |-------------------------|-----|-------|-------|-------|-------|-------|-------|-------|
|                |                         |     |       | 5월   |       |       | 6월   |       |
|                |                         | 담당자| 1주차 | 2주차 | 3주차 | 4주차 | 5주차 | 1주차 | 2주차 |
| 백엔드         | Entity, DTO 개발          | 천기정 |       | ●     |       |       |       |       |       |
|                | API 로직 개발               | 천기정 |       |       | ●     | ●     |       |       |       |
|                | API 버그 수정 및 최적화         | 천기정 |       |       |       |       | ●     |       |       |
|                | Google login 및 security | 김호정 |       |       |       |       |  ●     |      |       |
|                | 백엔드 AWS 배포 테스트          | 김호정 |       |       |       |       |       | ●     |       |
| 프론트         | 메인페이지 개발                | 김동완 |       |       | ●     | ●     |       |       |       |
|                | Toast UI를 활용한 이력서 개발    | 김동완 |       | ●     | ●     |       |       |       |       |
|                | 상세페이지 개발                | 김동완 |       |       |       |       | ●     | ●     |       |
|                | 프로젝트 생성 개발              | 김동완 |       |       |       | ●     | ●     |       |       |
| 버그/배포      | 백 프론트 배포                | 김호정 |       |       |       |       |       | ●     |       |
|                | 에러 수정 기간                | 김호정 |       |       |       |       |       |       | ●     |
| 문서 작업      | 최종 보고서 작성               | 천기정 |       |       |       |       |       |       | ●     |
|                | 발표자료 작성                 | 김동완 |       |       |       |       |       |       | ●     |
|                | 회의록 정리                  | 김호정 |       |       |       |       |       |       | ●     |
|                | 이슈 정리                   | 김호정 |       |       |       |       |       |       | ●     |


# 이슈 관리
## 이슈 1 - 수행계획 발표 후 질문 1
- 기능적인 차이점으로 홀라와의 차이점이 있는지
## 해결
- hola 서비스는 개발자를 위한 프로젝트 서비스이기에 완전히 다르다고 볼 수 있다.
- 또한 우리의 주된 목표는 강의의 팀구성이기에 이 또한 차이점이라고 볼 수 있다.

## 이슈 2 - 수행계획 발표 후 질문 2
- 마크다운의 작성 시 불편함을 감수하면서도 마크다운 방식으로 이력서를 작성하게 하는 이유는 무엇인가

## 해결
- 우리는 마크다운의 자유로움을 이용하고 싶었다,
- 하지만 불편함이 있는 것 또한 사실인데, 이 부분은 몇 가지 이력서 양식을 제공함으로써 해결할 것이다.

## 이슈 3 - JSON 직렬화/역직렬화
```2024-05-09 14:45:15.500  WARN 41076 — [nio-8080-exec-1] .c.j.MappingJackson2HttpMessageConverter : Failed to evaluate Jackson deserialization for type [[simple type, class com.example.demo.domain.Project]]: com.fasterxml.jackson.databind.exc.InvalidDefinitionException: Cannot handle managed/back reference 'defaultReference': no back reference property found from type java.util.List<com.example.demo.domain.Apply>```

- 양방향 참조하면서 JSON 직렬화 과정에서 순환 참조로 인한 무한 루프 발생

## 해결
- @JsonManagedReference 와 @JsonBackReference 어노테이션 사용
  value 속성으로 서로 상응하는 관계 설정
- 이후 @builder에서 나는 오류는 @AllArgsConstructor 어노테이션 추가해줌으로써 해결

## 이슈 4 - DB 연결 정보 파일의 부재
- Database 연결에 대한 정보를 갖고 있는 application.yml 파일이 ignore로 설정되어 있어서 프로젝트를 가져오면서 DB 연결 정보가 사라짐

## 해결
- 직접 yml 파일과 MySQLWorkbench를 통해 테스트용 Database를 생성해서 문제 해결

```
spring:
datasource:
driver-class-name: com.mysql.cj.jdbc.Driver
url: jdbc:mysql://localhost:3306/testdb
username: root
password: ****


jpa:
open-in-view: true
hibernate:
ddl-auto: update
naming:
physical-strategy: org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
use-new-id-generator-mappings: false
show-sql: true
properties:
hibernate.format_sql: true
dialect: org.hibernate.dialect.MySQL8InnoDBDialect
```

## 이슈 5 - DB 구성 오류 / 백엔드 코드 소실
- DB의 구성에 오류가 많음
- 의미 없는 관계 테이블이 여러 개 존재하여, 참조 관계에 악영향을 주고 있었음
- 백엔드 로직이 대부분 구현되어있지 않았음

## 해결
- DB를 새롭게 구성하고, 이에 따른 백엔드 로직 전부 새로 구현하는 것으로 결정

## 이슈 6 - Google Login 401 Error : Invalid_client
- 구글 로그인 401 Error 발생

## 해결
### Error 원인
- 클라이언트 ID 앞에 https:// 를 붙인 것이 에러의 원인
### Error 해결
- Google Clould에서 제공하는 클라이언트 ID를 그냥 copy, paste한 후에 띄어쓰기까지 체크해주니 해결

## 이슈 7 - Google Login 400 Error : redirect_uri_mismatch
- 400 Error 나서 구글 로그인 폼이 제대로 나오지 않음

## 해결
### Error 설명
- "redirect_uri_mismatch" 오류는 OAuth 2.0 인증 과정에서 리디렉션 URI가 맞지 않아서 발생하는 오류이다. 이는 구글에 등록된 리디렉션 URI와 애플리케이션에서 요청할 때 사용하는 리디렉션 URI가 일치하지 않는 경우에 발생한다.

### Error 원인
- 클라이언트 ID 부분 URI의 부재

### Error 해결
- http://localhost:8080/login/oauth2/code/google 적어주기

## 이슈 8 - Google Login : Missing user name attribute
```2024-05-22 14:00:21.174 ERROR 91931 --- [nio-8080-exec-7] com.example.demo.service.LoginService    : Missing user name attribute: sub```

- 구글 로그인 했을 시 다른 값들은 다 받아오는데 이 에러 때문에 최종 값이 안 넘어와서 기능 구현 실패

## 해결
### Error 설명
- DefaultOAuth2User를 생성할 때 지정한 사용자 이름 속성(sub)이 사용자 정보(attributes)에 없다는 것을 의미한다. DefaultOAuth2User 클래스는 사용자 정보를 나타내며, 생성자에서 사용자 이름 속성의 이름을 받아 해당 속성을 사용자 정보에서 찾아 사용자 ID로 사용한다. 만약 이 속성이 존재하지 않으면 예외를 발생시킨다.

### Error 해결
- sub 부분이 없어서 값을 가져오지 못 한다고 생각하여 이를 Id로 대체하여 코드 수정
    
`String userNameAttributeName = "id";`

## 이슈 9 - [배포] React 18 & toast-ui 호환 문제 
```2024-05-28T01:42:52.455Z [WARNING]: npm ERR! code 2024-05-28T01:42:52.462Z [WARNING]: ETARGET npm ERR! notarget No matching version found for @toast-ui/editor@^3.3.0. npm ERR! notarget In most cases you or one of your dependencies are requesting npm ERR! notarget a package version that doesn't exist. npm ERR! A complete log of this run can be found in: /root/.npm/_logs/2024-05-28T01_42_44_226Z-debug-0.log```
- react 18와 toast-ui의 버전이 호환이 안 되는 문제가 생겨서 배포 오류 발생

## 해결
### 1차 시도
- npm의 --legacy-peer-deps 옵션을 사용하여 종속성 충돌을 무시하고 설치

`npm install react@latest react-dom@latest @toast-ui/editor@latest @toast-ui/react-editor@latest --legacy-peer-deps`

### 2차 시도
- react를 17로 다운그레이드

1. package.json 파일에서 react 버전 부분 수정 : `"react": "^17.0.2", "react-dom": "^17.0.2",`

2. node_modules와 package-lock.json 삭제 : `rm -rf node_modules package-lock.json`

3. 패키지 설치 : `npm install`

4. 프로젝트 빌드 : `npm run build`

### 3차 시도
- 이전의 수정에 대한 오류 메세지는 다음과 같았다.

`[INFO]: Module not found: Error: Can't resolve 'react-dom/client' in '/codebuild/output/src300981802/src/2024-1-OSSProj-DevOops-02/Src/Frontend/src'`

-> react-dom/client 모듈을 찾을 수 없다는 에러였다. react 17 버전에서는 react-dom/client가 지원되지 않기 때문에 발생하는 문제였다.

- index.tsx 파일 수정 : ReactDOM.createRoot -> ReactDOM.render로 변경

### 4차 시도
- 이전 수정에 대한 오류 메세지는 다음과 같았다.

`'projectList' is assigned a value but never used no-unused-vars`

-> 사용하지 않는 변수가 있어서 생기는 오류였다.

- src/pages/Main/PopularProjectListSection/PopularProjectListSection.tsx, src/pages/Main/RecentProjectListSection/RecentProjectListSection.tsx, src/pages/Main/RecommendProjectListSection/RecommendProjectListSection.tsx 파일에서 projectList 변수 들어간 로직 수정