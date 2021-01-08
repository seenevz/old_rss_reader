import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { getParsedFeedData, ParsedFeedType } from "../../utils";
import FeedsContainerRow from "../feedsContainerRow";

export type FeedType = { url: string };

type FeedsContainerProps = {
    feeds: FeedType[];
};

type FeedsDataType = ParsedFeedType[];

export type ExpandedTabType = string | null;

export default function FeedsContainer({ feeds }: FeedsContainerProps) {
    const [feedsData, setFeedsData] = useState<FeedsDataType>([]);
    const [expandedTab, setExpandedTab] = useState<ExpandedTabType>(null);

    useEffect(() => {
        (async (): Promise<void> => {
            const feedsStrings = await Promise.all(
                feeds.map(async feed => {
                    return await getParsedFeedData(feed.url);
                })
            );
            setFeedsData(feedsStrings);
        })();
    }, [feeds]);

    const toggleExpandedTab = (tabLink: string): void => {
        setExpandedTab(curr => (curr === tabLink ? null : tabLink));
    };

    return (
        <section>
            {feedsData.map((feed: ParsedFeedType) => (
                <FeedsContainerRow
                    key={Math.random()}
                    feedData={feed}
                    expandedTab={expandedTab}
                    toggleExpandedTab={toggleExpandedTab}
                />
            ))}
        </section>
    );
}
