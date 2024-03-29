// 페이지 로드 시 실행되는 함수
document.addEventListener('DOMContentLoaded', () => {
  let header;
  // 로그인 상태를 확인
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  console.log('로그인상태', isLoggedIn);
  // 로그인 상태가 true이면 프로필 이미지를 헤더에 표시
  if (isLoggedIn === 'true') {
    header = `    
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
          <a href="./html/about.html">ABOUT</a>
        </li>
        <li class="m-li">
          <a href="./html/communitySub.html">COMMUNITY</a>
        </li>
        <li class="m-li">
          <a href="./html/map.html">MAP</a>
        </li>

        <li class="m-li">
        <a href="./html/walk.html">산책하기</a>
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
      <a href="./html/about.html">ABOUT</a>
    </li>
    <li class="nav-li">
      <div class="hover-img"></div>
      <a href="./html/communitySub.html">COMMUNITY</a>
    </li>
    <li class="nav-li">
      <div class="hover-img"></div>
      <a href="./html/map.html">MAP</a>
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
  <a href='./html/my.html'>
  <img src='../img/profilephoto.png' class='profile-image'>
  </a>
</div>
<div class="m-nav login">
  <a href='./html/my.html'>
  <img src='../img/profilephoto.png' class='profile-image'>
  </a>
</div>
</div>`;
  } else {
    console.log('로그인상태', isLoggedIn);
    header = `    
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
              <a href="./html/about.html">ABOUT</a>
            </li>
            <li class="m-li">
              <a href="./html/communitySub.html">COMMUNITY</a>
            </li>
            <li class="m-li">
              <a href="./html/map.html">MAP</a>
            </li>
    
            <li class="m-li">
            <a href="./html/walk.html">산책하기</a>
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
          <a href="./html/about.html">ABOUT</a>
        </li>
        <li class="nav-li">
          <div class="hover-img"></div>
          <a href="./html/communitySub.html">COMMUNITY</a>
        </li>
        <li class="nav-li">
          <div class="hover-img"></div>
          <a href="./html/map.html">MAP</a>
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
      <a href='./html/my.html'>
      <a href="./html/login.html" class="loginOnOff">LOGIN </a>
      </a>
    </div>
    <div class="m-nav login">
      <a href='./html/my.html'>
      <a href='./my.html'>
      <a href="./html/login.html" class="loginOnOff">LOGIN </a>
      </a>
      </a>
    </div>
    </div>`;
  }
  document.querySelector('header').innerHTML = header;
});
