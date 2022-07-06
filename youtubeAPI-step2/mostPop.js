const ajax = new XMLHttpRequest();
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDf6r44w-7PJNXRsI56DuRDHn2Lj-RS_w8";

ajax.open("GET", MOST_URL, false);
ajax.send();
//step1에서 쓴 content 대신 배열 쓰기
const videoList = [];

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
