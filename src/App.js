import { Banner } from "./components/Banner";
import { WordCounter } from "./components/WordCounter";

export const App = () => {
  return (
    <div>
      <Banner title="Word Counter" subTitle="Paste or type your text here" />
      <WordCounter />
    </div>
  );
};
