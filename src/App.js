import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import SubNexonGames from './pages/SubNexonGames';
import SubNews from './pages/SubNewsaaa';
import JoinPage from './pages/member/JoinPage';
import Login from './pages/member/Login';
import FindId from './pages/member/FindId';
import FindPassword from './pages/member/FindPassword';
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
        <Route path='/FindId' element={<FindId/>}/>
        <Route path='/FindPass' element={<FindPassword/>}/>
        <Route path="/writenews" element={<WriteNews/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;