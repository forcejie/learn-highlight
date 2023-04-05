<template>
  <div style="width: 100vw; height: 100vh; text-align: left; line-height: 50px">
    <highlightjs autodetect :code="code" />
    <highlightjs language="javascript" code="var x = 5;" />
  </div>
</template>

<script setup>
const code = 'console.log("测试引入highlighjs")';
</script>

<style></style>
