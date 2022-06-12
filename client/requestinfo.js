const allRequestBtn=document.querySelector('#all_request');
const requestList=document.querySelector('#request-list');
const input_requestDate=document.querySelector('#request-date');
async function allRequest(){
    const requestDate=input_requestDate.value;
    const baseURL ='http://localhost:3000';
    const url = `/request/${requestDate}`;
    const token=localStorage.getItem('token');
    console.log(requestDate);
  // API Spec에 맞춰 fetch를 작성한다.
    let res = await fetch(`${baseURL}${url}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        }
    });

  // 데이터를 받아온다.
    const data = await res.json();
    console.log(data);
    if(!data){
      alert(data.message);
    }

    for(var i=0;i<data.length;i++){
      const tag=document.createElement('div');
      tag.innerHTML=`
      <center>
      <table border="1">
      <tr>
      <!--첫번째줄-->
      <td>발주번호</td>
      <td>발주지점</td>
      <td>발주직원</td>
      <td>발주시간</td>
      </tr>
      <tr>
      <td>${data[i].REQUEST_NO}</td>
      <td>${data[i].STORE_NO}</td> 
      <td>${data[i].STAFF_NO}</td> 
      <td>${data[i].REQUEST_DT}</td> 
      </tr>
      </table>
      </center>
  `;
      requestList.appendChild(tag);
      }
}

allRequestBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    allRequest();
})

