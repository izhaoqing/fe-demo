<template>
    <h2>文字左右半透明，图片镂空</h2>
    <div class="mask">
        <p>Again, using the hack of a gradient won’t work because the background underneath the content will change. It can be a solid color or an image.</p>
        <img src="https://images.unsplash.com/photo-1688916540306-722f7a248400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
    </div>
    <div class="h-20px"></div>
    <h2>圆角处理</h2>
    <div class="nav"></div>
    <div class="h-20px"></div>
    <h2>多个</h2>
    <div class="multi"></div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="less">
/* stylelint-disable property-no-vendor-prefix */
.mask {
    position: relative;
    width: 400px;
    img {
        width: 100%;
        // -webkit-mask-image: linear-gradient(#000, transparent);
        // -webkit-mask-repeat: no-repeat;
        // -webkit-mask-position: left center;
        // -webkit-mask-size: 60% 20%;
        -webkit-mask-image:
            linear-gradient(to bottom, transparent, #000),
            linear-gradient(to bottom, #000, transparent),
            linear-gradient(to bottom, transparent, #000),
            linear-gradient(to bottom, #000, transparent),
            linear-gradient(to bottom, transparent, #000);
        -webkit-mask-size: 18% 70%;
        -webkit-mask-position: 0 100%, 25% 25%, 50% 50%, 75% 0, 100% 50%;
        -webkit-mask-repeat: no-repeat;
    }
    p {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        color: #fff;
        padding: 10px;
        margin: 10px 0;
        -webkit-mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent 100%);
        z-index: 2;
    }
}
.nav {
    position: relative;
    width: 100px;
    height: 40px;
    border-radius: 12px 12px 0 0;
    background-color: aquamarine;
    &::after {
        content: '';
        position: absolute;
        left: 100%;
        bottom: 0;
        width: 24px;
        height: 24px;
        background-color: aquamarine;
        -webkit-mask-image:
            linear-gradient(to top, red, red),
            radial-gradient(circle 15px at center, green 80%, transparent 81%);
        -webkit-mask-size: 12px 12px, 100%;
        -webkit-mask-position: bottom left, center;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-composite: source-out;
    }
}
.multi {
    width: 400px;
    height: 200px;
    background-color: aquamarine;
    -webkit-mask-image:
        radial-gradient(ellipse 60px 50px at 0 center, transparent 98%, #000 99%),
        linear-gradient(to right, #000, #000);
    -webkit-mask-size: 100% 100%, 20px 100px;
    -webkit-mask-repeat: no-repeat;
}
</style>
