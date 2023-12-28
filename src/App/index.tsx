import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { News } from './pages/News'
import { Calendar } from './pages/Calendar'
import { Ranking } from './pages/Ranking'
import { Photos } from './pages/Photos'
import { History } from './pages/History';
import { Videos } from './pages/Videos';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PostDetail } from './pages/PostDetail';
import styles from './styles.module.scss';
import { Champions } from './pages/Champions';

export const App: React.FC = () => {
  return (
    <main className={`${styles.main} column`}>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="news" element={<News />} />
          <Route path="news/post" element={<PostDetail />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="champions" element={<Champions />} />
          <Route path="photos" element={<Photos />} />
          <Route path="videos" element={<Videos />} />
        </Routes>
      <Footer />
    </main>
  )
}
