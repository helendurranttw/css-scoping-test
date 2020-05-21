import Button from "css-modules-test/build/button/button";
import CIJButton from "css-in-js-test/build/button/button";

export default function buttonPage() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Button
        </h1>

        <section>
          <h2>CSS Modules</h2>
          <Button type="pay" special={true} onClick={() => alert('clicked')}>This is a Button</Button>
        </section>

        <section>
          <h2>CSS in JS</h2>
          <CIJButton type="pay" special={true} onClick={() => alert('clicked')}>This is also a Button</CIJButton>
        </section>
      </main>

      <footer>
       Made with ❤️ by TransferWise
      </footer>
    </div>);
}
