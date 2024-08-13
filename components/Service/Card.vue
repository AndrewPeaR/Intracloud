<script setup>
const route = useRoute()
const props = defineProps(["color", "card"]);
</script>

<template>
  <div class="service-card">
    <NuxtLink class="service-card__link" :to="`/about/${route.params.id}`">
      <h3 class="service-card__title">{{ card.title }}</h3>
      <ul class="service-card__items">
        <li
          class="service-card__item"
          v-for="tag in card.tagList"
          :key="tag.id"
        >
          <IconListChecked
            class="service-card__list-type"
            alt="list checked"
            :fontControlled="false"
            filled
          />{{ tag.tag }}
        </li>
      </ul>
      <p class="service-card__description">
        {{ card.description }}
      </p>
    </NuxtLink>
  </div>
</template>

<style lang="sass">
.service-card
    border-radius: 32px
    padding: 32px // ???????
    background-color: $card
    opacity: 0.8
    @include fast-transition
.service-card__link
    display: flex
    flex-direction: column
    height: 100%

.service-card:hover
    background-color: v-bind(color)
.service-card:hover .service-card__title
    color: $text
.service-card:hover .service-card__items
    color: $text
.service-card:hover .service-card__list-type path
    fill: $text
.service-card:hover .service-card__description
    color: $text

.service-card__title
    margin: 0
    @include fast-transition
    @include font-styles(20px, 700, 150%, 0, $white)
.service-card__items
    padding: 0
    margin: 0
    margin-top: 32px
    margin-bottom: 24px
    list-style: none
    @include font-styles(20px, 400, 150%, 0, $white)
    flex: 1 1 0%
    @include fast-transition

.service-card__item
    margin-bottom: 10px
.service-card__list-type
    margin-right: 4px
.service-card__list-type path
    @include fast-transition
    fill: $white
.service-card__description
    display: flex
    align-items: flex-end
    margin: 0
    @include fast-transition
    text-align: right
    @include font-styles(20px, 400, 150%, 0, $white)
</style>
