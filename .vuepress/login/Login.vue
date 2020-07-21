<!--
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2020-07-16 12:15:36
 * @LastEditors: MrSong
 * @LastEditTime: 2020-07-17 20:27:13
--> 
<template>
  <div class="login-form">
    <div class="form-header">用户名</div>
    <div>
      <el-input v-model="username" class="form-control" placeholder="请输入用户名"></el-input>
    </div>
    <div class="form-header">密码</div>
    <div>
      <el-input type="password" v-model="password" class="form-control" placeholder="请输入密码"></el-input>
    </div>
    <div class="btn-row">
      <el-button type='primary' class="btn" @click="login">OK</el-button>
    </div>
  </div>
</template>

<script>
  import {
    STORAGE_KEY
  } from "./helper";
  export default {
    data() {
      return {
        username: "",
        password: ""
      };
    },
    mounted() {
      console.log(this);
    },
    methods: {
      login() {
        if (this.username && this.password) {
          const data = JSON.stringify({
            name: this.username,
            time: new Date().getTime()
          });
          window.localStorage.setItem(STORAGE_KEY, data);
          this.$emit("close", true);
        } else {
          this.$dlg.alert("Please complete the content", {
            messageType: "warning"
          });
        }
      }
    }
  };
</script>

<style lang="scss">
  .login-form {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .btn-row {
      margin-top: 2rem;
      text-align: center;
    }
    .btn {
      padding: 0.8rem 4rem;
      outline: none;
      background-color: #60C084;
      color: white;
      border: 0;
    }
    .form-header {
      color: #666;
      margin-bottom: 0.5rem;
    }
    .form-control {
      width: 100%;
      margin-bottom: 0.5rem;
      box-sizing: border-box;
      outline: none;
      transition: border 0.2s ease;
    }
  }
</style>