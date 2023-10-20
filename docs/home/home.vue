<template>
    <div class="container">
        我是首页
    </div>
    <canvas id="ctx" :width="width" :height="height" class="star"></canvas>
</template>

<script setup>
import { onMounted } from 'vue'
const height = window.innerHeight
const width = window.innerWidth

onMounted(() => {
    getCtx()
})

function getCtx() {
    let canvas = document.getElementById('ctx')
    let ctx = canvas.getContext('2d')
    ctx.beginPath(); //开始绘制
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height)
    ctx.closePath(); //开始绘制
    canvasStar(ctx)
}

function canvasStar(ctx) {
    
}



</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        background: transparent;
        position: relative;
        z-index: 1;
    }
    .star{
        position: fixed;
        left: 0;
        top: 0;
    }
</style>