import dept from './dept.json';
console.log(dept); //아무리 내가 ""로 json만들어도 가져오면 ""없다.
console.log(typeof dept); // json이면 좋겠는데 object로 떨어짐

const user = {
  name: 'scott',
  age: 30,
  emails:[
    'test@hot.com',
    'nice@gmail.com',
  ] //얘는 객체이므로 여기에 , 찍어도 에러 발생 x /하지만 json이면 에러발생!
}

console.log(user.name);
console.log(user.age);
user.age = 15;
console.log(user['age']);
console.log(user.emails);
console.log(user['emails']);
console.log(user['emails'][0]);
console.log(user['emails'][1]);


// const str = JSON.parse(user); //user가 ""로 감싸져 있지 않음 -> json 포맷이 아니다.
const str = JSON.stringify(user); //user를 ""로 해줘서...
console.log(str);
console.log(typeof str); 

const obj = JSON.parse(str);
console.log(obj);
console.log(typeof obj);

console.log('user',user);
console.log(typeof user); // 객체이다 -> ""가 없기 때문에!
