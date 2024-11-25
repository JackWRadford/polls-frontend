import { useExamplePolls } from "../../../hooks/useExamplePolls";
import CardLoadingIndicator from "../../common/card-loading-indicator/CardLoadingIndicator";
import Card from "../../common/card/Card";
import TitleSubtitle from "../../common/title-subtitle/TitleSubtitle";
import PollVoteCard from "../../poll-vote-card/PollVoteCard";
import styles from "./examplePolls.module.css";

const ExamplePolls = () => {
  const { polls, isLoading } = useExamplePolls();

  return (
    <div className={styles.container}>
      <TitleSubtitle
        title={"Example Polls"}
        subtitle={"Take a look at these example polls!"}
      />
      {!isLoading && polls && (
        <div className={styles.polls}>
          {polls?.map((poll) => (
            <div key={poll._id} className={styles.pollContainer}>
              <PollVoteCard poll={poll} />
            </div>
          ))}
        </div>
      )}
      {isLoading && <CardLoadingIndicator />}
      {!isLoading && !polls && (
        <Card>
          <p>No Example Polls Found</p>
        </Card>
      )}
    </div>
  );
};

export default ExamplePolls;
