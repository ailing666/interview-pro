/*
 * @Author: taoshiwei
 * @Date: 2019-04-09 14:39:32
 * @Last Modified by: taoshiwei
 * @Last Modified time: 2019-04-29 14:57:26
 *
 * 标签
 */

import { createAPI } from '@/utils/request'

// 标签列表
export const tagsList = data => createAPI('/tags', 'get', data)

// 标签简单列表
export const tagsSimple = data => createAPI('/tags/simple', 'get', data)

// 标签详情
export const tagsDetail = data => createAPI(`/tags/${data.id}`, 'get', data)

// 标签添加
export const tagsAdd = data => createAPI('/tags', 'post', data)

// 标签修改
export const tagsUpdate = data => createAPI(`/tags/${data.id}`, 'put', data)

// 标签删除
export const tagsRemove = data => createAPI(`/tags/${data.id}`, 'delete', data)

// 标签状态
export const tagsChangeState = data =>
  createAPI(`/tags/${data.id}/${data.state}`, 'post', data)
