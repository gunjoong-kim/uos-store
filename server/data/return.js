import { db, format } from '../db/database.js';

export async function createReturn(staffNo) {
  const date = new Date();
  const return_no = date.getTime().toString().slice(5);
  const return_dt =
    date.getFullYear().toString() +
    '-' +
    (date.getMonth() + 1).toString() +
    '-' +
    date.getDate();
  const staff_no = staffNo;
  const store_no = '12345671';
  console.log(return_no, return_dt, staff_no, store_no);
  await db
    .execute(
      `INSERT INTO RETURN VALUES((:1),To_Date((:2),'YY-MM-DD'),(:3),(:4))`,
      [return_no, return_dt, staff_no, store_no],
      { outFormat: format }
    )
    .catch(console.error);
  return return_no;
}

export async function getReturnByDate(date) {
  return await db
    .execute(`SELECT * FROM RETURN WHERE RETURN_DT=To_Date((:1),'YY-MM-DD')`, [date], {
      outFormat: format,
    })
    .then((result) => result.rows)
    .catch(console.error);
}
