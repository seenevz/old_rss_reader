import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import EmptyFeed from "../../components/emptyFeed";
import FeedsContainer from "../../components/feedsContainer";
import { getFeeds, feedsListType } from "../../utils";

export default function Home() {
    const [feeds, setFeeds] = useState<feedsListType | []>([]);

    useEffect(() => {
        (async (): Promise<void> => {
            setFeeds(await getFeeds());
        })();
    });

    return (
        <main class="section is-large">
            {feeds.length > 0 ? (
                <FeedsContainer feeds={feeds} />
            ) : (
                <EmptyFeed />
            )}
        </main>
    );
}
