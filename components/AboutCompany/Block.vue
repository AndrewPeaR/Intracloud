<script setup></script>

<template>
  <section class="company">
    <h2 class="section-title company__title">Контакт-центр</h2>
    <p class="company__description">
      Наш контакт-центр — это специализированное аутсорсинговое решение, которое
      поможет вам организовать и поддерживать коммуникацию с вашими клиентами.
      Мы обладаем современными технологиями и имеем большой штат
      профессиональных операторов, готовых оказать помощь вашим клиентам в любое
      время дня и ночи.Наш контакт-центр — это специализированное аутсорсинговое
      решение, которое поможет вам организовать и поддерживать коммуникацию
      с вашими клиентами.
    </p>
    <div class="company__cards">
      <div class="company-card">
        <h3 class="company-card__title">
          <IconListChecked
            class="company-card__list-type"
            alt="list checked"
            :fontControlled="false"
            filled
          />Рабочие места операторов
        </h3>
        <p class="company-card__description">
            Мы устанавливаем необходимое ПО, настраиваем телефонные системы и другие инструменты, нужные для обработки входящих и исходящих звонков.
        </p>
      </div>
      <div class="company-card">
        <h3 class="company-card__title">
          <IconListChecked
            class="company-card__list-type"
            alt="list checked"
            :fontControlled="false"
            filled
          />Рабочие места операторов
        </h3>
        <p class="company-card__description">
            Мы устанавливаем необходимое ПО, настраиваем телефонные системы и другие инструменты, нужные для обработки входящих и исходящих звонков.
        </p>
      </div>
    </div>
    <NuxtLink :to="'/contacts?modal=true'">
        <ElementsButton class="company__button" :type="'primary'" :text="'Оставить заявку'" :icon="false"/>
    </NuxtLink>
  </section>
</template>

<style lang="sass">
.company
    border-radius: 30px
    padding: 56px 32px
    background-color: $cardOpacity
    display: flex
    flex-direction: column
    gap: 48px
.company__title
    margin: 0
.company__description
    margin: 0
    max-width: 800px
    @include font-styles(20px, 400, 150%, 0, $white)
.company__cards
    display: flex
    gap: 30px
    
.company-card
    border-radius: 30px
    padding: 20px
    background-color: $card
.company-card__title
    display: flex
    align-items: center
    @include font-styles(20px, 700, 150%, 0, $white)
.company-card__list-type
    margin-right: 4px
.company-card__description
    @include font-styles(20px, 400, 150%, 0, $white)
.company__button
    max-width: 305px
    padding: 12px 64px
</style>


