import { h } from "preact";

type Feed = {};

type FeedsContainerProps = {
    feeds: Feed[];
};

export default function FeedsContainer({ feeds }: FeedsContainerProps) {
    return <section>feeds go here</section>;
}
