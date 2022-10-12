// h2 저장하기
const clock = document.querySelector("h2#clock")

// 시계 만들기
function handleClock(){
    const day = new Date();

    clock.innerText = `${day.getHours()} : ${day.getMinutes()} : ${day.getSeconds()}`;
}

// 시계 호출
handleClock(); // 1초 뒤 실행되지 않고 바로 실행시키기 위해.
setInterval(handleClock, 1000);