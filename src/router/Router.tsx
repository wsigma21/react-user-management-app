import { FC, memo, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/template/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<HeaderLayout />}>
      {homeRoutes.map((route: {
        name: string, 
        path?: string, 
        index: boolean, 
        children: ReactNode 
      }) => (      
          <Route
            key={route.name}
            index={route.index}
            path={route.path}
            element={route.children}
          />
      ))}
      </Route>
      <Route path="*" element={<Page404 />}/>
    </Routes>
  )
});