import { MutationTree } from "vuex";
import { Person, PersonsState } from "../types/state";

export const state: () => PersonsState = () => ({
  persons: [
    { firstName: "Jill", lastName: "Smith" },
    { firstName: "Eve", lastName: "Jackson" }
  ]
});

export const mutations: MutationTree<PersonsState> = {
  add(state, person: Person) {
    state.persons.push(person);
  },
  remove(state, index) {
    state.persons.splice(index, 1);
  }
};
