<script setup>
const props = defineProps([
    'closeModal'
])

const isSubmitForm = ref(false)

const formData = ref({
    name: null,
    phoneNumber: null,
    question: null
})

const submitForm = (values) => {
    console.log(values);
    // try {
    //     await fetch(`https://6878975d52b32495.mokky.dev/contacts`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify(formData.value)
    //     })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => console.error(error));
    
    // } catch (err) {
    //     console.log(err);
    // }

    isSubmitForm.value = true
}

const validateName = (value) => {
    if (!value)
        return 'Введите ваше имя'
    return true
}
const validatePhoneNumber = (value) => {
    if (!value)
        return 'Введите ваш телефон'
    const regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i
    if (!regex.test(value)) {
        return 'Введите правильное значение телефона';
    }
    return true
}
const validateQuestion = (value) => {
    if (!value)
        return 'Введите ваш вопрос или предложение'
    return true
}
</script>

<template>
    <div class="bg-modal">
        <div class="modal">
            <IconCloseModal @click="closeModal" ref="modalClose" class="modal__close" :fontControlled="false" filled alt="Close" />
            <div class="modal__wrapper" v-if="!isSubmitForm">
                <h3 ref="test" class="modal__title">Оставить заявку</h3>
                <p class="modal__description">Получите ответ на ваш вопрос в короткий срок</p>
                <VeeForm @submit="submitForm" class="modal__form form">
                    <VeeField v-model="formData.name" name="name" class="form__input" type="name" placeholder="Ваше имя" :rules="validateName" />
                    <VeeErrorMessage name="name" />
                    <VeeField v-model="formData.phoneNumber" name="phoneNumber" class="form__input" type="number" placeholder="Ваш телефон" :rules="validatePhoneNumber"/>
                    <VeeErrorMessage name="phoneNumber" />
                    <VeeField as="textarea" v-model="formData.question" name="question" class="form__input form__textarea" placeholder="Ваш вопрос / предложение" :rules="validateQuestion"/>
                    <VeeErrorMessage name="question" />
                    <p class="form__privacy">Продолжая, вы соглашаетесь<br />с политикой конфиденциальности</p>
                    <ElementsButton class="form__button" :type="'primary'" :text="'Оставить заявку'" :typeButtons="'submit'" />
                </VeeForm>
            </div>
            <div class="modal__wrapper modal__wrapper_submit-form" v-else>
                <IconCheckCircle :fontControlled="false" filled alt="CheckCircle" />
                <h3 ref="test" class="modal__title">Спасибо!</h3>
                <p class="modal__description">Ваша заявка принята в работу</p>
                <ElementsButton @click="isSubmitForm = false" class="form__button" :type="'primary'" :text="'Закрыть'" />
            </div>
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
    box-sizing: border-box
    position: relative
    max-width: 560px
    width: 100%
    height: 631px
    border: 1px solid $white
    border-radius: 32px
    background-color: $background
    padding: 48px 32px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
.modal__wrapper
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
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
// .modal__form
    
.form
    width: 100%
    display: flex
    flex-direction: column
    gap: 24px
.form span
    color: $white
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
    width: 100%
    display: flex
    justify-content: center
</style>