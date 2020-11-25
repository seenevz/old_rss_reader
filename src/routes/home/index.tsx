import { h } from "preact";
import { useState } from "preact/hooks";
import EmptyFeed from "../../components/emptyFeed";
import FeedsContainer from "../../components/feedsContainer";

export default function Home() {
    const [feeds, setFeeds] = useState([]);

    return (
        <main class="section is-large">
            {feeds.length > 0 ? <FeedsContainer feeds={feeds} /> : <EmptyFeed />}
        </main>
    );
}
