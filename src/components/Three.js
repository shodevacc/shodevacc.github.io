import React from "react";
import { Link } from "gatsby";
import Section from "./Section";

function Three() {
  return (
    <Section title="ThreeJs" contentContainerStyle={{ backgroundColor: "#393e41" }}>
      <div style={{ padding: "50px 0" }}>
        <Link to="/space">
          <h3 style={{ padding: `30px 0`,textAlign: "center",margin:`0 auto`, width:`50%`, background: `#e94f37` }}>
            Click Me!
          </h3>
        </Link>
      </div>
    </Section>
  );
}

export default Three;
