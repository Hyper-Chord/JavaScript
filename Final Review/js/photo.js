// API 호출에 필요한 정보
const API_URL = "https://api.unsplash.com/search/photos"
const API_KEY = "wbaedDMVZt5y-pv7_HQll8HafXfMMNl_eJERc7gPWug"
const PER_PAGE = 30

let searchValue = "Jeju"
let pageValue = 1

// ------------------------------

const dataBoxE1 = document.querySelector(".mySwiper")
const searchInput = document.querySelector(".searchBar__input")
const searchBtn = document.querySelector(".searchBar__button")

searchInput.addEventListener("input", (event) => {
    searchValue = event.target.value
})
searchBtn.addEventListener("click", () => {
    console.log(searchValue);
    getData(searchValue)
})

// 엔터키 조회 기능
searchInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        getData(searchValue)
    }
})

async function getData(inputValue) {
    dataBoxE1.innerHTML = "" // 이전 데이터를 비워주고 Re-Rendering 효과
    // call unsplash api
    try {
        const res = await axios.get(`${API_URL}?query=${inputValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
        console.log(res);

        res.data.results.forEach((item) => {
            dataBoxE1.innerHTML += `<swiper-slide>
                    <div class="album">
                        <img src="${item.urls.full}" alt="" class="album__image">
                        <div class="album__infobox">
                            <div class="album__infobox__row">
                                <span class="albumlabel">이미지 크기</span>
                                <span class="albumvalue">${item.width} X ${item.height}</span>
                            </div>
                            <div class="album__infobox__row">
                                <span class="albumlabel">좋아요</span>
                                <span class="albumvalue">${item.likes}</span>
                            </div>
                            <div class="album__infobox__row">
                                <span class="albumlabel">작성자</span>
                                <span class="albumvalue">${item.user.name}</span>
                            </div>
                        </div>
                    </div>
                    </swiper-slide>
                `
        })
    } catch (error) {
        console.log(error);
    }
}

getData("Jeju")