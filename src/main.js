import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

/* Register Component Globally */
import MyComponent1 from "./components/MyComponent1.vue";
import MyComponent2 from "./components/MyComponent2.vue";
import MyComponent3 from "./components/MyComponent3.vue";
import MyComponent4 from "./components/MyComponent4.vue";
import MyComponent5 from "./components/MyComponent5.vue";
import MyComponent6 from "./components/MyComponent6.vue";
import MyComponent7 from "./components/MyComponent7.vue";
import MyComponent8 from "./components/MyComponent8.vue";
import MyComponent9 from "./components/MyComponent9.vue";
import MyComponent10 from "./components/MyComponent10.vue";
import MyComponent11 from "./components/MyComponent11.vue";
import MyComponent12 from "./components/MyComponent12.vue";
import MyComponent13 from "./components/MyComponent13.vue";
import MyComponent14 from "./components/MyComponent14.vue";
import MyComponent15 from "./components/MyComponent15.vue";
import MyComponent16 from "./components/MyComponent16.vue";
import MyComponent17 from "./components/MyComponent17.vue";
import MyComponent18 from "./components/MyComponent18.vue";

app.component("MyComponent1", MyComponent1);
app.component("MyComponent2", MyComponent2);
app.component("MyComponent3", MyComponent3);
app.component("MyComponent4", MyComponent4);
app.component("MyComponent5", MyComponent5);
app.component("MyComponent6", MyComponent6);
app.component("MyComponent7", MyComponent7);
app.component("MyComponent8", MyComponent8);
app.component("MyComponent9", MyComponent9);
app.component("MyComponent10", MyComponent10);
app.component("MyComponent11", MyComponent11);
app.component("MyComponent12", MyComponent12);
app.component("MyComponent13", MyComponent13);
app.component("MyComponent14", MyComponent14);
app.component("MyComponent15", MyComponent15);
app.component("MyComponent16", MyComponent16);
app.component("MyComponent17", MyComponent17);
app.component("MyComponent18", MyComponent18);
app.mount("#app");

/* With this we can mount in multiple div */
/* check index.html file with div id app2 */
// import App2 from "./components/App2.vue";
// const app2 = createApp(App2);
// // app2.component("XyzComponent", XyzComponent);
// app2.mount("#app2");
