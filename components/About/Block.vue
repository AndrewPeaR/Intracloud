<script setup>
const cardsInfo = [
  {
    id: 1,
    icon: "Star.svg",
    text: "INTRACLOUD – <span>эксперт в области информационных технологий</span>. Среди наших преимуществ: полный спектр услуг, связанных с аудитом, проектированием, внедрением, адаптацией и поддержкой работы IT-систем различного уровня и масштаба, вплоть до международных.",
    button: false
  },
  {
    id: 2,
    icon: "Relations.svg",
    text: "Мы стремимся стать надежным партнёром для наших клиентов и <span>помогаем достичь успеха  в бизнесе</span>. С профессиональной точки зрения  вы получаете большую команду специалистов, экспертные знания в области IT, индивидуальный  и тщательный подход к каждой задаче, современные решения для повышения вашей эффективности и производительности, надежное функционирование систем и сервисов, высокий уровень безопасности и безотлагательное оказание поддержки и технического обслуживания.",
    button: false
  },
  {
    id: 3,
    icon: "Magic.svg",
    text: "Мы предлагаем коммуникации и услуги как на территории РФ, так и за ее пределами. Это отличная <span>возможность для масштабирования бизнеса</span> без необходимости использования услуг нескольких компаний с разными политиками и условиями.",
    button: false
  },
  {
    id: 4,
    icon: "Calculate.svg",
    text: "Основная специализация: аудит, внедрение и поддержка IT-инфраструктур; аутсорсинг или подбор и обучение собственной IT-команды; предоставление своих VPN-серверов и международных каналов связи; резервные центры и информационная безопасность; современные решения для повышения вашей эффективности и производительности.",
    button: false
  },
  {
    id: 5,
    icon: "Calling.svg",
    text: "INTRACLOUD – эксперт в области информационных технологий. Среди наших преимуществ: полный спектр услуг, связанных с аудитом, проектированием, внедрением, адаптацией и поддержкой работы IT-систем различного уровня и масштаба, вплоть до международных.",
    button: true
  },
];
</script>

<template>
  <div class="wrapper">
    <section class="about">
      <h2 class="section-title about__title">О компании</h2>
      <div class="about__cards">
        <div 
            v-for="card in cardsInfo"
            :key="card.id"
            class="about__card">
                <div class="about__icon">
                    <ElementsIcon :name="card.icon" />
                </div>
                <div class="about__description" v-html="card.text"></div>
                <NuxtLink v-if="card.button" :to="'/contacts?modal=true'">
                  <ElementsButton class="about__button" :type="'primary'" :text="'Оставить заявку'"/>
                </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="sass">
.about
    margin-bottom: 136px
.about__title
    margin-bottom: 56px
.about__cards
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 30px
.about__card
    padding: 32px
    border-radius: 32px
    background-color: $card
.about__card:last-child
    grid-column: 1 / 3

.about__icon svg
    width: 60px
    height: 60px
.about__description
    margin-top: 32px
    @include font-styles(20px, 400, 150%, 0, $white)
.about__description span
    color: $accent
.about__button
    margin-top: 32px
</style>
