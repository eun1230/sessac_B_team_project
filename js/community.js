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
  </div>`
  ;

    document.querySelector('.category').innerHTML += code;
  }
}
