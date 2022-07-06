const ajax = new XMLHttpRequest();
let content = '';
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDf6r44w-7PJNXRsI56DuRDHn2Lj-RS_w8";

ajax.open("GET", MOST_URL, false);
ajax.send();

console.log(ajax.response);

const result = JSON.parse(ajax.response); //{... itens[{snippet:...}]}
const items = result.items; //Array 구조체를 가짐
// console.log(result);
// console.log(item.length); //25

content += `<ul class='videos'>`;

for (let i = 0; i < items.length; i++) {
  content += `<li class='container'>`;
  content += `<div class='video'>`;
  // 이미지 태그를 만들어야 화면에 이미지 보여진다.
  content += `<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`;
  //content에 값 넣어줘야 보여진다.
  content += `<div>`;
  content += `<p class='tilte'>${items[i].snippet.title}</p>`;
  content += `<p class='channel'>${items[i].snippet.channelTitle}</p>`;
  content += `</div>`;
  content += `</div>`;
  content += `</li>`;

}
content += `</ul>`;
document.querySelector('#root').innerHTML = content;
