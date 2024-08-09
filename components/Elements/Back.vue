<script setup>
function GoBackPage(){
    window.history.back()
}
</script>

<template>
    <div>
        <div class="back" @click="GoBackPage">
            <IconBack :fontControlled="false" filled alt="Back"/>
            <span>Назад</span>
        </div>
    </div>
</template>

<style lang="sass">
.back
    display: flex
    align-items: center
    gap: 4px
    @include font-styles(20px, 400, 150%, 0, $gray100)

.back:hover
    cursor: pointer
</style>