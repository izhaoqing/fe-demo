<template>
    <div class="warp">
        <Menu class="menu"></Menu>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import Menu from './layout/Menu.vue';
</script>
<style lang="less" scoped>
.warp {
    min-height: 100vh;
    .menu {
        position: fixed;
        left: 0;
        top: 0;
        width: 300px;
        height: 100%;
        padding: 12px;
        overflow: auto;
    }
    .content {
        flex: 1;
        padding: 12px;
        margin-left: 300px;
    }
}
</style>
