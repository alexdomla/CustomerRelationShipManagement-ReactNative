import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import initializeStore from "./src/store";

const App = () => {
  const store = initializeStore();

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
