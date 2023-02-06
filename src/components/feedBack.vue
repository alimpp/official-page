<template>
  <div class="d-flex flex-column">
    <baseInput
      placeholder="Type your name"
      icon="username"
      :hasError="nameError"
      borderRadius="5px"
    />
    <baseInput
      class="mt-2"
      placeholder="Type your email"
      icon="email"
      :hasError="emailError"
      borderRadius="5px"
    />
    <baseInput
      class="mt-2"
      placeholder="Type your message"
      icon="message"
      :hasError="messageError"
      borderRadius="5px"
    />
    <div class="mt-2">
      <baseBtn name="Send FeedBack" :loading="loading" color="primary" icon="send" />
    </div>
  </div>
</template>

<script setup>
import baseBtn from "@/components/base/baseBtn";
import baseInput from "@/components/base/baseInput";
</script>

<style></style>
