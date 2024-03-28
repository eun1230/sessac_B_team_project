document.addEventListener('DOMContentLoaded', () => {
  // 로컬 스토리지에서 선택된 카드 정보 가져오기
  const selectedCard = JSON.parse(localStorage.getItem('selectedCard'));
  console.log('로컬스토리지에 저장된 데이터 가져온 거 --> ', selectedCard);

  // 선택된 카드 정보가 있는지 확인하고 처리하기
  if (selectedCard) {
    // 예시: 카드 정보를 이용하여 디테일 페이지에 내용 추가하기
    const detailPage1 = document.querySelector('main');
    detailPage1.innerHTML = `
      <div class="backKey">
        <i class="fa-solid fa-arrow-left" style="cursor:pointer" onclick="goBack()"></i>
        <h2>${selectedCard.category}</h2>
      </div>
      <div class="dataBox">
        <p>작성자 : ${selectedCard.write}</p>
        <div class="dataMiniBox">
          <p>작성일 : ${selectedCard.date}</p>
          <p>좋아요 👍 ${selectedCard.like}</p>
        </div>
      </div>
      <div class="mainDiv">
        <h4 class="titleThema">${selectedCard.title}</h4>
        ${selectedCard.addr}
        <img
          class="mainPicture"
          src="${selectedCard.image}"
          alt="똘이"
        />
        <div class="mainText">
          ${selectedCard.content}
        </div>
        <br/><br/>
        <br/><br/>
        <div class="comment">
          <h4>댓글</h4>
          <input placeholder="댓글을 입력하세요!" />
          <button class="upload">등록</button>
        </div>
        <div class="commentBox">
          <div class="commentContainer"></div>
          <div class="commentMini">
            <div>
              <img src="../img/community/갸우뚱.png" alt="프로필" />
            </div>
            <div>
              <p class="re-user">하이</p>
            </div>
          </div>
          <div class="commentText">
            <p>${selectedCard.re1}</p>
          </div>
          <div class="commentBox">
            <div class="commentMini">
              <div>
                <img src="../img/community/detail-img1.png" alt="프로필" />
              </div>
              <div>
                <p class="re-user">helloworld</p>
              </div>
            </div>
            <div class="commentText">
              <div class="likeBox">
                <i class="fa-solid fa-pencil"></i>
                <p>몇분 전</p>
              </div>
              <p>${selectedCard.re2}</p>
            </div>
            <div class="commentBox">
              <div class="commentMini">
                <div>
                  <img src="../img/community/detail-img2.png" alt="프로필" />
                </div>
                <div>
                  <p class="re-user">은별</p>
                </div>
              </div>
              <div class="commentText">
                <div class="likeBox">
                  <i class="fa-solid fa-pencil"></i>
                  <p>몇분 전</p>
                </div>
                <p>${selectedCard.re3}</p>
              </div>
            </div>
            <br/><br/><br/>
            <div class="morePicture">
              <div class="pictureLink">
                <a href="http://127.0.0.1:5500/html/communtiySubFix.html">
                  <h5>관련이미지</h5>
                  <i class="fa-solid fa-angles-right"></i>
                </a>
              </div>
              <section class="bottomImg">
                <img src="../img/community/갸우뚱.png" alt="" />
                <img src="../img/community/여행.png" alt="" />
                <img src="../img/community/컬쳐랜드.png" alt="" />
                <img src="../img/community/나그네.png" alt="" />
              </section>
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
              <img src="../img/profile.png" alt="프로필" />
            </div>
            <div>
              <p class="re-user">루미펫</p>
            </div>
          </div>
          <div class="commentText">
            <p>${commentContent}</p>
          </div>`;
        commentContainer.append(newComment);
        commentInput.value = ''; // Clear input field after adding comment
      }
    });
  } else {
    console.log('sss');
  }
});

// 뒤로가기 함수
function goBack() {
  window.history.back();
}
