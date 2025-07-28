import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, Layout, Dashboard, WriteArticle, BlogTitles, GenerateImages, RemoveBackground, RemoveObject, ReviewResume, Community} from './pages/index';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='write-article' element={<WriteArticle />} />
            <Route path='blog-titles' element={<BlogTitles />} />
            <Route path='generate-images' element={<GenerateImages />} />
            <Route path='remove-background' element={<RemoveBackground />} />
            <Route path='remove-object' element={<RemoveObject />} />
            <Route path='review-resume' element={<ReviewResume />} />
            <Route path='community' element={<Community />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App