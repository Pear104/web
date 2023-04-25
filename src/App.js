import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import styles from './App.module.scss'
import classNames from 'classnames/bind';
import { publicRoutes } from './components/routes';

const cx = classNames.bind(styles)

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className={cx('content-container')}>
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
