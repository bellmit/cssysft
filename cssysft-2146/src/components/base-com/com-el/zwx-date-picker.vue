<template>

  <el-date-picker
    v-model="form[config.model]"
    :class="config.class"
    :size="config.size"
    :type="config.type"
    :value-format="config.valueFormat"
    :placeholder="config.placeholder"
    :disabled="config.disabled">
  </el-date-picker>

</template>

<script setup>
import {
  defineProps
} from "vue";

const props = defineProps({
  config: {
    type: Object,
    required: true
  },
  form: {
    type: Object,
    required: true,
  }
});

</script>

<style scoped>

</style>
