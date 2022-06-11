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
  
  console.log(items);

  const xhr=new XMLHttpRequest();
  xhr.open('POST',`${baseURL}${url}`);
  xhr.setRequestHeader('content-type','application/json');
  xhr.setRequestHeader('Authorization',`Bearer ${token}`);
  xhr.send(JSON.stringify(items));
  xhr.onreadystatechange=()=>{
    if(xhr.status>=200 &&xhr.status<=299){
      alert('발주가 완료되었습니다.');
    }else alert(xhr.response.message);
  };
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
  