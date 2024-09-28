/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import ReSwiper from '@/components/ReSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    ReSwiper: typeof ReSwiper
  }
}
