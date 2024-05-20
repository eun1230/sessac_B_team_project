document.addEventListener('DOMContentLoaded', async () => {

  let Data = [];
  let currentPage = 1;
  const commentsPerPage = 8;

  try {
    const response = await fetch('../html/community.json');
    if (!response.ok) {
      throw new Error('실패');
    }
    const data = await response.json();
    Data = data;
    loadCommunityData(Data, currentPage);
  } catch (error) {
    console.error('Error fetching community data:', error);
  }

  function loadCommunityData(data, page) {
    const startIndex = (page - 1) * commentsPerPage;
    const endIndex = Math.min(startIndex + commentsPerPage, data.length);
    // 카테고리별로 들어올 카드 반복생성
    let commentHTML = '';
    for (let i = startIndex; i < endIndex; i++) {
      console.log(JSON.stringify(data[i]));
      commentHTML += `
      <div class="card" data-id="${data[i].id}">
          <img src=${data[i].image} class="card-img" alt="..." data-id="${data[i].id}">
          <p> ${data[i].write} <br> <span>${data[i].content}</span> </p>
          <div class="heart-icon" style="position: absolute; bottom: 93px; right: 10px;">
              <img id="heart-icon-${i}" style='width: 20px; height: auto; cursor: pointer;' src="../img/h.png" onclick="toggleLike(${i})" />
              <span id="like-count-${i}" style='font-size: 12px; color: gray;'>${data[i].like}</span>
          </div>
      </div>
      `;
    }

    // 생성된 카드 추가
    const cardsContainer = document.querySelector('.cards');
    if (cardsContainer) {
      cardsContainer.innerHTML = commentHTML;
    }
    renderPagination(data.length); // 페이징 렌더링
  }

  function renderPagination(numFilterData) {
    const numOfPages = Math.ceil(numFilterData / commentsPerPage);
    let pagingHTML = '<div class="nextPageBox">';
    for (let i = 1; i <= numOfPages; i++) {
      pagingHTML += `<p class="nextPage" onclick="loadPage(${i})">${i}</p>`; // 각 페이지 번호를 클릭할 때 loadPage 함수 호출
    }
    pagingHTML += '</div>';

    const nextPageBox = document.querySelector('.nextPageBox');
    if (nextPageBox) {
      nextPageBox.innerHTML = pagingHTML;
    } else {
      const container = document.querySelector('.cards');
      const newNextPageBox = document.createElement('div');
      newNextPageBox.classList.add('nextPageBox');
      newNextPageBox.innerHTML = pagingHTML;
      container.appendChild(newNextPageBox);
    }
  }

  document.querySelector('.cards').addEventListener('click', (event) => {
    if (event.target.classList.contains('card-img')) {
      const postId = event.target.dataset.id;
      window.location.href = `../html/communityDetail.html?id=${postId}`;
    }
  });

  // 카테고리 클릭 이벤트 처리
  const liElements = document.querySelectorAll('li');
  liElements.forEach((li) => {
    li.addEventListener('click', () => {
      const categoryId = li.id;
      // 해당 카테고리에 맞는 데이터 필터링 또는 로드
      // 데이터 필터링
      let filteredData = Data;
      if (categoryId !== 'ALL') {
        filteredData = Data.filter((item) => item.category === categoryId);
      }
      loadCommunityData(filteredData, currentPage);
    });
  });
});
// 페이징 숫자를 클릭했을 때 해당 페이지의 카드 로드하는 함수
function loadPage(pageNumber) {
  currentPage = pageNumber; // 현재 페이지 갱신
  loadCommunityData(Data, currentPage); // 해당 페이지의 카드 로드
}
function toggleLike(index) {
  const heartIcon = document.querySelector(`#heart-icon-${index}`);
  const likeCount = document.querySelector(`#like-count-${index}`);
  const currentLike = parseInt(likeCount.textContent);

  // 이미 좋아요를 누른 경우
  if (heartIcon.src.includes('h-on.png')) {
    // 이미지 파일명을 h-on.png로 수정
    heartIcon.src = '../img/h.png';
    likeCount.textContent = currentLike - 1;
  } else {
    // 좋아요를 처음 누른 경우
    heartIcon.src = '../img/h-on.png'; // 이미지 파일명을 h-on.png로 수정
    likeCount.textContent = currentLike + 1;
  }
}

