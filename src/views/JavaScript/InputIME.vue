<template>
    <input type="text" @compositionstart="startFn" @compositionend="endFn" @input="fn" />
    <div class="h-20px"></div>
    <p>{{ text }}</p>
    <div class="mt-20px">
        <a href="https://zh.wikipedia.org/wiki/输入法">https://zh.wikipedia.org/wiki/输入法</a>
    </div>
</template>

<script lang="ts" setup>
const text = ref('');
const startFn = (e: Event) => {
    (e.target as any).composing = true;
};
const endFn = (e: Event) => {
    const target = e.target as any;
    if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event('input'));
    }
};
const fn = (e: Event) => {
    if ((e.target as any).composing) return;
    const domValue = (e.target as HTMLInputElement).value;
    text.value = domValue;
};
</script>

<style scoped lang="less">
input {
    border: 1px solid #ddd;
}
</style>
