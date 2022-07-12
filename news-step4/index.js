const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const content = document.createElement('div');
const container = document.getElementById("main");
/* 
  <ul>
    <li></li>
    <li></li>
    <li></li>
    </ul>
*/

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
      newsList.push("<ul>");
      for(let i=0; i<10;i++){
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
          <a href="#">목록으로</a>
        </div>
      `;
    })
    .catch(error => console.log('error', error));
}/////////////////////////////////////////end of getNewsContent()

  function router() {
    const hashValue = location.hash;
    if(hashValue === "") {  
      getNewsList();
    } else {
      getNewsContent();
    }
  }////////////////////////end of router

  window.addEventListener("hashchange", router); 
  router(); 