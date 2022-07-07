function searchList() {
  fetch('https://api.hnpwa.com/v0/item/31914288.json')
  .then((response) => response.json())
  .then((data) => {
    const newsFeed = data.title;
    console.log(newsFeed);
    const newsList = [];
    
    newsList.push('<ul>');

    for (let i = 0; i < 5; i++) {
      newsList.push('<li>');
      newsList.push(`<p> ${newsFeed[i].title}<p>`);
      newsList.push('</p>');
    }
    newsList.push('</ul>');
    document.querySelector('#root').innerHTML = newsList.;
  })
}