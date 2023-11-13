import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const parseInRelativeTime = (timestamp: number) => {
  return dayjs.unix(timestamp).fromNow();
};
