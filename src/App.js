import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";
import News from "./News";
import { Stack } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
function App() {
  const pageSize = 12;
  return (
    <div>
      <Stack bgcolor={"#778899"}>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home country={"in"} category="general" />}
            />
            <Route
              exact
              path="/general"
              key={"general"}
              element={
                <News
                  key={"general"}
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key={"science"}
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key={"entertainment"}
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/travel"
              element={
                <News
                  key={"travel"}
                  pageSize={pageSize}
                  country="in"
                  category="travel"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  key={"business"}
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key={"health"}
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key={"sports"}
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key={"technology"}
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
          <Footer />
        </Router>
      </Stack>
    </div>
  );
}

export default App;
