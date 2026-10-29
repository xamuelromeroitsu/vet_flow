import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { CookiePolicyPage } from './features/legal/pages/CookiePolicyPage'
import { PrivacyPolicyPage } from './features/legal/pages/PrivacyPolicyPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
        <Route path="/politica-de-cookies" element={<CookiePolicyPage />} />
      </Routes>
    </BrowserRouter>
  )
}
