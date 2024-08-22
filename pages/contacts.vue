<script setup>
const route = useRoute()
definePageMeta({
  layout: "default",
});

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
  <div>
    <div class="wrapper wrapper_padding wrapper_desktop">
      <ElementsBack />
      <ContactsBlock />
    </div>
    <div class="wrapper wrapper_padding wrapper_mobile">
      <div class="contacts__swiper">
        <Swiper
          :modules="[
            SwiperPagination,
          ]"
          :space-between="16"
          :pagination="{
            clickable: true,
          }"
        >
          <SwiperSlide>
            <ContactsBlock :ToggleModal="ToggleModal"/>
          </SwiperSlide>
          <SwiperSlide>
            <ServicesBlock />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <ContactsModalForm :class="openModal ? 'bg-modal_open' : ''" :closeModal="ToggleModal"/>
  </div>
</template>

<style lang="sass">
.wrapper_mobile
  display: none
.contacts__swiper .swiper-wrapper
  padding-top: 15px
.contacts__swiper .swiper-pagination
  display: flex
  z-index: -1
  justify-content: center
  gap: 0
  bottom: auto
  top: 0 !important
.contacts__swiper .swiper-pagination-bullet
  width: 120px
  margin: 0 !important
  background-color: $card
  opacity: 1
  border-radius: 2px
  height: 3px
.contacts__swiper .swiper-pagination-bullet-active
  background-color: $accent 
@media (max-width: 768px)
  .wrapper_mobile
    display: block
  .wrapper_desktop
    display: none
</style>
