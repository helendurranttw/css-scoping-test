import Alert from "css-modules-test/build/alert/alert";
import CIJAlert from "css-in-js-test/build/alert/alert";

export default function buttonPage() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Alert
        </h1>

        <section>
          <h2>CSS Modules</h2>
        <Alert dismissible={true} special={true} type="success" onDismiss={() => alert('dismissed')}>
            <p>Everything went well and life is amazing.</p>
        </Alert>
        </section>

        <section>
          <h2>CSS in JS</h2>
        <CIJAlert dismissible={true} special={true} type="success" onDismiss={() => alert('dismissed')}>
            <p>Everything went well and life is amazing.</p>
        </CIJAlert>
        </section>

      </main>

      <footer>
       Made with ❤️ by TransferWise
      </footer>
    </div>);
}
