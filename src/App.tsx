import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import { MainLayout } from './main-layout'
import { LeaveLayout } from './menu-layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/dashboard/"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        ></Route>
        <Route
          path="/leave/"
          element={
            <MainLayout>
              <LeaveLayout>
                <Login />
              </LeaveLayout>
            </MainLayout>
          }
        ></Route>
      </Routes>
    </>
  )
}

export default App
