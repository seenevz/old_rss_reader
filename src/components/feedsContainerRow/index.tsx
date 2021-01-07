import { h, Fragment } from "preact";
import { ParsedFeedType } from "../../utils";
import { ExpandedTabType } from "../feedsContainer";

type FeedsContainerRowProps = {
    feedData: ParsedFeedType;
    expandedTab: ExpandedTabType;
    toggleExpandedTab(tabLink: string): void;
};

export default function FeedsContainerRow({
    feedData: { feedInfo, feedItems },
    expandedTab,
    toggleExpandedTab
}: FeedsContainerRowProps) {
    const isCurrentTab = expandedTab === feedInfo.link;

    return (
        <>
            <article class="media">
                <div
                    class="media-content"
                    onClick={() => toggleExpandedTab(feedInfo?.link)}
                >
                    <div class="content">
                        <h2 class="title is-6">{feedInfo?.title}</h2>
                        <h3 class="subtitle is-6">{feedInfo?.description}</h3>
                    </div>
                    {isCurrentTab &&
                        feedItems.map(item => {
                            return (
                                <article key={Math.random()} class="media">
                                    <div class="media-left">
                                        <p class="image is-16x16"></p>
                                    </div>
                                    <div class="media-content">
                                        <div class="content">
                                            <a href={item?.link}>
                                                {item?.title}
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                </div>
            </article>
        </>
    );
}
