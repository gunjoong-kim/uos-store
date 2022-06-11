const cancleBtn=document.querySelector('#cancle_btn');
const allReturnBtn=document.querySelector('#all_return');
const input_return_no=document.querySelector('#return_no');


async function cancleReturn(){
    const return_no=input_return_no.value;
    const baseURL ='http://localhost:3000';
    const url = '/staff/login';

  // requset에 넣어서 보낼 바디 부분을 작성한다.
    const body = {
        return_no
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
  //받아온 데이터 출력부분








  
    alert(data.message);

  // 존재할 경우 해당 링크로 페이지를 이동한다.
    window.location.href = 'canclereturn.html';
}

async function allReturn(){
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
    window.location.href = 'canclereturn.html';
}

cancleBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    cancleReturn();
})

allReturnBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    allReturn();
})
