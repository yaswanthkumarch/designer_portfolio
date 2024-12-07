import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import './App.css'
import Landing from './pages/Landing.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Menu from './components/Menu.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import Contact from './pages/Contact.jsx'
import Blogs from './pages/Blogs.jsx'
import AdminPage from './adminPage/Home.jsx'
import ProjectsPage from './adminPage/Projects.jsx'
import BlogsPage from './adminPage/Blogs.jsx'

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPage && <Menu/>}
      {!isAdminPage && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/projects" element={<ProjectsPage/>}/>
        <Route path="/admin/blogs" element={<BlogsPage/>} />
      </Routes>
      {!isAdminPage && <Footer/>}
    </>
  )
}

export default App
