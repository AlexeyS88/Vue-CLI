import { createApp, defineAsyncComponent } from "vue";
import App from "./App-async.vue";
import Theheader from "./components/Theheader.vue";
import "./theme.css";

const app = createApp(App);
// global
app.component("the-header", Theheader);
app.component(
	"async-component",
	defineAsyncComponent(() => {
		return import("./components/AppAsyncComponent.vue");
	})
);

app.mount("#app");
