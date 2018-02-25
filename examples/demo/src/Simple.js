import React from "react";
import ReactMorph from "./lib";

const Simple = () => (
  <div>
    <style>{`
			strong, h1, h2, p {
				display: inline-block;
			}
			a {
				display: block;
				color: inherit;
			}
		`}</style>
    <ReactMorph>
      {({ from, to, fadeIn, go, init, state }) => (
        <div>
          <a onClick={() => go(1)}>
            <strong {...from("title")}>
              🐛 <br />ReactMorph
            </strong>
            <br />
            <p {...from("description")}>Morphing was never so easy!</p>
          </a>

          <div>
            <h1 {...to("title")}>
              🦋<br />ReactMorph
            </h1>
            <br />
            <h2 {...to("description")}>Morphing was never so easy!</h2>

            <a onClick={() => go(0)} {...fadeIn()}>
              Back
            </a>
          </div>
        </div>
      )}
    </ReactMorph>
  </div>
);

export default Simple;
