// 같은 페이지 내에서 클릭했을 때 아래에 제목 출력해줄 div만들어 놓기
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

// 비교하려고 li를 string으로 처리해보자~
// DOM API를 조작할 때와 string으로 그렸을 때 볼륨차이, 복잡도 차이 생각해보기

// ``이 볼륨은 늘어나겠지만 복잡성을 줄이고 직관성을 높여준다
fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then(response => response.json()) 
  .then(result => {
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
      document.getElementById("root").appendChild(ul);
    }
    document.getElementById("root").appendChild(ul);
    document.getElementById("root").appendChild(content);
  })
  .catch(error => console.log('error', error)); 
  
  // 뉴스컨텐츠 추가하기
  const requestOptions2 = {
    method: 'GET',
    redirect: 'follow'
  };
  
  // hash 값 바뀌었을때 확인되는지
  window.addEventListener("hashchange", () => {
    console.log(location.hash);
    // 앞에 #을 빼고 가져와야하니까 substring(1)로 해준다
    const id = this.location.hash.substring(1); //#31914288에서 첫번째 자리 #은 잘라내고 쓴다
    // replace 이용해서 @id를 id로 치환한다
    fetch("https://api.hnpwa.com/v0/item/@id.json".replace("@id", id), requestOptions)
      .then(response => response.json())
      // then 과 then은 callback으로 연결된다
      // .then(result => console.log(result))
      .then(result => {
        // 1-3에서는 이부분을 직관적으로 표현하기 위해 string으로 나타내보자
        const title = this.document.createElement("h1");
        title.innerHTML = result.title;
        content.appendChild(title);
      })
      .catch(error => console.log('error', error));
  });

// ⭐❗문제제기
// 리스트와 상세보기가 같은화면에 보이네....? 불편한뎅!!!!


  // 여기까지 끝났으면 페이지가 넘어가고 싶어... 여기서 처리하고 싶지않아! -> router(라우터)
  // 라우팅 처리해주는 함수를 구현해야 한다
  // 페이징 처리까지 생각해보자
  // 문자열로 DOM을 만드는게 직관적이다.

