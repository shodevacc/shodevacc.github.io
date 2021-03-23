import React from 'react'
import Section from "../Section";
import { Link } from "gatsby";

function Typography() {
    return (
        <Section title="TypoGrapy" contentContainerStyle={{ backgroundColor: "#393e41" }}>
        <div style={{ padding: "50px 0" }}>
          <p style={{color:'white',textAlign:'center',fontWeight:'800'}}> Browse some Typography experiments made using CSS and Javascript.</p>
          <Link to="/typography">
            <h3 style={{ padding: `30px 0`,textAlign: "center",margin:`0 auto`, width:`50%`, background: `#e94f37` }}>
              Click Me!
            </h3>
          </Link>
        </div>
      </Section>
    )
}

export default Typography
