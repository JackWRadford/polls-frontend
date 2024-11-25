import Button from "../../components/common/button/Button";
import CardLoadingIndicator from "../../components/common/card-loading-indicator/CardLoadingIndicator";
import Card from "../../components/common/card/Card";
import PollListItem from "../../components/poll-list-item/PollListItem";
import { useMyPolls } from "../../hooks/useMyPolls";
import styles from "./myPollsPage.module.css";

const MyPollsPage = () => {
  const {
    polls,
    isLoading,
    thereAreMorePolls,
    loadMorePolls,
    removeDeletedPoll,
  } = useMyPolls();

  return (
    <div className={styles.container}>
      <h1>My Polls</h1>
      <ul className={styles.pollsList}>
        {polls.map((poll, index) => (
          <PollListItem key={index} poll={poll} onDelete={removeDeletedPoll} />
        ))}
      </ul>
      {thereAreMorePolls && (
        <Button
          onClick={loadMorePolls}
          label="Load More Polls"
          className={styles.loadMoreButton}
          isLoading={isLoading}
        />
      )}
      {isLoading && !polls && <CardLoadingIndicator />}
      {!isLoading && polls.length < 1 && (
        <Card>
          <p>No Polls Found</p>
        </Card>
      )}
    </div>
  );
};

export default MyPollsPage;
