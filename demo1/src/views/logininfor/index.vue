<template>
  <div class="app-container">
    <el-table :data="listData" border style="width: 100%;margin-top:20px">
      <el-table-column align="center" type="selection" width="55"></el-table-column>
      <el-table-column align="center" prop="infoId" label="访问编号" width="100"></el-table-column>
      <el-table-column align="center" prop="userName" label="用户名" width="100"></el-table-column>
      <el-table-column
        align="center"
        prop="ipaddr"
        label="登录地址"
        width="130"
        :show-overflow-tooltip="true"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="loginLocation"
        label="登陆地点"
        width="100"
        :show-overflow-tooltip="true"
      ></el-table-column>
      <el-table-column align="center" prop="browser" label="浏览器" width="120"></el-table-column>
      <el-table-column align="center" prop="os" label="操作系统" width="140"></el-table-column>
      <el-table-column align="center" prop="msg" label="登陆状态" width="150"></el-table-column>
      <el-table-column align="center" prop="loginTime" label="登录时间"></el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script>
import pagination from "../../components/pagination/index.js";
import { list } from "../api/logininfor";
export default {
  data() {
    return {
      //数据
      listData: [],
      //表格数据条数
      total: 0,
      //日期范围
      dateRange: [],
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        ipaddr: undefined, //登录地址
        userName: undefined, //用户名
        status: undefined //登录状态
      }
    };
  },
  components: {
    pagination
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      list(this.queryParams).then(res => {
        this.listData = res.data.rows;
        this.total = res.data.total;
      });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>