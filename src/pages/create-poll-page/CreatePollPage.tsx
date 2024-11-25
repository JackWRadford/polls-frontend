import { Helmet } from "react-helmet";
import TitleSubtitle from "../../components/common/title-subtitle/TitleSubtitle";
import CreatePollCard from "../../components/create-poll-card/CreatePollCard";
import styles from "./createPollPage.module.css";

const CreatePollPage = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Poll Maker - Create Poll</title>
      </Helmet>
      <TitleSubtitle
        title="Create a poll now!"
        subtitle="Design engaging questions and collect valuable insights"
        titleElementType="h1"
        className={styles.title}
      />
      <CreatePollCard />
    </div>
  );
};

export default CreatePollPage;
