<template>
    <div class="">
        <button @click="show=true">
            open
        </button>
        <Teleport to="body">
            <div v-if="show" class="flex-center w-full h-full fixed left-0 top-0 bg-#000/50" @click="show=false">
                <div class="w-300px h-200px bg-#fff" @click.stop>
                    <button @click="show=false">
                        hide
                    </button>
                    <div>123</div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script lang="ts" setup>
const show = ref(false);
</script>

<style scoped lang="less">
</style>
