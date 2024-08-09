<script setup>
function GoBackPage() {
  window.history.back();
}
</script>

<template>
  <div class="wrapper">
    <section class="not-found">
      <div class="not-found__wrapper">
        <h2 class="section-title not-found__title">404</h2>
        <h2 class="section-title not-found__title">Страница не найдена</h2>
        <div class="not-found__buttons">
          <ElementsButton
            @click="GoBackPage"
            class="not-found__button"
            :type="'secondary'"
            :text="'Вернуться назад'"
          />
          <NuxtLink :to="'/'">
            <ElementsButton
              class="not-found__button"
              :type="'primary'"
              :text="'На главную'"
            />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="sass">
.not-found
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
.not-found__wrapper
    max-width: 816px
    height: 100%
    width: 100%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
.not-found__title
    margin: 0
.not-found__title:first-child
    margin-bottom: 32px
.not-found__buttons
    width: 100%
    display: flex
    margin-top: 80px
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 30px
.not-found__button
    width: 100%
    display: flex
    justify-content: center
</style>
