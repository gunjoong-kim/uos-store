
// 태그의 클라스 또는 아이디를 통해 쿼리 셀렉터를 이용해 지정된 부분의 데이터를 받아온다.
const input_staff_no=document.querySelector('#staff_no');
const signupBtn = document.querySelector('#signup_btn');
const backBtn=document.querySelector('#back_btn');

// 로그인 함수
async function discharge() {
  // 해고처리를 위한 staff_no를 받아온다.
  const staff = input_staff_no.value;

  // 서버의 baseURL를 설정하고 로그인에 대한 url를 설정한다.
  const baseURL = 'http://localhost:3000';
  const url = `/staff/discharge/${staff}`;
  const token=localStorage.getItem('token');

  // API Spec에 맞춰 fetch를 작성한다.
  let res = await fetch(`${baseURL}${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,

    },
  });

  

  // 데이터를 받아온다.
}

// 이벤트리스너를 통해 클릭 이벤트가 발생하면 로그인 함수가 실행되도록 한다.
signupBtn.addEventListener('click', (event) => {
  event.preventDefault();
  discharge();
});

backBtn.addEventListener('click',(event)=>{
  event.preventDefault();
  window.location.href='menu.html';
})
