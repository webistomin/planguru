export default function timeConverter(time24, withoutMeridiem = false) {
  const isInteger = time24 % 1 === 0;
  const getMeridiem = time24 >= 12 ? 'PM' : 'AM';
  const leadingZero = (time24 >= 13 && time24 < 22) || (time24 < 10) ? '0' : '';
  let hour = null;
  let minutes = null;

  if (time24 > 12.5) {
    const PMtime = time24 - 12;
    hour = parseInt(PMtime, 10);
  } else {
    hour = parseInt(time24, 10);
  }

  if (isInteger) {
    minutes = '00';
  } else {
    minutes = '30';
  }

  if (withoutMeridiem) {
    return `${leadingZero}${hour}:${minutes}`;
  }
  return `${leadingZero}${hour}:${minutes} ${getMeridiem}`;
}
