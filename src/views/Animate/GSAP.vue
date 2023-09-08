<template>
    <div class="">
        <p>GSAP 和 animejs 有类似的 api 和功能</p>
        <h2>基本使用</h2>
        <p>to方法</p>
        <div class="h-200px border-solid border-primary">
            <div ref="box" class="w-100px h-100px bg-gray"></div>
        </div>
        <p>变化对象属性</p>
        <div>{{ obj.n }}</div>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';

const box = ref<HTMLDivElement>();
onMounted(() => {
    if (!box.value) return;
    gsap.to(box.value, { x: 400, ease: 'power1.out', duration: 3 });
});

const obj = reactive({ n: 0 });
gsap.to(obj, {
    n: 100,
    duration: 10,
});
</script>

<style scoped lang="less">
</style>
