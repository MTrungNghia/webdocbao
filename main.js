// cac nut header mobile 

function mo_dieu_huong_dt() {
    var mo_dieu_huong = document.querySelector('.dieu-huong-dt');
    var hinh_mo = document.querySelector('.chon-dien-thoai-mo');
    var hinh_dong = document.querySelector('.chon-dien-thoai-dong');
    if(mo_dieu_huong .classList[1] === 'an') {
        mo_dieu_huong.classList.remove('an');
        mo_dieu_huong.classList.add('hien');
        hinh_mo.classList.add('an');
        hinh_dong.classList.remove('an');
        hinh_dong.classList.add('hien');
    }
    else {
        mo_dieu_huong.classList.remove('hien');
        mo_dieu_huong.classList.add('an');
        hinh_mo.classList.remove('an');
        hinh_mo.classList.add('hien');
        hinh_dong.classList.add('hien');
        hinh_dong.classList.add('an');    
    }
}

function hien_thi_dau() {
    var mo_menu_dau = document.querySelector('.lua-chon-dt-dau');
    var hinh_menu_mo_dau = document.querySelector('.sang-phai');
    var hinh_menu_dong_dau = document.querySelector('.xuong-duoi');
    if(mo_menu_dau.classList[1] === 'an') {
        mo_menu_dau.classList.remove('an');
        mo_menu_dau.classList.add('hien');
        hinh_menu_mo_dau.classList.add('an');
        hinh_menu_dong_dau.classList.remove('an');
        hinh_menu_dong_dau.classList.add('hien');
    }
    else {
        mo_menu_dau.classList.remove('hien');
        mo_menu_dau.classList.add('an');
        hinh_menu_mo_dau.classList.remove('an');
        hinh_menu_mo_dau.classList.add('hien');
        hinh_menu_dong_dau.classList.add('hien');
        hinh_menu_dong_dau.classList.add('an');    
    }
}

function hien_thi_cuoi() {
    var mo_menu_cuoi = document.querySelector('.lua-chon-dt-cuoi');
    var hinh_menu_mo_cuoi = document.querySelector('.sang-phai-cuoi');
    var hinh_menu_dong_cuoi = document.querySelector('.xuong-duoi-cuoi');
    if(mo_menu_cuoi.classList[1] === 'an') {
        mo_menu_cuoi.classList.remove('an');
        mo_menu_cuoi.classList.add('hien');
        hinh_menu_mo_cuoi.classList.add('an');
        hinh_menu_dong_cuoi.classList.remove('an');
        hinh_menu_dong_cuoi.classList.add('hien');
    }
    else {
        mo_menu_cuoi.classList.remove('hien');
        mo_menu_cuoi.classList.add('an');
        hinh_menu_mo_cuoi.classList.remove('an');
        hinh_menu_mo_cuoi.classList.add('hien');
        hinh_menu_dong_cuoi.classList.add('hien');
        hinh_menu_dong_cuoi.classList.add('an');
    }

}

// Keo chuột 
var scrollval = 0;
window.addEventListener("scroll", function() { 
    var thanh_dieu_huong_hien = document.querySelector('.thanh-luot');
    var thanh_luot_logo = document.querySelector('.thanh-luot-logo');
    var thanh_luot_len = document.querySelector('.thanh-luot-len');
    var vtri_dkhien = document.querySelector('.dieu-khien');
    var scroll_y = this.scrollY;
    if(scroll_y <= 233) {
        vtri_dkhien.classList.add('vi-tri-co-dinh');
        thanh_luot_logo.classList.add('an');
        thanh_dieu_huong_hien.classList.remove('hien-co-dinh');
        thanh_dieu_huong_hien.classList.remove('an-co-dinh');
        thanh_luot_len.classList.remove('giua');
        thanh_dieu_huong_hien.classList.add('hien');
    }
    else {
        if(scrollval > window.scrollY) {
            vtri_dkhien.classList.remove('vi-tri-co-dinh');
            thanh_luot_logo.classList.remove('an');
            thanh_dieu_huong_hien.classList.add('hien-co-dinh');
            thanh_dieu_huong_hien.classList.remove('an-co-dinh');
            thanh_dieu_huong_hien.classList.remove('an');
            thanh_luot_len.classList.add('giua');

        }
        else if(scroll_y > 233 && scrollval < window.scrollY) {
            thanh_dieu_huong_hien.classList.remove('hien-co-dinh');
            thanh_dieu_huong_hien.classList.add('an-co-dinh');

        }
        
    }  
    scrollval = window.scrollY;
}); 


// Hover thanh dieu huong ngang
function chuyen_noi_dung(sott, tp_link, noi_dung) {
    for(var i = 0;i < noi_dung.length;i++){
        tp_link[i].classList.remove('duoc-chon-trong-lua-chon-sau');
        noi_dung[i].setAttribute("aria-expanded",'false');
    }
    tp_link[sott].classList.add('duoc-chon-trong-lua-chon-sau');   
    noi_dung[sott].setAttribute("aria-expanded",'true');
}
// News

var chon_tin_co_dinh = document.getElementsByClassName('lua-chon-link-tin-tuc-co-dinh');
var noi_dung_tin_co_dinh = document.querySelectorAll('.lua-chon-phan-tin-tuc-co-dinh');

chon_tin_co_dinh[0].onmouseover = function(){
    chuyen_noi_dung(0, chon_tin_co_dinh, noi_dung_tin_co_dinh);
};

chon_tin_co_dinh[1].onmouseover = function(){
    
    chuyen_noi_dung(1, chon_tin_co_dinh, noi_dung_tin_co_dinh);
};

chon_tin_co_dinh[2].onmouseover = function(){
    
    chuyen_noi_dung(2, chon_tin_co_dinh, noi_dung_tin_co_dinh);
};

chon_tin_co_dinh[3].onmouseover = function(){
    
    chuyen_noi_dung(3, chon_tin_co_dinh, noi_dung_tin_co_dinh);
};

chon_tin_co_dinh[4].onmouseover = function(){
    
    chuyen_noi_dung(4, chon_tin_co_dinh, noi_dung_tin_co_dinh);
};

chon_tin_co_dinh[5].onmouseover = function(){
    chuyen_noi_dung(5, chon_tin_co_dinh, noi_dung_tin_co_dinh);
}

// Entertainment

var giai_tri_co_dinh = document.getElementsByClassName('lua-chon-link-giai-tri-co-dinh');
var noi_dung_giai_tri_co_dinh = document.querySelectorAll('.lua-chon-phan-giai-tri-co-dinh');

giai_tri_co_dinh[0].onmouseover = function(){
    chuyen_noi_dung(0, giai_tri_co_dinh, noi_dung_giai_tri_co_dinh);
};

giai_tri_co_dinh[1].onmouseover = function(){
    chuyen_noi_dung(1, giai_tri_co_dinh, noi_dung_giai_tri_co_dinh);
};

giai_tri_co_dinh[2].onmouseover = function(){
    chuyen_noi_dung(2, giai_tri_co_dinh, noi_dung_giai_tri_co_dinh);
};

// Business
var kinh_te_co_dinh = document.getElementsByClassName('lua-chon-link-kinh-te-co-dinh');
var noi_dung_kinh_te_co_dinh = document.querySelectorAll('.lua-chon-phan-kinh-te-co-dinh');

kinh_te_co_dinh[0].onmouseover = function(){
    chuyen_noi_dung(0, kinh_te_co_dinh, noi_dung_kinh_te_co_dinh);
};

kinh_te_co_dinh[1].onmouseover = function(){
    
    chuyen_noi_dung(1, kinh_te_co_dinh, noi_dung_kinh_te_co_dinh);
};
// Travel

var du_lich_co_dinh = document.getElementsByClassName('lua-chon-link-du-lich-co-dinh');
var noi_dung_du_lich_co_dinh = document.querySelectorAll('.lua-chon-phan-du-lich-co-dinh');

du_lich_co_dinh[0].onmouseover = function(){
    chuyen_noi_dung(0, du_lich_co_dinh, noi_dung_du_lich_co_dinh);
};

du_lich_co_dinh[1].onmouseover = function(){
    
    chuyen_noi_dung(1, du_lich_co_dinh, noi_dung_du_lich_co_dinh);
};

// Content

const dauMoRong = document.querySelectorAll('.fa-ellipsis')
const danhSach = document.querySelectorAll('.danhSach')
const thanhTieuDe = document.querySelectorAll('.thanhTieuDe')
    
dauMoRong[0].onclick = function()
{   
    layCacThanhPhan(0)

}

dauMoRong[1].onclick = function()
{   
    layCacThanhPhan(1)
}

dauMoRong[2].onclick = function()
{   
    layCacThanhPhan(2)
}

function layCacThanhPhan(i)
{   
    var danhSachTonTai = document.querySelector('.DanhSachMoi')
    if(danhSachTonTai)
    {
        const thanhTieuDeDaCo = danhSachTonTai.closest('.thanhTieuDe')
        thanhTieuDeDaCo.removeChild(danhSachTonTai);
    }
    else
    {
        const danhSachMoi = document.createElement('ul')
        var theLi= dauMoRong[i].closest('.danhSach').querySelectorAll('li')
        for (var j= 1 ; j < theLi.length -1; j++)
        {
            danhSachMoi.innerHTML += `
            <li>${theLi[j].innerHTML}</li>
            `
        }
        
        danhSachMoi.className = 'DanhSachMoi'
        thanhTieuDe[i].appendChild(danhSachMoi)
    }
}

// Dang nhap va dang ki:
function chon_dang_ki(){
    document.getElementById("nut_chuyen_dn").style.backgroundColor="#fff";
    document.getElementById("nut_chuyen_dn").style.color="#222";
    document.getElementById("nut_chuyen_dk").style.backgroundColor="#57b846";
    document.getElementById("nut_chuyen_dk").style.color="#fff";
    document.getElementById("bang_dang_nhap").style.display="none";
    document.getElementById("bang_dang_ki").style.display="block";
}
 
 function chon_dang_nhap(){
    document.getElementById("nut_chuyen_dn").style.backgroundColor="#57B846";
    document.getElementById("nut_chuyen_dn").style.color="#fff";
    document.getElementById("nut_chuyen_dk").style.backgroundColor="#fff";
    document.getElementById("nut_chuyen_dk").style.color="#222";
    document.getElementById("bang_dang_ki").style.display="none";
    document.getElementById("bang_dang_nhap").style.display="block";
}
 
