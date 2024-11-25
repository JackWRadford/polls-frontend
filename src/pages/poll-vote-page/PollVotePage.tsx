import { useMemo } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import CardLoadingIndicator from "../../components/common/card-loading-indicator/CardLoadingIndicator";
import Card from "../../components/common/card/Card";
import PollVoteCard from "../../components/poll-vote-card/PollVoteCard";
import ShareCard from "../../components/share-card/ShareCard";
import { usePoll } from "../../hooks/usePoll";
import styles from "./pollVotePage.module.css";

const PollVotePage = () => {
  const { id } = useParams();
  const { poll, isLoading } = usePoll(id);

  const documentTitle = useMemo(
    () => `${poll?.title ?? "Poll Not Found"} - Vote - Poll Maker`,
    [poll?.title],
  );

  return (
    <div className={styles.container}>
      <Helmet>
        <title>{documentTitle}</title>
      </Helmet>
      {!isLoading && poll && (
        <>
          <PollVoteCard poll={poll} />
          <ShareCard label={"Share the poll with this URL!"} />
        </>
      )}
      {isLoading && <CardLoadingIndicator />}
      {!isLoading && !poll && (
        <Card>
          <p>Poll Not Found</p>
        </Card>
      )}
    </div>
  );
};

export default PollVotePage;
