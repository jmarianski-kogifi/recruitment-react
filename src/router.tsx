import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Main = React.lazy(() => import("./pages/Main"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const Loading = (props: { children: any }) => {
  return <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>;
};

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route
        path="*"
        element={
          <Loading>
            <NotFound />
          </Loading>
        }
      />
    </Routes>
  );
};
