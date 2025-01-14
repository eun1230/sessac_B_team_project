// 쿼리스트링에서 필요한 값만 쉽게 가져올 수 있는 URLSearchParams()
const urlParam = new URLSearchParams(window.location.search);
console.log(urlParam);
const magId = urlParam.get('id'); // 쿼리스트링에서 id값 가져오기

// 각 매거진에 대한 정보를 담고 있는 배열
const magazines = [
  {
    id: 1,
    image: '../img/mag/mag1.png',
    name: '[ Vol.8 ] mellow cat / The Color Of My Heart Is Black.',
    comment:
      '매거진의 수익금 (권 당 1,000원)은 온기가 필요한 아이들에게 전달됩니다.',
    image2: '../img/mag/mag1-1.png',
    image3: '../img/mag/mag1-2.png',
    image4: '../img/mag/mag1-3.png',
    image5: '../img/mag/mag1-4.png',
    content:
      '‘검은 고양이 눈 감은 듯’이라는 속담이 있다. 옛날 옛적, 희미한 달빛에만 의지해야 했던 깜깜한 밤, 어둠 속에 숨은 검은 고양이는 눈에 잘 띄지 않았다. 두 눈을 감으면 어디까지 얼굴이고 어디까지 몸통인지 분간하기 어려웠다. 사람들은 눈앞의 상황을 이해하기 어려울 때 상상력을 발휘하기 시작한다. 그렇게 검은 고양이들은 밤을 호령하는 마녀의 하수인이자, 마법 세계와 현실 세계 중간에 있는, 신비한 존재가 되었다.그런데 우리는 신비함을 오래 견디지 못하는 것 같다. 신비함은 ‘이해할 수 없음’ ‘익숙하지 않음’ ‘낯섦’을 뜻하며 그런 것들은 항상 미움을 받아왔다. 규정하기 어려운 존재에 미워하는 마음을 더하자 지옥이 펼쳐졌다. 이번 호를 만들면서 얼마나 많은 고양이들이 검은색 옷을 입었다는 이유만으로 죽음에 내몰렸는지 알게 되었다. 어쩌면 무엇이든 분명하게 만들려는 마음이 폭력일지도 모른다. 검은 고양이는 당연하게도 다른 고양이들과 똑같다. 솜바지를 입고, 새벽에 와다다를 하며, 츄르에 눈을 뒤집고, 나를 업신여긴다. 하지만 아직도 검은색 옷을 입은 아이들은 가족을 만날 확률이 더 낮다. 이제 눈 감은 검은 고양이의 모호함을 버텨야 할 때가 아닐까? 그리고 조금 더 자세히 들여다봐야 한다. 분간하기 어려운 얼굴 안에 숨어있는 분홍 코와 호박색 눈의 반짝임을 찾아내자.',
    author: '편집장 박조은',
  },
  {
    id: 2,
    image: '../img/mag/mag2.png',
    name: '[ Vol.4 ] mellow cat / On The Table',
    comment:
      '매거진의 수익금 (권 당 1,000원)은 온기가 필요한 아이들에게 전달됩니다.',
    image2: '../img/mag/mag3-1.png',
    image3: '../img/mag/mag3-2.png',
    image4: '../img/mag/mag3-3.png',
    image5: '../img/mag/mag3-4.png',
    content:
      '‘밥은 단순히 ‘끼니’만을 의미하지 않는다. 누군가를 향한 관심과 애정이다. 부모님의 안부전화는 “밥 먹었니?”로 시작해서 “발 잘 챙겨 먹어라”로 끝난다. 옛 친구와의 해후를 “밥 한 번 먹자”로 마무리한 경험도 있을 것이다. 쌀 한 톨이 귀하던 시절, 가족과 친구가 굶지 않길 바라는 마음이 밥 속으로 배어들어 오늘날까지 내려온 것이리라. 어느 식료품 업체의 광고문구처럼 밥을 짓는다는 건 사랑을 말하는 가장 쉬운 방법이다. 누군가를 위해 재료를 고르고, 썰고, 찌고, 볶는 행위에는 숭고함이 깃들어 있다. 그토록 난해한 사랑을 명징하게 보여주는 행위인 것이다. 동그란 식탁에서 먹고 마시며 웃는 사이, 행복은 가장 단순한 모습으로 둥글게 둥글게 피어오른다. 모든 세포와 무의식이 ‘지금 나는 좋다’고 속삭인다. 이런 풍성한 행복을 나누자는 바람으로 멜로우 4호 테이블을 차렸다. 음식 앞에서 눈망울이 더욱 말랑해지는 녀석에게 더 좋은 것 먹이고 싶은, 그리하여 심장은 더 건강하게 뛰고 털 빛깔도 더 선명해지길 바라는 소망을 담았다. 내 입으로 음식이 들어올 때보다도 더 만족스러운 포만감을 느끼며 생각했다. ‘사랑이 밥 먹여 준다’',
    author: '디렉터 김은진',
  },
  {
    id: 3,
    image: '../img/mag/mag3.png',
    name: '[ Vol.8 ] mellow dog / Love Mix Love Is Always You.',
    comment:
      '매거진의 수익금 (권 당 1,000원)은 온기가 필요한 아이들에게 전달됩니다.',
    image2: '../img/mag/mag2-1.png',
    image3: '../img/mag/mag2-2.png',
    image4: '../img/mag/mag2-3.png',
    image5: '../img/mag/mag2-4.png',
    content:
      '‘거울을 볼 때마다 드는 생각이 있다. 어쩜 이렇게도 자연스럽게 섞였을까? 둥근 코는 아빠, 둥근 눈은 엄마.둥그런 얼굴에서 엄마와 아빠를 발견하다보면 문득 아득한 기분이 든다. 두 사람이 만나 내가 된 그 과정이 기적처럼 느껴지기 때문이다. 기적은 현재 진행형이다. 민들레 홀씨처럼 뿌리내리지 못하고 공중을 떠다니던 불안한 젊은 날에, 갑자기 쌍둥이 강아지가 눈앞에 나타났다. 온종일 내 움직임을 따라다니는 초롱한 눈빛, 끌어 안으면 목덜미에서 옅게 나는 지렁이 냄새, 규칙적으로 들려오는 평온한 숨소리, 반짝이는 털 결 이 내 하루에 섞였다. 불안과 혼란보다 두 마리 강아지의 존재감이 더 커졌을 때, 나는 드디어 뿌리를 내리기 시작했다. 그렇게 우리는 얽히고설켜 한 그루의 연리목으로 자랐다. 우리는 어떻게 이 넓은 우주에서 만나 하나가 되는 기적을 이뤘을까? 나의 안정감과 평화를 만들어 낸 공을 자연(自然)에게 돌린다. 열역학 제2법칙. 시간은 무질서를 지향한다. 우리는 오롯이 혼자 존재할 수 없다. 주변에 무언가 있다면, 반드시 그 무언가와 혼합되도록 설계되어 있다. 그러니까 ‘섞임(Mix)’은 자연의 법칙이다. 그래선지 모든 섞임에는 울림이 있다.',
    author: '편집장 박조은',
  },
];
// 해당 아이디에 해당하는 매거진 찾기
const mag = magazines.find((m) => m.id === parseInt(magId));
// 매거진 정보를 화면에 출력하기
const magDetail = document.querySelector('.magInfo');
magDetail.innerHTML = `
<h1>  MEGAZINE - No.1 </h1>
<div class='mag-box1'>
<h4>${mag.name}</h4>
    <img  id='mag-img1'src="${mag.image}" alt="${mag.name}" />
    </br></br></br>
    <p> ${mag.comment} </p>
    <img id='mag-img2' src="${mag.image2}" alt="${mag.name}" />
 <p id = 'mag-content'> ${mag.content}</p>
 <img id='mag-img2' src="${mag.image3}" alt="${mag.name}" />
 <img id='mag-img2' src="${mag.image4}" alt="${mag.name}" />
 <p> 
 "반려동물과 함께하는 행복한 일상을 위한 팁과 이야기를 담은 매거진을 소개합니다. 반려동물의 건강과 행복을 유지하는 방법, 훈련과 관리에 대한 전문가 조언, 재미있고 감동적인 반려동물 이야기 등을 다루고 있습니다. 또한, 반려동물과 함께하는 다양한 활동과 이벤트 정보도 제공하여 새로운 경험과 추억을 만들 수 있도록 도와드립니다. 당신과 반려동물의 특별한 순간을 함께 나누며, 더 행복한 동거를 위한 지식과 영감을 제공합니다."</p>
 <img id='mag-img2' src="${mag.image5}" alt="${mag.name}" />

 <p> ${mag.author} </p>
    </div>
  `;
  
// 뒤로가기 함수
function goBack() {
  window.history.back();
}

// to top btn
let toTopBtn = document.querySelector('#toTopBtn');
function topFunc() {
  document.documentElement.scrollTop = 0;
}
