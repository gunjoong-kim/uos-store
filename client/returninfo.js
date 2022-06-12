const allReturnBtn=document.querySelector('#all_return');
const returnList=document.querySelector('#return-list');
const input_returnDate=document.querySelector('#return-date');


async function allReturn(){

    const returnDate=input_returnDate.value;
    const baseURL ='http://localhost:3000';
    const url = `/return/${returnDate}`;
    const token=localStorage.getItem('token');
    console.log(returnDate);
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

    if(data.length<=0){
      alert("해당 날짜에 발품된 정보가 없습니다.")
      return;
    }

    for(var i=0;i<data.length;i++){
      const tag=document.createElement('div');
      tag.innerHTML=`
      <center>
      <table border="1">
      <tr>
      <!--첫번째줄-->
      <td>반품번호</td>
      <td>반품지점</td>
      <td>반품직원</td>
      <td>반품시간</td>
      </tr>
      <tr>
      <td>${data[i].RETURN_NO}</td>
      <td>${data[i].STORE_NO}</td> 
      <td>${data[i].STAFF_NO}</td> 
      <td>${data[i].RETURN_DT}</td> 
      </tr>
      </table>
      </center>
  `;
      returnList.appendChild(tag);
      }
}

allReturnBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    allReturn();
})
