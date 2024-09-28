import type { List } from '@/types/home'
import { http } from '@/utils/http'

/**
 * 获取套餐
 */
export const getListApi = () => {
  return http<List[]>({
    method: 'GET',
    url: '/list',
  })
}
