let day = '' // 요일 저장
let weather = '' // 날씨 저장

// 요일 & 날짜 선택시 문구 출력할 함수
function dayWeather() {
  if (day !== '' && weather !== '') {
    const text = document.querySelector('.text')
    text.innerText = '날씨가 ' + weather + '인 ' + day + '요일 이네요.'
    // 날씨에 따라 배경색 바꾸기
    if (weather === '맑음') {
      document.body.className = 'sunny' // css 분리해서 적용.
    } else if (weather === '흐림') {
      document.body.className = 'cloud' // css 분리해서 적용.
    } else if (weather === '비옴') {
      document.body.className = 'rain' // css 분리해서 적용.
    }
  }
}

// 요일별 이벤트 리스너
const week = document.querySelectorAll('.week') // 월~금 배열, 반드시 querySelectorAll로!

function handleDayClick() {
  for(let j=0; j<week.length; j++){
    week[j].addEventListener('click', () => {
      day = week[j].innerText;
      dayWeather();
    })
  }
}

handleDayClick();

// 날씨별 이벤트 리스너
const weat = document.querySelectorAll('.weather') // 맑음, 흐림, 비옴 배열

function handleWeatClick(){
  for(let j=0; j<weat.length; j++){
    weat[j].addEventListener('click', ()=>{
      weather = weat[j].innerText;
      dayWeather();
    })
  }
}

handleWeatClick();
