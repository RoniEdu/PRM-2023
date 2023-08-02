import TopicCardHeader from "../TopicCardHeader"
import TopicCardBody from "../TopicCardBody"
import TopicCardActions from "../TopicCardActions";

function TopicCard() {
    return(
        <div id="topic-card">
            <TopicCardHeader/>
            <TopicCardBody/>
            <TopicCardActions/>
        </div>
    )
}

export default TopicCard;