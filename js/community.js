let Data = [];

// 지도 정보 목데이터 가져오기
fetch('../html/community.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log('제이슨파일 가져옴 ', data);
    Data = data;
    console.log('fetch에서 data', Data);
    loadBest(); // 데이터가 로드된 후에 loadBest() 호출
  })
  .catch((error) => console.log('error : ', error));

function loadBest() {
  for (let i = 0; i < Data.length; i++) {
    let code = `
  <div class="card" style="width: 16rem; cursor:pointer">
  <img src=${Data[i].picture} class="card-img-top" alt="사진">
<br/>
  <div class="card-body">
    <p class="card-text">
      <span class='c-span' style="color:black;">
      ${Data[i].name} </span>
      <br />
      ${Data[i].comment} </p>
  </div>
  <div class="cnt" style="display:flex; margin-left:150px; flex-direcetion:row;">
  <span style='font-size:15px;' id="cnt-heart">
  ${Data[i].like}
  </span>
  <img 
  style='margin-left:10px;margin-bottom:10px;width:20px;height:20px;cursor:pointer' 
  src=${Data[i].heart} alt=' />
  </div>`;
    document.querySelector('.category').innerHTML += code;
  }
}

// 이미지 클릭 이벤트 처리
document.querySelectorAll('.category').forEach((card, index) => {
  card.addEventListener('click', () => {
    // 선택한 이미지의 ID를 가져옴
    let selectedId = Data[index].id;
    // 해당 ID에 해당하는 이미지로 이동
    window.location.href = `http://127.0.0.1:5500/html/communityDetail.html?id=${selectedId}`;
    // 여기서 'http://example.com/image'는 이미지가 표시되는 페이지 URL입니다.
    // 선택한 이미지의 ID를 쿼리 매개변수로 전달하여 해당 이미지를 표시하도록 할 수 있습니다.
  });
});

// // 검색 결과를 표시하는 함수
// function searchContent(keyword) {
//   const filtered = Data.filter((Data) => {
//     return product.name.includes(keyword);
//   });
//   console.log(filtered);
//   displayProducts(filtered);
// }

//검색하기 기능
const searchBtn = document.querySelector('.searchBtn');

// searchBtn.addEventListener('click', () => {
//
// });

searchBtn.addEventListener('click', () => {
  const keyword = document.querySelector('#search-input').value;
  // searchContent(keyword);
  console.log(keyword,'검색하기버튼');
});

// 카테고리 별 버튼 눌렀을 때 sub로 이동하기 & 각 게시글은 디테일페이지로 이동하기
// 


