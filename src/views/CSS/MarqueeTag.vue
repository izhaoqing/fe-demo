<template>
    <div class="marquee">
        <h2>{{ tag }}</h2>
        <marquee class="bg-#ddd w-450px">
            The Marquee element - HTML: HyperText Markup Language
        </marquee>
        <div class="h-20px"></div>
        <h2>CSS 动画模拟</h2>
        <div class="css-marquee">
            <p class="">
                The Marquee element - HTML: HyperText Markup Language
            </p>
        </div>
        <div class="h-20px"></div>
        <h2>用marquee实现无缝滚动</h2>
        <div class=" bg-#ddd">
            <slide-wrap class="!h-100px w-450px" autoplay>
                <div>
                    <p>
                        behavior:
                        设置文本在 marquee 元素内如何滚动。可选值有 scroll，slide 和 alternate。如果未指定值，默认值为 scroll。
                    </p>
                    <p>
                        direction:
                        设置 marquee 内文本滚动的方向。可选值有 left, right, up and down。如果未指定值，默认值为 left。
                    </p>
                    <p>
                        loop:
                        设置 marquee 滚动的次数。如果未指定值，默认值为 −1，表示 marquee 将连续滚动。
                    </p>
                </div>
            </slide-wrap>
        </div>
    </div>
</template>

<script lang="ts" setup>
const tag = '<marquee>标签';
</script>

<style scoped lang="less">
.css-marquee {
    width: 450px;
    background-color: #ddd;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
}
.css-marquee p {
    display: inline-block;
    padding-left: 100%;
    margin: 0;
    animation: marquee 15s linear infinite;
}

@keyframes marquee {
    0% { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}
</style>
