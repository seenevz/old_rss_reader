import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { ParsedFeedType } from "../../utils";
import { Link, route } from "preact-router";
import Match from "preact-router/match";

type FeedsContainerRowProps = {
    feedData: ParsedFeedType;
};

export default function FeedsContainerRow({
    feedData: { feedInfo, feedItems }
}: FeedsContainerRowProps) {
    const [expandList, setExpandList] = useState(false);

    const toggleItemList = (): void => {
        route(`/${feedInfo?.link}`);
    };

    const logger = ({ matches, path, url }) => {
        // const expand = matches && expandList ? false : true;
        // setExpandList(expand);
    };

    return (
        <>
            <Match path={`/${feedInfo?.link}`}>{logger}</Match>
            <article class="media">
                <div class="media-content" onClick={toggleItemList}>
                    <div class="content">
                        <h2 class="title is-6">{feedInfo?.title}</h2>
                        <h3 class="subtitle is-6">{feedInfo?.description}</h3>
                    </div>
                    {expandList &&
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
