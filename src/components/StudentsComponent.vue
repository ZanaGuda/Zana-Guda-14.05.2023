<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>
    <el-table
      :data="nowTableData"
      border
      style="width: 100%"
      empty-text="No data available"
    >
      <el-table-column prop="index" label="Index" width="180"></el-table-column>
      <el-table-column prop="name">
        <template slot="header">
          <div>
            <span>Name</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="DoB">
        <template slot="header">
          <div>
            <span>DoB</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="muncipality">
        <template slot="header">
          <div>
            <span>Muncipality</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import HeaderComponent from "./HeaderComponent.vue";
import NavbarComponent from "./NavbarComponent.vue";
export default {
  name: "HomeComponent",
  data() {
    return {
      tableData: [],

      name: "",
      DoB: "",
      muncipality: "",
      input: "",
      id: "",
    };
  },

  methods: {},
  components: { HeaderComponent, NavbarComponent },
};
</script>
<style scoped></style>
