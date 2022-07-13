// 페이징 처리에 필요한 변수 선언하기
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
      const newsList = [];
      const max = result.length / 10;
      // 1-4와 달라진 부분 - 복잡성 줄이기
      let template = `
        <div>
          <h1>Hacker News</h1>
          <ul>
            {{__news_list__}}
          </ul>
          <div>
            <a href="#/page/{{__prev_page__}}">이전페이지</a>
            <a href="#/page/{{__next_page__}}">다음페이지</a>
          </div>
        </div>
      `;

      for(let i=(store.currentPage - 1)*10 ; i < store.currentPage * 10; i++){
        newsList.push(`
          <li>
            <a href='#${result[i].id}'>
            ${result[i].title} 
            </a>
            (댓글 수: ${result[i].comments_count})
          </li>
        `);
      } //////////////////end of for
      // 1-4와 달라진 부분
      template = template.replace("{{__news_list__}}", newsList.join(""));
      template = template.replace("{{__prev_page__}}", store.currentPage > 1 ? store.currentPage-1 : 1);
      template = template.replace("{{__next_page__}}", store.currentPage < max ? store.currentPage+1 : max);
      container.innerHTML = template;
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
    const hashValue = location.hash;
    if(hashValue === "") {  
      getNewsList();
    } 
    else if(hashValue.indexOf("#/page/") >= 0){
      store.currentPage = Number(hashValue.substring(7));
      console.log(store.currentPage); 
      getNewsList();
    }
    else {
      getNewsContent();
    }
  }////////////////////////end of router

  window.addEventListener("hashchange", router); 
  router(); 