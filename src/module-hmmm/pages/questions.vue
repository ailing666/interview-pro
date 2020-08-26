<template>
  <div class="base-question">
    <el-card>
      <el-form :model="form" inline label-width="80px">
        <el-form-item label="学科">
          <el-select
            v-model="form.subjectID"
            placeholder="请选择"
            @change="confirmSub"
          >
            <el-option
              v-for="item in subjectsList"
              :key="item.id"
              :label="item.subjectName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级目录">
          <el-select v-model="form.catalogID" placeholder="请选择">
            <el-option
              v-for="item in directorysList"
              :key="item.id"
              :label="item.directoryName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标签名称">
          <el-select v-model="form.tags" placeholder="请选择">
            <el-option
              v-for="item in tagsList"
              :key="item.id"
              :label="item.subjectName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关键字">
          <el-input v-model="form.keyword"></el-input>
        </el-form-item>
        <el-form-item label="试题类型">
          <el-select v-model="form.questionType" placeholder="请选择">
            <el-option
              v-for="item in questionTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="难度">
          <el-select v-model="form.difficulty" placeholder="请选择">
            <el-option
              v-for="item in difficultyList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="方向">
          <el-select v-model="form.direction" placeholder="请选择">
            <el-option
              v-for="(item, index) in directionList"
              :key="index"
              :label="item"
              :value="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="录入人">
          <el-select v-model="form.creatorID" placeholder="请选择">
            <el-option
              v-for="item in userList"
              :key="item.id"
              :label="item.username"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="题目备注">
          <el-input v-model="form.remarks"></el-input>
        </el-form-item>
        <el-form-item label="企业简称">
          <el-input v-model="form.shortName"></el-input>
        </el-form-item>
        <el-form-item label="城市">
          <el-select
            v-model="form.province"
            placeholder="请选择"
            @change="provinceChange"
          >
            <el-option
              v-for="(item, index) in provincesList"
              :key="index"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
          <el-select v-model="form.city" placeholder="请选择">
            <el-option
              v-for="(item, index) in cityList"
              :key="index"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { subjectsList } from '../../api/hmmm/subjects'
import { directorysList } from '../../api/hmmm/directorys.js'
import { tagsList } from '../../api/hmmm/tags'
import { questionType, difficulty, direction } from '../../api/hmmm/constants'
import { list } from '../../api/base/users'
import { provinces, citys } from '../../api/hmmm/citys'
export default {
  data () {
    return {
      // 学科列表
      subjectsList: [],
      // 问题列表
      questionList: [],
      // 学科二级列表
      directorysList: [],
      // 标签列表
      tagsList: [],
      // 用户列表
      userList: [],
      // form表单
      subjectID: '',
      questionTypeList: questionType,
      difficultyList: difficulty,
      directionList: direction,
      // 地区列表
      provincesList: [],
      // 城市列表
      cityList: [],
      city: '',
      form: {
        subjectID: '', //    学科
        questionType: '', // 试题类型
        difficulty: '', //   难度
        direction: '', //    方向
        tags: '', //         标签名称
        province: '', //     企业所在地省份
        city: '', //         企业所在城市
        keyword: '', //      关键字
        remarks: '', //      题目备注
        shortName: '', //    企业简称
        creatorID: '', //    录入人
        catalogID: '' //    目录
      }
    }
  },
  created () {
    this.getSubjectsList()
    this.getUserList()
    this.provincesList = provinces()
    window.console.log('this.provincesList', this.provincesList)
  },
  methods: {
    // 选择学科后
    confirmSub (lable) {
      this.dirId = lable
      this.resetValue()
      directorysList({ subjectID: lable }).then(res => {
        this.directorysList = res.data.items
      })
      tagsList({ subjectID: lable }).then(res => {
        this.tagsList = res.data.items
        window.console.log('this.tagsList ', this.tagsList)
      })
    },
    // 选中后清空二级目录
    resetValue () {
      this.$set(this.form, 'catalogID', '')
      this.$set(this.form, 'tags', '')
    },
    // 获取学科列表
    async getSubjectsList () {
      let res = await subjectsList()
      this.subjectsList = res.data.items
      window.console.log('subjectsList', this.subjectsList)
    },
    // 获取用户列表
    async getUserList () {
      let res = await list()
      this.userList = res.data.list
      window.console.log('this.userList', this.userList)
    },
    // 选择城市后
    provinceChange (city) {
      this.city = city
      this.$set(this.form, 'city', '')
      // 获取所有地区
      this.cityList = citys(this.city)
    }
  }
}
</script>

<style scoped lang="less"></style>
