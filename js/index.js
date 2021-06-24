$(function () {
    // 热门试用
    $.ajax({
        url: 'http://localhost:3000/play/hot',
        type: 'GET',
        dataType: 'JSON',
        success: function (data) {
            var i = 0;
            var str = "";
            data[i].map(function (nItem) {
                console.log(nItem.text);
                var Isrc = nItem.img.replace(/http:\/\/192.168.1.64/g, 'http://localhost')
                str += `<div class="hot_son2_S">
                    <img src="${Isrc}" alt="" width="220">
                    <p>${nItem.description}</p>
                    <span>2032</span>
                    <span>20台</span>
                    <p><span>1392</span>申请</p>
                    <p>剩余时间2天</p>
                    <p class="p_p1">首发</p>
                </div>`
            })
            $('.hot_son3').html(str)
        }
    })
    // 发现酷玩
    $.ajax({
        url: 'http://localhost:3000/play/new',
        type: 'GET',
        dataType: 'JSON',
        success: function (data) {
            var i = 0;
            var str = "";
            data[i].map(function (nItem) {
                console.log(nItem.text);
                var Isrc = nItem.img.replace(/http:\/\/192.168.1.64/g, 'http://localhost')
                str += `<li class="find_son2_s2">
                    <img src="${Isrc}" alt="" width="220">
                    <p>${nItem.text}</p>
                    <p>${nItem.price}</p>
                    <p>
                    <img src="./img/xin.png" alt="" width="10">${nItem.like}
                    <img src="./img/reply.png" alt="" width="10">${nItem.words}
                    </p>
                </li>`
            })
            $('.find_son2_s1').html(str)
        }
    })
})
window.onload = function () {
    // 动画
    function k(l) {
        if (l < 10) {
            return '0' + l;
        } else {
            return '' + l;
        }
    }
    //倒计时
    function fn() {
        var before = new Date(), //当前时间
            assign = new Date('11,11,2021,00:00:00'), //指定时间
            sum = assign - before, //时间差
            tian = Math.floor(sum / 1000 / 60 / 60 / 24), //天
            xiaoshi = Math.floor(sum / 1000 / 60 / 60 % 24), //时
            fen = Math.floor(sum / 1000 / 60 % 60), //分
            miao = Math.floor(sum / 1000 % 60); //秒
        document.getElementById('daojishi').innerHTML = '申请时间剩余' + k(tian) + '天' + k(xiaoshi) + '时' + k(fen) + '分' + k(miao) + '秒';
    }
    setInterval(fn,);
    // 加载更多
    p.onclick = function () {
        p.style.display = 'none';
        p1.style.display = 'block';
    }
    console.log(p1);
    p1.onclick = function () {
        p1.style.display = 'none';
        p.style.display = 'block';
    }
}