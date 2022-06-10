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
  const url = '/staff/request?';
  const token=localStorage.getItem('token');
  // 정보를 받아오기 위해서는 로그인 되어 있어야 합니다.
  // 로그인 여부를 확인 하기 위해 headers에 Authorization에 token을
  // 추가해서 서버측으로 요청을 보냅니다.
  // 어떤 요청이냐에 따라 API Spec을 확인하여 body를 추가합니다.
  // staff/me의 경우 로그인 정보만 보내면 확인 가능하므로 body추가는 불필요 합니다.
  const body={
    items,
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
  