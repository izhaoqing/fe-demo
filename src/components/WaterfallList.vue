<template>
    <div class="flex items-start">
        <div v-for="n in cols" ref="columnsRef" :key="n" class="" :style="{width: itemWidth}">
            <ColsWrap :key="colsChildren[n - 1]?.value?.length" :data="colsChildren[n - 1]"></ColsWrap>
        </div>
    </div>
</template>
<script lang="tsx" setup>

const props = defineProps<{
    cols?: number;
}>();

const cols = computed(() => props.cols || 2);
const itemWidth = computed(() => `${100 / cols.value}%`);

const slots = defineSlots();
const children = computed(() => {
    const slot = slots.default?.();
    return slot?.[0]?.children || [];
});

const colsChildren = Array.from({ length: cols.value }).map(() => ref<Array<() => any>>([]));
const ColsWrap = (props: { data: Ref<any[]> }) => {
    if (!props.data.value.length) return;
    return props.data.value.map(v => v());
};

const columnsRef = ref<HTMLDivElement[]>([]);

let num = 0;
const pushChild = async() => {
    const node = children.value[num];
    if (!node) return;
    await nextTick();
    let index = 0;
    let height = columnsRef.value[0].offsetHeight || 0;
    columnsRef.value?.forEach((dom, i) => {
        const h = dom.offsetHeight;
        if (h < height) {
            index = i;
            height = h;
        }
    });
    colsChildren[index].value.push(() => node);
    num++;
    if (num < children.value.length) {
        pushChild();
    }
};

watch(children, () => {
    num = 0;
    colsChildren.forEach(v => (v.value = []));
    pushChild();
});

onMounted(pushChild);
</script>
