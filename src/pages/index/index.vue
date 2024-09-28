<script setup lang="ts">
import { getListApi } from '@/services/home'
import { useCountdown } from '@/composables/index.ts'

const req = async () => {
  const resp = await getListApi()
  console.log(resp.data)
}
const { countdown, startCountdown } = useCountdown()
startCountdown()
</script>

<template>
  <ReSwiper />
  <view class="index">
    <view>倒计时：{{ countdown }}</view>
    <button @click="req">网络请求</button>
  </view>
</template>

<style lang="scss"></style>
