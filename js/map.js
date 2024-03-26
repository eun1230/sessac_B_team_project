// 마커를 담을 배열입니다
let markers = [];

let mapContainer;
let mapOption;
let map;

let latitude;
let longitude;
let markerPosition;
const infoContainer = document.querySelector('.info-container');
const getKeyword = document.querySelectorAll('.map-header-btn');

//현재위치받아서 지도 생성
function success({ coords }) {
  console.log('맵 생성');
  latitude = coords.latitude; // 위도
  longitude = coords.longitude; // 경도
  console.log(`위도: ${latitude}, 경도: ${longitude}`);
  markerPosition = new kakao.maps.LatLng(latitude, longitude);

  // 지도를 표시할 div
  mapContainer = document.getElementById('map');
  mapOption = {
    // 지도의 중심좌표
    center: new kakao.maps.LatLng(latitude, longitude),
    // 지도의 확대 레벨
    level: 4,
  };

  map = new kakao.maps.Map(mapContainer, mapOption);
  // 현재위치 마커를 생성
  var currentMarker = new kakao.maps.MarkerImage(
    './../img/map/c-marker.png',
    new kakao.maps.Size(33, 35),
    {
      offset: new kakao.maps.Point(16, 34),
      alt: '마커 이미지',
      shape: 'poly',
      coords: '1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33',
    }
  );

  let marker = new kakao.maps.Marker({
    position: markerPosition,
    image: currentMarker,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
  var iwContent = '<div style="padding:3px;">당신의 현재 위치입니다!<br></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(latitude, longitude);
  //인포윈도우 표시 위치입니다

  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwContent,
  });

  // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
  infowindow.open(map, marker);
  // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
  var mapTypeControl = new kakao.maps.MapTypeControl();

  // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
  // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

  // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
  var zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}

function getUserLocation() {
  console.log('현재 위치 받아오기 getUserLocation() ');
  if (!navigator.geolocation) {
    mapContainer = document.getElementById('map');
    mapOption = {
      // 지도의 중심좌표
      center: new kakao.maps.LatLng(37.557471, 127.17571),
      // 지도의 확대 레벨
      level: 4,
    };
    map = new kakao.maps.Map(mapContainer, mapOption);

    throw '위치 정보가 지원되지 않습니다.';
  }
  navigator.geolocation.watchPosition(success);
}
getUserLocation();

// 장소 검색 객체를 생성합니다
let ps = new kakao.maps.services.Places();

// 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

// 키워드로 장소를 검색합니다
searchPlaces();

// 페이지 로드 시 초기화 함수 호출
window.onload = function () {
  searchByKeyword('동물병원'); // 페이지 로드 시 동물병원 검색
};

// 버튼 클릭 이벤트 추가
document.querySelectorAll('.map-header-btn').forEach((button) => {
  button.addEventListener('click', function () {
    const keyword = this.value; // 클릭된 버튼의 value 값 가져오기
    searchByKeyword(keyword); // 키워드로 검색하는 함수 호출
  });
});

// 검색 함수
function searchByKeyword(keyword) {
  let keywordInput = document.getElementById('keyword');
  keywordInput.value = keyword; // 키워드 입력 필드에 클릭된 버튼의 value 값 설정
  searchPlaces(); // 검색 함수 호출

  // 검색 결과 목록 상단으로 스크롤
  document.getElementById('placesList').scrollTop = 0;
}

// 키워드 검색을 요청하는 함수입니다
function searchPlaces() {
  let keyword = document.getElementById('keyword').value;

  if (!keyword.replace(/^\s+|\s+$/g, '')) {
    alert('키워드를 입력해주세요!');
    return false;
  }
  let options = {
    location: markerPosition,
    radius: 10000,
    sort: kakao.maps.services.SortBy.DISTANCE,
  };
  // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
  ps.keywordSearch(keyword, placesSearchCB,options);
}

// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
  // 현재 지도의 레벨을 얻어옵니다

  if (status === kakao.maps.services.Status.OK) {
    // 정상적으로 검색이 완료됐으면
    // 검색 목록과 마커를 표출합니다
    displayPlaces(data);

    // 페이지 번호를 표출합니다
    displayPagination(pagination);
  } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
    alert('검색 결과가 존재하지 않습니다.');
    return;
  } else if (status === kakao.maps.services.Status.ERROR) {
    alert('검색 결과 중 오류가 발생했습니다.');
    return;
  }
}

// 검색 결과 목록과 마커를 표출하는 함수입니다
function displayPlaces(places) {
  console.log('displayPlaces() 실행');
  // map 객체가 정의되지 않았을 때 처리
  if (!map) {
    console.error('map 객체가 정의되지 않았습니다.');
    return;
  }
  let sw = new kakao.maps.LatLng(latitude, longitude),
    ne = new kakao.maps.LatLng(latitude, longitude);
  console.log('영역', sw, ne);
  let listEl = document.getElementById('placesList'),
    menuEl = document.getElementById('menu_wrap'),
    fragment = document.createDocumentFragment(),
    bounds = new kakao.maps.LatLngBounds(sw, ne), //영역 설정
    listStr = '';
  let level = map.getLevel();
  map.setLevel(level + 1);

  // 검색 결과 목록에 추가된 항목들을 제거합니다
  removeAllChildNods(listEl);

  // 지도에 표시되고 있는 마커를 제거합니다
  removeMarker();

  for (var i = 0; i < places.length; i++) {
    // 마커를 생성하고 지도에 표시합니다
    let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
      marker = addMarker(placePosition, i),
      itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다
    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    // LatLngBounds 객체에 좌표를 추가합니다
    // bounds.extend(placePosition);
    console.log('마커정보 : ', marker);

    // 마커와 검색결과 항목에 mouseover 했을때
    // 해당 장소에 인포윈도우에 장소명을 표시합니다
    // mouseout 했을 때는 인포윈도우를 닫습니다
    (function (marker, title) {
      kakao.maps.event.addListener(marker, 'mouseover', function () {
        displayInfowindow(marker, title);
      });

      kakao.maps.event.addListener(marker, 'mouseout', function () {
        infowindow.close();
      });

      itemEl.onmouseover = function () {
        displayInfowindow(marker, title);
      };

      itemEl.onmouseout = function () {
        infowindow.close();
      };
    })(marker, places[i].place_name);

    fragment.appendChild(itemEl);
  }

  // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
  listEl.appendChild(fragment);
  menuEl.scrollTop = 0;

  // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다

  map.setBounds(bounds);
}

let Data = [];
// 지도 정보 목데이터 가져오기
fetch('../html/map.json')
  .then((response) => {
    // alert('a');
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log('제이슨파일 가져옴 ', data);
    Data = data;
    console.log('fetch에서 data', Data);
  })
  .catch((error) => console.log('error : ', error));

function handleListItemClick(places, index) {
  infoContainer.classList.add('info-detail');
  document.querySelector('.info-detail').innerHTML = '';

  // 상세 정보 HTML 구성
  let detailHTML = `
    <div class='info-start'>
      <img src="./../img/map/icon-back.png"class="back" onclick="back()" />
      <p id='place-category'> ${places.category_name}</p>
    </div>
    <p onclick=gotoDetail() id='place-name'>${places.place_name}
      <img class='bookmark'  src='./../img/map/bookmark_off.png' />
    </p>
    <img  onclick=gotoDetail() id='pl-img' src=${Data[index].image} />
    <br />
    <p id='road-name'>
      <span>도로명</span>
      <br />${places.road_address_name}
    </p> 
    <p id='jibun-name'>
      <span>지번</span>
      <br />${places.address_name}
    </p>
    <hr/>
    <p id='time'>
      <span>영업시간</span>
      <br/> 9:00 ~ 18:00 
      <br/><span>점심시간</span>
      <Br/> 12:00~13:00
    </p>
    <hr/>
    <p id='call'>
      <span>전화번호</span>
      <br /> ${places.phone}
    </p>
    <hr/>
    <p id='pl-content'>
      <span> 소개글</span>
      <br />${Data[index].content}
    </p>
    <hr/>
    <div style='cursor: pointer; text-align:center;' onclick=gotoDetail()>
      <span> 리뷰</span>
      <p id='pl-review'>
        <label style='font-size:10px;'>총평점</label>
        <img id='star' src=${Data[index].star} alt='총평점'/>
        <br/>
        ${Data[index].review1}
      </p>
      <p id='pl-review'>${Data[index].review2}</p>
      <p id='pl-review'>${Data[index].review3}</p>
      <span>..더보기</span>
    </div>
    <hr/>
    <br />
    <form>
      <input type="button" value="상세보기" class="btn gotoDetailBtn" onclick=gotoDetail()>
      <input type="button" value="예약" id="${places.id}" class="btn reservationBtn">
    </form>`;

  // 상세 정보를 infoContainer에 추가
  document.querySelector('.info-detail').innerHTML = detailHTML;

  document.querySelector('.info-detail-2').innerHTML = '';
  let detailHTML2 = `
  <div class="info-container2">
  <div class="info-detail-2">
    <div class='info-start2'>
      <img src="./../img/map/icon-back.png" class="back2" onclick="back()" />
      <p id='place-category2'> ${places.category_name}</p>
    </div>
    <div class='title'>
      <div id='place-name2'>${places.place_name}</div>
      <img class='bookmark2' src='./../img/map/bookmark_off.png' />
    </div>
    <div class='dt-box'>
      <div class='dt-left'>
        <div class='dt-img-box'>
          <img onclick=gotoDetail() id='pl-img2' src=${Data[index].image} />
        </div>
        <br />
          <p id='road-name2'>
            <span>도로명</span>
            ${places.road_address_name}
          </p>
          <p id='jibun-name2'>
            <span>지번</span>${places.address_name}
          </p>
          <p id='time2'>
            <span>영업시간</span>
            9:00 ~ 18:00
            <br />
            <span>점심시간</span>12:00~13:00
          </p>
          <p id='call2'>
            <span>전화번호</span>${places.phone}
          </p>
          <p id='pl-content2'>
            <br />${Data[index].content}
          </p>
        </div>
        <div class='dt-right'>
          <div class='review2'>
            <div id='review-2> <label style=' font-size:10px;'>총평점</label>
              <img id='star2' src=${Data[index].star} alt='총평점' />
            </div>
            <br />
            <label>user1</label>
            <p class='re' id='pl-review1 '> ${Data[index].review1}</p>
            <label>user2</label>
            <p class='re' id='pl-review2'>${Data[index].review2}</p>
            <label>user3</label>
            <p class='re' id='pl-review2'>${Data[index].review3}</p>
            <label>user4</label>
            <p class='re' id='pl-review1 '> ${Data[index].review4}</p>
            <label>user5</label>
            <p class='re' id='pl-review1 '> ${Data[index].review5}</p>
          </div>
        </div>
      </div>
    </div>
    <form>
      <input type="button" value="예약" id="${places.id}" class="reservationBtn2">
    </form>
  </div>
  </div>
`;
  document.querySelector('.info-detail-2').innerHTML = detailHTML2;

  document.querySelector('.reservationBtn').addEventListener('click',()=>{
    window.href='../html/reservation.html';
  })
  console.log("ㅇㅇㅇㅇ" ,window.location.search); //쿼리스트링 중 search만


  // 즐겨찾기 아이콘 클릭 이벤트 처리
  const bookmarkImg = document.querySelector('.bookmark');
  const bookmarkImg2 = document.querySelector('.bookmark2');

  const bookmarkSrc = bookmarkImg.getAttribute('src');
  const bookmarkSrc2 = bookmarkImg2.getAttribute('src');

  bookmarkImg.addEventListener('click', () => {
    if (bookmarkSrc === './../img/map/bookmark_off.png') {
      bookmarkImg.setAttribute('src', './../img/map/bookmark_on.png');
    } else {
      bookmarkImg.setAttribute('src', './../img/map/bookmark_off.png');
    }
  });
  bookmarkImg2.addEventListener('click', () => {
    if (bookmarkSrc2 === './../img/map/bookmark_off.png') {
      bookmarkImg2.setAttribute('src', './../img/map/bookmark_on.png');
    } else {
      bookmarkImg2.setAttribute('src', './../img/map/bookmark_off.png');
    }
  });
}

function gotoDetail() {
  console.log('상세정보');
  // document.querySelector('#map').setAttribute('style', 'left:1000px;');
  document
    .querySelector('.info-detail-2')
    .setAttribute('style', 'display:block');

  document.querySelector('.info-detail').setAttribute('style', 'display:none');
  document
    .querySelector('#map')
    .setAttribute('style', 'position:absoulte; left:670px; width:500px;');
}

function back() {
  document
    .querySelector('.info-container')
    .setAttribute('style', 'display: none;');
  document
    .querySelector('.info-container2')
    .setAttribute('style', 'display: none;');
  document.querySelector('#map').setAttribute('style', 'position:relative;');
}

function getListItem(index, places) {
  let el = document.createElement('li'),
    itemStr =
      '<hr><span class="markerbg marker_' +
      (index + 1) +
      '"></span>' +
      '<div class="info">' +
      '   <h4>' +
      places.place_name +
      '</h4>';

  if (places.road_address_name) {
    itemStr +=
      '    <span>' +
      places.road_address_name +
      '</span>' +
      '   <span class="jibun gray">' +
      places.address_name +
      '</span>';
  } else {
    itemStr += '    <span>' + places.address_name + '</span>';
  }

  itemStr += `  <span class="tel">` + places.phone + `</span></div> `;

  el.innerHTML = itemStr;
  el.className = 'item';

  el.addEventListener('click', function () {
    handleListItemClick(places, index); // 수정된 부분
  });

  return el;
}

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
function addMarker(position, idx, title) {
  var imageSrc = './../img/map/marker.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
    imageSize = new kakao.maps.Size(22, 33), // 마커 이미지의 크기
    imgOptions = {
      spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
      spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
      offset: new kakao.maps.Point(13, 30), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
    },
    markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
    marker = new kakao.maps.Marker({
      position: position, // 마커의 위치
      image: markerImage,
    });

  marker.setMap(map); // 지도 위에 마커를 표출합니다
  markers.push(marker); // 배열에 생성된 마커를 추가합니다

  return marker;
}

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
function removeMarker() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

// 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
function displayPagination(pagination) {
  var paginationEl = document.getElementById('pagination'),
    fragment = document.createDocumentFragment(),
    i;

  // 기존에 추가된 페이지번호를 삭제합니다
  while (paginationEl.hasChildNodes()) {
    paginationEl.removeChild(paginationEl.lastChild);
  }

  for (i = 1; i <= pagination.last; i++) {
    var el = document.createElement('a');
    el.href = '#';
    el.innerHTML = i;

    if (i === pagination.current) {
      el.className = 'on';
    } else {
      el.onclick = (function (i) {
        return function () {
          pagination.gotoPage(i);
        };
      })(i);
    }

    fragment.appendChild(el);
  }
  paginationEl.appendChild(fragment);
}

// 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
// 인포윈도우에 장소명을 표시합니다
function displayInfowindow(marker, title) {
  var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';
  infowindow.setContent(content);
  infowindow.open(map, marker);
}

// 검색결과 목록의 자식 Element를 제거하는 함수입니다
function removeAllChildNods(el) {
  while (el.hasChildNodes()) {
    el.removeChild(el.lastChild);
  }
}
