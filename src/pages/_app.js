import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/globals.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function MyApp({ Component, pageProps }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </DndProvider>
  );
}

export default MyApp;
