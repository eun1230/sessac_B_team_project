/* 로그인 버튼 클릭하면 메인 페이지로 이동
(아이디+비번 확인하고, 둘 다 맞으면 이동) */
const loginBtn = document.querySelector('#loginBtn');
loginBtn.addEventListener('click', login);

function login() {
  let id = document.querySelector('#userId');
  let pw = document.querySelector('#password');

  // 테스트용 아이디와 비번
  let userId = 'lumipet';
  let userPw = 'lumipet1!';

  // 비밀번호 형식 (특수문자 포함, 길이) 검증
  const regPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  if (id.value == '') {
    alert('아이디를 입력해주세요.');
  } else if (id.value.length < 4 || id.value.length > 12) {
    alert('아이디는 4~12자의 영문&숫자입니다.');
  } else if (id.value !== userId) {
    alert('아이디를 확인해주세요.');
  } else if (id.value === userId) {
    // 아이디 확인 완료

    if (pw.value == '') {
      alert('비밀번호를 입력해주세요.');
    } else if (!regPw.test(pw.value)) {
      alert('비밀번호는 특수문자 포함 8~15자입니다.');
    } else if (pw.value !== userPw) {
      alert('비밀번호를 확인해주세요.');
    } else if (pw.value === userPw) {
      // 로그인 상태와 프로필 이미지 URL을 로컬 스토리지에 저장
      localStorage.setItem('isLoggedIn', 'true');
      // 로그인이 완료되었을 때 프로필 이미지 URL을 받아와서 헤더에 반영
      // 예시: replaceLoginWithProfile('프로필이미지URL');
      document.location.href = '../index.html';

      // 아이디, 비번 모두 확인되면 메인 페이지로
    }
  }
}

// 이메일로 시작하기 클릭하면 회원가입 페이지 이동
const regBtn = document.querySelector('#emailRegister');
regBtn.addEventListener('click', emailReg);
function emailReg() {
  document.location.href = './register.html';
}

// to top btn
let toTopBtn = document.querySelector('#toTopBtn');
function topFunc() {
  document.documentElement.scrollTop = 0;
}
