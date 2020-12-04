import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { FeedType } from "../feedsContainer";
import { getFeedXML, getDataFromXML, ParsedFeed } from "../../utils";

type FeedsContainerRowProps = {
    feed: FeedType;
};

export default function FeedsContainerRow({
    feed: { url }
}: FeedsContainerRowProps) {
    const [parsedFeed, setParsedFeed] = useState({} as ParsedFeed);
    const [expandList, setExpandList] = useState(false);

    useEffect(() => {
        (async (): Promise<void> => {
            const feedString = await getFeedXML(url);
            setParsedFeed(getDataFromXML(feedString));
        })();
    }, [url]);

    const toggleItemList = (): void => setExpandList(val => !val);

    return (
        <article class="media">
            <div class="media-content" onClick={toggleItemList}>
                <div class="content">
                    <h2 class="title is-6">{parsedFeed?.feedInfo?.title}</h2>
                    <h3 class="subtitle is-6">
                        {parsedFeed?.feedInfo?.description}
                    </h3>
                </div>
                {expandList &&
                    parsedFeed.feedItems.map(item => {
                        return (
                            <article key={Math.random()} class="media">
                                <div class="media-left">
                                    <p class="image is-16x16"></p>
                                </div>
                                <div class="media-content">
                                    <div class="content">{item?.title}</div>
                                </div>
                            </article>
                        );
                    })}
            </div>
        </article>
    );
}
