import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Header from './components/ui/layouts/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/ui/layouts/Layout'
import Dashboard from './pages/dashboard/Dashboard'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Projects from './pages/projects/Projects'
import Analytics from './pages/analytics/Analytics'
import Settings from './pages/settings/Settings'
import Teams from './pages/teams/Teams'

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={< Projects />} />
              <Route path='/projects' element={<Dashboard />} />
              <Route path='/team' element={<Teams />} />
              <Route path='/analytics' element={<Analytics />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </Layout>
        </Router>
      </Provider>
    </>
  )
}

export default App
