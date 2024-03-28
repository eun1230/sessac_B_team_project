document.addEventListener('DOMContentLoaded', async () => {
  let Data = [];
  let currentPage = 1;
  const commentsPerPage = 5;

  try {
    const response = await fetch('../html/community.json');
    if (!response.ok) {
      throw new Error('Failed to fetch community data');
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

    const searchKeyword = document.querySelector('.searchBar').value.trim();
    const filteredData = filterDataByKeyword(data, searchKeyword);

    const numOfFilteredData = filteredData.length;

    let commentHTML = '';
    filteredData.slice(startIndex, endIndex).forEach((post, index) => {
      commentHTML += `
        <div class="commentBox" style="cursor:pointer" data-id="${post.id}">
          <div class="commentMini">
            <div>
              <img src=${post.image} alt="프로필" />
            </div>
            <div>
              <p>${post.write}</p>
            </div>
          </div>
          <div class="commentText">
            <p>${post.title}</p>
            <p>${post.content}</p>
          </div>
          <div class="likeBox">
            <img class="heart" src="../img/h.png" alt="" />
            <p>${post.like}</p>
          </div>
        </div>
      `;
    });

    if (numOfFilteredData === 0) {
      commentHTML = '<p>검색 결과가 없습니다.</p>';
    }

    document.querySelector('.community').innerHTML = commentHTML;

    renderPagination(numOfFilteredData);
  }

  function renderPagination(numOfFilteredData) {
    const numOfPages = Math.ceil(numOfFilteredData / commentsPerPage);
    let pagingHTML = '<div class="nextPageBox">';
    for (let i = 1; i <= numOfPages; i++) {
      pagingHTML += `<p class="nextPage">${i}</p>`;
    }
    pagingHTML += '</div>';

    const nextPageBox = document.querySelector('.nextPageBox');
    if (nextPageBox) {
      nextPageBox.innerHTML = pagingHTML;
    } else {
      const container = document.querySelector('.community');
      const newNextPageBox = document.createElement('div');
      newNextPageBox.classList.add('nextPageBox');
      newNextPageBox.innerHTML = pagingHTML;
      container.appendChild(newNextPageBox);
    }
  }

  document.querySelector('.community').addEventListener('click', (event) => {
    if (event.target.classList.contains('nextPage')) {
      currentPage = parseInt(event.target.textContent);
      loadCommunityData(Data, currentPage);
    } else if (event.target.closest('.commentBox')) {
      const postId = event.target.closest('.commentBox').dataset.id;
      window.location.href = `../html/communityDetail.html?id=${postId}`;
    }
  });

  // 검색어 입력 시 자동으로 검색
  document
    .querySelector('.searchBox .searchBar')
    .addEventListener('input', () => {
      loadCommunityData(Data, 1);
    });

  // 검색 버튼 클릭 이벤트 리스너 추가
  document
    .querySelector('.searchBox .searchBtn')
    .addEventListener('click', () => {
      loadCommunityData(Data, 1);
    });

  // 키워드 버튼 클릭 이벤트 리스너 추가
  document.querySelectorAll('.content-box').forEach((button) => {
    button.addEventListener('click', () => {
      const keyword = button.textContent.substring(1); // 버튼 텍스트에서 #을 제외한 키워드 추출
      document.querySelector('.searchBar').value = keyword; // 검색 바에 키워드 설정
      loadCommunityData(Data, 1); // 필터링된 데이터로 글 목록 갱신 및 첫 페이지로 설정
    });
  });

  // 검색어로 데이터 필터링하는 함수
  function filterDataByKeyword(data, keyword) {
    return data.filter((post) => {
      // 제목, 내용, 작성자, 주소 중 하나라도 검색어가 포함되어 있는지 확인
      return (
        post.write.includes(keyword) ||
        post.content.includes(keyword) ||
        post.addr.includes(keyword) ||
        post.title.includes(keyword)
      );
    });
  }
});
