import feedsJSON from "../testFeeds";
import { proxyUrl } from "../constants";

export type feedsListType = { url: string }[];

const myFetch = async (url: string): Promise<string> => {
    return await (
        await fetch(proxyUrl + url, {
            headers: new Headers([
                ["x-auth-token", process.env.TOKEN as string]
            ])
        })
    ).text();
};

export function getFeeds(): Promise<feedsListType> {
    return Promise.resolve(feedsJSON.feeds);
}

export async function getFeedXML(url: string) {
    const resp = await myFetch(url);

    console.log(resp);
}
