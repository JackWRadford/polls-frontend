import { Link } from "react-router-dom";
import { useDeletePoll } from "../../hooks/useDeletePoll";
import { Poll } from "../../types/pollTypes";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import styles from "./pollListItem.module.css";

interface PollListItemProps {
  poll: Poll;
  onDelete: (pollId: string) => void;
}

const PollListItem = ({ poll, onDelete }: PollListItemProps) => {
  const { isLoading, deletePoll } = useDeletePoll();
  const { title, _id: pollId } = poll;

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // Stop the poll Link from being 'clicked'.
    event.preventDefault();
    event.stopPropagation();

    const pollWasDeleted = await deletePoll(pollId);
    if (pollWasDeleted) {
      // Remove the poll from the current polls list.
      onDelete(pollId);
    }
  };

  return (
    <li>
      <Link to={`/${pollId}`}>
        <Card className={styles.container}>
          <p className={styles.title}>{title}</p>
          <Button
            onClick={handleDelete}
            label="Delete"
            level="secondary"
            isLoading={isLoading}
          />
        </Card>
      </Link>
    </li>
  );
};

export default PollListItem;
