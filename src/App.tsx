import AnimationTitle from "./components/FadeInTitle";
import FadeInArticle from "./components/FaildInArticle";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <AnimationTitle title="h1" direction="left"/>
      <AnimationTitle title="title" direction="left" delay={2}/>
      <FadeInArticle>FadeInArticle Test</FadeInArticle>
    </div>
  )
}

export default App
