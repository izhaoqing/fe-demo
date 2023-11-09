<template>
    <div>
        <h2>带圆角的边框渐变</h2>
        <p>渐变色左右变化</p>
        <div class="box1 mb-20px">
            <div class="h-200px"></div>
        </div>
        <p>渐变色旋转</p>
        <div class="box2 relative h-200px">
            <div class="bg absolute inset-0 z--1"></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const deg = ref(0);
const set = () => {
    deg.value = deg.value + 0.8;
    if (deg.value >= 360) deg.value = 0;
};

const bg = computed(() => {
    return `conic-gradient(from ${deg.value}deg, red, blue, red)`;
});

function loop() {
    set();
    window.requestAnimationFrame(loop);
}
onMounted(loop);
</script>
<style lang="less" scoped>
.box1 {
    position: relative;
}
.box1::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 10px;
    background: linear-gradient(45deg, red, blue);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: huerotate 6s infinite linear;
}

@keyframes huerotate {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rotate(360deg);
    }
}
.box2 {
    .bg {
        border-radius: 20px;
        padding: 10px;
        background: v-bind(bg);
        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
    }
}
</style>
