import { Navbar } from "./components";
import {
  CardSection,
  HeadlineSection,
  InterestSection,
} from "./sections";

function App() {
  return (
    <div className="content-grid text-primary-500">
      <Navbar />
      <HeadlineSection />
      <InterestSection />
      <CardSection />
    </div>
  );
}

export default App;
