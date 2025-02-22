import AnimationTitle from "./components/FadeInTitle";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <AnimationTitle title="h1" direction="left"/>
      <AnimationTitle title="title" direction="left" delay={2}/>
    </div>
  )
}

export default App
