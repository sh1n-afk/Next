// pages/resume.js
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Resume() {
  return (
    <div>
      <Navbar />
      <Header title="Resume" subtitle="My professional experience and skills" />
      <section className="container mx-auto my-20">
        <iframe
          src="/Resume.pdf"
          className="w-full h-screen"
          title="Resume"
        />
      </section>
      <Footer />
    </div>
  );
}
