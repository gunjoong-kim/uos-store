// 태그의 클라스 또는 아이디를 통해 쿼리 셀렉터를 이용해 지정된 부분의 데이터를 받아온다.
const input_staff_no = document.querySelector('#staff_no');
const input_password = document.querySelector('#password');
const input_staff_nm=document.querySelector('#staff_nm');
const input_position_cd=document.querySelector('#position_cd');
//const input_account_no=document.querySelector('#account_no');
const signupBtn = document.querySelector('#signup_btn');
const backBtn=document.querySelector('#back_btn');

// 로그인 함수
async function signup() {
  // 로그인을 위한 staff_no, password를 받아온다.
  const staff_no = input_staff_no.value;
  const password = input_password.value;
  const staff_nm=input_staff_nm.value;
  const position_cd=input_position_cd.value;
  //const account_no=input_account_no.value;
  console.log(staff_no);

  // 서버의 baseURL를 설정하고 로그인에 대한 url를 설정한다.
  const baseURL = 'http://localhost:3000';
  const url = '/staff/signup';

  // requset에 넣어서 보낼 바디 부분을 작성한다.
  const body = {
    staff_no,
    password,
    staff_nm,
    position_cd,
    //account_no
  };
  // API Spec에 맞춰 fetch를 작성한다.
  let res = await fetch(`${baseURL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  // 데이터를 받아온다.
  const data = await res.json();

  // 데이터에서 토큰을 뽑아온다.
  const token = data.token;

  // 토큰이 존재 하지 않으면
  if (!token) {
    alert(data.message);
    return;
  }

  console.log(token);

  alert("등록되었습니다!");
  window.location.href='signup.html';
  // 존재할 경우 해당 링크로 페이지를 이동한다.
}

// 이벤트리스너를 통해 클릭 이벤트가 발생하면 로그인 함수가 실행되도록 한다.
signupBtn.addEventListener('click', (event) => {
  event.preventDefault();
  signup();
});

backBtn.addEventListener('click',(event)=>{
  event.preventDefault();
  window.location.href='menu.html';
})
