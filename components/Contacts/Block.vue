<script setup>
const route = useRoute()
const contactsInfo = [
  {
    id: 1,
    title: "Телефон",
    text: "+ 7 (495) 196-68-26",
  },
  {
    id: 2,
    title: "E-mail",
    text: "info@intracloud.ru",
  },
  {
    id: 3,
    title: "Адрес",
    text: "140009, Московская область, Г. О. Люберцы, ул. Митрофанова, д. 20А, этаж 6, офис 1",
  },
];
const body = ref('')
const openModal = ref(false)
const ToggleModal = () => {
    if(body.value){
      openModal.value = !openModal.value
      body.value.classList.toggle('block-scroll')
    }
}

onMounted(() => {
  body.value = document.querySelector('body')
  if(Boolean(route.query.modal) === true) 
    ToggleModal()
})
</script>

<template>
  <section class="contacts wrapper">
    <ContactsModalForm :class="openModal ? 'bg-modal_open' : ''" :closeModal="ToggleModal"/>
    <h2 class="section-title section-title_center">Эксперт в области IT</h2>
    <div class="contacts__items">
      <!--Знаю, есть специальный семантический тэг address
        Надо ли все контакты забивать в статику в зависимости от семантических тэгов
        Или можно оставить вывод элементов циклом? -->
      <div class="contacts__item" v-for="item in contactsInfo" :key="item.id">
        <h3 class="contacts__title">{{ item.title }}</h3>
        <p class="contacts__text">{{ item.text }}</p>
        <NuxtLink
          target="_blank"
          :to="`https://yandex.ru/maps/?indoorLevel=1&ll=53.460875%2C58.562565&mode=routes&rtext=60.973869%2C69.032402~55.693886%2C37.890472&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DIgoN2I8XQhWKxl5C&z=5.48`"
        >
          <ElementsButton
            v-if="item.title === 'Адрес'"
            :type="'text'"
            :text="'Проложить маршрут'"
            :icon="true"
          />
        </NuxtLink>
      </div>
      <ElementsButton
        class="contacts__button"
        :type="'primary'"
        :text="'Оставить заявку'"
        :icon="false"
        @click="ToggleModal"
      />
    </div>
  </section>
</template>

<style lang="sass">
.contacts
    margin-bottom: 136px
.contacts__items
    margin: 0 auto
    max-width: 605px
    margin-top: 56px
.contacts__item
    display: flex
    flex-direction: column
    align-items: center
    margin-bottom: 40px
.contacts__title
    margin: 0
    margin-bottom: 12px
    @include font-styles(20px, 400, 150%, 0, $gray200)
.contacts__text
    max-width: 560px
    text-align: center
    margin: 0
    margin-bottom: 12px
    @include font-styles(20px, 400, 150%, 0, $white)
.contacts__button
    width: 100%
    display: flex
    justify-content: center
</style>
