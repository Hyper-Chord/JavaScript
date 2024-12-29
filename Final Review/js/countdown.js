const countDownBoxE1 = document.querySelector(".page__countDown__countDownBox")
const targetDate = new Date('2025-01-01 00:00:00')

let endTime = new Date(targetDate).getTime() // getTime() 메서드는 표준시에 따라 지정된 날짜의 시간에 해당하는 숫자 값을 반환
let period = endTime - new Date().getTime() // Target 날짜에서 오늘 날짜를 빼서 Count Down 기간 설정

// 카운트 다운 UI에 들어갈 데이터
let days = ""
let hours = ""
let minutes = ""
let seconds = ""

function countDown() {
    period = endTime - new Date().getTime() // 밀리 세컨드를 반환

    // 정적 Math.floor() 메서드는 항상 반올림하여 주어진 숫자보다 작거나 가장 큰 정수를 반환
    const daysValue = Math.floor(period / (1000 * 60 * 60 * 24))
    const hoursValue = Math.floor((period % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesValue = Math.floor((period % (1000 * 60 * 60)) / (1000 * 60))
    const secondsValue = Math.floor((period % (1000 * 60)) / 1000)

    days = daysValue
    hours = hoursValue
    minutes = minutesValue
    seconds = secondsValue
}

setInterval(() => {
    countDown()

    countDownBoxE1.innerHTML = `<div class="countDown">
            <div class="countDown__layout">
                <span class="countDown__layout__text">마감</span>
                <div class="countDown__layout__time">${days}일</div>
                <div class="countDown__layout__time">${hours}시간</div>
                <div class="countDown__layout__time">${minutes}분</div>
                <div class="countDown__layout__time">${seconds}초</div>
                <span class="countDown__layout__text">전 이에요.</span>
            </div>
        <button class="countDown__button">포트폴리오 보기</button>
    </div>`
}, 1000)