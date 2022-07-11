
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};


fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then(response => response.json()) // 하나의 콜백
  .then(result => {
    const ul = document.createElement("ul");

    for(let i=0; i<10;i++){
      const li = document.createElement("li");
      const a = document.createElement('a')
    }
    results.push('</ul>');
    document.getElementById("root").innerHTML = results.join();
  }) // 하나의 콜백
  .catch(error => console.log('error', error));  //에러가 발생했을 때