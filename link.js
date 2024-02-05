const app = Vue.createApp({
    data() {
        return {
            pageEnglishName: 'Link',
            pageName: '相關連結',
            pageLists: [{
                pagelistTitle: '政府機關',
                itemInfos: [{
                        itemName: '教育部資訊網',
                        itemLink: 'https://www.edu.tw/Default.aspx'
                    },
                    {
                        itemName: '(網站掛了)經濟部水利署防災資訊服務網 ',
                        itemLink: ''
                    },
                    {
                        itemName: '行政院原子能委員會',
                        itemLink: 'https://www.aec.gov.tw/'
                    },
                    {
                        itemName: '(網站掛了)中央災害應變中心',
                        itemLink: ''
                    },
                    {
                        itemName: '內政部消防署全球資訊網',
                        itemLink: 'https://www.nfa.gov.tw/cht/index.php'
                    },
                    {
                        itemName: '行政院農業委員會水土保持局',
                        itemLink: 'https://www.swcb.gov.tw/Home/'
                    },
                    {
                        itemName: '交通部中央氣象局',
                        itemLink: 'https://www.cwb.gov.tw/V8/C/'
                    },
                    {
                        itemName: '國家災害防救科技中心',
                        itemLink: 'https://www.ncdr.nat.gov.tw/'
                    },
                    {
                        itemName: '資訊及科技教育司',
                        itemLink: 'https://depart.moe.edu.tw/ED2700/Default.aspx'
                    },
                    {
                        itemName: '行政院農委會_土石流防災資訊網',
                        itemLink: 'https://246.swcb.gov.tw/'
                    },
                    {
                        itemName: '國研院國震中心',
                        itemLink: 'https://www.ncree.narl.org.tw/home'
                    },
                    {
                        itemName: '921地震教育園區 ',
                        itemLink: 'https://www.nmns.edu.tw/park_921/'
                    },
                    {
                        itemName: '國立台灣科學教育館',
                        itemLink: 'https://www.ntsec.gov.tw/'
                    },
                    {
                        itemName: '國立自然科學博物館',
                        itemLink: 'https://www.nmns.edu.tw/ch/'
                    },
                    {
                        itemName: '(網站掛了)校舍耐震資訊網',
                        itemLink: ''
                    },
                    {
                        itemName: '內政部消防署消防防災館',
                        itemLink: 'https://www.tfdp.com.tw/cht/index.php?'
                    },
                    {
                        itemName: '行政院國土安全政策會報',
                        itemLink: 'https://ohs.ey.gov.tw/'
                    }, {
                        itemName: '交通部中央氣象局數位科普網',
                        itemLink: 'https://edu.cwb.gov.tw/PopularScience/'
                    },
                    {
                        itemName: '氣象環境知識網',
                        itemLink: 'https://crowa.cwb.gov.tw/ECS/'
                    },
                    {
                        itemName: '民眾版劇烈天氣監測系統Qplus',
                        itemLink: 'https://qpeplus.cwb.gov.tw/pub/?r=54533'
                    },
                    {
                        itemName: '內政部消防署全民防災e點通',
                        itemLink: 'https://bear.emic.gov.tw/MY/#/'
                    }
                ]
            }, {
                pagelistTitle: '縣市防災',
                itemInfos: [{
                        itemName: '台北市防災教育網',
                        itemLink: 'https://tdpe.tp.edu.tw/'
                    },
                    {
                        itemName: '新北市防災教育網',
                        itemLink: 'https://sites.google.com/apps.bdes.ntpc.edu.tw/ntpc-dpecg/%E9%A6%96%E9%A0%81?authuser=0'
                    },
                    {
                        itemName: '(網站掛了)基隆市防災教育網 ',
                        itemLink: ''
                    },
                    {
                        itemName: '桃園市防災教育網',
                        itemLink: 'https://www.tao.tycg.gov.tw/home.jsp?id=10105&parentpath=0,5'
                    },
                    {
                        itemName: '新竹縣防災資訊網',
                        itemLink: 'https://odm.hsinchu.gov.tw/'
                    },

                    {
                        itemName: '宜蘭縣防災資訊網',
                        itemLink: 'https://yidp.e-land.gov.tw/Default.aspx'
                    },
                    {
                        itemName: '花蓮縣防災教育網',
                        itemLink: 'http://esd.km.edu.tw/hlcdisaster/Index.aspx'
                    },
                    {
                        itemName: '台東縣防災教育網',
                        itemLink: 'https://ttca.taitung.gov.tw/News_Content.aspx?n=13639&s=85711'
                    },
                    {
                        itemName: '金門縣防災教育深耕網',
                        itemLink: 'http://esd.km.edu.tw/disaster/Index.aspx'
                    },
                    {
                        itemName: '新竹市防災教育網',
                        itemLink: 'https://disaster.hc.edu.tw/'
                    },
                    {
                        itemName: '苗栗縣防災教育資訊網',
                        itemLink: 'https://disaster.mlc.edu.tw/Module/Bulletin/Index.php?CateID=6'
                    },
                    {
                        itemName: '台中市政府教育局',
                        itemLink: 'https://www.tc.edu.tw/'
                    },

                    {
                        itemName: '彰化縣環境教育及防災教育全球資訊網',
                        itemLink: 'http://163.23.96.15/env100/env.php'
                    },
                    {
                        itemName: '南投縣防災教育資源網',
                        itemLink: 'https://sites.google.com/view/nantou-hazard-info'
                    },
                    {
                        itemName: '嘉義縣防災教育管理系統',
                        itemLink: 'http://disedu.cyc.edu.tw/disedu/'
                    },
                    {
                        itemName: '嘉義市政府教育處',
                        itemLink: 'https://case.cy.edu.tw/web/nodamage/default.asp'
                    },
                    {
                        itemName: '臺南市防災教育入口網',
                        itemLink: 'http://web.tn.edu.tw/dp/'
                    },
                    {
                        itemName: '高雄市教育局防災教育網',
                        itemLink: 'http://enews.kh.edu.tw/disaster/script1/index.asp?screen=1024'
                    },
                    {
                        itemName: '屏東縣防災教育資訊網',
                        itemLink: 'http://163.24.165.134/envx/webs/index.php?account=disaster'
                    },
                    {
                        itemName: '澎湖縣防災教育資訊網',
                        itemLink: 'http://disaster.phc.edu.tw/'
                    },
                    {
                        itemName: '雲林縣防災教育資訊網',
                        itemLink: 'http://exam.ylc.edu.tw/index.php'
                    }
                ]
            }, {
                pagelistTitle: '國際網站',
                itemInfos: [{
                        itemName: '人類與防災未來館',
                        itemLink: 'https://www.dri.ne.jp/'
                    },
                    {
                        itemName: '日本消防防災博物館',
                        itemLink: 'https://www.bousaihaku.com/cgi-bin/hp/index.cgi'
                    },
                    {
                        itemName: '日本文部科學省',
                        itemLink: 'https://www.mext.go.jp/'
                    },
                    {
                        itemName: '防災、危機管理 e-college ',
                        itemLink: 'https://www.fdma.go.jp/relocation/e-college/'
                    },
                    {
                        itemName: '日本自然災害學會',
                        itemLink: 'https://www.jsnds.org/'
                    },
                    {
                        itemName: '美國聯邦緊急應變中心(FEMA for kids)',
                        itemLink: 'https://www.ready.gov/kids'
                    },
                    {
                        itemName: 'Pacific Tsunami Warning Center',
                        itemLink: 'https://www.tsunami.gov/'
                    },
                    {
                        itemName: 'U.S geological survey',
                        itemLink: 'https://www.usgs.gov/'
                    },
                    {
                        itemName: '美國聯邦緊急應變中心(FEMA)',
                        itemLink: 'https://www.fema.gov/'
                    }
                ]
            }]
        }
    }
});