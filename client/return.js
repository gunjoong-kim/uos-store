const addBtn=document.querySelector('#add-btn');
const returnBtn=document.querySelector('#return-btn');
const input_item_no=document.querySelector('#item-no');
const input_return_reason=document.querySelector("#return-reason");
const return_list=document.querySelector('#return-list');
const allDeleteBtn=document.querySelector("#all-delete-btn");
const items=[];
var index=0;

function allDelete(){
    for(var i=0;i<items.length;i++){
        items.pop();
    }
    return_list.innerHTML='<h4>반품목록을 추가해주세요</h4>';
}

function addReturnToList(){
    const item_no=input_item_no.value;
    const return_reason=input_return_reason.value;
    if(!item_no){
        alert("물품번호를 입력하세요!");
        return;
      } else if(!return_reason){
        alert("반품사유를 입력하세요!");
        return;
      }
    items.push({item_no:item_no,return_reason:return_reason});
    const tag=document.createElement('div');
    tag.innerHTML=`<h4>물품번호 ${items[index].item_no} 
        반품사유 : ${items[index].return_reason}</h4>`;
    return_list.appendChild(tag);
    index++;
    console.log(index);
}

async function returnToServer(){
  const baseURL = `http://localhost:3000`;
  const url = '/return_list/add';
  const token=localStorage.getItem('token');
  const xhr=new XMLHttpRequest();
  xhr.open('POST',`${baseURL}${url}`);
  xhr.setRequestHeader('content-type','application/json');
  xhr.setRequestHeader('Authorization',`Bearer ${token}`);
  xhr.send(JSON.stringify(items));
  xhr.onreadystatechange=()=>{
    if(xhr.status>=200 &&xhr.status<=299){
      alert('반품이 완료되었습니다.');
    }else alert(xhr.response.message);
  };
  
}

addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addReturnToList();
});

allDeleteBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    allDelete();
})

returnBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    returnToServer();
})
  