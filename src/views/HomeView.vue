<template>
  <el-row :span="24">
    <el-col :span="6">
      值:{{ form }}<br />
      <avue-date
        v-model="form"
        format="YYYY年MM月DD日"
        value-format="YYYY-MM-DD"
        placeholder="请选择日期"
      ></avue-date>
      <el-col :span="24"></el-col>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      值:{{ form1 }}<br />
      <avue-date
        v-model="form1"
        type="datetime"
        format="YYYY年MM月DD日 HH:mm:ss"
        value-format="YYYY-MM-DD HH:mm:ss"
        placeholder="请选择日期"
      ></avue-date>
    </el-col>
  </el-row>

  <HelloWorld></HelloWorld>
</template>
<script setup>
import { ref } from "vue";

const form = ref("2020-01-01");
const form1 = ref("2020-01-01 12:00:00");
import HelloWorld from "../components/HelloWorld.vue";
</script>
