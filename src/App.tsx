import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <div className="h-32" />
      <Hero />
      <div className="h-32" />
      <Testimonials />
    </>
  );
}

export default App;
