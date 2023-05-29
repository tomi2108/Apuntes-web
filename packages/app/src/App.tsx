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
  const router = articles
    ? createBrowserRouter([
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
              element: (
                <Subjects
                  folders={
                    articles.map((a) => ({
                      folder: a.folder,
                      icon: a.icon
                    })) ?? []
                  }
                />
              )
            },
            {
              path: "/articles/:folder/:title",
              element: <ArticleViewer />
            }
          ]
        }
      ])
    : null;

  return (
    <>
      {router ? (
        <AppContext.Provider value={context}>
          <RouterProvider router={router} />
        </AppContext.Provider>
      ) : null}
    </>
  );
};

export default App;
