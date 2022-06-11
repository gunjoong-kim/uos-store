
// 태그의 클라스 또는 아이디를 통해 쿼리 셀렉터를 이용해 지정된 부분의 데이터를 받아온다.

const input_sale_no = document.querySelector('#sale_no');
const input_sale_won = document.querySelector('#sale_won');
const input_received_won = document.querySelector('#received_won');
const input_customer_no = document.querySelector('#customer_no');
const input_used_mileage=document.querySelector('#used_mileage');
const input_items = document.querySelector('#items');
const input_pay_cd=document.querySelector('#pay_cd');
const signupBtn = document.querySelector('#signup_btn');
const backBtn=document.querySelector('#back_btn');

// 로그인 함수
async function add() {
  // 로그인을 위한 staff_no, password를 받아온다.
  const sale_no = input_sale_no.value;
  const sale_won = input_sale_won.value;
  const received_won = input_received_won.value;
 // const customer_no=input_customer_no.value;
  //const used_mileage=input_used_mileage.value;
  const pay_cd = input_pay_cd.value;
  const items_OG = input_items.value;
  console.log(items_OG);
  const items = items_OG.split(' ');
  console.log(items);
  const token=localStorage.getItem("token");

  // 서버의 baseURL를 설정하고 로그인에 대한 url를 설정한다.
  const baseURL = 'http://localhost:3000';
  const url = '/sale/add';

  // requset에 넣어서 보낼 바디 부분을 작성한다.
  const body = {
        sale_no,
        sale_won,
        received_won,
        customer_no:null,
        used_mileage:null,
        pay_cd,
        items
  };
  console.log(body.items);
  // API Spec에 맞춰 fetch를 작성한다.
  let res = await fetch(`${baseURL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  // 데이터를 받아온다.
  const data = await res.json();
  alert(data.message);

}

// 이벤트리스너를 통해 클릭 이벤트가 발생하면 로그인 함수가 실행되도록 한다.
signupBtn.addEventListener('click', (event) => {
  event.preventDefault();
  add();
});

backBtn.addEventListener('click',(event)=>{
  event.preventDefault();
  window.location.href='menu.html';
})
