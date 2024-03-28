// 1. 현재 위치 찍기
let map;
let mapContainer;
let locPosition;

// HTML5의 geolocation으로 사용할 수 있는지 확인합니다
// navigator.geolocation가 undefined가 아니라면
if (navigator.geolocation) {
  // GeoLocation을 이용해서 현재 위치를 얻어옵니다
  // 현재위치를 성공적으로 가져오면 position 객체를 갖는 callback함수를 호출
  navigator.geolocation.getCurrentPosition(function (position) {
    (lat = position.coords.latitude), // 현재 위치 위도
      (lon = position.coords.longitude); // 현재 위치 경도
    // 위에서 얻어온 위도와 경도를 사용하여 카카오맵의 LatLng 객체를 생성
    // locPosition과 message를 같이 정의
    // 이는 마커를 표시할 위치를 나타냄
    (locPosition = new kakao.maps.LatLng(lat, lon)),
      // 인포윈도우 꾸미는
      (message = '<div style="pang:5px;"ddi>현재위치</div>');
    (mapContainer = document.getElementById('map')), // 지도를 표시할 div
      // 지도를 생성할때 필요한 기본 옵션
      (mapOption = {
        center: locPosition, // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
      });
    // console.log(mapOption); // center 와 level 정보를 보여줌

    // kakao.maps.Map은 카카오맵에서 제공하는 지도객체를 생성하는 생성자 함수 인자 두개를 가짐
    // mapContainer는 지도가 표시될 html요소
    map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커와 인포윈도우를 표시합니다
    // displayMarker 함수를 호출하여 마커를 표시
    // 이 함수는 지도에 마커를 표시하고 인포윈도우를 연결하는 역할을 합니다.
    displayMarker(locPosition, message);
  });
} else {
  // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

  (locPosition = new kakao.maps.LatLng(33.450701, 126.570667)),
    (message = 'geolocation을 사용할수 없어요..');
  // kakao.maps.Map은 카카오맵에서 제공하는 지도객체를 생성하는 생성자 함수 인자 두개를 가짐
  // mapContainer는 지도가 표시될 html요소
  (mapContainer = document.getElementById('map')), // 지도를 표시할 div
    // 지도를 생성할때 필요한 기본 옵션
    (mapOption = {
      center: locPosition, // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
    });
  // console.log(mapOption); // center 와 level 정보를 보여줌

  // kakao.maps.Map은 카카오맵에서 제공하는 지도객체를 생성하는 생성자 함수 인자 두개를 가짐
  // mapContainer는 지도가 표시될 html요소
  map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
  displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {
  // 마커를 생성합니다
  marker = new kakao.maps.Marker({
    map: map,
    position: locPosition,
  });

  (iwContent = message), // 인포윈도우에 표시할 내용
    (iwRemoveable = true); // 인포윈도우를 닫을 수 있는지 여부, true로 설정하면 사용자가 인포윈도우를 닫을 수 있음

  // 인포윈도우를 생성합니다
  infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });

  // 인포윈도우를 마커위에 표시합니다
  // 지도 상에 특정한 위치나 요소에 연다 .앞에는 열고자하는 객체
  infowindow.open(map, marker);

  // 지도 중심좌표를 접속위치로 변경합니다
  map.setCenter(locPosition);
  // 37.5572397, 127.1734381;
  // 37.5572406, 127.1713051;
  // 37.5597007, 127.170877;
  // 37.5596547, 127.1696005;
  // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
  let linePath = [
    locPosition,
    new kakao.maps.LatLng(37.5572406, 127.1713051),
    new kakao.maps.LatLng(37.5597007, 127.170877),
    new kakao.maps.LatLng(37.5596547, 127.1696005),
  ];

  // 지도에 표시할 선을 생성합니다
  let polyline = new kakao.maps.Polyline({
    path: linePath, // 선을 구성하는 좌표배열 입니다
    strokeWeight: 5, // 선의 두께 입니다
    strokeColor: '#ff8f8f', // 선의 색깔입니다
    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid', // 선의 스타일입니다
  });

  // 지도에 선을 표시합니다
  polyline.setMap(map);
  // ================================================================
  // 두 지점 간의 거리를 계산하는 함수
  function calculateDistance(lat1, lon1, lat2, lon2) {
    let R = 6371; // 지구의 반지름 (단위: km)
    let dLat = deg2rad(lat2 - lat1);
    let dLon = deg2rad(lon2 - lon1);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // 두 지점 사이의 거리 (단위: km)
    return d;
  }

  // 각도를 라디안 값으로 변환하는 함수
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  // 주어진 경로의 총 거리를 계산하는 함수
  function calculatePathDistance(path) {
    let totalDistance = 0;
    for (var i = 0; i < path.length - 1; i++) {
      let point1 = path[i];
      let point2 = path[i + 1];
      let distance = calculateDistance(
        point1.getLat(),
        point1.getLng(),
        point2.getLat(),
        point2.getLng()
      );
      totalDistance += distance;
    }
    return totalDistance;
  }

  // 총 거리 계산
  let totalDistance = calculatePathDistance(linePath);
  console.log('Total distance:', totalDistance.toFixed(2), 'km');

  // =============================================================
  // 거리에 따른 예상 이동 시간을 계산하는 함수
  function calculateTravelTime(distance, averageSpeed) {
    // 거리를 평균 속도로 나누어 시간을 계산
    let time = distance / averageSpeed;
    return time;
  }

  // 거리 (km)
  let distance = totalDistance; // 위에서 계산한 총 거리

  // 평균 이동 속도 (km/h)
  let averageSpeed = 5; // 예시로 5km/h로 설정

  // 예상 이동 시간 계산
  let travelTime = calculateTravelTime(distance, averageSpeed);

  // 시간을 시간과 분으로 변환
  let hours = Math.floor(travelTime);
  let minutes = Math.round((travelTime - hours) * 60);

  console.log('Estimated travel time:', hours, 'hours', minutes, 'minutes');
  // ======================================================================
  // 100m당 30포인트 쌓이도록 포인트 생성
  let pointInterval = 100; // 미터
  let pointsPerInterval = 30;

  let totalPoints =
    Math.floor((totalDistance * 1000) / pointInterval) * pointsPerInterval; // 거리를 미터로 변환하여 계산
  let ceilPoint = Math.ceil(totalPoints);
  console.log('Total points:', ceilPoint);
  // 결과를 화면에 출력
  document.getElementById('distance').innerText = distance.toFixed(2);
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('pointDisplay').innerText = ceilPoint;

  // for (let i = 0; i < totalPoints; i++) {
  //   let pointElement = document.createElement('span');
  //   pointElement.textContent = '●'; // 원하는 모양으로 변경 가능
  //   pointDisplay.appendChild(pointElement);
  // }
}

document.querySelector('.walkstart').addEventListener('click', () => {
  document.querySelector('.ing').style.display = 'block';
  document.querySelector('.walkstart').style.display = 'none';
  document.querySelector('.walkfinish').style.display = 'block';
});
document.querySelector('.ing').addEventListener('click', () => {
  document.querySelector('.ing').style.display = 'none';
  document.querySelector('.walkstart').style.display = 'block';
  document.querySelector('.walkfinish').style.display = 'block';
});
document.querySelector('.walkfinish').addEventListener('click', () => {
  document.querySelector('.ing').style.display = 'none';
  document.querySelector('.walkstart').style.display = 'block';
  document.querySelector('.walkfinish').style.display = 'none';
});

document.querySelector('#weatherbutton').addEventListener('click', () => {
  document.querySelector('#weatherbutton').style.display = 'none';
  document.querySelector('.back').style.display = 'none';
});
document.querySelector('#modalclosebutton').addEventListener('click', () => {
  document.querySelector('#weatherbutton').style.display = 'block';
  document.querySelector('.back').style.display = 'block';
});
