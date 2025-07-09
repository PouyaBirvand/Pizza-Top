import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from './providers/ThemeProvider';
import router from './routes';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
