<script setup>
provide('cardsColors', {
    'yellow': '#CDF263',
    'red': '#F2636C',
    'green': '#91F263',
    'mint': '#63F2D8',
    'violet': '#A359FF',
    'orange': '#FF891C',
    'blue': '#8075FF'
})
</script>

<template>
    <div>
        <HeaderBlock />
        <slot />
        <FooterBlock />
    </div>
</template>