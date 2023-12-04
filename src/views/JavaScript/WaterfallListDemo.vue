<template>
    <div>
        <h2>瀑布流</h2>
        <p>使用最原始的方法，通过计算高度，逐个放入容器。</p>
        <WaterfallList :cols="4">
            <div v-for="n in 30" :key="n" :style="{height: setH()}" class="flex-center mr-10px mb-10px bg-#ddd">
                {{ n }}
            </div>
        </WaterfallList>
    </div>
</template>
<script lang="ts" setup>
const setH = () => {
    const h = Math.floor(Math.random() * 100 + 30);
    return `${h}px`;
};
</script>
<style lang="less" scoped>
</style>
