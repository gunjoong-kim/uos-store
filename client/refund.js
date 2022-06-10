// 태그의 클라스 또는 아이디를 통해 쿼리 셀렉터를 이용해 지정된 부분의 데이터를 받아온다.
const input_item_no = document.querySelector('#item_no');
const refundBtn = document.querySelector('#refund_btn');
const input_refund_reason=document.getElementById('#refund_reason');
const backBtn=document.querySelector('#back_btn');

// 로그인 함수
async function remove() {
  // 로그인을 위한 staff_no, password를 받아온다.
  const item_no = input_item_no.value;
  const refund_reason=input_refund_reason.value;
  console.log(item_no);

  // 서버의 baseURL를 설정하고 로그인에 대한 url를 설정한다.
  const baseURL = 'http://localhost:3000';
  const url = '/refund/add';

  // requset에 넣어서 보낼 바디 부분을 작성한다.
  const body = {
    item_no,
    refund_reason
  };
  // API Spec에 맞춰 fetch를 작성한다.
  let res = await fetch(`${baseURL}${url}`, {
    method: 'Post',
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

  alert("환불되었습니다!");
  window.location.href='refund.html';
  // 존재할 경우 해당 링크로 페이지를 이동한다.
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
