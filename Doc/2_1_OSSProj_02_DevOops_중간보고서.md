# A2. OSS 프로젝트 중간보고서

## 1. 프로젝트 수행팀 개요

- 수행 학기: 24-1
- 프로젝트명: 동국대학생들을 위한 팀 매칭 서비스
- 팀명: DevOops

| 구분 |  성명  |    학번    |     소속학과     |    연계전공    |        이메일        |
|:----:|:------:|:----------:|:----------------:|:--------------:|:--------------------:|
| 팀장 | 천기정 | 2019112471 | 산업시스템공학과 | 융합소프트웨어 | pridess@dongguk.edu  |
| 팀원 | 김동완 | 2020113297 | 통계학과         | 융합소프트웨어 | wandong97@dgu.ac.kr  |
| 팀원 | 김호정 | 2020111556 | 경영정보학과     | 융합소프트웨어 | 2020111556@dgu.ac.kr |  

* 지도교수: 이길섭 교수님, 박효순 교수님

## 2. 프로젝트 수행 내용  

### 2.1 프로젝트 개요

- 주제: 
    - 동국대학교 학생들을 위한 팀 매칭 서비스
    - 동국대학교 학생들만 이용 가능하며, 여러 공모전이나 프로젝트를 함께할 팀원들을 쉽게 구할 수 있게 해주는 서비스
- 동기: 
    - 오픈소스소프트웨어 실습과 프로젝트에서 겪었던 팀원 매칭의 불편함으로부터 시작. 
    - 팀원들의 이력서를 보고 쉽게 연결이 가능하며 팀 매칭 현황을 간편하게 확인 가능하게 하고자 함
    -  이를 넘어서 교내와 교외의 여러 공모전 과 프로젝트에 쉽게 팀을 매칭할 수 있는 서비스를 개발
    - 동국대학생들이 하고자하는 공모전이나 프로젝트를 서비스에 등록 가능

### 2.2 추진 배경(자료조사 및 요구분석)  

#### (1) 개발 배경 및 필요성  

- 여러 팀강의에서 발생하는 문제: 팀원의 구성
    - 수강생들은 원하는 팀원과 직접 컨택을 하여 팀을 꾸려야하는데, 팀을 구성하는 와중 다른 사람과 겹치거나 혹은 연락한 팀원에게 답이 안오면 그저 기다릴 수 밖에 없음.
    - 시간이 지날수록 팀 구성이 완료된 수강생이 많아져, 팀을 구성하고 있는 수강생들은 더더욱 혼란이 심해질 수 밖에 없음. 
    - 이러한 이유로 팀원 구하기는 눈치 싸움이 되는 경우가 많았음. 우리는 이러한 팀원을 구할 때 손쉽게 자신이 하고자 하는 분야를 명확히 하고, 팀구성을 실시간으로 확인할 수 있어 불편을 해소하고자 함.
- 굳어가는 팀구성과 이에 따라 발생하는 문제점
    - 대부분의 학생들은 새로운 사람을 구하기보다는 평소에 함께 있는 사람들과 팀을 구성하는 경우가 잦음. 
    - 친한 사람들과 함께 프로젝트를 진행할 수 있어, 팀 소통이 원활하다는 장점이 존재
    - 그러나 동시에 유사한 분야의 사람들과 진행을 하고 자주 함께한 사람들이라 의견이 한 방향으로 굳어질 수 있다는 단점 또한 존재. 
    - 따라서 우리는 동국대학교의 여러 분야의 사람들과 소통하고, 팀을 구성하고 능력을 펼칠 수 있게 하고자 함


#### (2) 선행기술 및 사례 분석  

- 시장에 나와있는 유사 시스템: 비긴메이트, 홀라
    - 공모전, 사이드 프로젝트, 공동 창업 등 팀활동으로 하는 모든 활동에서 팀을 구성할 수 있도록 하는 서비스
    - 개발자를 포커스로 두는 서비스이며, 자신의 기술 스택이나 메일, 구직 상태 등을 알 수 있음
    - 개인 이력서로 간략하게 열람이 가능한데, 경력, 프로젝트, 자격증 등을 확인 가능
- 차별점:
    1. 신뢰성: 위 시스템은 여러 사람을 모을 수 있다는 장점이 있지만, 확실하지 않은 신분때문에 사람들의 신뢰성이 떨어 질 수 있음 우리 서비스는 동국대학생을 한정으로 하여, 학교에 재학 또한 휴학 중인 학생들로만 팀을 구성하여 신뢰성을 높일 수 있음. 
    2. 학교 이용성: 강의의 프로젝트 팀구성을 할 수 있음. 학생들은 간편하게 강의에 가입하고 팀을 구성할 수 있으며, 한눈에 팀원 모집 현황을 확인 가능함
    3. 다양한 팀원 모집: 앞선 서비스와 다르게 개발 뿐만이 아니라, 디자인, 빅데이터 등 다양한 공모전 팀원을 모집할 수 있음
- 차이점 정리

|                               | TeamEasy | 티밍 | 비긴메이트 | 홀라 |
|-------------------------------|----------|------|------------|------|
| 실시간 팀 매칭 상황 확인 가능 |     O    |   X  |      X     |   X  |
| 비개발자 이용 가능            |     O    |   X  |      O     |   X  |
| 가입자 보안성                 |     O    |   X  |      X     |   X  |
| 플랫폼 내 이력서 기능         |     O    |   X  |      O     |   X  |
| 추천 시스템                   |     X    |   O  |      X     |   X  |


### 2.3 목표 및 내용  

#### (1) 개발 목표  

동국대학교 학생들을 위한 웹 기반 공모전 및 강의 팀 빌딩 시스템
1. 사용자에게 직관적인 인터페이스를 제공, 팀 빌딩과 프로젝트 관리 과정을 간소화하여 편리함을 제공함으로써 사용자 경험을 강화
2. 학생들에게 타학과 학생들과 교류할 수 있는 서비스를 통해 다양하고 새로운 프로젝트를 진행할 수 있게 효율적인 팀 구성의 기회를 제공
3. 교수님들께 수업 별로 팀 빌딩 과정 및 결과를 실시간으로 제공하여 학생들의 팀 빌딩에 대한 피로도를 감소
4. 동국대학교 이메일을 통한 회원가입 기능을 통해 사용자의 신뢰성을 보장하여 사용자들이 보다 적극적으로 공모전 및 프로젝트에 참여할 수 있게 도움


#### (2) 개발 내용  

 동국대학교 재학생들이 사용할 수 있도록 특화된 기능을 제공. 동국대 이메일을 통한 학생 인증, 프로젝트 관리, 팀 구성, 이력서 편집 등을 지원하며, 반응형 웹 디자인을 통해 다양한 디바이스 호환성을 갖춤
1. 기능 구성
  - 사용자 인증 시스템: 동국대 이메일을 통해 학생 및 교직원의 신원을 인증. Spring Security를 사용하지 않고, 커스텀 인증 로직을 구현하여 데이터베이스와 직접 연동.
  - 프로젝트 관리: 사용자는 자신의 프로젝트를 생성하고, 업데이트, 삭제할 수 있는 권한을 가짐. 프로젝트의 상세 정보, 참여자, 상태 등을 관리할 수 있음.
  - 팀 빌딩 시스템: 사용자는 수업 별로 팀을 구성할 수 있으며, 팀원을 초대하고, 팀 구성 상태를 실시간으로 확인할 수 있음.
  - 이력서 편집기: 사용자는 마크다운 기반 편집기를 사용하여 자신의 이력서를 작성하고 수정할 수 있음. 이력서는 사용자 프로필과 연결되어 쉽게 관리 및 공유 가능.


2. 프로토타입 설계 결과물
  - 이력서 생성 및 관리 페이지
<br><img src="https://github.com/CSID-DGU/2024-1-OSSProj-DevOops-02/assets/162280740/a38c5974-cf00-4fe0-b305-e064f06fb7a8" width="50%"><br>

  - 수업별 팀원 모집 메인 페이지
<br><img src="https://github.com/CSID-DGU/2024-1-OSSProj-DevOops-02/assets/162280740/e65de896-3ff3-45f9-be4f-46ecffad00e7" width="50%">

  - 수업별 팀원 모집 상세 페이지
<br><img src="https://github.com/CSID-DGU/2024-1-OSSProj-DevOops-02/assets/162280740/f5b61347-9b3b-4dc8-84cc-9ea6eb3401da" width="50%"><br>

- 백엔드 설계
<br><img src="https://github.com/CSID-DGU/2024-1-OSSProj-DevOops-02/assets/162280740/678f4582-c283-44cb-9d71-abfaf83d85b8" width="50%"><br>
(그림 1) 전체적인 시스템 구조
<br>
<img src="https://github.com/CSID-DGU/2024-1-OSSProj-DevOops-02/assets/162280740/c75c8555-6c6a-4d29-a099-02d3c3b89947" width="50%"><br>
(그림 2) 유스케이스 다이어그램
<br><img src="https://github.com/CSID-DGU/2024-1-OSSProj-DevOops-02/assets/162280740/f241c868-ddde-4f73-87d4-372185110fb8" width="50%"><br>
(그림 3) 프로젝트 전체 구조
<br>
<img src="https://private-user-images.githubusercontent.com/126745176/329831724-2ad7fd1d-d74f-471b-92b5-14349aa30a92.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU0OTc2NDEsIm5iZiI6MTcxNTQ5NzM0MSwicGF0aCI6Ii8xMjY3NDUxNzYvMzI5ODMxNzI0LTJhZDdmZDFkLWQ3NGYtNDcxYi05MmI1LTE0MzQ5YWEzMGE5Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMlQwNzAyMjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMzkyMmEyNjgxN2ZjZWRkMTc5NzI4YzUyNDk4YmVmMjE3YTBhM2IwYTMzNDgwY2M1MGM5MTZmMzBlNzBmMDQ3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.NEiN3mQIvE4aqPmRZZJhy3U4sixx5eGJkgYy58lMXTc" >
<br>(그림 4.1) 프로젝트 팀매칭 시퀸스 다이어그램
<br>
<img src = "https://private-user-images.githubusercontent.com/126745176/329831744-f8141bd3-c27a-4708-837d-72416c916b60.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU0OTc2NDEsIm5iZiI6MTcxNTQ5NzM0MSwicGF0aCI6Ii8xMjY3NDUxNzYvMzI5ODMxNzQ0LWY4MTQxYmQzLWMyN2EtNDcwOC04MzdkLTcyNDE2YzkxNmI2MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMlQwNzAyMjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lYmQ3M2E1NWYzNTk2Y2UxMTc3Nzk5Y2M5OTQwYjViNmZjMGJjMjNiYjNmZjQwZDgxNDE0NDM4MDI3YTQ5ZWEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.94ttPofH_LGE80Hmq2r31mJgT82GxZEz0Rtk1sn5ew8">
<br>(그림 4.1) 이력서 작성 시퀸스 다이어그램


3. 기능 상세 소개
    1.  프로젝트 및 팀 빌딩 기능
        -  직접 구현 vs 외부 API 사용
            - 직접 구현: 
                - Spring Boot를 사용하여 팀 빌딩 로직과 프로젝트 관리 기능을 완전히 커스터마이즈. 특정 요구사항에 맞게 탄력적으로 기능을 추가하거나 수정할 수 있음.
            - 외부 API 사용: 
                - Asana, Trello 등의 외부 프로젝트 관리 도구의 API를 연동하여 기능을 구현. 개발 시간을 단축시킬 수 있지만, 플랫폼에 종속될 수 있고, 모든 학교 요구사항을 만족시키지 못할 수 있음.
        - 선택된 솔루션: 직접 구현
            - 학교 환경에 특화된 맞춤형 기능 제공과 통제 가능한 시스템을 위해 직접 구현을 선택. 
            - 시스템의 유연성과 독립성을 보장하며, 학생 데이터의 보안과 개인정보 보호를 더욱 철저히 관리할 수 있음.
    2. 이력서 관리 기능
        - 단순 저장 vs 인터렉티브 편집
            - 단순 저장: 
                - 사용자가 작성한 이력서를 PDF나 DOCX 형태로 업로드 및 저장만 가능.
            - 인터랙티브 편집: 
                - 사용자가 웹 인터페이스에서 직접 이력서를 편집하고 포맷팅할 수 있는 동적인 편집 도구를 제공.
        - 선택된 솔루션: 인터렉티브 편집
            - 사용자 경험을 우선시하고, 편집의 용이성 및 접근성을 제공하기 위해 인터랙티브 편집 기능을 도입. 
            - 사용자가 자신의 이력서를 보다 쉽게 관리하고, 언제든지 수정할 수 있는 유연성을 제공한다는 이점이 존재.
    3. 재학생 인증 방법
        - Spring Security 기반 인증 vs. 동국대 이메일 인증 (Google OAuth)
            - Spring Security 기반 인증 : 
                - Spring Security는 광범위한 보안 요구사항에 대응하기 위해 매우 유연하고 확장 가능한 구조를 제공. 
                - 개발자가 완전히 제어할 수 있어 내부 시스템과의 통합이 용이
                -  구현 초기에 시간과 자원이 많이 소요.
            - 동국대학교 이메일 인증 (Google OAuth) :  
                - Google의 OAuth 서비스는 국제적으로 인정받은 인증 표준을 따름
                - 사용자는 동국대학교 제공 이메일로 쉽게 로그인할 수 있으며, 인증 과정이 사용자에게 친숙. 
                - 빠르고 간편한 구현이 가능하여 개발 시간을 절약할 수 있음.
        - 선택된 솔루션 : 동국대학교 이메일 인증 (Google OAuth)
            - 교내 이메일 시스템과의 통합을 고려할 때, Google OAuth를 사용한 동국대학교 이메일 인증은 사용자 인증의 편리함과 보안을 동시에 보장. 
            - 특히 학생과 교직원이 이미 동국대 이메일 계정을 사용하고 있기 때문에, 별도의 인증 수단을 도입하는 것보다는 기존의 구조를 활용하는 것이 효과적임.
4. 배포 옵션
  - AWS Elastic Beanstalk vs. AWS EC2
      - AWS Elastic Beanstalk : 
            - 자동화된 서버 환경 구성, 스케일링 및 관리 기능을 제공. 
            - 배포, 운영, 스케일링이 통합된 인터페이스를 통해 보다 쉬운 관리를 가능하게 함.
            - EC2에 비해 관리 부담을 줄이고, 애플리케이션에 더 집중할 수 있음.
        - AWS EC2 : 
            - 더 세밀한 서버 환경 제어가 가능하지만, 운영 및 유지 관리에 대한 부담이 증가. 
            - Elastic Beanstalk보다 관리가 복잡하고 시간이 많이 소요.
  - 선택된 솔루션 : AWS Elastic Beanstalk
    - 애플리케이션의 트래픽에 따라 자동으로 리소스를 조정하는 오토 스케일링이 가능하여 비용 절감 효과를 제공하며, 좀 더 간편한 배포 과정으로 개발자의 피로도를 감소시켜준다.
#### (4) 설계의 현실적 제한요소(제약조건)
  - AWS Elastic Beanstalk와 같은 관리형 서비스를 사용하여 AWS freetier 계정의 인프라 및 리소스 비용을 최소화하고, 관리 부담을 줄이는 방향으로 구성.
  - 오픈 소스 도구와 프레임워크를 우선적으로 사용하여 라이선스 비용을 줄임.
  - GitHub을 사용하여 소스 코드 관리 및 버전 관리를 체계적으로 수행.


#### (5) 개발 환경
- 최종 설계 결과물의 구현 수단
  - 개발환경: Mac OS, Window
  - 개발기술: Java, Spring Boot, React, AWS Elasticbeanstalk, Github Action, Docker, MySQL, Figma
  - IDE : IntelliJ, VS code
  - 협업툴 : Notion, Discord, Slack
### 2.4 기대효과
- 팀 구성 프로젝트를 하는 학생: 
    - 오픈 소스 프로젝트를 비롯한 여러 캡스톤 프로젝트들은 팀단위로 진행하나 이외 강의들은 랜덤 지정이나 자유 구성의 방식을 통해 진행. 
    - 랜덤 진행은 개개인의 능력을 고려하지 못하고, 자유 구성은 친구들과 구성을 할 가능성이 매우 높음. 
    - 우리 서비스를 통해 팀을 구성하게 된다면, 수강생 중 서로를 보완해 줄 수 있는 팀원을 만나 더 퀄리티 높은 프로젝트를 진행 할 수 있게 됨.
- 교수님: 
    -  학생 개개인의 능력을 펼치기 쉽지 않은 프로젝트 수업때문에 많은 고민
    - 우리 서비스를 통해 간편하게 팀을 구성하고, 퀄리티 높은 프로젝트를 받아 볼 수 있게 됨.
- 공모전과 프로젝트의 퀄리티 향상: 
    - 학생들은 보다 다양한 팀원들을 만나며, 서로 선영향을 주며 발전하고 성장할 수 있음. 
    - 이를 통해 공모전들에서 동국대학교 학생들의 프로젝트 퀄리티가 향상되고, 선의의 경쟁을 통해 더 발전된 결과물을 얻을 수 있음
#### (6) 현재 진행 상황
1. 백엔드
    - ERD 설계:
        - 기존 설계의 문제점 발견:
            - 기존에 사용하던 DB에서 다대다 매핑관계를 줄이기 위하여 추가 관계 테이블을 구축한 것은 옳게 되었으나, 하나의 관계를 2개로 나누어 표현됨
        - 따라서, 기존 DB 설계도를 재구성하고, 관계 테이블을 정리함
        - 추가적인 이력서, 강의를 관리하기 위해 각각의 테이블을 추가하고 다대다 매핑의 경우 관계 테이블 정의
        <br>
        <img src = "https://github.com/CSID-DGU/2024-1-OSSProj-DevOops-02/assets/126745176/85c99608-8c4b-44dc-af61-aad9d10b6197"> <br>
    - API 명세:
        - 백과 프론트의 원활한 소통을 위해 api 명세를 정의
        - 레퍼런스로 사용한 코드를 확인해본 결과, 대부분의 코드가 비어있는 것을 확인
        - 따라서, 기존 api를 모두 버리고 새롭게 api를 구성함
        - notion을 이용하여, 각 api의 기능과 작동을 상세히 설명함
        <br> <img src = "https://github.com/CSID-DGU/2024-1-OSSProj-DevOops-02/assets/126745176/2b603bae-b6e9-44e2-899d-4dc57da9a7db"> <br>
    - 데이터베이스 연결 문제 해결:
        - 프로젝트에 포함된 오픈소스 소프트웨어에서 사용하는 데이터베이스 연결 설정이 포함된 yml 파일이 .gitignore 파일에 의해 버전 관리에서 제외되었음
        - 문제를 해결하기 위해 MySQL Workbench를 사용하여 테스트용 데이터베이스를 새로 생성
        - 또한, Spring Boot 프레임워크에서 새로운 yml 파일을 생성하고 이를 통해 데이터베이스와의 연결을 성공적으로 구성함
        <br> <img src ="https://github.com/CSID-DGU/2024-1-OSSProj-DevOops-02/assets/126745176/8d280a78-e37e-4925-9d83-02d18a4eec81"> <br>
    - 백엔드 로직 구성 진행중
2. 프론트
    - 오픈소스 기능 복구: 
        - 문제점: 오픈소스 코드의 기능적으로 손상된 부분이 다수 존재 (필터링, 알고리즘, 로그인 등)
        - 해결: TeamEasy에게 불필요한 기능을 제거하고 필요한 필터링과같은 기능들 복구
    - 코드 리팩토링:
        - 문제점:  기존의 오픈소스는 TeamEasy와 기능적인 목표와 코드의 차이가 존재
        - 해결: TeamEasy의 목표와 기능에 맞도록 코드를 리팩토링
    - 차별점 기능 추가:
        1.  한눈에 보기 쉬운 상세페이지
            - 수강생들의 skill을 한눈에 확인가능
            - 실시간으로 표시되는 팀구성 현황
            - 다운로드가 필요없는 이력서
        2. 이력서 기능 구현
            - 위지윅(WYSIWYG) 을 통한 간편한 사용이 가능하도록 개발
            - 드래그앤드롭을 활용한 이미지 추가 기능 구현


### 2.5 추진일정
- 세부 작업에 대한 간트 차트

<img width="70%" alt="image" src="https://github.com/CSID-DGU/2024-1-OSSProj-DevOops-02/assets/162280740/d13b0041-3918-47c7-819d-8c41d2b124cc">

### 2.6 팀원 역할  

구분 | 성명 | 팀내 역할 
:----:|:-----:|-------
팀장 | 천기정 | 기획, DB 설계, API 명세 작성
팀원 | 김동완 | 데이터분석, 프론트엔드, 디자인        
팀원 | 김호정 | DB 연결, 로직 설계   

### 2.7 참고문헌
  - 깃허브 레퍼런스 원본 자료: https://github.com/kookmin-sw/capstone-2022-17
   https://github.com/CSID-DGU/2023-2-OSSP1-DguHeroes-2
  - 비긴메이트
      https://beginmate.com/
  - Hola !
      https://holaworld.io/


### 2.8 성과창출 계획  

항목 | 세부내용 | 예상(달성)시기  
------|------------|-------
Github 등록 |  https://github.com/CSID-DGU/2024-1-OSSProj-DevOops-02.git      | (~6/10)



