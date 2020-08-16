const template = `
<header>
    <h1>hikarunaのサイト</h1>
    <nav>
        <ul>
            <li><a href="/">top</a></li>
            <li><a href="/test">test</a></li>
            <li><a href="/hoge">hoge</a></li>
            <li><a href="hoge?css=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fkognise%2Fwater.css%40latest%2Fdist%2Fdark.min.css">hogeのwater.cssを適応した版</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <slot></slot>
    </article>
</main>

<aside>
    <p>
    これは404ページをハックして作ったspaのエントリーポイントです。
    以下にlocationから導出したwebcomponentを配置することで擬似的なspaを実現します。
    これにより、アプリケーションサーバも静的サイトジェネレータも使わずにgithubPageで動的にサイトを構築できないか実験してます。
    </p>

    <dl>
        <dt>water.cssのライセンス</dt>
        <dd>https://github.com/kognise/water.css/blob/master/LICENSE.md</dd>
    </dl>
</aside>

<footer>
    フッターです
</footer>
`;

class TheLayout extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }).innerHTML = template;
    }
}

customElements.define('the-layout', TheLayout);
