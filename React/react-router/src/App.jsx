import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Policy from "./components/Policy";
import Contact from "./components/Contact";
import Department from "./components/Department";
import Student from "./components/Student";
import ErrorPage from "./components/ErrorPage";
import Mangement from "./components/Mangement";
import UserDetails from "./components/UserDetails";
import UserDetailsInfo from "./components/UserDetailsInfo";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/" element={<UserDetails />} />
          <Route path="/users/:id" element={<UserDetailsInfo />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

        {/* Nested Routes */}
        <Route path="department" element={<Department />}>
          <Route index element={<Student />} />
          <Route path="student" element={<Student />} />
          <Route path="mangement" element={<Mangement />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
