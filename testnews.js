// JS
// 建立陣列儲存資料
let newsList = [{
        newsDate: '2023-02-09',
        newsCategoly: '活動資訊',
        newsTitle: '【公告】2023「INTERPRAEVENT 國際天然災害防治研討會」'
    },
    {
        newsDate: '2023-02-08',
        newsCategoly: '活動資訊',
        newsTitle: '【填報】107年度國家防災日各公私立大專校院正式演練資料填報'
    },
    {
        newsDate: '2023-02-07',
        newsCategoly: '活動資訊',
        newsTitle: '【報名延長】「經濟部百萬家庭親子節電競賽方案」報名延長至7/10，請全國國中小學踴躍參加！'
    },
    {
        newsDate: '2023-02-06',
        newsCategoly: '活動資訊',
        newsTitle: '【競賽】經濟部能源局107年「百萬家庭親子節電競賽」活動開跑，歡迎全國國中小學校踴躍報名參加！'
    },
    {
        newsDate: '2023-02-05',
        newsCategoly: '活動資訊',
        newsTitle: '108年學校環境教育實作競賽，請全國國民中小學師生踴躍報名參與。'
    },
    {
        newsDate: '2023-02-04',
        newsCategoly: '活動資訊',
        newsTitle: '「百萬家庭節電競賽」活動說明會'
    },
    {
        newsDate: '2023-02-03',
        newsCategoly: '活動資訊',
        newsTitle: '「2018抗震盃國際邀請賽」歡迎高中職以上學校組隊報名參加'
    },
    {
        newsDate: '2023-02-02',
        newsCategoly: '活動資訊',
        newsTitle: '【報名延長】「經濟部百萬家庭親子節電競賽方案」報名延長至7/10，請全國國中小學踴躍參加！'
    },
    {
        newsDate: '2023-02-01',
        newsCategoly: '活動資訊',
        newsTitle: '經濟部水利署辦理「節水有學問」作文徵選活動，鼓勵全國各公私立國民小學踴躍投稿!'
    }

]

// 選取要編輯的 DOM 元素
let el = document.querySelector('#newsActivity');
// 儲存陣列資料的總筆數
let newsListLen = newsList.length;
// 建立一個空字串
let str = '';
// 跑 for 迴圈
for (let i = 0; i < newsListLen; i++) {
    // 要插入的字串
    let content = '<a href="#">' + '<li class="d-flex">' + '<div class="startPart">' + '<span class="pe-6">' + newsList[i].newsDate + '</span>' + '<span>' + newsList[i].newsCategoly + '</span>' + '</div>' + '<div class="endPart">' + newsList[i].newsTitle + '</div>' + '</li>' + '</a>'
    str += content;
}
el.innerHTML = str;