import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import Gallery from "./Gallery";
import { useGlobalContext } from "./Context";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";


const App = () => {

  const {toogleTrue} = useGlobalContext()

  const as = useQueryClient()
  as.getQueryData(['colectio'])

  return (
  <main className='main-wrapper-white' id="box">
    <ThemeToggle/>
    <SearchForm/>
    <Gallery/>
  </main>
  
);
};
export default App;
