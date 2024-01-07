import store from "./store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./routes/rounter.tsx";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
