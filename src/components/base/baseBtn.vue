<template>
  <button
    class="button"
    :class="{
      primary_background: primaryBackground,
      secondary_background: secondaryBackground,
      success_background: successBackground,
      danger_background: dangerBackground,
      warning_background: warningBackground,
      info_background: infoBackground,
      light_background: lightBackground,
      dark_background: darkBackground,
      disbaled_button: disabledButton,
    }"
  >
    <div class="" v-if="loading">
      <div class="spinner-border spinner-border-sm" role="status"></div>
      <span class="px-1">Loading</span>
    </div>

    <div v-else>
      <i
        class="bi"
        :class="{
          'bi-person-fill': userIcon,
          'bi-envelope-at': emailIcon,
          'bi-send-check': sendIcon,
          'bi-chat-dots': chatIcon,
        }"
      ></i>
      {{ name }}
    </div>
  </button>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
const primaryBackground = computed(() => {
  if (props.color === "primary") {
    return true;
  }
});
const secondaryBackground = computed(() => {
  if (props.color === "secondary") {
    return true;
  }
});
const successBackground = computed(() => {
  if (props.color === "success") {
    return true;
  }
});
const dangerBackground = computed(() => {
  if (props.color === "danger") {
    return true;
  }
});
const warningBackground = computed(() => {
  if (props.color === "warning") {
    return true;
  }
});
const infoBackground = computed(() => {
  if (props.color === "info") {
    return true;
  }
});
const lightBackground = computed(() => {
  if (props.color === "light") {
    return true;
  }
});
const darkBackground = computed(() => {
  if (props.color === "dark") {
    return true;
  }
});
const userIcon = computed(() => {
  if (props.icon === "user") {
    return true;
  }
});
const emailIcon = computed(() => {
  if (props.icon === "email") {
    return true;
  }
});
const sendIcon = computed(() => {
  if (props.icon === "send") {
    return true;
  }
});
const chatIcon = computed(() => {
  if (props.icon === "chat") {
    return true;
  }
});
const disabledButton = computed(() => {
  if (props.disable == true) {
    return true;
  }
});
const props = defineProps({
  color: {
    type: String,
    default: "",
    required: true,
  },
  name: {
    type: String,
    default: "",
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
    required: false,
  },
  icon: {
    type: String,
    default: "",
    required: false,
  },
  disable: {
    type: Boolean,
    default: false,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.button {
  padding: 5px;
  border: none;
  border-radius: 5px;
}
.disbaled_button {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  cursor: not-allowed;
  pointer-events: none;
}
</style>
