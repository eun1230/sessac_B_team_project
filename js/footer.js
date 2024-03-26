const footer = `
<footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
<div class="col mb-3">
  <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
    <img src="./../img/logoFooter.png" width="80px" height="60px">
  </a>
  <p class="text-muted">© 2024</p>
  <p class="text-muted">LUMIPET. ALL RIGHT</p>
  <p class="text-muted">RESERVED</p>
</div>
<div class="col mb-3">
</div>
<div class="col mb-3">
  <ul class="nav flex-column" style="margin-top: 40px;">
    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">이용약관</a></li>
    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">개인정보처리방침</a></li>
    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">위치기반서비스 이용약관</a></li>
  </ul>
</div>
<div class="col mb-3">
  <ul class="nav flex-column" style="margin-top: 40px;">
    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">고객센터</a></li>
    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">1800-1234</a></li>
    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">운영시간 9:00~18:00</a></li>
    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">점심 12:00~13:00</a></li>
    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">(주말,공휴일 휴무)</a></li>
  </ul>
</div>
<div class="col mb-3">
  <ul class="nav flex-column" style="margin-top: 40px;">
    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">공지사항</a></li>
    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQ</a></li>
  </ul>
</div>
</footer>`;
document.querySelector('.container.footer').innerHTML=footer;