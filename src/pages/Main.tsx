import { Logos } from "../components/Logos";
import "./Main.css";

export default () => {
  return (
    <div className="Main">
      <Logos />
      <h1>React + Vite</h1>
      <h2>Test</h2>
      <div className="card">
        <p>
          W ramach rekrutacji twoim zadaniem będzie rozwiązanie problemów z tego
          repozytorium.
        </p>
        <p>
          Możesz je zrealizować w codesandbox
          (https://codesandbox.io/p/sandbox/nostalgic-voice-tbfgyg?) albo w vs
          code na twoim kompie.
        </p>
      </div>
      <p className="read-the-docs">Powodzenia!</p>
    </div>
  );
};
