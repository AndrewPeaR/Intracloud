<script setup>
const props = defineProps([
    'closeModal'
])

</script>

<template>
    <div class="bg-modal">
        <div class="modal">
            <IconCloseModal @click="closeModal" ref="modalClose" class="modal__close" :fontControlled="false" filled alt="Close" />
            <h3 ref="test" class="modal__title">Оставить заявку</h3>
            <p class="modal__description">Получите ответ на ваш вопрос в короткий срок</p>
            <form class="modal__form form">
                <input class="form__input" type="text" placeholder="Ваше имя">
                <input class="form__input" type="number" placeholder="Ваш телефон">
                <textarea class="form__input form__textarea" placeholder="Ваш вопрос / предложение"/>
                <p class="form__privacy">Продолжая, вы соглашаетесь<br />с политикой конфиденциальности</p>
                <ElementsButton class="form__button" :type="'primary'" :text="'Оставить заявку'" :typeButtons="'submit'" />
            </form>
        </div>
    </div>    
</template>

<style lang="sass">
.bg-modal
    opacity: 0
    display: flex
    justify-content: center
    align-items: center

    position: fixed
    z-index: -3
    width: 100%
    height: 100%
    top: 0
    left: 0

    backdrop-filter: blur(5px)
    
    @include fast-transition

.bg-modal_open
    opacity: 1
    z-index: 5

.modal
    position: relative
    max-width: 560px
    width: 100%
    border: 1px solid $white
    border-radius: 32px
    background-color: $background
    padding: 48px 32px
    display: flex
    flex-direction: column
    align-items: center

.modal__close
    position: absolute
    top: 24px
    right: 24px
    cursor: pointer
.modal__title
    margin-bottom: 4px
    text-transform: uppercase
    @include font-styles(24px, 700, 130%, 0.02em, $white)
.modal__description
    max-width: 248px
    text-align: center
    margin-bottom: 32px
    @include font-styles(16px, 400, 150%, 0, $white)
.form
    width: 100%
    display: flex
    flex-direction: column
    gap: 24px
.form__input
    outline: none
    background-color: $background
    border: 1px solid $gray100
    border-radius: 10px
    padding: 12px 64px 12px 16px
    @include font-styles(20px, 400, 150%, 0, $white)
.form__input:focus
    border: 1px solid $accent
    caret-color: $accent
.form__input::placeholder
    @include font-styles(20px, 400, 150%, 0, $gray100)
.form__textarea
    resize: vertical
.form__privacy
    text-align: center
    @include font-styles(14px, 400, normal, 0, $gray100)
.form__button
    display: flex
    justify-content: center
</style>