<script setup>
const props = defineProps([
    'type', 'text'
])
</script>

<template>
    <button class="btn" :class="type">
        {{ text }}
        <IconArrow alt="arrow" :fontControlled="false" filled class="btn__arrow"/>
    </button>
</template>

<style lang="sass">
.btn
    padding: 12px 70px
    border-radius: 32px
    border: none
    cursor: pointer
    display: flex
    align-items: center
    @include fast-transition
.btn__arrow
    margin-left: 10px
.btn__arrow path
    @include fast-transition
// Primary ----------------------------
.primary
    background-color: $white
    @include font-styles(20px, 700, 150%, 0, $text)
.primary:hover
    background-color: $accent
    color: $white
.primary:hover .btn__arrow path:nth-child(1)
    fill: $white
.primary:hover .btn__arrow path:nth-child(2)
    stroke: $white
// ------------------------------------

// Secondary --------------------------
.secondary
    padding: 9px 67px
    background: none
    border: 3px solid $white
    @include font-styles(20px, 700, 150%, 0, $white)
.secondary .btn__arrow path:nth-child(1)
    fill: $white
.secondary .btn__arrow path:nth-child(2)
    stroke: $white  
.secondary:hover
    color: $text
    background-color: $white
.secondary:hover .btn__arrow path:nth-child(1)
    fill: $text
.secondary:hover .btn__arrow path:nth-child(2)
    stroke: $text    
// ------------------------------------

// Text -------------------------------
.text
    padding: 0
    background: none
    @include font-styles(20px, 700, 150%, 0, $accent)
.text .btn__arrow path:nth-child(1)
    fill: $accent
.text .btn__arrow path:nth-child(2)
    stroke: $accent 
.text:hover
    color: $white
.text:hover .btn__arrow path:nth-child(1)
    fill: $white
.text:hover .btn__arrow path:nth-child(2)
    stroke: $white
</style>