// const GetFeedInfo = (document: Document) => {};
export type ParsedFeedType = {
    feedInfo: FeedInfo;
    feedItems: FeedItemList;
};

type FeedInfo = {
    title: string;
    link: string;
    description: string;
};

type FeedItem = {
    title: string;
    link: string;
    description: string;
};

type FeedItemList = FeedItem[];

type rootNode = Document | Element;

const getNodeFromTag = (node: string, rootNode: rootNode): Element | null => {
    return rootNode.querySelector(node);
};

const getNodesFromTag = (
    tag: string,
    rootNode: rootNode
): NodeListOf<Element> => {
    return rootNode.querySelectorAll(tag);
};

const getDataFromGroup = (tagGroup: string[], rootNode: rootNode): FeedInfo => {
    const data = {} as FeedInfo;
    tagGroup.forEach(
        node => (data[node] = getNodeFromTag(node, rootNode)?.textContent)
    );

    return data;
};

const parseXMLFromString = (stringDoc: string): Document => {
    const parser = new DOMParser();
    return parser.parseFromString(stringDoc, "text/xml");
};

const getFeedInfo = (document: Document): FeedInfo => {
    const nodesToSearch = ["title", "link", "description"];

    return getDataFromGroup(nodesToSearch, document);
};

const getFeedItem = (element: Element): FeedItem => {
    const nodesToSearch = ["title", "link", "description"];

    return getDataFromGroup(nodesToSearch, element);
};

const getFeedItems = (document: Document): FeedItemList => {
    const nodes = getNodesFromTag("item", document);
    const data = [] as FeedItemList;

    nodes.forEach(node => {
        data.push(getFeedItem(node));
    });

    return data;
};

export const getDataFromXML = (stringDoc: string): ParsedFeedType => {
    const parsed = parseXMLFromString(stringDoc);
    const feedInfo = getFeedInfo(parsed);
    const feedItems = getFeedItems(parsed);

    return {
        feedInfo,
        feedItems
    };
};
/*
TODO
    create return object with parsed feed info and items ready to consume
    create method to extract items info
    separate parse to own method
    think of way to abstract parsing of items data
 */
