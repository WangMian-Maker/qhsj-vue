import axios from 'axios';

const httpServer={};

httpServer.install = (Vue)=> {
  // 4. 添加实例方法
  Vue.prototype.$axios = axios;
};

export default httpServer;
