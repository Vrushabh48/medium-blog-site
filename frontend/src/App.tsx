import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Createblog } from './pages/Createblog'
import { Blogs } from './pages/Blogs'
import { Blog } from './pages/Blog'
import { Landingpage } from './pages/Landing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<Createblog />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App