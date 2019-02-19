import basicSerivce from "../BasicService";
import store from "../../store/store";

class workService {
  static async getWorkList() {
    const rsp = await basicSerivce.getRequest("/inslens/work", { key: "year" });
    store.dispatch("work/getWorkList", rsp.data.workList);
    return rsp;
  }

  static async getWorkDetail(workId) {
    const rsp = await basicSerivce.getRequest("/inslens/work", {
      workId: workId
    });
    return rsp;
  }
}
export default workService;
