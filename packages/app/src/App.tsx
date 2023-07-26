import { createContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Folder } from "../types";
import { useArticles } from "./hooks/useArticles";
import ArticleViewer from "./routes/ArticleViewer";
import Home from "./routes/Home";
import NavbarWrapper from "./routes/NavbarWrapper";
import Subjects from "./routes/Subjects/Subjects";

export const AppContext = createContext<{ articles: Folder[] | null }>({
  articles: []
});

const App = () => {
  const { articles } = useArticles();
  const context = { articles };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/subjects",
          element: <Subjects />
        },
        {
          path: "/articles/:folder/:title",
          element: <ArticleViewer />
        }
      ]
    }
  ]);

  return (
    <>
      <AppContext.Provider value={context}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </>
  );
};

export default App;
