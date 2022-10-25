import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import StickyNotes from "./screens/StickyNotes/StickyNotes";
import MyDiary from "./screens/MyDiary/MyDiary";
import ToDoList from "./screens/ToDoList/ToDoList"


const App = () => (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/stickynotes" component={StickyNotes} />
          <Route path="/mydiary" component={MyDiary} />
          <Route path="/todolist" component={ToDoList} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
);

export default App;
