const items = document.querySelector(".items");
const item_row = document.querySelector(".item_row");
const item = document.querySelector(".item");
const item_name = document.querySelector(".item_name");
const item_delete = document.querySelector(".item_delete");
const footer_input = document.querySelector(".footer_input");
const btn_add = document.querySelector(".btn_add");

btn_add.addEventListener('click', () => {
  if(footer_input.length > 0)
  item.appendChild(document.createTextNode(footer_input.value));
  // item_row.appendChild('item');
  // items.appendChild('item_row');
});