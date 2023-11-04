import Info from "./components/info/info"
import About from "./components/about/about"
import Interest from "./components/interest/interest"
import Footer from "./components/footer/footer"

export default function App() {
  return (
    <main className="card-container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </main>
  )
}