// 태그의 클라스 또는 아이디를 통해 쿼리 셀렉터를 이용해 지정된 부분의 데이터를 받아온다.
const input_item_no = document.querySelector('#item_no');
const input_refund_reason = document.querySelector('#refund_reason');
const input_item_status = document.querySelector('#item_status');
const refundBtn = document.querySelector('#refund_btn');
const backBtn=document.querySelector('#back_btn');

// 로그인 함수
async function remove() {
  // 로그인을 위한 staff_no, password를 받아온다.
  const item_no = input_item_no.value;
  const refund_reason = input_refund_reason.value;
  const item_status = input_item_status.value;


  // 서버의 baseURL를 설정하고 로그인에 대한 url를 설정한다.
  const baseURL = 'http://localhost:3000';
  const url = '/refund/add';

  // requset에 넣어서 보낼 바디 부분을 작성한다.
  const body = {
    item_no,
    refund_reason,
    item_status
  };
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

// 이벤트리스너를 통해 클릭 이벤트가 발생하면  환불 함수가 실행되도록 한다.
refundBtn.addEventListener('click', (event) => {
  event.preventDefault();
  remove();
});

backBtn.addEventListener('click',(event)=>{
  event.preventDefault();
  window.location.href='menu.html';
})
