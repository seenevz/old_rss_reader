import { h, Fragment } from "preact";

type ArticleProps = {
    articleUrl: string;
};

export default function Article({ articleUrl }: ArticleProps) {
    return (
        <>
            <section class="section is-large">
                <nav class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <button class="button">{"< Back"}</button>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}
