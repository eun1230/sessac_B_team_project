document.addEventListener('DOMContentLoaded', function () {
  // 로컬스토리지에서 데이터 가져오기
  const placeName = localStorage.getItem('placeName');
  const imageSrc = localStorage.getItem('imageSrc');
  const roadAddress = localStorage.getItem('roadAddress');
  console.log(placeName, imageSrc, roadAddress);

  let code = `<div class="hospital">
  <span>
    <img src="${imageSrc}" id="hospital"></span>
  <span class="hospital-content">
    <h3>${placeName}</h3>
    <p>${roadAddress}</p>
    <p>병원 운영 시간 / 9:00 - 18:00</p>
  </span>
</div>`;
  document.querySelector('.container-hospital').innerHTML = code;
});

let selectedDate = null;

const selectableDates = document.querySelectorAll('.selectable');

selectableDates.forEach((date) => {
  date.addEventListener('click', () => {
    if (selectedDate === date) {
      // 이미 선택된 요소를 다시 클릭한 경우 선택 해제
      date.removeAttribute('style');
      selectedDate = null;
    } else {
      // 선택되지 않은 경우 선택됨을 표시하고 스타일 변경
      selectableDates.forEach((d) => d.removeAttribute('style'));
      date.setAttribute(
        'style',
        'background-color: #ffc8c881;color: #fd6767;outline: none;'
      );
      selectedDate = date;
    }
  });
});

let selectedTime = null;

const selectableTimes = document.querySelectorAll('.time-slot');

selectableTimes.forEach((time) => {
  time.addEventListener('click', () => {
    if (time !== selectedTime) {
      // 이전에 선택된 시간이 있는 경우 스타일 초기화
      if (selectedTime !== null) {
        selectedTime.removeAttribute('style');
        selectedTime.classList.remove('selected-time');
      }

      // 선택된 요소에 스타일 적용
      time.setAttribute(
        'style',
        'background-color: #ffc8c881;color: #fd6767;outline: none;'
      );
      time.classList.add('selected-time');

      // 선택된 시간 업데이트
      selectedTime = time;
    } else {
      // 이미 선택된 요소를 다시 클릭한 경우 선택 해제
      time.removeAttribute('style');
      time.classList.remove('selected-time');
      selectedTime = null;
    }
  });
});

function reserve() {
  if (!selectedDate || !selectedTime) {
    // 선택된 날짜 또는 시간이 없을 경우 예약을 진행하지 않음
    alert('날짜와 시간을 선택해주세요.');
    return;
  }

  const selectedDateText = selectedDate.textContent;
  const selectedTimeText = selectedTime.textContent;

  // 예약 가능한 날짜인지 확인 (예시로 not1 클래스를 가진 td를 예약 불가로 설정)
  const notAvailableDates = document.querySelectorAll('.not1');
  let isAvailable = true;
  notAvailableDates.forEach((date) => {
    if (date.textContent === selectedDateText) {
      isAvailable = false;
    }
  });

  if (!isAvailable) {
    // 예약 불가능한 날짜일 때 알림 출력
    alert('선택한 날짜는 예약이 불가능합니다.');
  } else {
    // 예약 가능한 경우 로컬 스토리지에 선택한 날짜와 시간 저장
    localStorage.setItem('selectedDate', selectedDateText);
    localStorage.setItem('selectedTime', selectedTimeText);
    // 예약 완료 메시지 출력 또는 예약 페이지로 이동
    alert('예약이 완료되었습니다!');
    window.location.href = './my.html';
  }
}
