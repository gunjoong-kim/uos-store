const cancleBtn=document.querySelector('#cancle_btn');
const allRequestBtn=document.querySelector('#all_request');
const input_request_no=document.querySelector('#request_no');


async function cancleRequest(){
    const request_no=input_request_no.value;
    const baseURL ='http://localhost:3000';
    const url = '/staff/login';

  // requset에 넣어서 보낼 바디 부분을 작성한다.
    const body = {
        request_no
    };
  // API Spec에 맞춰 fetch를 작성한다.
    let res = await fetch(`${baseURL}${url}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

  // 데이터를 받아온다.
    const data = await res.json();

    alert(data.message);

  // 존재할 경우 해당 링크로 페이지를 이동한다.
    window.location.href = 'canclerequest.html';
}

async function allRequest(){
    const request_no=input_request_no.value;
    const baseURL ='http://localhost:3000';
    const url = '/staff/login';

  // API Spec에 맞춰 fetch를 작성한다.
    let res = await fetch(`${baseURL}${url}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    });

  // 데이터를 받아온다.
    const data = await res.json();

    alert(data.message);

  // 존재할 경우 해당 링크로 페이지를 이동한다.
    window.location.href = 'canclerequest.html';
}

cancleBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    cancleRequest();
})

allRequestBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    allRequest();
})

