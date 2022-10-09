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

week[0].addEventListener('click', handleMonClick)
week[1].addEventListener('click', handleTueClick)
week[2].addEventListener('click', handleWedClick)
week[3].addEventListener('click', handleThuClick)
week[4].addEventListener('click', handleFriClick)

function handleMonClick() {
  day = week[0].innerText
  dayWeather()
}

function handleTueClick() {
  day = week[1].innerText
  dayWeather()
}
function handleWedClick() {
  day = week[2].innerText
  dayWeather()
}
function handleThuClick() {
  day = week[3].innerText
  dayWeather()
}
function handleFriClick() {
  day = week[4].innerText
  dayWeather()
}

// 날씨별 이벤트 리스너
const weat = document.querySelectorAll('.weather') // 맑음, 흐림, 비옴 배열

weat[0].addEventListener('click', handleSunnyClick)
weat[1].addEventListener('click', handleCloudClick)
weat[2].addEventListener('click', handleRainClick)

function handleSunnyClick() {
  weather = weat[0].innerText
  dayWeather()
}
function handleCloudClick() {
  weather = weat[1].innerText
  dayWeather()
}
function handleRainClick() {
  weather = weat[2].innerText
  dayWeather()
}
