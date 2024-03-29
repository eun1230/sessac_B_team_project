let Data;

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('../html/community.json');
    if (!response.ok) {
      throw new Error('Failed to fetch community data');
    }
    const data = await response.json();
    Data = data;
    loadCommunityData(data);
  } catch (error) {
    console.error('Error fetching community data:', error);
  }
});

function loadCommunityData(data) {
  //쿼리스트링에서 필요한 값만 쉽게 가져올 수 있는 URLSearchParams()
  const urlParam = new URLSearchParams(window.location.search);
  const postId = urlParam.get('id'); // .get('key') == 쿼리스트링 중 id키의 값만 뽑겠다

  // 선택된 카드 정보가 있는지 확인하고 처리하기
  const post = Data.find((p) => {
    return p.id == postId;
  });

  if (post) {
    // 예시: 카드 정보를 이용하여 디테일 페이지에 내용 추가하기
    const detailPage = document.querySelector('main');
    detailPage.innerHTML = `

    <div class="backKey">
      <i class="fa-solid fa-arrow-left" style="cursor:pointer" onclick="goBack()"></i>
      <h2>${post.category}</h2>
    </div>
    <div class="dataBox">
      <p>작성자 : ${post.write}</p>
      <div class="dataMiniBox">
        <p>작성일 : ${post.date}</p>
        <p class='likeup' onclick="toggleLike(${post.id})">좋아요<img id="heart-icon-${post.id}" src=${post.heart}
            width="20px" height="20px" onclick="toggleLike(${post.id})" /><span
            id="like-count-${post.id}">${post.like}</span></p>
      </div>
    </div>
    <div class="mainDiv">
      <h4 class="titleThema">${post.title}</h4>
      ${post.addr}
      <img class="mainPicture" src="${post.image}" alt="똘이" />
      <div class="mainText">
        ${post.content}
      </div>
      <br /><br />
      <br /><br />
      <div class="comment">
        <h4>댓글</h4>
        <input placeholder="댓글을 입력하세요!" />
        <button class="upload">등록</button>
      </div>
      <div class="commentBox">
        <div class="commentContainer">

          <div class="commentMini">
            <div>
              <img src="../img/community/떠나.png" alt="프로필" />
            </div>
            <div>
              <p>컨티타</p>
            </div>
          </div>
          <div class="commentText">
            <p>${post.re1}</p>
          </div>

          <div class="commentMini">
            <div>
              <img src="../img/community/간식.png" alt="프로필" />
            </div>
            <div>
              <p>seven27</p>
            </div>
          </div>
          <div class="commentText">
            <p>${post.re2}</p>
          </div>
        </div>

      </div>
    </div>
    </div>
    </div>
    </div>`;

    // 댓글 등록 버튼에 이벤트 리스너 추가
    const commentButton = document.querySelector('.comment button');
    const commentContainer = document.querySelector('.commentContainer');

    commentButton.addEventListener('click', () => {
      const commentInput = document.querySelector('.comment input');
      const commentContent = commentInput.value;
      if (commentContent.trim() !== '') {
        const newComment = document.createElement('div');
        newComment.classList.add('commentItem');
        newComment.innerHTML = `
        <div class="commentMini">
          <div>
            <img src="../img/profilephoto.png" alt="프로필" />
          </div>
          <div>
            <p class="re-user">흰둥이</p>
          </div>
        </div>
        <div class="commentText">
          <p>${commentContent}</p>
        </div>`;
        commentContainer.append(newComment);
        commentInput.value = '';
      }
    });
  } else {
    console.log('게시글 정보 불러오기 실패');
  }
}

// 뒤로가기 함수
function goBack() {
  window.history.back();
}

function toggleLike(index) {
  const heartIcon = document.querySelector(`#heart-icon-${index}`);
  const likeCount = document.querySelector(`#like-count-${index}`);
  const currentLike = parseInt(likeCount.textContent);

  if (heartIcon.src.includes('h-on.png')) {
    heartIcon.src = '../img/h.png';
    likeCount.textContent = currentLike - 1;
  } else {
    heartIcon.src = '../img/h-on.png';
    likeCount.textContent = currentLike + 1;
  }
}

// to top btn
let toTopBtn = document.querySelector('#toTopBtn');
function topFunc() {
  document.documentElement.scrollTop = 0;
}
