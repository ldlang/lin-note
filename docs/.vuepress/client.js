import { defineClientConfig } from "@vuepress/client";
import home from '../home/home.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('home',home)
  },
  setup() {},
  rootComponents: [],
});
