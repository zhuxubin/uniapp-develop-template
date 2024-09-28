export interface List {
  /**
   * 方案其他套装信息
   */
  children?: Child[]
  /**
   * 方案ID
   */
  id?: number
  /**
   * 方案名称
   */
  name?: string
  /**
   * 方案封面图url
   */
  url?: string
}

export interface Child {
  /**
   * 套装key，用于后续发送申请合成
   */
  key?: string
  /**
   * 套装名称
   */
  name?: string
  /**
   * 套装商品sku
   */
  sku?: string
  /**
   * 套装封面url
   */
  url?: string
}
