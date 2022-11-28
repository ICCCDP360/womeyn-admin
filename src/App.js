import IndexRouters from "./router";

//Scss
import "shepherd.js/dist/css/shepherd.css";
import "flatpickr/dist/flatpickr.css";
import "choices.js/public/assets/styles/choices.min.css";
import "./assets/scss/hope-ui.scss";
import "./assets/scss/pro.scss";
import "./assets/scss/custom.scss";
import "./assets/scss/dark.scss";
import "./assets/scss/rtl.scss";
import "./assets/scss/customizer.scss";
import "./assets/modules/chat/scss/chat.scss";
import "./assets/custom/scss/custom.scss";
import "swiper/css";
import "swiper/css/navigation";
import "./assets/modules/e-commerce/scss/e-commerce.scss";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <IndexRouters />
    </div>
  );
}

export default App;
