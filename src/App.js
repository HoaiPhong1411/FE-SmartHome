import './App.css';
import ClientLayout from './Layout/ClientLayout';
import { ClientRoutes } from './Router/Router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const renderLayout = ( routes) => {
      return (
        routes?.map((route) => {
          const { path, element, index } = route;
          return (
            <Route key={index} element={element} path={path} index={index} />
          )
        })
      )
    }
  
  return (
    <>
    <Router >
      <Routes> 
        <Route path='/' element={<ClientLayout/>}>
          {renderLayout(ClientRoutes)}
        </Route>
        <Route path='*' element={<img src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" className='w-[100vw] h-[100vh]' />}/>
      </Routes>  
    </Router>
    </>
  )
}

export default App;
