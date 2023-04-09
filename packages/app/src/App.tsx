import { createContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Folder } from "../types";
import { useArticles } from "./hooks/useArticles";
import Articles from "./routes/Articles";
import Home from "./routes/Home";
import Subjects from "./routes/Subjects";

export const AppContext = createContext<{ articles: Folder[] | null }>({
  articles: []
});

const App = () => {
  const { articles } = useArticles();
  const context = { articles };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/subjects",
      element: <Subjects folders={articles?.map((a) => a.folder) ?? []} />
    },
    {
      path: "/subjects/:folder",
      element: <Articles />
    }
  ]);

  return (
    <>
      {articles ? (
        <AppContext.Provider value={context}>
          <RouterProvider router={router} />
        </AppContext.Provider>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
