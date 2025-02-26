import { Provider } from "react-redux";
import "./App.css";
import CryptoOverwiewPage from "./pages/CryptoOverviewPage";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <CryptoOverwiewPage />
    </Provider>
  );
}

export default App;
