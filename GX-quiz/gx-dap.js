// 해커뉴스 1단계 5단계 수업리뷰

// ul 안에 li태그 추가하기 이 부분이 들어가는 것이다.
const items = document.querySelector('.items');
// 사용자가 입력한 운동명을 받기 위한 객체 찾기
const input = document.querySelector('.footer_input');
// 추가 버튼에 대한 이벤트 처리
const btn_add = document.querySelector('.btn_add');

function addItem(){
  // 추가하기
  const text = input.value;
  if(text === ""){
    input.focus();
    return;
  }
  // 아이템 만들기
  const item = createItem(text);
  items.appendChild(item);
  // 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block: 'center'});
  input.value = '';
  input.focus();
}

function createItem(text){
	const itemRow = document.createElement('li');
	itemRow.setAttribute('class','item_row');
	const item = document.createElement('div');
	item.setAttribute('class','item');
	const name = document.createElement('span');
	name.setAttribute('class','item_name');
  name.innerText = text; // name.textContent = text;
	const itemDelete = document.createElement('button');
	itemDelete.setAttribute('class','item_delete fas fa-trash-alt');
	const divider = document.createElement('div');
	divider.setAttribute('class','item_divider');
  itemDelete.addEventListener('click', () => {
    items.removeChild(itemRow);
  });
  // div에 name 넣기
  item.appendChild(name);
  // div에 삭제버튼 넣기
  item.appendChild(itemDelete);
  // li태그에 div넣기
  itemRow.appendChild(item);
  // li태그에 구분선 추가하기
  itemRow.appendChild(divider);
  // ⭐return을 빼먹지 말자!
  return itemRow;
}
// 추가 버튼 눌렀을때 아이템 추가하기
btn_add.addEventListener('click', () => {
  // 추가하는 함수 호출하기
  addItem();
});
// 엔터 했을 경우도 동일하게 처리하기
input.addEventListener('keypress', (e) => {
  // ⭐쓱 지나가지 말장~! 이걸로 확인하고 if문에서 Enter인 것 확인하깅
  // console.log('key ===> '+ e.key);
  if(e.key === 'Enter'){
    // 추가하는 함수 호출하기
    addItem();
  }
});

