import styled from "@emotion/styled";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Drive />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div``;
