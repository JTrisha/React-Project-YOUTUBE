import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import React from "react";
const appRouter=createBrowserRouter([{
  path:"/",
element:<Body/>,
children:[
{
  path:"/",
  element:<MainContainer/>
},{
  path:"watch",
  element:<WatchPage/>
},
],
},])


function App() {
  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
