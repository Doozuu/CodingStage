const dDayForm = document.querySelector("#dDay-form");
const dDayInput = document.querySelector("#dDay-form input");
const dDay = document.querySelector("#d-day");
const DDAY_KEY = "d-day";

function onDdaySubmit(event) {
  event.preventDefault();
  dDayForm.classList.add("hidden");
  const inputDay = dDayInput.value;
  localStorage.setItem(DDAY_KEY, inputDay);
  calDday(inputDay);
}

function calDday(input) {
  const masTime = Date.parse(input);
  const todayTime = new Date();
  const remainTime = masTime - todayTime;

  if(remainTime<=0 && localStorage.getItem(TODOS_KEY) === null){
    location.href="./celebrate.html";
    return;
} else if(remainTime<=0 && localStorage.getItem(TODOS_KEY) !== null){
  dDay.innerText="아직 할 일이 남았습니다.";
  dDay.classList.remove("hidden");
  return;
}

  const diffDay = String(Math.floor(remainTime / (1000 * 60 * 60 * 24)));
  const diffHour = String(Math.floor((remainTime / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const diffMin = String(Math.floor((remainTime / (1000 * 60)) % 60)).padStart(2,"0");
  const diffSec = String(Math.floor((remainTime / 1000) % 60)).padStart(2, "0");

  dDay.innerText = `🏃🏻‍♀️
  ${diffDay} days ${diffHour}:${diffMin}:${diffSec}
`;
  dDay.classList.remove("hidden");

  setInterval(calDday, 1000, input);
}

const savedDday = localStorage.getItem(DDAY_KEY);

if (savedDday === null) {
  dDayForm.classList.remove("hidden");
  dDayForm.addEventListener("submit", onDdaySubmit);
} else {
  calDday(savedDday);
}