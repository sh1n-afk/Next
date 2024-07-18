// pages/index.js
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import ChatbotComponent from '../components/Chatbot';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header title="Poornank Purohit" subtitle="Software Engineer" />
      <About />
      <Skills />
      <ChatbotComponent />
      <Footer />
    </div>
  );
}
