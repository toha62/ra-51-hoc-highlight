export default function WithFormattedDate(Component) {
  return function (props) {
    const currentTime = Date.now();
    const pastTime = (currentTime - Date.parse(props.date)) / 60000;
    let newDate = {};

    if (pastTime < 60) {
      newDate = {date: `${Math.floor(pastTime)} минут назад`}
    } else if (pastTime < 1440) {
      newDate = {date: `${Math.floor(pastTime / 60)} часов назад`}
    } else {
      newDate = {date: `${Math.floor(pastTime / 1440)} дней назад`}
    }
    
    return <Component {...newDate} />
  }
}