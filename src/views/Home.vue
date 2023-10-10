<template>
    <div>
        <van-button type="primary">Home</van-button>
        <div class="father">
            <div class="son">son</div>
        </div>
        <div><i class="iconfont icon-pingjia"></i></div>
    </div>
</template>
<style lang="less" scoped>
.wh(@width, @height, @backgroundColor) {
	width: @width;
    height: @height;
    background-color: @backgroundColor
}
.father{
    .wh(100px, 100px, pink);
    // background-color: pink;
    // opacity: 0.5;
    .son{
        .wh(50px, 50px, #bfa);
        // opacity: 0.5;
    }
}
</style>