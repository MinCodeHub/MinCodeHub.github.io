const $txt = document.querySelector(".txt-title");
const content = "안녕하세요 :)\n눈병이 나도\n해야할 일은 죽어도 하는\n 열정적인 개발자 허민영입니다.🦦";
let contentIndex = 0;

let typing = function () {
  if (contentIndex < content.length) {
    $txt.innerHTML += content[contentIndex];
    contentIndex++;
    if (content[contentIndex - 1] === "\n") {
      $txt.innerHTML += "<br />";
    }
  } else {
    clearInterval(interval);
    const moreButton = document.querySelector(".btn-more");
    moreButton.style.opacity = "1"; // 투명도를 1로 변경하여 나타나도록 함  
  }
};

let interval = setInterval(typing, 100);


// JavaScript 코드
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-content");
    const projectArticles = document.querySelectorAll(".box-project");
    const modalImage = document.getElementById("modal-image");

    // 프로젝트 정보 배열
    const projects = [
        {
            title: "미디어쿼리와 바닐라자바스크립트로 '토끼 유형 테스트' 만들기",
            description: "본 프로젝트는 html과 css와 javascript로 만든 간단한 연애 점수테스트 프로젝트입니다.\n무료 도메인 홈페이지에서 도메인을 얻고 \n 파일질라를 사용해서 인스타그램에 링크를 배포해본 경험이 있습니다.",
            imageSrc: "./src/images/project_detail_1.png" 
        },
        {
            title: "한방에 모든 것을, \n 올 인원(all in one) 스터디 웹 플랫폼",
            description: "본 프로젝트는 스터디 모집 어려움 및 잦은 플랫폼 이동을 최소화하고,\n 스터디 집중을 향상시키기 위한 올인원 웹 플랫폼입니다.\n 스터디 생성, 관리 기능을 제공하며 기존 플랫폼과 달리 스터디 관련 기능이 한 곳에서 제공된다는 차별점이 있습니다. \n팀원을 구하고 스터디가 끝나면 팀원 평가가 이뤄지며, \n평가와 함께 자신의 신뢰도가 정해지게 됩니다. \n팀블로그가 존재하여 팀 별 일정, 할 일, 채팅, 중간 장소 찾기가 가능하여 \n원할하게 스터디를 진행할 수 있습니다.",
            imageSrc: "./src/images/project_detail_2.png" 
        },
        {
            title: "1인 가구를 위한 웹 서비스 Whole-ro",
            description: "본 프로젝트는 나만의 냉장고에 장 보고 온 음식들을 등록하고,\n 팔고 싶을 땐 장터로, 나누고 싶을 땐 나눔으로\n 1인가구들과 소통할 수 있으며, \n한달동안 내가 먹은 음식들의 유형 통계를 확인할 수 있고, \n신호등으로 표시가 되며, 빨간색은 몸에 좋지 않은 음식을 너무 많이 먹었을 때, \n노란색은 몸에 좋은 음식과 나쁜 음식이 반반일 때 \n초록색은 몸에 좋은 음식을 많이 먹었을 때로 구분합니다.\n 또한 나의 현재 상태에 기반한 음식을 추천 받을 수 있습니다.",
            imageSrc: "./src/images/project_detail_3.png" 
        },
    
    ];

    // 이미지를 클릭하면 모달 창 표시
    projectArticles.forEach(function(article, index) {
        const image = article.querySelector(".img-project");
        image.addEventListener("click", function() {
            modalTitle.textContent = projects[index].title;
            modalContent.textContent = projects[index].description;
            modalImage.src = projects[index].imageSrc; 
            modal.style.display = "block";
        });
    });

    // 닫기 버튼을 클릭하면 모달 창 닫기
    const closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // 모달 외부를 클릭하면 모달 창 닫기
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
