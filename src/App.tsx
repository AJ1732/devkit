import { Navbar } from "./components";
import { HeadlineSection, InterestSection } from "./sections";

function App() {
  return (
    <div className="content-grid text-primary-500">
      <Navbar />
      <HeadlineSection />
      <InterestSection />
    </div>
  );
}

export default App;
