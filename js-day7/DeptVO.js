// 데이터셋 역할을 하는 VO 만들어보쟈

// 외부에서 쓸 거면 반드시 export 해주어야 한다
export class DeptVO {
  constructor(deptno, dname, loc) {
    this.deptno = deptno;
    this.dname = dname;
    this.loc = loc;
  }
  get getDeptno(){
    return this.deptno;
  }
  set setDeptno(부서번호){
    this.deptno = 부서번호;
  }
  get getDname(){
    return this.dname;
  }
  set setDname(부서명) {
    this.dname = 부서명;
  }
  get getLoc() {
    return this.loc;
  }
  set setLoc(지역){
    this.loc = 지역;
  }
}

const dvo = new DeptVO(10,'총무부','서울');
console.log(dvo.deptno);
dvo.setDeptno = 20;
console.log(dvo.getDeptno);