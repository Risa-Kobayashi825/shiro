/*
ハンバーガーメニュー
*/

const menuButton = document.querySelector('.js-menu__button');
const menuList = document.querySelector('.js-menu-list');
const menuItem = document.querySelector('.js-menu-list__item');


// ヘッダーのメニューボタンをクリックするとアコーディオンが開閉する
menuButton.addEventListener('click', function(){
    menuButton.classList.toggle('active');
    menuList.classList.toggle('active');
    });

// ヘッダーのリンクをクリックするとアコーディオンが閉じる
menuItem.addEventListener('click',function(){
    menuButton.classList.remove('active');
    menuList.classList.remove('active');
});