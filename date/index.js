//处理日期的展示格式
export const formatDate = (date, pat) => {
  const defaultDate = new Date(date);
  const year = defaultDate.getFullYear();
  let month = defaultDate.getMonth() + 1;
  let day = defaultDate.getDate();
  let hour = defaultDate.getHours();
  let minute = defaultDate.getMinutes();
  let second = defaultDate.getSeconds();
  month = month > 9 ? month : `0${month}`;
  day = day > 9 ? day : `0${day}`;
  hour = hour > 9 ? hour : `0${hour}`;
  minute = minute > 9 ? minute : `0${minute}`;
  second = second > 0 ? second : `0${second}`;
  if (!pat) {
    pat = "yyyy-MM-dd HH:mm:ss";
  }
  pat = pat.replace(/yyyy/g, year);
  pat = pat.replace(/MM/g, month);
  pat = pat.replace(/dd/g, day);
  pat = pat.replace(/HH/g, hour);
  pat = pat.replace(/mm/g, minute);
  pat = pat.replace(/ss/g, second);
  return pat;
};
