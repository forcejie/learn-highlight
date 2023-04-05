import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// # --- 文件src/main.ts | src/main.js
// # highlight 的样式，依赖包，组件
import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

import router from "./router";

const app = createApp(App);

// 引入代码高亮，并进行全局注册
app.use(hljsVuePlugin);
app.use(router);
app.mount("#app");
