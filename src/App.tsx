import AnimationTitle from './components/FadeInTitle';
import FadeInArticle from './components/FaildInArticle';

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <AnimationTitle title="h1" direction="left" />
        <AnimationTitle title="title" direction="left" delay={2} />
        <FadeInArticle>FadeInArticle Test</FadeInArticle>
      </div>
    </div>
  );
}

export default App;
