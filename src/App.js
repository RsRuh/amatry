import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element: <Main></Main>,
      children:[
        {
          path:'/',
          loader: async()=>{
            return fetch('text.json')
          }, 
          element: <Shop></Shop>
        },
        {
          path:'/orders', element: <Orders></Orders>
        },
        {
          path:'/inventory', element: <Inventory></Inventory>
        },
        {
          path:'/about', element: <About></About>
        }
      ]
    },
    {
      path:'*', element: <div className='text-5xl font-bold'>BokaChuda</div>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
