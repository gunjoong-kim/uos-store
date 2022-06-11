const addBtn=document.querySelector('#add-btn');
const requestBtn=document.querySelector('#request-btn');
const input_product_no=document.querySelector('#product-no');
const input_request_cnt=document.querySelector("#request-cnt");
const request_list=document.querySelector('#request-list');
const allDeleteBtn=document.querySelector("#all-delete-btn");
const list=document.querySelector('#list');
const items=[];
var index=0;

function allDelete(){
    for(var i=0;i<items.length;i++){
        items.pop();
    }
    request_list.innerHTML='<h4>발주목록을 추가해주세요</h4>';
}

function addRequestToList(){
    const product_no=input_product_no.value;
    const request_cnt=input_request_cnt.value;
    if(!product_no){
      alert("제품번호를 입력하세요!");
      return;
    } else if(!request_cnt){
      alert("수량을 입력하세요!");
      return;
    }
    items.push({product_no:product_no,request_cnt:request_cnt});
    const tag=document.createElement('div');
    tag.innerHTML=`<h4 id="list">제품번호 ${items[index].product_no} 
        수량 : ${items[index].request_cnt}</h4>`;
    request_list.appendChild(tag);
    index++;
    console.log(index);
}

async function request(){
  const baseURL = `http://localhost:3000`;
  const url = '/request_list/add';
  const token=localStorage.getItem('token');
  // 정보를 받아오기 위해서는 로그인 되어 있어야 합니다.
  // 로그인 여부를 확인 하기 위해 headers에 Authorization에 token을
  // 추가해서 서버측으로 요청을 보냅니다.
  // 어떤 요청이냐에 따라 API Spec을 확인하여 body를 추가합니다.
  // staff/me의 경우 로그인 정보만 보내면 확인 가능하므로 body추가는 불필요 합니다.
  console.log(items);
  const body={
    items:items
  }
  let res = await fetch(`${baseURL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'applicaion/json',
      Authorization: `Bearer ${token}`,
    },
    body:JSON.stringify(body)
  });
  // 서버로부터 데이터를 받아옵니다.
  const data = await res.json();
  // 서버의 응답이 400이상일 경우 실패이므로 종료합니다.
  if (res.status >= 400) {
    console.log(data.message);
    return;
  } else {
    alert("발주가 완료되었습니다.");
  }
}

addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addRequestToList();
});

allDeleteBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    allDelete();
})

requestBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    request();
})
  