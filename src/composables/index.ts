import { ref } from 'vue'

/**
 * 倒计时60s
 * @returns
 */
export const useCountdown = () => {
  // 倒计时秒数
  const countdown = ref(60)

  // 倒计时函数
  const startCountdown = () => {
    const timer = setInterval(() => {
      countdown.value--
      if (countdown.value === 0) {
        clearInterval(timer)
        // 倒计时结束后的操作
        uni.showModal({
          title: '提示',
          content: '倒计时结束',
          showCancel: false,
        })
      }
    }, 1000)
  }

  // 返回封装的ref和函数
  return { countdown, startCountdown }
}
