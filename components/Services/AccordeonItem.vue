<script setup>
const props = defineProps([
    'item', 'color'
])

const cardsColors = inject('cardsColors')
let cardColor = cardsColors[props.color]

</script>

<template>
    <div class="accordeon__item">
      <input
        type="checkbox"
        name="accordeon__item"
        :id="`accordeon__item-${item.id}`"
        class="accordeon__checkbox"
      />
      <label :for="`accordeon__item-${item.id}`" class="accordeon__title">
        {{ item.name }}
        <IconAccordeonArrow class="accordeon__arrow" :fontControlled="false" filled :alt="'AccordeonArrow'"/>
      </label>
      <div class="accordeon__content">
        <ul class="accordeon__list">
            <li v-for="tags in item.cardList.cards" :key="tags.id">{{ tags.title }}</li>
        </ul>
      </div>
    </div>
</template>

<style lang="sass">
.accordeon__item
    position: relative
    margin-bottom: 24px

.accordeon__title
    cursor: pointer
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 24px
    border-radius: 12px
    padding: 8px 12px
    @include font-styles(20px, 400, 150%, 0, $white)
    @include fast-transition
.accordeon__title:hover
    color: $text
    background-color: v-bind(cardColor)
.accordeon__title:hover .accordeon__arrow path
    stroke: $text
.accordeon__checkbox
    position: absolute
    z-index: -5
    opacity: 0
    top: 30px
    left: 0

.accordeon__checkbox:checked ~ .accordeon__content
    display: block
    @include transition
.accordeon__arrow
    @include fast-transition
.accordeon__checkbox:checked ~ .accordeon__title .accordeon__arrow
    transform: rotate(180deg)
.accordeon__content
    display: none
    overflow: hidden
    @include transition
    @include font-styles(20px, 400, 150%, 0, $white)

.accordeon__list
    list-style-type: none
.accordeon__list li
    margin-bottom: 12px
</style>