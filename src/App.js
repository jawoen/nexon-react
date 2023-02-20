import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import SubNexonGames from './pages/SubNexonGames';
import SubNews from './pages/SubNewsaaa';
import JoinPage from './pages/member/JoinPage';
import Login from './pages/member/Login';
import Findid from './pages/member/Findid';
import Findpassword from './pages/member/Findpassword';
import WriteNews from './pages/WriteNews';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/subnexongames' element={<SubNexonGames/>}/>
        <Route path='/subnews' element={<SubNews/>}/>
        <Route path='/media' element={<SubNews/>}/>
        <Route path="/join" element={<JoinPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/Findid' element={<Findid/>}/>
        <Route path='/Findpass' element={<Findpassword/>}/>
        <Route path="/writenews" element={<WriteNews/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;