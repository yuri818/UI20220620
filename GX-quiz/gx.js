const items = document.querySelector(".items");
const item_row = document.querySelector(".item_row");
const item = document.querySelector(".item");
const item_name = document.querySelector(".item_name");
const item_delete = document.querySelector(".item_delete");
const footer_input = document.querySelector(".footer_input");
const btn_add = document.querySelector(".btn_add");
const item_divider = document.querySelector(".item_divider");

// 버튼 누르면 추가하는 것
btn_add.addEventListener('click', () => {
  // 인풋값이 비어있지 않을 경우 - 처리해주세요
  if(footer_input.value.length !== 0){
    // 콘솔에 값이 찍히는지 테스트용
    const text = footer_input.value;
    console.log(text);
    // 이제 값 추가해보자
    const newir = document.createElement("li");
    // 내가 적은 글자 가져오기
    const newt = document.createTextNode(text);
    const newi = document.createElement("div");
    const newin = document.createElement("span");
    const newid = document.createElement("button");
    const newidi = document.createElement("div");
    
    newin.appendChild(newt);
    newi.appendChild(newin);
    newi.appendChild(newid);
    newir.appendChild(newi);
    newir.appendChild(newidi);
    items.appendChild(newir);
    // 클래스 명 추가해서 css적용하기
    newir.classList.add('item_row');
    newi.classList.add('item');
    newin.classList.add('item_name');
    newid.classList.add('item_delete');
    newid.classList.add('fas');
    newid.classList.add('fa-trash-alt');
    newidi.classList.add('item_divider');
    // 추가 후 input 다시 비워주기
    footer_input.value = null;
  }
});
