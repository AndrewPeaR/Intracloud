<template>
    <label class="switch">
        <input type="checkbox" class="switch__input">
        <span class="switch__slider">
            <p class="switch__content">контакты</p>
            <p class="switch__content">главная</p>
        </span>
    </label>
</template>

<style lang="sass">
// Стили для переключателя
.switch
    display: inline-block
    position: relative
    height: 54px
    width: 169px

// Скрыть оформление checkbox
.switch__input
    height: 0
    width: 0
    opacity: 0

.switch__content
    margin: 0
    @include transition
.switch__content:last-child
    margin-top: 80px
.switch__slider
    overflow: hidden
    position: absolute
    cursor: pointer
    top: 0
    left: 0
    right: 0
    bottom: 0
    height: 54px
    width: 169px
    box-sizing: border-box
    border-radius: 32px
    padding: 2px 26px 2px 26px
    display: flex
    flex-direction: row-reverse
    justify-content: flex-end
    align-items: center
    @include font-styles(14px, 400, normal, 0, $gray200)
    @include transition

    background-color: $card

.switch__slider::before
    content: url(assets/images/LogoImage.png)
    position: absolute
    z-index: 5
    cursor: pointer
    left: 2px
    top: 2px
    border-radius: 32px
    width: 52px
    height: 50px
    box-sizing: border-box
    padding-top: 5px
    display: flex
    justify-content: center

    background-color: $white
    @include transition

.switch__input:checked + .switch__slider::before
    transform: translateX(113px)
.switch__input:checked + .switch__slider
    padding-left: 30px
.switch__input:checked + .switch__slider .switch__content
    transform: translate3d(-4px, -40px, 0)
</style>