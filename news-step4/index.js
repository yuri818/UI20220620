// 페이징 처리에 필요한 변수 선언하기
// insert here - currentPage -> react에서는 redux
const store = {
  currentPage : 1
}

const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const content = document.createElement('div');
const container = document.getElementById("main");

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function getNewsList(){
  console.log('getNewsList 호출 성공');
  fetch(NEWS_URL, requestOptions)
    .then(response => response.json()) 
    .then(result => {
      // 내가 수업 외 추가한 부분 - 다음페이지에서 무한으로 증가 못하게 막으려고
      const Max = result.length / 10;
      const newsList = [];
      newsList.push("<ul>");
      // insert here - 페이징 처리를 고려한 for문으로 변경
      for(let i=(store.currentPage - 1)*10 ; i < store.currentPage * 10; i++){
      // for(let i=0; i<30;i++){
        newsList.push(`
          <li>
            <a href='#${result[i].id}'>
            ${result[i].title} 
            </a>
            (댓글 수: ${result[i].comments_count})
          </li>
        `);
      } //////////////////end of for
      newsList.push("</ul>");
      // insert here [이전페이지: 현페-1 함] - #/page/이동할 페이지 번호
      // 삼항연산자 써보기- 조건문? 참일때:거짓일때
      // 조건문? 현페-1 : 1

      // insert here [다음페이지: 현페+1 함] - #/page/이동할 페이지 번호
      newsList.push(`
        <div>
          <a href="#/page/${store.currentPage>1 ? store.currentPage-1:1}">이전페이지</a>
          <a href="#/page/${store.currentPage < Max ? store.currentPage + 1:Max}">다음페이지</a>
        </div>
      `);

      container.innerHTML = newsList.join("");
    })
    .catch(error => console.log('error', error)); 
}//////////////////////////////////end of getNewsList()

const requestOptions2 = {
    method: 'GET',
    redirect: 'follow'
  };

function getNewsContent() {
  const id = this.location.hash.substring(1);
  fetch(CONTENT_URL.replace("@id", id), requestOptions)
    .then(response => response.json())
    .then(result => {
      container.innerHTML = `
        <h1>${result.title}</h1>
        <div>
          <a href="#/page/${store.currentPage}">목록으로</a>
        </div>
      `;
    })
    .catch(error => console.log('error', error));
}/////////////////////////////////////////end of getNewsContent()

  function router() {
    // console.log(location.hash); //#3212131을 가져올 때 location.hash
    const hashValue = location.hash; //#/page/2 여기에 있다 - substring으로 자르기
    // http://localhost:5000/index.html# 이 디폴트 값(처음)
    // http://localhost:5000/index.html#3214567 
    if(hashValue === "") {  
      getNewsList();
    } 
    // #/page/2 숫자2(currentPage)는 이동해야 되는 이전페이지 번호 임
    // "http://localhost:5000/index.html#/page/2"가 있는거야? - indexof 써보자
    else if(hashValue.indexOf("#/page/") >= 0){
      // hashValue.substring(7); // 문자열  현페=Number(x)
      store.currentPage = Number(hashValue.substring(7));
      console.log(store.currentPage); // 상세보기 전에 페이지 정보를 확인
      getNewsList();
    }
    else {
      getNewsContent();
    }
  }////////////////////////end of router

  window.addEventListener("hashchange", router); 
  router(); 