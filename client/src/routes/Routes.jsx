import React from "react";
import {Switch,Route} from "react-router-dom"
import { MainPage } from "../components/MainPage";
import { PostAJob } from "../components/PostAJob";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/post">
          <PostAJob/>
        </Route>
      </Switch>
    </>
  );
}
