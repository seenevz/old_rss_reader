// const GetFeedInfo = (document: Document) => {};
export interface ParsedFeed {
    getDataFromNode: (node: string) => Element | null;
}
const getDataFromNode = (node: string, document: Document): Element | null => {
    return document.querySelector(node);
};

export const parseXMLFromString = (stringDoc: string): ParsedFeed => {
    const parser = new DOMParser();
    const rssDocument = parser.parseFromString(stringDoc, "text/xml");

    return {
        getDataFromNode: (node: string): Element | null =>
            getDataFromNode(node, rssDocument)
    };
};
