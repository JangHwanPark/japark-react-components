import AnimationTitle from "./components/FadeInTitle";
import FadeInArticle from "./components/FaildInArticle";
import Timeline from "./components/Timeline";
import {dummyTimelineItems} from "./components/Timeline/timeline.data";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <AnimationTitle title="h1" direction="left"/>
        <AnimationTitle title="title" direction="left" delay={2}/>
        <FadeInArticle>FadeInArticle Test</FadeInArticle>
        <Timeline items={dummyTimelineItems}/>
      </div>
    </div>
  )
}

export default App
