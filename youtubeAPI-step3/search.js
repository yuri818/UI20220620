function handleEnter(){
  // 키를 눌렀을 때 - 13번이면 enter에 대한 코드값이다.(아스키코드)
  alert(event.keyCode)
  if(event.keyCode === 13){
    console.log('엔터 쳤을 때');
    searchList();
  }
}

function searchList(){
  const query = document.querySelector('.input').value;
  console.log('사용자가 입력한 검색어: ' + query);
  const ajax = new XMLHttpRequest();
  const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyDf6r44w-7PJNXRsI56DuRDHn2Lj-RS_w8&type=video`;

  ajax.open("GET", SEARCH_URL, false);
  ajax.send();
  // step1에서 쓴 content 대신 배열 쓰기
  const videoList = [];
  console.log(ajax.response);
  const result = JSON.parse(ajax.response); //{... itens[{snippet:...}]}
  const items = result.items; //Array 구조체를 가짐
  // console.log(result);
  // console.log(item.length); //25

  videoList.push(`<ul class='videos'>`);

  for (let i = 0; i < items.length; i++) {
    videoList.push(`<li class='container'>`);
    videoList.push(`<div class='video'>`);
    videoList.push(`<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`);
    videoList.push(`<div>`);
    videoList.push(`<p class='tilte'>${items[i].snippet.title}</p>`);
    videoList.push(`<p class='channel'>${items[i].snippet.channelTitle}</p>`);
    videoList.push(`</div>`);
    videoList.push(`</div>`);
    videoList.push(`</li>`);
  }
  videoList.push(`</ul>`);
  document.querySelector('#root').innerHTML = videoList.join("");
} ////////////////////////////end of searchList