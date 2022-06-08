import fetch from 'node-fetch';
const baseURL = 'http://localhost:5502';
const url = '/staff/me';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZl9ubyI6IjAwMDAwMDAxIiwiaWF0IjoxNjU0NzA1MDg5LCJleHAiOjE2NTQ3MDg2ODl9.vtc1yeJ6BJKQhRwTy7PY29nyBS7_e0Q7o2tkl0IbHtM';

let res = await fetch(`${baseURL}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type':'application/json',
      Authorization:`Bearer ${token}`,
    }
});
console.log("1");
const data=await res.text();
console.log("2");
console.log(data);
if(res.status>400){
    alert(data.messsage);
}
console.log("3");



