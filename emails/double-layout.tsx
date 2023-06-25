import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Link,
  Img,
} from "@react-email/components";
import React from "react";
import { DualColumn, SingleColumn } from "responsive-react-email";
// import { DualColumn } from "responsive-react-email/dual-column";
// import { SingleColumn } from "responsive-react-email/single-column";

export const DoubleLayoutTemplate = () => (
  <Html>
    <Head />
    <Preview>Responsive Double column Template</Preview>

    <Body style={main}>
      <Container style={container}>
        <SingleColumn pX={25}>
          <Img
            src={`/static/notion-logo.png`}
            width="32"
            height="32"
            alt="Notion's Logo"
          />
          <Text>Hi Paul,</Text>
          <Text>
            You can create just about anything with Notion. We see this come to
            life in the templates our users build - personal dashboards, habit
            trackers, travel planners and more.
          </Text>
          <Heading as="h3" style={{ margin: "24px 0 12px" }}>
            Explore by category
          </Heading>
          <Text style={{ marginBottom: 14 }}>
            Click on a category below to start exploring
          </Text>
        </SingleColumn>
        <DualColumn
          pX={25}
          columnOneContent={
            <Link href="#">
              <img
                src="/static/img/button-one.png"
                alt="Explore personal productivity templates"
                width={"90%"}
              />
            </Link>
          }
          columnOneStyles={{ textAlign: "center", marginBottom: 16 }}
          columnTwoContent={
            <Link href="#">
              <img
                src="/static/img/button-two.png"
                alt="Explore health and fitness templates"
                width={"90%"}
              />
            </Link>
          }
          columnTwoStyles={{ textAlign: "center", marginBottom: 16 }}
        />
        <DualColumn
          pX={25}
          columnOneContent={
            <Link href="#">
              <img
                src="/static/img/button-three.png"
                alt="Explore travel templates"
                width={"90%"}
              />
            </Link>
          }
          columnOneStyles={{ textAlign: "center", marginBottom: 16 }}
          columnTwoContent={
            <Link href="#">
              <img
                src="/static/img/button-four.png"
                alt="Explore personal finance templates"
                width={"90%"}
              />
            </Link>
          }
          columnTwoStyles={{ textAlign: "center", marginBottom: 16 }}
        />
        <SingleColumn pX={25}>
          <Heading as="h3" style={{ margin: "26px 0 12px" }}>
            Over 5,000 new templates to choose from
          </Heading>
          <Text style={{ marginBottom: 14 }}>
            Search for a topic or browse through 250+ categories.
          </Text>
          <Img
            src="/static/img/template-1.png"
            alt="Screenshot of notion templates homepage"
            width={"100%"}
          />
          <Heading as="h3" style={{ margin: "38px 0 12px" }}>
            Use templates created by the world’s best operators
          </Heading>
          <Text style={{ marginBottom: 14 }}>
            Apply frameworks from the best entrepreneurs, creators, and thought
            leaders.
          </Text>
          <Img
            src="/static/img/template-2.png"
            alt="Screenshot of notion templates homepage"
            width={"100%"}
          />
          <Heading as="h3" style={{ margin: "38px 0 12px" }}>
            Redesigned Template Gallery experience
          </Heading>
          <Text style={{ marginBottom: 14 }}>
            Discover trending templates and curated collections.
          </Text>
          <Img
            src="/static/img/template-3.png"
            alt="Screenshot of notion templates homepage"
            width={"100%"}
          />
          <Button
            pX={13.5}
            pY={8}
            style={{
              background: "#4898C9",
              color: "white",
              borderRadius: 4.5,
              margin: "48px 0 8px",
            }}
          >
            View templates &rarr;
          </Button>
          <Text>
            Happy exploring, <br />
            Ivan
          </Text>
          <Img
            src={`/static/notion-logo.png`}
            width="32"
            height="32"
            alt="Notion's Logo"
            style={{ marginTop: 48 }}
          />
          <Text style={{ width: 160, marginBottom: 70 }}>
            Notion - the connected workspace for your docs, projects, and
            knowledge.
          </Text>
        </SingleColumn>
      </Container>
    </Body>
  </Html>
);

export default DoubleLayoutTemplate;

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  background: "#fff",
};

const container = {
  margin: "0 auto",
  paddingTop: 42,
};
