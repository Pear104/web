import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import styles from './App.module.scss'
import classNames from 'classnames/bind';
import { publicRoutes } from './components/routes';
import Home from './components/pages/Home';

const cx = classNames.bind(styles)

function App() {
  return (
    <Router basename='/web'>
      <div className="App">
        <Header />
        <div className={cx('content-container')}>
          {/* <Home /> */}
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              return (<Route key={index} path={route.path} element={<Page />} />)
            })}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
