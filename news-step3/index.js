// 같은 페이지 내에서 클릭했을 때 아래에 제목 출력해줄 div만들어 놓기
// 상세보기를 보여주는 div이다 - 상세보기 추가
// setText와 appendChild의 차이점은 뭘까?
// set은 덮어쓰기 append는 추가

// 반복되는 코드 싫어요~!
const container = document.getElementById("main");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
/* 
  <ul>
    <li></li>
    <li></li>
    <li></li>
    </ul>
    */
  
  fetch(NEWS_URL, requestOptions)
  .then(response => response.json()) 
  .then(result => {
    // 콜백함수라서 선언을 안에 해주어야 한다. ⭐전변으로 빼버리면 에러임
    // -> defer써서 해결!-const container
    console.log(result);
    const ul = document.createElement("ul"); 
    for(let i=0; i<10;i++){
      const div = document.createElement("div");
      div.innerHTML = `
        <li>
          <a href='#${result[i].id}'>
          ${result[i].title} 
          </a>
          (댓글 수: ${result[i].comments_count})
        </li>
      `;
      ul.appendChild(div.firstElementChild);
      container.appendChild(ul);
    }
    container.appendChild(ul);
    container.appendChild(content);
  })
  .catch(error => console.log('error', error)); 
  
  const requestOptions2 = {
    method: 'GET',
    redirect: 'follow'
  };
  
  window.addEventListener("hashchange", () => {
    console.log(location.hash);
    const id = this.location.hash.substring(1); //#31914288에서 첫번째 자리 #은 잘라내고 쓴다
    fetch(CONTENT_URL.replace("@id", id), requestOptions)
      .then(response => response.json())
      .then(result => {
        const title = this.document.createElement("h1");
        title.innerHTML = result.title;
        content.appendChild(title);
      })
      .catch(error => console.log('error', error));
  });

  // 라우터에서 화면 전환하는 걸 구현해 본다
  // 뉴스 내용 보기를 화면 전환을 통해서 재구성해보기
  // 조건에 따라 화면 전환이 일어나야 하므로 조건문에 
  // 함수호출을 통해서 이 문제를 해결해 본다

  /* 
      <무엇으로 기준할 것인가??>
      
      글 목록의 링크는 #이었음 - 해시값
      그러면 location.hash에 #이 들어왔음
      -> 이것으로 어떻게 참 | 거짓을 나눌 수 있지??
        // 0이면 false 나머지는 모두 true
      location.hash에 #만 들어오면 빈 값을 반환함 "" - true
      첫 진입일 때는 getNewsList를 호출하고 
      해시값이 존재하면 getNewsContent를 호출하게 한다
  */

  function router() {
    const hashValue = location.hash;
    if(hashValue === "") {  
      getNewsList();
    } else {
      getNewsContent();
    }
  }////////////////////////end of router

  window.addEventListener("hashchange", router); // 이벤트 핸들러 매핑하는 코드
  router(); // 무조건 호출이 일어나야하므로 밑에 따로 호출해줘야함