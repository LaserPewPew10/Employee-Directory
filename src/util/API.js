import axios from "axios";
// exporting api to the app function for grabbing employees
export default {
  getEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=50");
  },
};
