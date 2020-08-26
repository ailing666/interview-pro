<template>
  <div class="base-question">
    <el-card>
      <el-form :model="form" inline>
        <el-row>
          <el-col :span="6">
            <el-form-item label="学科">
              <el-select
                v-model="form.subjectID"
                @change="change(form.subjectID)"
              >
                <el-option
                  v-for="(item, index) in subjectsList"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="二级目录">
              <el-select v-model="form.remarks">
                <el-option
                  v-show="subjectsDetailList.twoLevelDirectory"
                  v-for="(item, index) in subjectsDetailList.twoLevelDirectory"
                  :key="index"
                  :label="item.subjectName"
                  :value="item.creatorID"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签名称">
              <el-select v-model="form.tags">
                <el-option
                  v-show="subjectsDetailList.tags"
                  v-for="(item, index) in subjectsDetailList.tags"
                  :key="index"
                  :label="item.subjectName"
                  :value="item.creatorID"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="关键字">
              <!-- <el-input v-model="form.keyword"></el-input> -->
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="试题类型">
              <el-select v-model="form.questionType">
                <el-option
                  v-for="(item, index) in questionTypeArr"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="难度">
              <el-select v-model="form.difficulty">
                <el-option
                  v-for="(item, index) in difficultyArr"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="方向">
              <el-select v-model="form.direction">
                <el-option
                  v-for="(item, index) in directionArr"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="录入人"></el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="题目备注"></el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="企业简称"></el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="城市"></el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item></el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { list } from '../../api/hmmm/questions'
import { subjectsSimple, subjectsDetail } from '../../api/hmmm/subjects'
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
      },
      // 类型列表
      directionArr: [
        {
          value: 'o2o',
          lable: '1'
        },
        {
          value: '外包服务',
          lable: '2'
        },
        {
          value: '企业服务',
          lable: '3'
        },
        {
          value: '互联网金融',
          lable: '4'
        },
        {
          value: '企业咨询',
          lable: '5'
        },
        {
          value: '互联网',
          lable: '6'
        },
        {
          value: '电子商务',
          lable: '7'
        },
        {
          value: '其他',
          lable: '8'
        }
      ],
      questionTypeArr: [
        {
          value: '单选',
          lable: '1'
        },
        {
          value: '多选',
          lable: '2'
        },
        {
          value: '简答',
          lable: '3'
        }
      ],
      difficultyArr: [
        {
          value: '简单',
          lable: '1'
        },
        {
          value: '一般',
          lable: '2'
        },
        {
          value: '困难',
          lable: '3'
        }
      ]
    }
  },
  created () {
    this.getsubjectsList()
    this.getQuestionList()
  },
  methods: {
    change (value) {
      window.console.log('change', value)
      subjectsDetail({ id: value }).then(res => {
        this.subjectsDetailList = res.data
      })
      window.console.log('this.subjectsDetailList', this.subjectsDetailList)
    },
    async getQuestionList () {
      let res = await list()
      this.questionList = res.data
      window.console.log('questionList', this.questionList)
    },
    async getsubjectsList () {
      let res = await subjectsSimple()
      this.subjectsList = res.data
      window.console.log('this.subjectsList', this.subjectsList)
    }
  }
}
</script>

<style scoped lang="less"></style>
