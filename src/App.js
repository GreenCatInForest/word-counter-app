import { Banner } from "./components/Banner";
import { WordCounter } from "./components/WordCounter";
// import { PracticeComponent } from "./components/PracticeComponent";

export const App = () => {
  return (
    <div className="container text-center border border-1 border-black p-5">
      <Banner title="Word Counter" subTitle="Paste or type your text here" />
      <WordCounter />
      {/* <PracticeComponent /> */}
    </div>
  );
};
