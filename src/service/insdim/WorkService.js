import basicSerivce from "../BasicService";
import store from "../../store/store";
import message from "../../utils/Message";

class workService {
  static async createWork(workDetail) {
    const rsp = await basicSerivce.postRequest("/inslens/work", workDetail);

    return rsp;
  }

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

  static async updateWork(workDetail) {
    const rsp = await basicSerivce.putRequest("/inslens/work", workDetail);
    return rsp;
  }

  static async uploadPic(file) {
    const rsp = await basicSerivce.postRequest("/inslens/work/pic", file);
    return rsp;
  }

  static async deletePic(picInfo, workId, type) {
    const rsp = await basicSerivce.deleteRequest("/inslens/work/pic", {
      picInfo: picInfo,
      workId: workId,
      type: type
    });
    return rsp;
  }

  static async deleteWork(workId) {
    const rsp = await basicSerivce.deleteRequest("/inslens/work", {
      workId: workId
    });
    return rsp;
  }
}
export default workService;
