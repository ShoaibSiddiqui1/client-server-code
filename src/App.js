import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  HomePageContainer,
  AllCampusesContainer,
  CampusContainer,
  AllStudentsContainer,
  StudentContainer,
  NewStudentContainer,
  NewCampusContainer,
  EditStudentContainer,
  EditCampusContainer,
} from "./components/containers";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/campuses" component={AllCampusesContainer} />
      <Route exact path="/campus/:id" component={CampusContainer} />
      <Route exact path="/students" component={AllStudentsContainer} />
      <Route exact path="/student/:id" component={StudentContainer} />
      <Route exact path="/newstudent" component={NewStudentContainer} />
      <Route exact path="/newcampus" component={NewCampusContainer} />
      <Route exact path="/student/:id/edit" component={EditStudentContainer} />
      <Route exact path="/campus/:id/edit" component={EditCampusContainer} />
    </Switch>
  );
};

export default App;
