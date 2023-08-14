import { Divider } from "@mui/material"
import TopicCard from "./components/TopicCard"
import TopicCardSkeleton from "./components/TopicCardSkeleton"

function App() {

  return (
    <div id="App">
      <TopicCard/>
      <Divider/>
      <TopicCard/>
      <Divider/>
      <TopicCard/>
      <Divider/>
      <TopicCard/>
      <TopicCardSkeleton/>
    </div>
    )
  }

export default App