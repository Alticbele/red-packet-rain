(function () {
    function init() {
        var NUMBER_OF_LEAVES = 80;
        var container = document.getElementById('petalbox');
        try {
            for (var i = 0; i < NUMBER_OF_LEAVES; i ++){
                container.appendChild(createDiv());
            }
        } catch (error) {
            alert(error);
        }
    }
    // 红包雨是随机掉落，随机旋转，所以这里需要一个随机数
    function randomNumber(low, high){
        return low + Math.floor(Math.random() * (high - low));
    }

    function valuePx(value){
        return value + 'px';
    }

    function seconds(value){
        return value + 's';
    }
    function createDiv(){
        // 创建装照片的容器
        var div = document.createElement('div'),
            image = document.createElement('img');
        image.src = './images/hb/petal'+ randomNumber(1,10) + '.png';

        // 大概定一下红包的初始位置
        div.style.top = valuePx(randomNumber(-200,-100));
        div.style.left = valuePx(randomNumber(0,1940));

        // 随机旋转，两种旋转方式的概率为50%
        var spinName = (Math.random() > 0.5) ? 'clockwiseSpin' : 'clockwiseSpin';
        // 设置掉落路线
        div.style.animationName = 'drop';
        div.style.webkitAnimationName = 'drop';

        // 设置旋转
        image.style.animationName = spinName;
        image.style.webkitAnimationName = spinName;

        // 动画时间
        var spinDuration = seconds(randomNumber(3,4)),
            fadeAwayDuration = seconds(randomNumber(1.2,8.2));
        var delay = seconds(randomNumber(0,2));
        // 设置延迟时间
        div.style.animationDelay = delay;
        div.style.animationDuration = fadeAwayDuration;
        image.style.animationDuration = spinDuration;

        div.appendChild(image);
        return div;
    }

    init();
}())