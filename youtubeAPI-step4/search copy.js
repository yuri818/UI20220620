function handleEnter(){
  // 키를 눌렀을 때 - 13번이면 enter에 대한 코드값이다.(아스키코드)
  alert(event.keyCode)
  if(event.keyCode === 13){
    console.log('엔터 쳤을 때');
    searchList();
  }
}
// var는 사용하지 않는다 - 호이스팅이 발동 - ES5
function searchList(){
  const query = document.querySelector('.input').value;
  console.log('사용자가 입력한 검색어: ' + query);

  // fetch api 사용해보기 - ajax 대신 쓸 수 있다

  
  //.then(result => console.log(result.items))
  
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyDf6r44w-7PJNXRsI56DuRDHn2Lj-RS_w8&type=video`)
  .then((response) => response.json()) // 이게 JSON.parse의 역할
  .then((data) => {
    const results = data.items;  
    const videoList = [];

    videoList.push(`<ul class='videos'>`);
    for (let i = 0; i < results.length; i++) {
      videoList.push(`<li class='container'>`);
      videoList.push(`<div class='video'>`);
      videoList.push(`<img class='thumbnail' src='${results[i].snippet.thumbnails.medium.url}' alt='이미지'/>`);
      videoList.push(`<div>`);
      videoList.push(`<p class='tilte'>${results[i].snippet.title}</p>`);
      videoList.push(`<p class='channel'>${results[i].snippet.channelTitle}</p>`);
      videoList.push(`</div>`);
      videoList.push(`</div>`);
      videoList.push(`</li>`);
    }
    videoList.push(`</ul>`);
    document.querySelector('#root').innerHTML = videoList.join("");

  })
  .catch((error) => {
    console.log('error : ', error);
  });

} ////////////////////////////end of searchList