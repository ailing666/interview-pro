/*
 * @Author: taoshiwei
 * @Date: 2019-04-09 14:39:32
 * @Last Modified by: taoshiwei
 * @Last Modified time: 2019-04-29 14:56:00
 *
 * 目录
 */

import { createAPI } from '@/utils/request'

// 目录列表
export const directorysList = data => createAPI('/directorys', 'get', data)

// 目录简单列表
export const directorysSimple = data =>
  createAPI('/directorys/simple', 'get', data)

// 目录详情
export const directorysDetail = data =>
  createAPI(`/directorys/${data.id}`, 'get', data)

// 目录添加
export const directorysAdd = data => createAPI('/directorys', 'post', data)

// 目录修改
export const directorysUpdate = data =>
  createAPI(`/directorys/${data.id}`, 'put', data)

// 目录删除
export const directorysRemove = data =>
  createAPI(`/directorys/${data.id}`, 'delete', data)

// 目录状态
export const directorysChangeState = data =>
  createAPI(`/directorys/${data.id}/${data.state}`, 'post', data)
