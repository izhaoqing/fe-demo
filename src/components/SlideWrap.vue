<template>
    <marquee
        v-if="props.autoplay"
        v-bind="$attrs"
        ref="slideDom"
        direction="up"
        behavior="scroll"
        scrolldelay="0"
        class="marquee"
        @mouseover="stop"
        @mouseleave="start"
    >
        <div ref="wrapDom" class="container">
            <div class="list" :class="{'can-scroll': canScroll}">
                <div ref="conDom">
                    <slot></slot>
                    <div v-if="canScroll" style="height: 0;">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </marquee>
    <div v-else v-bind="$attrs">
        <div class="scroll">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { useElementSize } from '@vueuse/core';

const props = defineProps<{ stopOnHover?: boolean; autoplay?: boolean }>();

const slideDom = ref<HTMLMarqueeElement>();
const wrapDom = ref<HTMLDivElement>();
const conDom = ref<HTMLDivElement>();

const canScroll = ref(false);
const start = () => {
    if (!props.stopOnHover && !canScroll.value) return;
    slideDom.value?.start();
};
const stop = () => {
    if (!props.stopOnHover && !canScroll.value) return;
    slideDom.value?.stop();
};

const slideSize = useElementSize(slideDom);
const conSize = useElementSize(conDom);

const init = () => {
    stop();
    const h1 = slideSize.height.value;
    const h2 = conSize.height.value;
    canScroll.value = h1 < h2 && h1 > 0;
    if (wrapDom.value) {
        wrapDom.value!.style.height = canScroll.value
            ? `${conSize.height.value - slideSize.height.value}px`
            : `${conSize.height.value}px`;
    }
    canScroll.value && start();
};
false && watchEffect(init);
</script>

<style scoped lang="less">
.marquee,
.scroll {
    height: 100%;
}
.scroll {
    overflow: auto;
}
.container {
    position: relative;
}
.can-scroll {
    // position: relative;
    // bottom: 0;
    // left: 0;
    // transform: translateY(-100%);
}
</style>
