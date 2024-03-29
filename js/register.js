/* 아이디 유효성검사 */
function confirmIdFunc() {
  // 변수에 값을 실시간으로 받아와 저장
  let id = document.querySelector('#userId').value;
  let idMsg = document.querySelector('#idCheckMsg');
  const regId = /^[a-zA-Z0-9_-]{4,12}$/;

  // 아이디 4~12자의 영문 또는 숫자만 입력 가능
  // 아이디 중복 확인 - DB 필요해서 테스트 아이디 사용
  if (id == '') {
    idMsg.innerHTML = '아이디를 입력하세요.';
  } else if (!regId.test(id)) {
    idMsg.innerHTML = '4~12자의 영문&숫자만 가능합니다.';
  } else if (id == 'lumipet') {
    // lumipet은 테스트용 아이디
    idMsg.innerHTML = '사용할 수 없는 아이디입니다.';
  } else {
    idMsg.innerHTML = '사용 가능한 아이디입니다.';
  }
}

/* 비밀번호 유효성검사 */
function pwCheckFunc() {
  // 변수에 값을 실시간으로 받아와 저장
  let userPw1 = document.querySelector('#password1').value;
  let userPw2 = document.querySelector('#password2').value;
  let pwMsg = document.querySelector('#pwCheckMsg');
  const regPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  // 비번 특수문자 포함 8~20자만 가능하도록
  // 비번이랑 확인란이랑 값이 같은지 확인
  if (userPw1 == '') {
    pwMsg.innerHTML = '비밀번호를 입력하세요.';
  } else if (!regPw.test(userPw1)) {
    pwMsg.innerHTML = '특수문자 포함 8~15자만 가능합니다.';
  } else if (userPw1 != userPw2) {
    pwMsg.innerHTML = '비밀번호가 일치하지 않습니다.';
  } else {
    pwMsg.innerHTML = '';
    // 일치하면 어떠한 메시지도 출력되지 않도록 빈칸
  }
}

/* 펫 사진 등록하면 미리보기 되도록 */
// TODO: 사진 한 개만 업로드되도록 (두번째 업로드시 대체되도록)
function showImage() {
  let newImage = document.querySelector('.showPetImg').lastElementChild;
  newImage.style.visibility = 'visible';
}

function loadFile(input) {
  let file = input.files[0];

  let newImage = document.createElement('img');
  newImage.setAttribute('class', 'img');

  newImage.src = URL.createObjectURL(file);

  newImage.style.width = '100px';
  newImage.style.height = '100px';
  newImage.style.objectFit = 'contain';

  let container = document.querySelector('.showPetImg');
  container.append(newImage);
}

/* 약관동의 - 모두 동의하기 클릭하면 전부 클릭되기 */
function checkAll(el) {
  const checkBoxes = document.querySelectorAll('.terms');
  checkBoxes.forEach((row) => {
    row.checked = el.checked;
  });
}

/* 약관동의 요소 하나라도 빠지면 '모두 동의하기' 해제되도록 */
function checkSelectAll() {
  // 하위 요소들
  const checkboxes = document.querySelectorAll('.terms');
  // 선택된거 골라내기
  const checked = document.querySelectorAll('input[name="terms"]:checked');
  // '모두 선택하기'
  const selectAll = document.querySelector('.selectAll');

  if (checkboxes.length === checked.length) {
    selectAll.checked = true;
  } else {
    selectAll.checked = false;
  }
}
/* 
가입완료 버튼 클릭하면 안내 alert 등장
alert에서 '확인' 클릭하면 메인으로 이동
아이디, 비번, 비번확인, 약관 중에 하나라도 안 했으면 이동 불가 */
function regOk() {
  let id = document.querySelector('#userId').value;
  let userPw1 = document.querySelector('#password1').value;
  let userPw2 = document.querySelector('#password2').value;
  // let agreebox = document.querySelectorAll('.terms');
  // isChecked = agreebox.checked;
  const isChecked = document.querySelectorAll('input[class=terms]:checked');
  const cnt = isChecked.length;

  if (id == '') {
    alert('아이디를 입력해주세요.');
  } else if (userPw1 == '') {
    alert('비밀번호를 입력해주세요.');
  } else if (userPw2 == '') {
    alert('비밀번호가 확인되지 않았습니다.');
    // } else if (isChecked === '') {
    //   alert('약관에 모두 동의해주세요.');
  } else if (cnt !== 3) {
    alert('약관에 모두 동의해주세요.');
  } else if (!alert('가입이 완료되었습니다!')) {
    document.location.href = '../index.html';
  }
}

/* 여기서 입력한 값이 마이페이지에서 보이게 보내기 -> 입력한 value값들을 저장하기 */
const { setItem, getItem, removeItem, clear, length, key } = localStorage;
const userInfo = {
  id: 'lumipet',
  pw: 'lumipet1!',
  petType: 'dog',
  petName: '흰둥이',
  petBirth: '2023.12.27',
  petGender: 'boy',
  spay: 'ok', // 중성화 여부
};
localStorage.setItem('userInfo', JSON.stringify(userInfo));

// to top btn
let toTopBtn = document.querySelector('#toTopBtn');
function topFunc() {
  document.documentElement.scrollTop = 0;
}
