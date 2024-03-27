// 모든 <a> 요소를 선택
const menuItems = document.querySelectorAll('li a');

// 각 메뉴 항목에 대해 이벤트 리스너 등록
menuItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    // 현재 요소의 부모 요소에 해당하는 hover-img 클래스를 가진 요소 선택 후 innerHTML 변경
    item.parentElement.querySelector(
      '.hover-img'
    ).innerHTML = `<img src='./img/logo_2.png' />`;
  });

  item.addEventListener('mouseleave', () => {
    // 현재 요소의 부모 요소에 해당하는 hover-img 클래스를 가진 요소 선택 후 innerHTML 초기화
    item.parentElement.querySelector('.hover-img').innerHTML = '';
  });
});

const header = `    
<div class="header-container">
<!-- nav메뉴 -->
<!-- 모바일 햄버거 -->
<div class="m-nav hamb">
  <img src="../img/hamb.png" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
    aria-controls="offcanvasExample">
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul id="m-ul">
        <li class="m-li">
          <a href="./about.html">ABOUT</a>
        </li>
        <li class="m-li">
          <a href="./communityMain.html">COMMUNITY</a>
        </li>
        <li class="m-li">
          <a href="./map.html">MAP</a>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="nav-left">
  <ul id="leftToRight">
    <li class="nav-li">
      <div class="hover-img">
      </div>
      <a href="./about.html">ABOUT</a>
    </li>
    <li class="nav-li">
      <div class="hover-img"></div>
      <a href="./communityMain.html">COMMUNITY</a>
    </li>
    <li class="nav-li">
      <div class="hover-img"></div>
      <a href="./map.html">MAP</a>
    </li>
  </ul>
</div>
<!-- 가운데 로고 -->
<div class="nav-center">
  <a href='../index.html'><img class="logo" src="../img/logo.png" /></a>
</div>
<!-- 로그인/마이페이지 -->
<div class="nav-right">
  <div style="width:20px; height:20px;">
  </div>
  <a href="./login.html" class="loginOnOff">LOGIN </a>
</div>
<div class="m-nav login">
  <a href='./login.html'>LOGIN</a>
  <!-- <img src="./img/profile.png" /> -->
</div>
</div>`;

document.querySelector('header').innerHTML = header;

// 로그인이 완료되면 프로필 이미지를 가져와서 헤더의 "LOGIN" 링크를 대체하는 함수
function replaceLoginWithProfile(profileImageUrl) {
  console.log(profileImageUrl);
  const loginLink = document.querySelector('.nav-right .loginOnOff');
  if (loginLink) {
    // "LOGIN" 링크 대신 프로필 이미지로 변경
    loginLink.innerHTML = `<img src="${profileImageUrl}" />`;
    // 프로필 이미지를 클릭하면 로그아웃되도록 링크 변경
    loginLink.href = './logout.html'; // 로그아웃 페이지 URL로 변경
    loginLink.classList.add('profile-link'); // 프로필 이미지를 구별하기 위한 클래스 추가
  }
}

// 로그인이 완료되었을 때 프로필 이미지 URL을 받아와서 헤더에 반영
// 예시: replaceLoginWithProfile('프로필이미지URL');
replaceLoginWithProfile('../img/logo_2.png');

// 사용자가 로그인에 성공하면 호출되는 함수
function loginSuccess(profileImageUrl) {
  // 로그인 상태와 프로필 이미지 URL을 로컬 스토리지에 저장
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('profileImageUrl', profileImageUrl);
}

// 페이지 로드 시 실행되는 함수
document.addEventListener('DOMContentLoaded', () => {
  // 로그인 상태를 확인
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  console.log(isLoggedIn);

  // 로그인 상태가 true이면 프로필 이미지를 헤더에 표시
  if (isLoggedIn === 'true') {
    const profileImageUrl = localStorage.getItem('profileImageUrl');
    displayProfileImage(profileImageUrl);
  }
});

// 프로필 이미지를 헤더에 표시하는 함수
function displayProfileImage(profileImageUrl) {
  // 헤더에 있는 프로필 이미지 요소 선택
  const profileImageElement = document.querySelector('.profile-image');

  // 이미지 URL을 설정하여 프로필 이미지 표시
  profileImageElement.src = profileImageUrl;
  profileImageElement.style.display = 'inline'; 
}
// 프로필 이미지를 클릭했을 때 마이페이지로 이동하는 이벤트 핸들러 추가
document.addEventListener('click', (event) => {
  // 클릭된 요소가 프로필 링크인지 확인
  const clickedElement = event.target;
  if (clickedElement.classList.contains('profile-link')) {
    // 클릭된 요소가 프로필 링크인 경우, 마이페이지로 이동
    window.location.href = './mypage.html'; // 마이페이지 URL로 변경
  }
});
