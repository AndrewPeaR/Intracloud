<script setup></script>

<template>
  <div class="wrapper">
    <footer class="footer">
        <div class="footer__logo">
            <NuxtLink :to="'/'">
                <ElementsLogo />
            </NuxtLink>
        </div>
      <div class="footer__wrapper">
        <div class="footer__links">
            <NuxtLink :to="'/contacts'" class="footer__link">Контакты</NuxtLink>
            <NuxtLink :to="'#'" class="footer__link">Услуги</NuxtLink>
        </div>
        <div class="footer__copyrights">
            <p class="footer__copyright">ООО Интраклауд</p>
            <p class="footer__copyright">Все права защищены</p>
            <p class="footer__copyright">2024</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="sass">
.footer
    padding: 40px 0
    @include adaptive-padding
.footer__logo
    text-align: center
    margin-bottom: 40px
.footer__wrapper
    display: flex
    justify-content: space-between
.footer__links
    display: flex
    flex-direction: column
    gap: 24px
.footer__link
    @include font-styles(20px, 700, 150%, 0, $gray200)
.footer__copyrights
    display: flex
    flex-direction: column
    text-align: right
.footer__copyright
    margin: 0
    @include font-styles(20px, 400, 150%, 0, $gray200)
.footer__copyright:last-child
    margin-top: 6px
@media (max-width: 768px)
    .footer__links
        gap: 20px
@media (max-width: 425px)
    .footer
        padding: 24px 0
        @include adaptive-padding
    .footer__links
        gap: 16px
    .footer__link
        font-size: 16px
    .footer__copyright
        font-size: 14px
    .footer__logo
        margin-bottom: 24px
</style>
