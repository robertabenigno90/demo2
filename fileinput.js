<template>
  <v-container>
    <v-file-input
      label="File input"
      :variant="current_variant"
      :density="current_density"
    ></v-file-input>

    <v-select :items="variants" v-model="current_variant" />
    <v-select :items="densities" v-model="current_density" />
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const current_variant = ref('variant')
  const variants = ref([
    { title: 'Default', value: 'default' },
    { title: 'Outlined', value: 'outlined' },
    { title: 'Underlined', value: 'underlined' },
    { title: 'Solo', value: 'solo' },
    { title: 'Solo-filled', value: 'solo-filled' },
  ])
  const current_density = ref('density')
  const densities = ref([
    { title: 'Compact', value: 'compact' },
    { title: 'Comfortable', value: 'comfortable' },
    { title: 'Default', value: 'default' },
  ])
</script>
