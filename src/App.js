import { Navbar } from './components';
import { Box } from '@mui/material';
import { Home, BeOurPartner } from './pages';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/fund-your-wallet',
      element: <Home/>
    },
    {
      path: '/community',
      element: <Home/>
    },
    {
      path: '/careers',
      element: <Home/>
    },
    {
      path: '/be-our-partner',
      element: <BeOurPartner/>
    },
    {
      path: '/contact-us',
      element: <Home/>
    },
    {
      path: '/faqs',
      element: <Home/>
    },
  ])
  return (
    <Box>
      <Navbar/>
      <RouterProvider router={router}/>
    </Box>
  );
}

// https:d21teejgxf2f3b.cloudfront.net/pyolo-cms/img/loginbg.jpg

export default App;
