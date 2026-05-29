export const getTimeFromTimestamp = (timestamp: number): string => {
  const timeValues = new Date(timestamp * 1000).toLocaleTimeString().split(':');
  timeValues.splice(-1, 1);
  return timeValues.join(':');
};

const msPerMinute = 60 * 1000;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;
const msPerMonth = msPerDay * 30;
const msPerYear = msPerDay * 365;

export function plural(forms: string[], n: number): string {
  let idx;
  if (n % 10 === 1 && n % 100 !== 11) {
    idx = 0;
  } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    idx = 1;
  } else {
    idx = 2;
  }
  return forms[idx] || '';
}

export function timeDifference(current: number, previous: number): string {
  const elapsed = current - previous;
  let wordForms;
  let value;

  if (elapsed < msPerMinute) {
    value = Math.round(elapsed / 1000);
    wordForms = ['секунду', 'секунды', 'секунд'];
  } else if (elapsed < msPerHour) {
    value = Math.round(elapsed / msPerMinute);
    wordForms = ['минуту', 'минуты', 'минут'];
  } else if (elapsed < msPerDay) {
    value = Math.round(elapsed / msPerHour);
    wordForms = ['час', 'часа', 'часов'];
  } else if (elapsed < msPerMonth) {
    value = Math.round(elapsed / msPerDay);
    wordForms = ['день', 'дня', 'дней'];
  } else if (elapsed < msPerYear) {
    value = Math.round(elapsed / msPerMonth);
    wordForms = ['месяц', 'месяца', 'месяцев'];
  } else {
    value = Math.round(elapsed / msPerYear);
    wordForms = ['год', 'года', 'лет'];
  }

  return `${value} ${plural(wordForms, value)} назад`;
}
