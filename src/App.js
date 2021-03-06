import logo from './logo.svg';
import './App.css';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News} from './components'
import { Layout, Typography, Space } from 'antd'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="app">
        <nav className="navbar">
          <Navbar></Navbar>
        </nav>
      <div className="main">
          <Layout>
            <div className='routes'>
              <Routes>
                <Route exact path="/cryptoapp" element={<Homepage/>}/>
                {/* <Route exact path="/exchanges">
                  <Exchanges/>
                </Route> */}
                <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>} />
                <Route exact path="/crypto/:coinId"  element={<CryptoDetails/>}/>
                <Route exact path="/news" element={<News/>}/>
              </Routes>
            </div>
          </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
          CryptoVerse <br/>
          All rights reserved.
        </Typography.Title>
        <Space>
          <Link to="/cryptoapp">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
