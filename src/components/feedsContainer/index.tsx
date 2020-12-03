import { h } from "preact";
import FeedsContainerRow from "../feedsContainerRow";

export type FeedType = { url: string };

type FeedsContainerProps = {
    feeds: FeedType[];
};

export default function FeedsContainer({ feeds }: FeedsContainerProps) {
    return (
        <section>
            {feeds.map(feed => (
                <FeedsContainerRow key={Math.random()} feed={feed} />
            ))}
        </section>
    );
}
