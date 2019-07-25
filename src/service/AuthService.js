import basicService from "./BasicService";
import store from "../store/store";
class authService {
  static async login(username, password) {
    const rspData = await basicService.postRequest("/user/login", {
      username: username,
      password: password
    });
    if (rspData.data) {
      var userInfo = rspData.data.user;
      store.dispatch("user/login", userInfo);
    }
    return rspData;
  }
}
export default authService;
