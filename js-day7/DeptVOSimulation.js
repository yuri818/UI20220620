import { DeptVO } from "./DeptVO.js";
// ES6에서 지원하는 것 -  import문
// NodeJS 지원 - require('express') -"⭐CommonJS로 import할거야"

const myDVO = new DeptVO(50,'개발부','부산');
console.log(myDVO.dname);
console.log(myDVO.loc);
console.log(myDVO.deptno);