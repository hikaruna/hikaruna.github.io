const template = `
<header>
    <h1>hikarunaのサイト</h1>
    <nav>
        <ul>
            <li><a href="/">top</a></li>
            <li><a href="/test">test</a></li>
            <li><a href="/hoge">hoge</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <slot></slot>
    </article>
</main>

<aside>
    asideです。広告とか。
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
