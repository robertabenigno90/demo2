<template>
  <v-btn
    :variant="current_variant"
    :density="current_density"
    :size="current_size"
    >button</v-btn>
    
  <v-select class="pt-6" :items="variants" v-model="current_variant" />
  <v-select :items="densities" v-model="current_density" />
  <v-select :items="size" v-model="current_size" />
</template>

<script setup>
  import { ref } from 'vue'

  const current_variant = ref('variant')
  const variants = ref([
    { title: 'Outlined', value: 'outlined' },
    { title: 'Tonal', value: 'tonal' },
    { title: 'Text', value: 'text' },
    { title: 'Plain', value: 'plain' },
  ])
  const current_density = ref('density')
  const densities = ref([
    { title: 'Compact', value: 'compact' },
    { title: 'Comfortable', value: 'comfortable' },
    { title: 'Default', value: 'default' },
  ])
  const current_size = ref('size')
  const size = ref([
    { title: 'X-small', value: 'x-small' },
    { title: 'Small', value: 'small' },
    { title: 'Regular-bottom', value: 'regularbottom' },
    { title: 'Large', value: 'large' },
    { title: 'X-large', value: 'x-large' },
  ])
</script>

