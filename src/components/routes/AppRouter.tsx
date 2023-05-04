import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Components
import { Home, Error404 } from '@pages'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page-error" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/page-error" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
