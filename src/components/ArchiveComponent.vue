<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>
    <div class="search-register-container">
      <div class="search-container">
        <el-input
          placeholder="Search"
          v-model="input"
          class="search-input"
          prefix-icon="el-icon-search"
        ></el-input>
      </div>
      <div class="register-container">
        <el-button
          type="text"
          class="register-button"
          @click="dialogFormVisible = true"
        >
          Register New Student
        </el-button>
      </div>
    </div>
    <el-dialog title="Register new student" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="formRules" ref="form">
        <el-form-item label="Name" prop="name">
          <el-input placeholder="Name" v-model="form.name" />
        </el-form-item>
        <el-form-item label="DoB" prop="DoB">
          <el-input placeholder="DoB" v-model="form.DoB" type="date" />
        </el-form-item>
        <el-form-item label="Muncipality" prop="muncipality">
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
        <el-form-item label="Archive Date" prop="archiveDate">
          <el-input
            placeholder="Archive Date"
            v-model="form.archiveDate"
            type="date"
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="saveData('form')">Confirm</el-button>
      </span>
    </el-dialog>

    <el-table
      :data="tableData"
      border
      style="width: 100%"
      empty-text="No data available"
    >
      <el-table-column prop="index" label="Index" width="180"></el-table-column>
      <el-table-column prop="name">
        <template slot="header">
          <div class="name_sort">
            <span>Name</span>
            <img
              src="../assets/up-and-down-arrow.png"
              @click="nameBasedSort"
              class="sort-arrow-icon"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="DoB">
        <template slot="header">
          <div class="dob_sort">
            <span>DoB</span>
            <img
              src="../assets/up-and-down-arrow.png"
              @click="DoBBasedSort"
              class="sort-arrow-icon"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="muncipality">
        <template slot="header">
          <div class="muncipality_sort">
            <span>Muncipality</span>
            <img
              src="../assets/up-and-down-arrow.png"
              @click="muncipalityBasedSort"
              class="sort-arrow-icon"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="archiveDate">
        <template slot="header">
          <div class="archiveDate">
            <span>Archive Date</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Actions">
        <template>
          <el-button type="primary" size="mini">View</el-button>
          <el-button type="primary" size="mini">Restore</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      layout="prev, pager, next"
      :current-page.sync="currentPage"
      :page-size="3"
      :total="filteredData.length"
    >
    </el-pagination>
  </div>
</template>
<script>
import NavbarComponent from "./NavbarComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";

export default {
  name: "ArchiveComponent",
  data() {
    return {
      tableData: [
        {
          index: 1,
          name: "Arta Berisha",
          DoB: "2022-03-03",
          archiveDate: "2023-03-03",
          muncipality: "Prishtina",
        },
      ],
      isAscending: false,
      currentPage: 1,
      name: "",
      DoB: "",
      archiveDate: "",
      muncipality: "",
      input: "",
      id: "",
      form: {
        name: "",
        DoB: "",
        muncipality: "",
        archiveDate: "",
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      pageSize: 3,
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
    nowTableData() {
      return this.filteredData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },

  methods: {
    nameBasedSort() {
      if (this.isAscending) {
        this.nowTableData.sort((a, b) => b.name.localeCompare(a.name));
      } else {
        this.nowTableData.sort((a, b) => a.name.localeCompare(b.name));
      }
      this.isAscending = !this.isAscending;
    },
    DoBBasedSort() {
      if (this.isAscending) {
        this.nowTableData.sort((a, b) => b.DoB.localeCompare(a.DoB));
      } else {
        this.nowTableData.sort((a, b) => a.DoB.localeCompare(b.DoB));
      }
      this.isAscending = !this.isAscending;
    },
    muncipalityBasedSort() {
      if (this.isAscending) {
        this.nowTableData.sort((a, b) =>
          b.muncipality.localeCompare(a.muncipality)
        );
      } else {
        this.nowTableData.sort((a, b) =>
          a.muncipality.localeCompare(b.muncipality)
        );
      }
      this.isAscending = !this.isAscending;
    },

    saveData() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const data = {
            index: (this.tableData.length + 1).toString(),
            name: this.form.name,
            DoB: this.form.DoB,
            muncipality: this.form.muncipality,
            archiveDate: this.form.archiveDate,
          };
          this.tableData.push(data);
          this.dialogFormVisible = false;
        }
      });
    },
  },
  components: { HeaderComponent, NavbarComponent },
};
</script>
<style scoped>
/* .muncipality_sort {
  display: flex;
  gap: 238px;
}
.dob_sort {
  display: flex;
  gap: 284px;
}
.name_sort {
  display: flex;
  gap: 278px;
} */
.sort-arrow-icon {
  width: 12px;
  cursor: pointer;
}
.el-pagination {
  display: flex;
  justify-content: end;
}
.search-register-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.search-container {
  width: 480px;
  margin-right: 10px;
}

.register-container {
  flex: 0 0 auto;
}

.search-input {
  border-radius: 20px;
}

.register-button {
  background-color: #f2f2f2;
}
.el-button--text {
  color: black;
}
.el-input--prefix .el-input__inner {
  border-radius: 20px;
}
.el-input__inner::placeholder {
  color: black;
}
</style>

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
/* .nameBasedSort {
  display: flex;
  gap: 290px;
} */
.nameBasedSortIcon {
  width: 10px;
  cursor: pointer;
  height: 15px;
}
</style>
