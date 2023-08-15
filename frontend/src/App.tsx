import { Divider } from "@mui/material"
import TopicCard from "./components/TopicCard"
import TopicCardSkeleton from "./components/TopicCardSkeleton"
import HeaderProfile from "./components/HeaderProfile"

function App() {

  return (
    <div id="App">
      <HeaderProfile />
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