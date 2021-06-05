<template>
  <div>
    <div class="table-container">
      <table style="width:100%">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Action</th>
        </tr>
        <tr v-for="(person, index) in persons" :key="index">
          <td>{{ person.firstName }}</td>
          <td>{{ person.lastName }}</td>
          <td><el-button @click="remove(index)">Remove</el-button></td>
        </tr>
      </table>
    </div>
    <div class="input-container">
      <el-input
        v-model="formValue.firstName"
        placeholder="Firstname"
      ></el-input>
      <el-input v-model="formValue.lastName" placeholder="Lastname"></el-input>
      <el-button
        @click="add"
        :disabled="!formValue.firstName || !formValue.lastName"
        >Add</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "index"
})
export default class Index extends Vue {
  formValue = {
    firstName: "",
    lastName: ""
  };

  get persons() {
    return this.$store.state.persons;
  }

  clearForm() {
    this.formValue.firstName = "";
    this.formValue.lastName = "";
  }

  add() {
    this.$store.commit("add", { ...this.formValue });
    this.clearForm();
  }

  remove(index: number) {
    this.$store.commit("remove", index);
  }
}
</script>

<style scoped>
.table-container {
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.input-container {
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}

.el-input {
  margin-right: 2rem;
}

table,
th,
td {
  border: 1px solid black;
  padding: 15px;
}
</style>
