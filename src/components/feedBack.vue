<template>
  <div class="d-flex flex-column">
    <baseInput
      placeholder="Type your name"
      icon="username"
      :hasError="feedBackError.name"
      v-model="feedBack.name"
      borderRadius="5px"
    />
    <p
      class="danger_color size_very_small"
      v-for="error in v$.name.$errors"
      :key="error.$uid"
    >
      .{{ error.$message }}
    </p>

    <baseInput
      class="mt-2"
      placeholder="Type your email"
      icon="email"
      :hasError="feedBackError.email"
      v-model="feedBack.email"
      borderRadius="5px"
    />
    <p
      class="danger_color size_very_small"
      v-for="error in v$.email.$errors"
      :key="error.$uid"
    >
      .{{ error.$message }}
    </p>

    <baseInput
      class="mt-2"
      placeholder="Type your message"
      icon="message"
      :hasError="feedBackError.message"
      v-model="feedBack.message"
      borderRadius="5px"
    />
    <p
      class="danger_color size_very_small"
      v-for="error in v$.message.$errors"
      :key="error.$uid"
    >
      .{{ error.$message }}
    </p>

    <div class="mt-2">
      <baseBtn
        @click="sendFeedBack"
        name="Send FeedBack"
        :loading="loading"
        color="primary"
        icon="send"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import baseBtn from "@/components/base/baseBtn";
import baseInput from "@/components/base/baseInput";
import { SuccessNotification } from "@/services/notifications";
import { ErrorNotification } from "@/services/notifications";
import { sendFeedback } from "@/api/feedBackApi";
import useVuelidate from "@vuelidate/core";

import { required, email, minLength, sameAs, helpers } from "@vuelidate/validators";

const loading = ref(false);

const feedBack = ref({
  name: "",
  email: "",
  message: "",
});

const feedBackError = ref({
  name: false,
  email: false,
  message: false,
});

const rules = computed(() => {
  return {
    name: {
      required,
      minLength: minLength(8),
    },
    email: { required, email },
    message: {
      required,
      minLength: minLength(6),
    },
  };
});

const v$ = useVuelidate(rules, feedBack);

const sendFeedBack = async () => {
  const result = await v$.value.$validate();
  if (result) {
    feedBackError.value.name = false;
    feedBackError.value.email = false;
    feedBackError.value.message = false;
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
    }, 1000);
    sendFeedback(feedBack.value);
    SuccessNotification(
      3000,
      `Thanks for send feedback ${feedBack.value.name}`,
      "bottom-center"
    );
  } else {
    feedBackError.value.name = true;
    feedBackError.value.email = true;
    feedBackError.value.message = true;
    ErrorNotification(3000, "Please check form validations", "bottom-center");
  }
};
</script>

<style></style>
