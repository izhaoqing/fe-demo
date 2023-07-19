<template>
    <div class="background">
        <h2>背景径项渐变椭圆平铺</h2>
        <div class="radial-gradient bg-primary/50"></div>
        <div class="h-20px"></div>
        <h2>背景渐变重复</h2>
        <div class="gradient-repeat bg-primary/50"></div>
        <div class="h-20px"></div>
        <h2>背景锥形渐变</h2>
        <div class="conic-gradient bg-primary/50"></div>
        <div class="h-20px"></div>
        <h2>背景锥形渐变-色盘</h2>
        <div class="conic-gradient-color"></div>
        <div class="h-20px"></div>
        <h2>背景锥形渐变-棋盘格</h2>
        <div class="conic-gradient-box"></div>
        <div class="h-20px"></div>
        <h2>背景锥形渐变-loading</h2>
        <div class="loading"></div>
        <div class="h-20px"></div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="less">
.radial-gradient {
    width: 200px;
    height: 100px;
    position: relative;
    // -webkit-mask-image: radial-gradient(ellipse 15px 10px at center 0, transparent 100%, #000);
    // -webkit-mask-repeat: repeat-x;
    // -webkit-mask-position: left bottom;
    // -webkit-mask-size: 30px 20px;
}
.radial-gradient::after {
    content: '';
    position: absolute;
    height: 10px;
    left: 0;
    right: 0;
    bottom: -10px;
    background: radial-gradient(15px 10px ellipse at top, @primary 14px, transparent 15px);
    background-size: 30px 10px;
}
.gradient-repeat {
    position: relative;
    width: 262px;
    height: 262px;
    border: 1px solid;
    border-radius: 50%;
    background:
        linear-gradient(30deg, transparent 40%, rgba(42, 41, 40, 0.85) 40%) no-repeat 100% 0,
        linear-gradient(60deg, rgba(42, 41, 40, 0.85) 60%, transparent 60%) no-repeat 0 100%,
        repeating-radial-gradient(#2a2928, #2a2928 4px, #ada9a0 5px, #2a2928 6px);
    background-size: 50% 100%, 100% 50%, 100% 100%;
}
.gradient-repeat::after {
    // display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -35px;
    // border: solid 1px #d9a388;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    // box-shadow: 0 0 0 4px #da5b33, inset 0 0 0 27px #da5b33;
    // background: #b5ac9a;
    background-image: radial-gradient(#b5ac9a 5px, #da5b33 6px, #da5b33 30px, #ada9a0 31px, #da5b33 32px);
    content: '';
}
.conic-gradient {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: conic-gradient(yellowgreen 40%, gold 0 75%, deepskyblue 0);
}
.conic-gradient-color {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    // background: conic-gradient(red, green, blue, red);
    background:
        conic-gradient(
            hsl(0deg, 100%, 50%),
            hsl(30deg, 100%, 50%),
            hsl(60deg, 100%, 50%),
            hsl(90deg, 100%, 50%),
            hsl(120deg, 100%, 50%),
            hsl(150deg, 100%, 50%),
            hsl(180deg, 100%, 50%),
            hsl(210deg, 100%, 50%),
            hsl(240deg, 100%, 50%),
            hsl(270deg, 100%, 50%),
            hsl(300deg, 100%, 50%),
            hsl(360deg, 100%, 50%)
        );
}
.conic-gradient-box {
    width: 300px;
    height: 100px;
    background: conic-gradient(#ddd 25%, white 0 50%, #ddd 0 75%, white 0) 0 / 20px 20px;
}
.loading {
    --mask: radial-gradient(transparent 55%, black 55%);

    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: no-repeat conic-gradient(deepskyblue 0, 20%, white);
    -webkit-mask-image: var(--mask);
    mask-image: var(--mask);
    animation: spin 1s linear infinite reverse;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
</style>
