// 예약 완료 alert

function clickEvent() {
  alert('예약이 완료되었습니다!');
}
let select = document.querySelector('#select');
select.addEventListener('click', function () {
  document.querySelector('.select').setAttribute('color', '#ff8f8f');
});
