import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Header from './components/ui/layouts/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/ui/layouts/Layout'
import Dashboard from './pages/Dashboard'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='w-screen p-2 flex justify-end'> */}
      {/* <Button className="">Click Here</Button> */}
      {/* <Header/> */}
      {/* </div> */}
      <Provider store={store}>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Dashboard />} />
            </Routes>
          </Layout>
        </Router>
      </Provider>
    </>
  )
}

export default App
