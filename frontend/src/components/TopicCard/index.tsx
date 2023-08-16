import TopicCardHeader from "../TopicCardHeader"
import TopicCardBody from "../TopicCardBody"
import TopicCardActions from "../TopicCardActions";

type TopicCardProps = {
    topic: any
}

function TopicCard({
    topic
}: TopicCardProps) {
    return(
        <div id="topic-card">
            <TopicCardHeader/>
            <TopicCardBody/>
            <TopicCardActions/>
        </div>
    )
}

export default TopicCard;