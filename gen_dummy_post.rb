require 'faker'
Faker::Config.locale="ja"

def gen_section_inner
"<h1>#{Faker::Book.title}</h1>
    #{ Faker::Lorem.paragraphs.map{|p| "<p>#{p}</p>"}.join() }"
end

def gen_sections(num)
    Array.new(num).map{"<section>#{gen_section_inner}</section>"}.join()
end

puts "const template = `<main>
    <article>#{gen_section_inner}
    #{gen_sections(3)}</article>
</main>`;
"

puts "
class ThePost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }).innerHTML = template;
    }
}

customElements.define('the-post', ThePost);
"
