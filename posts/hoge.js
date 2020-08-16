const template = `<main>
    <article><h1>Absalom, Absalom!</h1>
    <p>げんめつしばふぼうず。めいしょしょくん黒板。華やかゆるむ始まる。</p><p>かたみち殻靖国神社。妥協するあらす面。ぶそう漠然評価。</p><p>狂う哀れむ失う。そあく碁配慮。揺さぶる境けいけんしゃ。</p>
    <section><h1>It's a Battlefield</h1>
    <p>助手おんとう親切。塾生ごふくこうつう。ごうけんけいむしょきんく。</p><p>活用きいろ差し上げる。かいぞく色々合う。こくふくする面かん。</p><p>しえんするあらあらしいあつい。誓いなおさら擬装。おかねあつかい電源。</p></section><section><h1>The Torment of Others</h1>
    <p>じぎするせんじょうざいあびる。あうごうけんかぜ。泳ぐこいぬやさい。</p><p>誓いきんく気持ちいい。脱税この頃ちきゅう。休日おとといれつあく。</p><p>むぜい配慮しずむ。悲しみせんりゅう開閉。ふそく隆起差し上げる。</p></section><section><h1>A Time to Kill</h1>
    <p>さくにゅうとふ牛乳。えきびょう問題出かける。伝統ちきゅう日没。</p><p>はなはだ悲しみ丼。暴力みなと自立。委員たいさ学者。</p><p>ふさい太るぶそう。一文字あらそうまもる。投資学院かいぞく。</p></section></article>
</main>`;

class ThePost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }).innerHTML = template;
    }
}

customElements.define('the-post', ThePost);
