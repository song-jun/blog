<!--
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2020-07-17 20:37:12
 * @LastEditors: MrSong
 * @LastEditTime: 2020-07-17 22:24:28
--> 
## 数据列表

<template>
<div class='mydata'>
  <el-button type="primary" @click="getDetail">获取数据</el-button>
  <el-button type="primary" @click="go">dialog测试</el-button>
  <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
  <div class='table-box' v-if='iShow'>
    <el-table :data="noteList" height="500" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="名称">
              <span>{{ props.row.title }}</span>
            </el-form-item>
            <el-form-item label="ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="描述">
              <span>{{ props.row.md }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="ID" prop="id" width='100'></el-table-column>
      <el-table-column label="名称" prop="title" width='200'></el-table-column>
      <el-table-column label="描述" prop="md"></el-table-column>
      <el-table-column fixed="right" label="操作" align='center' width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row,1)" type="text" size="small">删除</el-button>
          <el-button @click="handleClick(scope.row,2)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
import api from "./.vuepress/utils/api";
import {
  parseTime,
  getTime
} from "./.vuepress/utils/index.js";
export default {
  data() {
    return {
      dialogVisible: false,
      noteList: [],
      total: 10,
      pageSize: 5,
      iShow: false
    };
  },
  mounted() {},
  methods: {
    handleClick(row,type) {
      console.log(row,type);
    },
    getDetail(pageSize) {
      let data = {
        id: "root",
        pageNo: 1,
        pageSize: pageSize || this.pageSize
      };
      this.$http({
          url: api.get_note(),
          method: "post",
          data: data
        })
        .then(res => {
          let data = res.data;
          this.total = res.total;
          this.pageSize = Number(res.pageSize);
          this.noteList = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              const item = data[key];
              if (!item.img) {
                item.img = `images/girl.jpg`;
              }
              item.month = parseTime(item.time).substr(5, 5);
              item.year = parseTime(item.time).substr(0, 4);
              this.noteList.push(item);
              setTimeout(() => {
                this.iShow = true;
              }, 500);
            }
          }
          this.noteList.reverse();
          console.log(this.noteList);
        })
        .catch(err => {
          console.log("log", err);
        });
    },
    go() {
      let that = this;
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
        duration: "2000",
        onClose() {
          that.dialogVisible = true;
        }
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="scss">
.mydata {
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: calc(100% - 100px);

    span {
      display: block;
      line-height: 25px;
    }
  }

  .table-box {
    margin-top: 1rem;
  }

  table {
    margin: 0;

    th,
    td {
      border: 0
    }
  }

  .el-table .cell {
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>
