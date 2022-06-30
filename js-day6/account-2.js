export let count = 0;
// 한개일때만 default쓰고 아니면 없앤다.
// 외부에서 사용하고 싶을 때 export를 써준다.
export function increase() {
  count++;
  console.log('increase : '+ count);
}
export function getCount() {
  return count;
}