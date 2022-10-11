
let day="";     //요일을 저장할 변수
let weather=""; //날씨를 저장할 변수


//요일과 날씨가 둘 다 선택되면 문구를 보여줄 함수
function dayWeather(){  
    if(day!=="" && weather!==""){
        const text = document.querySelector(".text");
        text.innerText="날씨가 "+ weather+" 인 "+day+"요일 이네요!";

        if(weather==="맑음"){
            document.body.style.backgroundColor = "skyblue";
        }
        else if(weather==="흐림"){
            document.body.style.backgroundColor = "lightgray";
        }
        else if(weather==="비옴"){
            document.body.style.backgroundColor = "gray";
        }
    }
}


// 요일별 이벤트 리스너
//week에는 class명이 week인 요소들이 배열로 담겨있다.
//월,화,수,목,금에 해당하는 요소들이 차례대로 배열에 담겨있다.
const week = document.querySelectorAll(".week");

week[0].addEventListener("click",handleMonClick); //월요일 div에 클릭이벤트가 발생하면 '월'이라는 텍스트를 day 변수에 저장하는 이벤트 리스너를 달았다.
week[1].addEventListener("click",handleTueClick);
week[2].addEventListener("click",handleWedClick);
week[3].addEventListener("click",handleThuClick);
week[4].addEventListener("click",handleFriClick);


function handleMonClick(){  //'월'이라는 텍스트를 day 변수에 저장하는 함수
    day = week[0].innerText;    
    dayWeather();    
}
function handleTueClick(){  //'화'라는 텍스트를 day 변수에 저장하는 함수
    day = week[1].innerText;
    dayWeather();
}
function handleWedClick(){  //'수'라는 텍스트를 day 변수에 저장하는 함수
    day = week[2].innerText;
    dayWeather();
}
function handleThuClick(){  //'목'이라는 텍스트를 day 변수에 저장하는 함수
    day = week[3].innerText;
    dayWeather();
}
function handleFriClick(){  //'금'이라는 텍스트를 day 변수에 저장하는 함수
    day = week[4].innerText;
    dayWeather();
}


// 날씨별 이벤트 리스너
//weat에는 class명이 weather인 요소들이 배열로 담겨있다.
//맑음,흐림,비에 해당하는 요소들이 차례대로 배열에 담겨있다.
const weat = document.querySelectorAll(".weather");

weat[0].addEventListener("click",handleSunnyClick); //맑음 div에 클릭이벤트가 발생하면 '맑음'이라는 텍스트를 weather 변수에 저장하는 이벤트 리스너를 달았다.
weat[1].addEventListener("click",handleCloudClick);
weat[2].addEventListener("click",handleRainClick);

function handleSunnyClick(){    //'맑음'이라는 텍스트를 weather 변수에 저장하는 함수
    weather = weat[0].innerText;
    dayWeather();
}

function handleCloudClick(){    //'흐림'이라는 텍스트를 weather 변수에 저장하는 함수
    weather = weat[1].innerText;
    dayWeather();
}

function handleRainClick(){     //'비'이라는 텍스트를 weather 변수에 저장하는 함수
    weather = weat[2].innerText;
    dayWeather();
}

