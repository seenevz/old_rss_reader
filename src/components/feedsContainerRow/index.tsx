import { h } from "preact";
import { FeedType } from "../feedsContainer";

type FeedsContainerRowProps = {
    feed: FeedType;
};

export default function FeedsContainerRow({
    feed: { url }
}: FeedsContainerRowProps) {
    return <article class="media">{url}</article>;
}
