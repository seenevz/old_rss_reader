import feeds from "../testFeeds";
import { proxyUrl } from "../constants";

type feedsList = { feeds: { url: string }[] };

const myFetch = async (url: string): Promise<string> => {
    return await (
        await fetch(proxyUrl + url, {
            headers: new Headers([
                ["x-auth-token", process.env.TOKEN as string]
            ])
        })
    ).text();
};

export function getFeeds(): Promise<feedsList> {
    return Promise.resolve(feeds);
}

export async function getFeedXML(url: string) {
    const resp = await myFetch(url);

    console.log(resp);
}
