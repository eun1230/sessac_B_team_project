// 모든 <a> 요소를 선택
const menuItems = document.querySelectorAll('li a');

// 각 메뉴 항목에 대해 이벤트 리스너 등록
menuItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    // 현재 요소의 부모 요소에 해당하는 hover-img 클래스를 가진 요소 선택 후 innerHTML 변경
    item.parentElement.querySelector(
      '.hover-img'
    ).innerHTML = `<img src='../img/logo_2.png' />`;
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
          <a href="./communitySub.html">COMMUNITY</a>
        </li>
        <li class="m-li">
          <a href="./map.html">MAP</a>
        </li>

        <li class="m-li">
        <a href="./walk.html">산책하기</a>
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
      <a href="./communitySub.html">COMMUNITY</a>
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
</div>
</div>`;

document.querySelector('header').innerHTML = header;


