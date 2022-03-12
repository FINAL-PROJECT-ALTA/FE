import Layout from '../components/layout'
import '../styles/globals.css'

import { compose, applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from '../store/reducers';

// redux main
const composeEnhancers = compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
