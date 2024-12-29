// OpenWeatherMap API 호출
const getWeather = async () => {
    const API_KEY = '13bf4e6ce2cbdba01a96ecc25f9e8c91'
    const lat = 37.54
    const lon = 127.2056 // 하남 날씨로 변경 ㅠㅠ
    let weatherIcon = ''

    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        // onecall을 weather로 변경...(https://www.inflearn.com/community/questions/1356725/openweather-401-%EC%98%A4%EB%A5%98-%EC%A7%80%EC%86%8D%EC%A0%81%EC%9C%BC%EB%A1%9C-%EB%B0%9C%EC%83%9D%ED%95%B4%EC%9A%94-%E3%85%A0)
        console.log(res.data)
        weatherIcon = res.data.weather[0].icon // current.weather에서 weather로 변경
        headerE1.innerHTML = `
            <button class="page__header__button" onClick="back()">
                <span class="material-symbols-outlined">logout</span>
                로그아웃
            </button>
            <div class="page__header__profile">
                <img src="./assets/images/profile.jpeg" alt="" class="image">
                <span class="name">해커스HRD</span>
                <img src="./assets/images/${weatherIcon}.png" alt="" class="image" />
                <span class="name">${res.data.weather[0].description}</span>
                <span class="date">${dayjs(new Date()).format("YYYY-MM-DD")}</span>
            </div>` // current.weather에서 weather로 변경

    } catch (error) {console.log(error);}
}

getWeather()

// -----------------------------------------------------------------------------

const headerE1 = document.querySelector(".page__header")
const logoutBtn = document.querySelector(".page__header__button")
const photoDialog = document.querySelector(".page__dialog")
const widgetPhoto = document.querySelector(".page__body__widget.photo")
const closeBtn = document.querySelector(".section-left__header__button.red")

logoutBtn.addEventListener("click", () => {
    location.href = "intro.html"
})
widgetPhoto.addEventListener("click", () => {
    photoDialog.classList.add("active")
})
// dialog의 빨간 버튼을 클릭했을 때, 이벤트 동작
closeBtn.addEventListener("click",()=>{
    photoDialog.classList.remove("active")
})