
<div align=left>

# 'LUMIPET | 루미펫' 사이트 제작

<br>
<p align=center><img src="https://github.com/eun1230/sessac_B_teamproject/blob/develop/img/logo.png" width="300"></p>
<br>
SeSAC 강동 3기 - 2차 팀 프로젝트에서 제작한 반려인을 위한 공간 예약 사이트 '루미펫'입니다.
<br>
<br>

## 💻 배포 주소

https://lumipet.netlify.app/

https://github.com/eun1230/sessac_B_teamproject
<br>
<br>

## 👨‍🏫 프로젝트 소개

- **기획 배경** : 반려동물이 갑자기 아플 때 24시간 동물병원을 찾기 어려웠던 경험에서 착안, 반려인을 위한 공간 예약 사이트 '루미펫' 제작

- **개발기간 및 과정**

  - 2024.03.13(수) ~ 2024.03.16(토) : 기획

  - 2024.03.17(일) ~ 2024.03.28(수) : 개발(Agile Scrum)

  - 2024.03.29(목) : 발표 및 평가
<br>

## 👩‍💻 개발자 소개 & 업무분담

- **조은별** [@eun1230](http://github.com/eun1230) : `팀장` 메인, 지도 페이지

- **조혜진** [@hjinn0813](http://github.com/hjinn0813) : 로그인, 회원가입, ABOUT

- **닌진** [@ninjuunn](http://github.com/ninjuunn) : 예약하기

- **이윤호** [@Leeyoonho0310](http://github.com/Leeyoonho0310) : 커뮤니티 (메인, 서브, 디테일, 글쓰기)

- **홍정민** [@meenie49](http://github.com/meenie49) : 마이 페이지, 산책하기 (모바일 전용)
<br>

## 🐶 주요 기능

### Main page

- Navigation bar hover event, img carousel

- 카테고리별로 다양한 공간 정보나 유저의 글을 필터링하여 확인 가능

### 로그인

[로그인 기술 상세 설명](https://hjinn0813.tistory.com/35)

- 아이디, 비밀번호 확인 및 유효성 검사 동시 진행

  - 아이디와 비번이 모두 일치하면 메인 페이지로 이동하며, 확인되지 않으면 alert 등장

- 네이버 로그인 API 사용

- `이메일로 시작하기` 버튼 클릭시 회원가입 페이지로 이동

### 회원가입

[회원가입 기술 상세 설명](https://hjinn0813.tistory.com/34)

- 아이디와 비번의 유효성검사가 실시간으로 값을 받아와서 진행

- 펫 사진 등록하면 아래에서 미리보기 가능

- 이용약관 ‘모두 동의하기’ 체크박스 기능

- ‘필수 입력’과 ‘약관동의’를 반드시 진행해야 `가입 완료` 버튼 활성화 (하나라도 완료되지 않으면 alert 등장)

- 회원가입시 입력한 정보를 로컬 스토리지에 저장하여 예약하기, 마이 페이지 등에서 사용

### 지도

- 카카오맵 API를 이용하여 현재 위치를 받아와서 보여줌

- 장소 카테고리를 클릭할 때마다 카테고리에 맞는 장소 list-up

- 특정 장소를 클릭하여 상세정보 확인 가능

- 상세정보에서 `예약` 버튼 클릭시 예약하기 페이지로 이동

### 예약하기

- 선택한 장소에 대한 정보 확인

- 예약 날짜와 시간, 진료항목 선택과 요청사항 작성

- `예약하기` 버튼 클릭시 예약완료를 알리는 alert가 등장, `확인` 클릭시 마이 페이지로 이동

### 마이 페이지

- 병원, 미용실 등 장소 예약 내역 확인 및 변경

- 커뮤니티 활동내역 확인

- 회원정보 확인 및 변경

- 알림 설정 변경

- 사진과 함께 1:1 문의글 남기기

### 커뮤니티

- 다양한 내용의 글을 카테고리별로 확인 가능

- 글 읽기, 작성

### 산책하기 (모바일 전용)

- 카카오맵 API를 사용하여 현재 위치를 받아와서 보여줌

- `시작` 버튼 클릭시 산책 시간이 카운트되는 기능

- `일시정지` 혹은 `종료` 버튼으로 시간 카운트 중지

- Open Weather Map API를 이용하여 현재 위치를 기준으로 한 날씨 정보 제공
<br>

## 🛠 기술 스택

- **Frontend**

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

- **Version Control**

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

- **Development Tool**

![VScode](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

- **Scrum**

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Kakaotalk](https://img.shields.io/badge/KakaoTalk-FFCD00?style=for-the-badge&logo=kakaotalk&logoColor=black)
![Zoom](https://img.shields.io/badge/Zoom-0B5CFF?style=for-the-badge&logo=zoom&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
(+ 대면 회의)
<br>
<br>

## 📌 API

- **카카오맵 API**

  - 지도 페이지 - 현 위치 기준으로 맵 생성 및 마커 적용, 인포 윈도우 적용 → 주변에 있는 장소 찾기

  - 산책하기 - 현 위치 기준으로 맵 생성, 마커 적용

- **Open Weather Map API**

  - 산책하기 - 현 위치 기준으로 날씨 정보 제공

- **네이버 로그인 API**

  - 미로그인 시에는 로그인 유도, 로그인 시에는 정보제공 팝업 등장 (네이버 제공 팝업)

  - 정보제공에 동의하면 로그인 완료를 알리는 자체제작 팝업으로 변경

  - '확인' 버튼을 클릭하면 팝업이 자동으로 닫히며 부모창에서 index.html로 이동
<br>

## 📁 프로젝트 구조

```bash
📦sessac_B_teamproject
 ┣ 📂css
 ┃ ┣ 📜about.css
 ┃ ┣ 📜communityDetail.css
 ┃ ┣ 📜communityMain.css
 ┃ ┣ 📜communitySub.css
 ┃ ┣ 📜communityWrite.css
 ┃ ┣ 📜header.css
 ┃ ┣ 📜header_for_login.css
 ┃ ┣ 📜login.css
 ┃ ┣ 📜mag.css
 ┃ ┣ 📜main.css
 ┃ ┣ 📜map.css
 ┃ ┣ 📜map2.css
 ┃ ┣ 📜my.css
 ┃ ┣ 📜m_map.css
 ┃ ┣ 📜register.css
 ┃ ┣ 📜reservation.css
 ┃ ┣ 📜walk.css
 ┃ ┗ 📜weather.css
 ┣ 📂html
 ┃ ┣ 📜about.html
 ┃ ┣ 📜community.json
 ┃ ┣ 📜communityDetail.html
 ┃ ┣ 📜communitySub.html
 ┃ ┣ 📜communityWrite.html
 ┃ ┣ 📜login.html
 ┃ ┣ 📜mag.html
 ┃ ┣ 📜map.html
 ┃ ┣ 📜map.json
 ┃ ┣ 📜my.html
 ┃ ┣ 📜naver_login.html
 ┃ ┣ 📜register.html
 ┃ ┣ 📜reservation.html
 ┃ ┗ 📜walk.html
 ┣ 📂js
 ┃ ┣ 📜community.js
 ┃ ┣ 📜communityDetail.js
 ┃ ┣ 📜communitySub.js
 ┃ ┣ 📜communityWrite.js
 ┃ ┣ 📜footer.js
 ┃ ┣ 📜login.js
 ┃ ┣ 📜loginHeader.js
 ┃ ┣ 📜mag.js
 ┃ ┣ 📜main.js
 ┃ ┣ 📜mainHeader.js
 ┃ ┣ 📜map.js
 ┃ ┣ 📜my.js
 ┃ ┣ 📜register.js
 ┃ ┣ 📜reservation.js
 ┃ ┣ 📜walk.js
 ┃ ┗ 📜weather.js
 ┣ 📜index.html
 ┣ 📜logo_2.png
 ┗ 📜README.md
```

---

### 📢 해당 사이트 제작에 사용한 모든 이미지의 저작권은 소유자에게 있으며, 학습용으로 사용했음을 알립니다.
