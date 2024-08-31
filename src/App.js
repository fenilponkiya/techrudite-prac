import Container from "@mui/material/Container";
import "./App.css";
import Aboutus from "./components/aboutUs";
import { ContactForm } from "./components/contactForm";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import Process from "./components/process";
import Service from "./components/service";
import { TestimonialAndBlog } from "./components/testimonialAndBlog";

function App() {
  return (
    <>
      <Hero />
      <Container>
        <Service />
      </Container>
      <Aboutus />
      <Container>
        <Process />
      </Container>
      <TestimonialAndBlog />
      <Container>
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
}

export default App;
