//토큰 받아오는 부분
// 첫번째  가나다 직원
// 두번째  정준교 점장
// const token =
//   // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZl9ubyI6IjAwMDAwMDA0IiwiaWF0IjoxNjU0NzY5MDQ2LCJleHAiOjE2NTQ4NTU0NDZ9.aoEPdb6aweAnIMwLTEzQZE2pne0cZv7F_gVpl3Q26xE';
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZl9ubyI6IjAwMDAwMDAzIiwiaWF0IjoxNjU0NzY5MTIzLCJleHAiOjE2NTQ4NTU1MjN9.gr3Xjru1NK_Cw6PC_7eEArNzGp_XUlRDTY02ix2Vi-Q';

//토큰 받아오는 부분 끝
const token=localStorage.getItem('token');
// 직원의 정보를 요청하고 직원 정보가 정상적으로 도착했을 때,
// innerHTML을 이용해 해당 정보를 뿌려줍니다.
async function staffInfoMe() {
  const baseURL = `http://localhost:3000`;
  const url = '/staff/me';
  let res = await fetch(`${baseURL}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applicaion/json',
      Authorization: `Bearer ${token}`,
    },
  });

  // 서버로부터 데이터를 받아옵니다.
  const data = await res.json();

  // 서버의 응답이 400이상일 경우 실패이므로 종료합니다.
  if (res.status >= 400) {
    console.log(data.message);
    return;
  }
  var usertab = document.getElementById('only_manager');

  var tabByPos = data.POSITION_CD;
  console.log(tabByPos);
  if (tabByPos === '01') {
    usertab.innerHTML = `
  <a>인력관리</a>
    <ul class="depth_1">
      <li><a href="signup.html">고용</a></li>
      <li><a href="fire.html">해고</a></li>
      <li><a href="staffinfoall.html">직원정보</a></li>
    </ul>
  </li>`;
  } else {
    usertab.innerHTML = `
  
  `;
  }
  var usertag = document.getElementById('userinfo');
  var y = data.STAFF_NM;
  if (tabByPos === '01') {
    usertag.innerHTML = `접속자: ${y} ,    직책:점장`;
  } else {
    usertag.innerHTML = `접속자: ${y} ,    직책:직원`;
  }
}

staffInfoMe();
