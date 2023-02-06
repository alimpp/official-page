<template>
  <div class="base-input-container">
    <i
      class="dark_color bi"
      :class="{
        'bi-person': username,
        'bi-eye-slash': password,
        'bi-gender-ambiguous': gender,
        'bi-envelope-at': email,
      }"
    ></i>
    <input
      ref="input"
      class="form-control px-4"
      :class="{ error: hasError, disbaled_input: disabledInput }"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :style="{ 'border-radius': borderRadius }"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
const username = computed(() => {
  if (props.icon === "username") {
    return true;
  }
});
const password = computed(() => {
  if (props.icon === "password") {
    return true;
  }
});
const gender = computed(() => {
  if (props.icon === "gender") {
    return true;
  }
});
const email = computed(() => {
  if (props.icon === "email") {
    return true;
  }
});
const disabledInput = computed(() => {
  if (props.disable == true) {
    return true;
  }
});
const props = defineProps({
  type: {
    type: String,
    default: "",
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: true,
  },
  hasError: {
    type: Boolean,
    default: false,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
    required: false,
  },
  borderRadius: {
    type: String,
    default: "",
    required: false,
  },
  disable: {
    type: Boolean,
    default: false,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.base-input-container {
  display: flex;
  flex-direction: column;
  i {
    position: absolute;
    z-index: 1;
    margin: 7px 6px;
    color: rgb(142, 142, 142);
  }
  .error {
    border: 1px solid #ff4d4f;
  }
  .disbaled_input {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
