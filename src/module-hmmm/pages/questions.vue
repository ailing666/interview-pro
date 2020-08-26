<template>
  <div class="base-question">
    <el-card>
      <el-form :model="form" inline label-width="80px">
        <el-form-item label="学科">
          <el-select v-model="form.subjectID" placeholder="请选择">
            <el-option
              v-for="item in subjectsList.items"
              :key="item.id"
              :label="item.subjectName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级目录"></el-form-item>
        <el-form-item label="标签名称"></el-form-item>
        <el-form-item label="关键字"></el-form-item>
        <el-form-item label="试题类型"></el-form-item>
        <el-form-item label="难度"></el-form-item>
        <el-form-item label="方向"></el-form-item>
        <el-form-item label="录入人"></el-form-item>
        <el-form-item label="题目备注"></el-form-item>
        <el-form-item label="企业简称"></el-form-item>
        <el-form-item label="城市"></el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { subjectsList } from '../../api/hmmm/subjects'
export default {
  data () {
    return {
      // 学科列表
      subjectsList: [],
      // 问题列表
      questionList: [],
      // 学科二级列表
      subjectsDetailList: [],
      // form表单
      subjectID: '',
      form: {
        subjectID: '', //    学科
        difficulty: '', //   难度
        questionType: '', // 试题类型
        tags: '', //         标签名称
        province: '', //     企业所在地省份
        city: '', //         企业所在城市
        keyword: '', //      关键字
        remarks: '', //      题目备注
        shortName: '', //    企业简称
        direction: '', //    方向
        creatorID: '', //    录入人
        catalogID: '' //    目录
      }
    }
  },
  created () {
    this.getSubjectsList()
  },
  methods: {
    // 获取学科列表
    async getSubjectsList () {
      let res = await subjectsList()
      this.subjectsList = res.data
      window.console.log('subjectsList', this.subjectsList)
    }
  }
}
</script>

<style scoped lang="less"></style>
