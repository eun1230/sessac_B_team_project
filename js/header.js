// 모든 <a> 요소를 선택
const menuItems = document.querySelectorAll('li a');

// 각 메뉴 항목에 대해 이벤트 리스너 등록
menuItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    // 현재 요소의 부모 요소에 해당하는 hover-img 클래스를 가진 요소 선택 후 innerHTML 변경
    item.parentElement.querySelector(
      '.hover-img'
    ).innerHTML = `<img src='./../img/logo_2.png' />`;
  });

  item.addEventListener('mouseleave', () => {
    // 현재 요소의 부모 요소에 해당하는 hover-img 클래스를 가진 요소 선택 후 innerHTML 초기화
    item.parentElement.querySelector('.hover-img').innerHTML = '';
  });
});
