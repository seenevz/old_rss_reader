import feedsJSON from "../testFeeds";
import { proxyUrl } from "../constants";
import { process } from "../env";
import { getDataFromXML } from "./myXMLparser";

export type feedsListType = { url: string }[];

const myFetch = async (url: string): Promise<string> => {
    return await (
        await fetch(proxyUrl + url, {
            headers: new Headers([["x-auth-token", process.env.TOKEN]])
        })
    ).text();
};

export function getFeeds(): Promise<feedsListType> {
    return Promise.resolve(feedsJSON.feeds);
}

export async function getFeedXML(url: string): Promise<string> {
    return await myFetch(url);
}

export async function getParsedFeedData(url: string) {
    return getDataFromXML(await getFeedXML(url));
}
