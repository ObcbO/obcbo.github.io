if ( document.getElementById("page-header").style == 'background-image:url()' ) {
var background_urls = [
    'https://s2.loli.net/2022/01/29/yX7lju25TbMVLnS.jpg',
    'https://s2.loli.net/2022/01/29/AyD3mTLvPa6YxN4.jpg',
    'https://s2.loli.net/2022/01/29/2ANgyCud5mf9SLX.jpg',
    'https://s2.loli.net/2022/01/29/ijTcD4sNQGtI7aO.jpg',
    'https://s2.loli.net/2022/01/29/lZfxzh2w83Y7UAH.jpg',
    'https://s2.loli.net/2022/01/29/7fWJp48Dm6kV3tA.jpg',
    'https://s2.loli.net/2022/01/29/Bt7njKX3pckosEA.jpg',
    'https://s2.loli.net/2022/01/29/YfIERQGwPyWpF95.jpg',
    'https://s2.loli.net/2022/01/29/oZUCqWKr2w1DO35.jpg',
    'https://s2.loli.net/2022/01/29/2n34ZH1LEsWgxJI.jpg',
    'https://s2.loli.net/2022/01/29/anU8Pp4syA1DfcJ.jpg',
    'https://s2.loli.net/2022/01/29/TbcZ3pC4ev7MBKS.jpg',
    'https://s2.loli.net/2022/01/29/WpYuKRmxjNkzt8a.jpg',
    'https://s2.loli.net/2022/01/29/PHR7bGNJgpS1xrB.jpg',
    'https://s2.loli.net/2022/01/29/eJqjtFW329GiLQD.jpg',
    'https://s2.loli.net/2022/01/29/MgK18FvA9rc7ipV.jpg',
    'https://s2.loli.net/2022/01/29/E4br3gUDTLVKp8o.jpg',
    'https://s2.loli.net/2022/01/29/WDzVHu9MgtC1fQ4.jpg',
    'https://s2.loli.net/2022/01/29/wPavu8hCZL5VXmN.jpg'
]
var index = Math.floor((Math.random() * background_urls.length));
var urlphoto = ('background-image:url(' + background_urls[index] + ')');
document.getElementById("page-header").style = urlphoto;
}