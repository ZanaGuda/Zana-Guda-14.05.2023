<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>
    <div class="header">
      <el-input
        placeholder="search"
        v-model="input"
        class="search-input"
        prefix-icon="el-icon-search"
      ></el-input>
      <el-button
        type="text"
        @click="dialogFormVisible = true"
        class="register-button"
        >Register New Student</el-button
      >
    </div>

    <el-dialog title="Register new student" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="formRules" ref="form">
        <el-form-item label="Name" prop="name">
          <el-input placeholder="Name" v-model="form.name" />
        </el-form-item>
        <el-form-item label="DoB" prop="DoB">
          <el-input placeholder="DoB" v-model="form.DoB" type="date" />
        </el-form-item>
        <el-form-item
          label="Muncipality"
          prop="muncipality"
          class="muncipality"
        >
          <el-select
            v-model="form.muncipality"
            placeholder="Select Muncipality"
          >
            <el-option label="Prizreni" value="Prizreni"></el-option>
            <el-option label="Prishtina" value="Prishtina"></el-option>
            <el-option label="Peja" value="Peja"></el-option>
            <el-option label="Gjilan" value="Gjilan"></el-option>
            <el-option label="Gjakova" value="Gjakova"></el-option>
            <el-option label="Ferizaj" value="Ferizaj"></el-option>
            <el-option label="Mitrovica" value="Mitrovica"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="saveData('form')">Confirm</el-button>
      </span>
    </el-dialog>
    <el-table
      :data="filteredData"
      border
      style="width: 100%"
      empty-text="No data available"
    >
      <el-table-column prop="index" label="Index" width="180">
      </el-table-column>
      <el-table-column prop="name">
        <template slot="header">
          <div class="nameBasedSort">
            <span>Name</span>
            <img
              src="../assets/up-and-down-arrow.png"
              @click="nameBasedSort"
              class="nameBasedSortIcon"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="DoB">
        <template slot="header">
          <div class="DoBBasedSort">
            <span>DoB</span>
            <img
              src="../assets/up-and-down-arrow.png"
              @click="DoBBasedSort"
              style="width: 10px; cursor: pointer"
              class="DoBBasedSort"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="muncipality">
        <template slot="header">
          <div>
            <span>Muncipality</span>
            <img
              src="../assets/up-and-down-arrow.png"
              @click="muncipalityBasedSort"
              style="width: 10px; cursor: pointer"
            />
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
      name: "",
      DoB: "",
      muncipality: "",
      input: "",
      id: "",
      tableData: [
        {
          index: "1",
          name: "Zana Guda",
          DoB: "2002-01-28",
          muncipality: "Prishtina",
        },
        {
          index: "2",
          name: "Andi Ahmeti",
          DoB: "2002-11-01",
          muncipality: "Ferizaji",
        },
      ],
      form: {
        name: "",
        DoB: "",
        muncipality: "",
        muncipalityOptions: [
          "Prizreni",
          "Prishtina",
          "Peja",
          "Gjilan",
          "Gjakova",
          "Ferizaj",
          "Mitrovica",
        ],
      },
      dialogFormVisible: false,
      formRules: {
        name: [
          { required: true, message: "Please enter the name", trigger: "blur" },
        ],
        DoB: [
          { required: true, message: "Please enter the DoB", trigger: "blur" },
        ],
        muncipality: [
          {
            required: true,
            message: "Please enter the muncipality",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    filteredData() {
      if (!this.input) {
        return this.tableData;
      }
      const searchString = this.input.toLowerCase();
      return this.tableData.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchString) ||
          item.muncipality.toLowerCase().includes(searchString) ||
          item.index.includes(searchString)
        );
      });
    },
  },
  methods: {
    saveData() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const data = {
            index: (this.tableData.length + 1).toString(),
            name: this.form.name,
            DoB: this.form.DoB,
            muncipality: this.form.muncipality,
          };
          this.tableData.push(data);
          this.dialogFormVisible = false;
        }
      });
    },
    nameBasedSort() {
      if (this.isAscending) {
        this.tableData.sort((a, b) => b.name.localeCompare(a.name));
      } else {
        this.tableData.sort((a, b) => a.name.localeCompare(b.name));
      }
      this.isAscending = !this.isAscending;
    },
    DoBBasedSort() {
      if (this.isAscending) {
        this.tableData.sort((a, b) => b.DoB.localeCompare(a.DoB));
      } else {
        this.tableData.sort((a, b) => a.DoB.localeCompare(b.DoB));
      }
      this.isAscending = !this.isAscending;
    },
    muncipalityBasedSort() {
      if (this.isAscending) {
        this.tableData.sort((a, b) =>
          b.muncipality.localeCompare(a.muncipality)
        );
      } else {
        this.tableData.sort((a, b) =>
          a.muncipality.localeCompare(b.muncipality)
        );
      }
      this.isAscending = !this.isAscending;
    },
  },
  components: { HeaderComponent, NavbarComponent },
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.search-input {
  width: 200px;
  margin-right: 10px;
}

.el-button {
  margin-left: 10px;
}
.register-button {
  background-color: #e6e6e6;
  padding: 5px 15px;
  font-size: 14px;
  color: #000;
  border: 1px solid black;
}
.register-button:hover {
  color: black;
  background-color: #d4d4d4;
}
.muncipality {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.el-input .search-input {
  border-radius: 20px;
}
.nameBasedSort {
  display: flex;
  gap: 290px;
}
.nameBasedSortIcon {
  width: 10px;
  cursor: pointer;
  height: 15px;
}
</style>
