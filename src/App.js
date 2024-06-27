import "./index.css";

import Body from "./components/Body";

import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.

  //res.cloudinary.com
  // docs/models/image/upload/v1719497967/docs/models.png
  // Resize to 250 x 250 pixels using the 'fill' crop mode.

  // …/image/upload/v1719494401/ybmevm6swleiafwz3a8b.png
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
