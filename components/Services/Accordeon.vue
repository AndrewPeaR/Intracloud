<script setup>
const props = defineProps(['services'])
</script>

<template>
  <div class="accordeon">
    <ServicesAccordeonItem
        v-for="item in services"
        :key="item.id" 
        :item="item"
        :color="item.color"
    />
  </div>
</template>

<style lang="sass">

</style>
