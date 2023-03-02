import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import SubNexonGames from './pages/SubNexonGames';
import SubNews from './pages/SubNews';
import JoinPage from './pages/member/JoinPage';
import Login from './pages/member/Login';
import FindId from './pages/member/FindId';
import FindPassword from './pages/member/FindPassword';
import WriteNews from './pages/WriteNews';
import NewsContainer from './containers/NewsContainer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/subnexongames' element={<SubNexonGames/>}/>
        <Route path='/subnews' element={<SubNews/>}/>
        <Route path="/news" 
        element={<NewsContainer isMain={false} limits={10}/>}/>
        <Route path='/media' element={<SubNews/>}/>
        <Route path="/join" element={<JoinPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/Findid' element={<FindId/>}/>
        <Route path='/Findpass' element={<FindPassword/>}/>
        <Route path="/writenews" element={<WriteNews/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;