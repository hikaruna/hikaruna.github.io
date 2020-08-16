const template = `<main>
    <h1>this is test page</h1>
    <p>test is test.</p>
</main>`;

class ThePost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }).innerHTML = template;
    }
}

customElements.define('the-post', ThePost);
