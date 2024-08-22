<script setup>
import { required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const props = defineProps(["closeModal"]);

const isSubmitForm = ref(false);

const formData = ref({
  name: null,
  phoneNumber: null,
  question: null,
});

const validatePhoneNumber = (value) => {
  const regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i;
  if (!regex.test(value)) {
    return false;
  }
  return true;
};
const rules = computed(() => {
  return {
    name: { required: helpers.withMessage("Введите свое имя", required) },
    phoneNumber: {
      required: helpers.withMessage("Введите свой номер телефона", required),
      validatePhoneNumber: helpers.withMessage(
        "Введите правильный номер телефона",
        validatePhoneNumber
      ),
    },
    question: {
      required: helpers.withMessage(
        "Введите ваш вопрос или предложение",
        required
      ),
    },
  };
});
const v$ = useVuelidate(rules, formData);

const submitForm = async (event) => {
  event.preventDefault();
  v$.value.$validate();
  if (!v$.value.$error) {
    try {
      await fetch(`https://6878975d52b32495.mokky.dev/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formData.value),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          formData.value = { name: null, phoneNumber: null, question: null };
        })
        .catch((error) => console.error(error));
    } catch (err) {
      console.log(err);
    }

    isSubmitForm.value = true;
  }
};

function modalClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }
</script>

<template>
  <div class="bg-modal" @click="closeModal">
    <div class="modal" @click="(e) => modalClick(e)">
      <IconCloseModal
        @click="closeModal"
        ref="modalClose"
        class="modal__close"
        :fontControlled="false"
        filled
        alt="Close"
      />
      <div class="modal__wrapper" v-if="!isSubmitForm">
        <h3 ref="test" class="modal__title">Оставить заявку</h3>
        <p class="modal__description">
          Получите ответ на ваш вопрос в короткий срок
        </p>
        <form class="modal__form form">
          <div class="form__input-wrapper">
            <input
              v-model="formData.name"
              name="name"
              id="name"
              class="form__input"
              type="name"
              placeholder="Ваше имя"
              @blur="v$.name.$touch"
              :class="{
                form__error: v$.name.$error,
              }"
            />
            <IconInputError
              v-if="v$.name.$error"
              class="form__icon"
              :fontControlled="false"
              filled
              alt="input-error"
            />
            <span class="form__message" v-if="v$.name.$error">{{
              v$.name.$errors[0].$message
            }}</span>
          </div>
          <div class="form__input-wrapper">
            <input
              v-model="formData.phoneNumber"
              name="phoneNumber"
              id="phoneNumber"
              class="form__input"
              type="tel"
              placeholder="Ваш телефон"
              @blur="v$.phoneNumber.$touch"
              :class="{
                form__error: v$.phoneNumber.$error,
              }"
            />
            <IconInputError
              v-if="v$.phoneNumber.$error"
              class="form__icon"
              :fontControlled="false"
              filled
              alt="input-error"
            />
            <span class="form__message" v-if="v$.phoneNumber.$error">{{
              v$.phoneNumber.$errors[0].$message
            }}</span>
          </div>
          <div class="form__input-wrapper">
            <textarea
              v-model="formData.question"
              name="question"
              id="question"
              class="form__input form__textarea"
              placeholder="Ваш вопрос / предложение"
              @blur="v$.question.$touch"
              :class="{
                form__error: v$.question.$error,
              }"
            />
            <IconInputError
              v-if="v$.question.$error"
              class="form__icon"
              :fontControlled="false"
              filled
              alt="input-error"
            />
            <span class="form__message" v-if="v$.question.$error">{{
              v$.question.$errors[0].$message
            }}</span>
          </div>
          <p class="form__privacy">
            Продолжая, вы соглашаетесь<br />с политикой конфиденциальности
          </p>
          <ElementsButton
            @click="(event) => submitForm(event)"
            class="form__button"
            :type="'primary'"
            :text="'Оставить заявку'"
            :typeButtons="'submit'"
          />
        </form>
      </div>
      <div class="modal__wrapper modal__wrapper_submit-form" v-else>
        <IconCheckCircle class="modal__submit-icon" :fontControlled="false" filled alt="CheckCircle" />
        <h3 ref="test" class="modal__title">Спасибо!</h3>
        <p class="modal__description">Ваша заявка принята в работу</p>
        <ElementsButton
          @click="
            () => {
              closeModal();
            }
          "
          class="form__button"
          :type="'primary'"
          :text="'Закрыть'"
        />
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.bg-modal
    opacity: 0
    position: fixed
    z-index: -3
    top: 0
    left: 0
    bottom: 0
    right: 0
    backdrop-filter: blur(5px)
    padding: 0 15px
    @include fast-transition

.bg-modal_open
    opacity: 1
    z-index: 10

.modal
    box-sizing: border-box
    position: relative
    // position: absolute
    top: 50%
    left: 50%
    z-index: 15
    transform: translate(-50%, -50%)
    // 
    max-width: 560px
    width: 100%
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
    margin-top: 0
    margin-bottom: 4px
    text-transform: uppercase
    @include font-styles(24px, 700, 130%, 0.02em, $white)
.modal__description
    max-width: 248px
    text-align: center
    margin-bottom: 32px
    @include font-styles(16px, 400, 150%, 0, $white)
.modal__wrapper_submit-form
    padding: 80px 0
.modal__submit-icon
    margin-bottom: 40px
.modal__wrapper_submit-form .modal__description
    margin: 0
    margin-bottom: 40px
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
.form__input-wrapper
    position: relative
    display: flex
    flex-direction: column
.form__input:focus
    border: 1px solid $accent
    caret-color: $accent
.form__input::placeholder
    @include font-styles(20px, 400, 150%, 0, $gray100)
.form__textarea
    resize: vertical
.form__privacy
    margin: 0
    text-align: center
    @include font-styles(14px, 400, normal, 0, $gray100)
.form__button
    width: 100%
    display: flex
    justify-content: center
.form__input-wrapper .form__icon
    position: absolute
    top: 11px
    right: 16px
.form__input
    @include fast-transition
.form__error
    border-color: $service_red !important
.form__error::placeholder
    color: $service_red !important
.form__message
    margin-top: 4px
    margin-left: 20px
    @include font-styles(14px, 400, normal, 0, $service_red)

@media (max-width: 480px)
  .modal
    padding: 48px 20px
  .form__input::placeholder, .form__input
    font-size: 16px
  .form
    gap: 16px
</style>
