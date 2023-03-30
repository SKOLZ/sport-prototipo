import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home'
import { News } from './pages/news'
import { Calendar } from './pages/calendar'
import { Ranking } from './pages/ranking'
import { Photos } from './pages/photos'
import { History } from './pages/history';
import { Videos } from './pages/videos';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import styles from './styles.module.scss';

export const App: React.FC = () => {
  return (
    <main className={`${styles.main} column`}>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="news" element={<News />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="photos" element={<Photos />} />
          <Route path="videos" element={<Videos />} />
        </Routes>
      <Footer />
    </main>
  )
}
