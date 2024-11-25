import { useParams } from "react-router-dom";
import PollResultsCard from "../../components/poll-results-card/PollResultsCard";
import styles from "./pollResultsPage.module.css";
import ShareCard from "../../components/share-card/ShareCard";
import { useMemo } from "react";
import CardLoadingIndicator from "../../components/common/card-loading-indicator/CardLoadingIndicator";
import Card from "../../components/common/card/Card";
import { Helmet } from "react-helmet";
import { usePollResults } from "../../hooks/usePollResults";

const PollResultsPage = () => {
  const { id: pollId } = useParams();
  const { pollResults, isLoading } = usePollResults(pollId);

  const documentTitle = useMemo(
    () =>
      `${
        pollResults?.poll?.title ?? "Poll Results Not Found"
      } - Results - Poll Maker`,
    [pollResults?.poll?.title],
  );

  return (
    <div className={styles.container}>
      <Helmet>
        <title>{documentTitle}</title>
      </Helmet>
      {isLoading && <CardLoadingIndicator />}
      {!isLoading && pollResults && pollResults.poll && (
        <>
          <PollResultsCard pollResults={pollResults} />
          <ShareCard label={"Share these results with this URL!"} />
        </>
      )}
      {!isLoading && !pollResults?.poll && (
        <Card>
          <p>Poll Results Not Found</p>
        </Card>
      )}
    </div>
  );
};

export default PollResultsPage;
