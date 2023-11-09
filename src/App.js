import { Banner } from "./components/Banner";
import { WordCounter } from "./components/WordCounter";

// import { PracticeComponent } from "./components/PracticeComponent";

export const App = () => {
  return (
    <div
      className="container text-center border border-1 border-black p-5 img-fluid"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1685480274296-1bbccf9e2396?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OTl8fHxlbnwwfHx8fHw%3D")',
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 128, .5)",
      }}
    >
      <Banner title="Word Counter" subTitle="Paste or type your text here:" />
      <WordCounter />
    </div>
  );
};
