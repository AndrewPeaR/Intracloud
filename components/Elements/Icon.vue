<script setup>
// const props = defineProps(["name", "filled", "fontControlled"]);
const props = defineProps(["name"]);
const icon = ref();

watchEffect(async () => {
  try {
    const iconsImport = import.meta.glob("/assets/icons/**.svg", {
    //   тут переписал параметры, так как Vite начал ругаться, что 'as' уже не поддерживается
      query: "?raw",
      import: 'default',
      eager: false,
    });
    const rawIcon = await iconsImport[`/assets/icons/${props.name}`]();
    icon.value = rawIcon;
  } catch {
    console.error(
      `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
    );
  }
});
</script>
<!-- :class="{ 'nuxt-icon--fill': !filled,
'nuxt-icon': fontControlled
}" -->
<template>
    <span
      v-html="icon"
    />
</template>