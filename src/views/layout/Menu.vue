<template>
    <div class="menu">
        <a-collapse v-model:activeKey="activeKey">
            <a-collapse-panel v-for="(item, key) in menu" :key="key" :header="key">
                <div class="flex flex-wrap">
                    <p
                        v-for="v in item"
                        :key="v.relativePath"
                        :class="{'text-primary': route.name === v.name}"
                        class="mb-0 px-6px mr-6px cursor-pointer"
                        hover="text-primary"
                        @click="toView(v.name)"
                    >
                        {{ v.file }}
                    </p>
                </div>
            </a-collapse-panel>
        </a-collapse>
    </div>
</template>

<script lang="ts" setup>
import menuRoutes from '@/router/menuRoutes';

const menu = menuRoutes.reduce((pre, cur) => {
    pre[cur.dir] = pre[cur.dir] || [];
    pre[cur.dir].push(cur);
    return pre;
}, {} as Record<string, any>);

const activeKey = ref(Object.keys(menu));
const router = useRouter();
const toView = (name: string) => {
    router.push({
        name,
    });
};
const route = useRoute();
</script>
