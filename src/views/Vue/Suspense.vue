<template>
    <div class="">
        <Suspense>
            <template #fallback>
                <div>loading...</div>
            </template>
            <Dai></Dai>
        </Suspense>
    </div>
</template>

<script lang="ts" setup>
// const C = import('./component/SuspenseComp.vue');
const Dai = defineAsyncComponent(() => import('./component/SuspenseComp.vue'));
// const DemoComp = defineAsyncComponent(() => {
//     return new Promise(res => {
//         setTimeout(() => {
//             C.then(res);
//         }, 2000);
//     });
// });
</script>

<style scoped lang="less">
</style>
