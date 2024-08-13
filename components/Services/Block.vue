<script setup>
const services = ref([])
const filteredServices = ref([])
const isLoading = ref(true)

const fetchServices = async () => {
    try {
        await fetch(`https://6878975d52b32495.mokky.dev/services?_relations=cardLists`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                services.value = data
            })
            .catch(error => console.error(error));
    
    } catch (err) {
        console.log(err);
    }
}

const onChangeSearchInput = (event) => {
    filteredServices.value = services.value.filter(item => {
        if(item.name.toLowerCase().includes(event.target.value.toLowerCase()) ){
            return true
        } else {
            return false
        }
    })
}

onMounted(async () => {
    await fetchServices()
    filteredServices.value = services.value
    isLoading.value = false
})

</script>

<template>
    <section class="services">
        <div class="wrapper">
            <div class="services__wrapper">
                <div class="services__search">
                    <h2 class="section-title services__title">Наши услуги</h2>
                    <label class="services__label">
                        <input @input="onChangeSearchInput" name="search" class="services__input" type="text">
                        <IconSearch class="services__icon" :fontControlled="false" filled :alt="'Search'" />
                    </label>
                </div>
                <ServicesAccordeon v-if="!isLoading" :services="filteredServices"/>
            </div>
        </div>
    </section>
</template>

<style lang="sass">
.services__wrapper
    max-width: 605px
    margin: 0 auto
    margin-top: 40px
.services__title
    margin: 0
.services__search
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 32px
.services__input
    box-sizing: border-box
    padding: 0 52px 0 16px
    height: 52px
    width: 200px
    border-radius: 32px
    border: none
    background-color: inherit
    @include fast-transition
    @include font-styles(20px, 400, 150%, 0, $gray100)
.services__label
    position: relative
.services__icon
    position: absolute
    top: 11px
    right: 16px
.services__icon path
    @include fast-transition
.services__label:hover .services__icon path
    stroke: $accent
.services__input:focus
    outline: none 
    background-color: $card
</style>