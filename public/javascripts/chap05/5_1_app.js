// 우선 cmd창에서  npm install axios 를 실행하여 글로벌 모듈로 설치한다.
// package.json 파일확인해볼것 => 이전에 배운대로 정말 package.json에 axios 모듈이 설치되어있는지 확인
// -g옵션(글로벌)으로 설치했다면 package.json이 아니라.
// C:\Users\PC\AppData\Roaming\npm\node_modules에서 찾아볼것

// cmd에서 node 5_1_app.js


// 두번 호출해보니 status: 429 장애발생했다.
// X API 무료(FREE) 요금제는 검색(Search) 을 제공하지 않음
// 2023년 이후 정책:
//    무료 티어에서는 Search API 자체가 막혀 있음.

// 그래서 앞으로는 공공데이터 포털에서 Test를 진행 해보기로 한다.

const axios = require('axios');

// 여기에 본인이 발급받은 Bearer Token 넣기
const TOKEN = "AAAAAAAAAAAAAAAAAAAAAL1p5gEAAAAAC1q3l8EhS%2B3%2BbvrcRv%2BjTYP5Eos%3DOaP7U737ILlJBndkKz0ir3G5JzDRTu7jZHLkFfk73EJx47E6St";

// 검색어
const query = "Node";

// X API v2 Recent Search endpoint
const url = `https://api.x.com/2/tweets/search/recent?query=${encodeURIComponent(query)}&max_results=10`;

async function fetchTweets() {
    try {
        const res = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${TOKEN}`
            }
        });

        console.log("=== Recent Tweets ===");
        console.log(JSON.stringify(res.data, null, 2));

    } catch (err) {
        console.error("API 호출 중 오류:", err.response?.data || err.message);
    }
}

fetchTweets();