<template>
    <div class="w-800px h-400px border-solid rounded-1/2 border-#000">
        <div ref="parent" class=" mt-200px  w-100px h-100px">
            <div ref="child" class="w-100px h-100px bg-red/50 origin-bottom-right"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const parent = ref<HTMLDivElement>();
const child = ref<HTMLDivElement>();
onMounted(() => {
    const keyframes = [
        { transform: 'translateX(0)' },
        { transform: 'translateX(800px)' },
    ];
    // eslint-disable-next-line no-undef
    const options: KeyframeAnimationOptions = {
        duration: 4000,
        iterations: Infinity,
        easing: 'ease-in-out',
        direction: 'alternate',
    };
    parent.value?.animate(keyframes, options);

    const keyframes2 = [
        { transform: 'translateY(0px) scale(1)', easing: 'ease-out' },
        { transform: 'translateY(200px) scale(1.2)', easing: 'ease-in' },
        { transform: 'translateY(0)  scale(1)', easing: 'ease-out' },
        { transform: 'translateY(-200px)  scale(0.8)', easing: 'ease-in' },
        { transform: 'translateY(0) scale(1)', easing: 'ease-out' },
    ];
    // eslint-disable-next-line no-undef
    const option2: KeyframeAnimationOptions = {
        duration: 8000,
        iterations: Infinity,
        // easing: 'ease-out-in',
        // direction: 'alternate',
    };
    child.value?.animate(keyframes2, option2);
});
</script>

<style scoped lang="less">
</style>

<!-- <template>
    <div class="planet">
        <div class="sun"></div>
        <div class="track"></div>
        <div class="moveY">
            <div class="earth"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="less">
.planet {
    width: 800px;
    height: 600px;
    background-color: black;
    position: relative;
    border: 1px solid white;
}
.planet div {
    position: absolute;
}
.sun {
    left: 350px;
    top: 250px;
    width: 100px;
    height: 100px;
    background: yellow 0 0 no-repeat;
}
.earth {
    top: 0;
    left: 370px;
    width: 60px;
    height: 60px;
    background: blue 0 0 no-repeat;
    transform-origin: 30px 400px;
    animation: rotation 8s linear infinite;
}
.moveY {
    animation: move 4s ease-in-out infinite alternate;
}
.track {
    width: 740px;
    height: 540px;
    left: 30px;
    top: 30px;
    border: 1px solid darkgrey;
    border-radius: 50%;
}

@keyframes move {
    to {
        transform: translateY(-200px);
    }
}

@keyframes rotation {
    to {
        transform: rotate(1turn);
    }
}
</style> -->
