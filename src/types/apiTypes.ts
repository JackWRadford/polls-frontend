import { Poll } from "./pollTypes";

export type PollResultResponse = {
  poll: Poll;
  pollResultsData: {
    optionTitle: string;
    count: number;
    percentage: number;
  }[];
  totalVoteCount: number;
};

export type ExamplePollsResponse = {
  polls: Poll[];
  thereAreMorePolls: boolean;
};

export type MyPollsResponse = {
  polls: Poll[];
  thereAreMorePolls: boolean;
};

export type User = {
  email: string;
  username: string;
};
