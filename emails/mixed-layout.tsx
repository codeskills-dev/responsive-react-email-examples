import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Text,
  Heading,
  Button,
} from "@react-email/components";
import * as React from "react";
import { DualColumn, SingleColumn, TripleColumn } from "responsive-react-email";

export const MixedLayoutTemplate = () => (
  <Html>
    <Head />
    <Preview>Responsive Mixed Column Template</Preview>

    <Body style={main}>
      <Container style={container}>
        <SingleColumn style={{ height: 8, background: "#171a1b" }} />
        <DualColumn
          pY={12}
          columnOneContent={
            <>
              <Img src="/static/img/modern.jpg" width={180} />
            </>
          }
          columnOneStyles={{
            padding: "0 60px",
          }}
          columnTwoContent={
            <>
              <Link href="#" style={{ fontSize: 0 }}>
                <img src="/static/img/black-facebook.png" width={30} />
              </Link>
              <Link href="#" style={{ fontSize: 0 }}>
                <img src="/static/img/black-twitter.png" width={30} />
              </Link>
              <Link href="#" style={{ fontSize: 0 }}>
                <img src="/static/img/black-youtube.png" width={30} />
              </Link>
              <Link href="#" style={{ fontSize: 0 }}>
                <img src="/static/img/black-linkedin.png" width={30} />
              </Link>
              <Link href="#" style={{ fontSize: 0 }}>
                <img src="/static/img/black-instagram.png" width={30} />
              </Link>
            </>
          }
          columnTwoStyles={{
            padding: "10px 75px",
          }}
        />
        <SingleColumn
          style={{
            backgroundImage: `url("/static/img/banner-bg.jpg")`,
            backgroundSize: "cover",
            width: "100%",
            padding: "48px 16px 64px",
            textAlign: "center",
            color: "white",
          }}
        >
          <Heading as="h2" style={{ fontSize: 28 }}>
            A Modern Design Agency
          </Heading>
          <Text style={{ marginBottom: 32, fontSize: 16 }}>
            We help your brand go viral to connect you with your customers and
            grow organically!
          </Text>
          <Button
            pX={20}
            pY={16}
            style={{
              background: "#171a1b",
              color: "white",
              textTransform: "uppercase",
              fontWeight: "bold",
              borderRadius: 5,
            }}
          >
            Get started
          </Button>
        </SingleColumn>
        <TripleColumn
          pY={15}
          columnOneContent={
            <>
              <Link href="#">
                <img
                  src="/static/img/email.png"
                  width={130}
                  style={{ maxWidth: "130px" }}
                />
              </Link>
              <Heading as="h3">E-commerce</Heading>
              <Text style={{ fontSize: 15, lineHeight: "20px" }}>
                Responsive HTML Email Template course to master email
                development
              </Text>
            </>
          }
          columnTwoContent={
            <>
              <Link href="#">
                <img
                  src="/static/img/settings.png"
                  width={130}
                  style={{ maxWidth: "130px" }}
                />
              </Link>
              <Heading as="h3">Web Design</Heading>
              <Text style={{ fontSize: 15, lineHeight: "20px" }}>
                Responsive HTML Email Template course to master email
                development
              </Text>
            </>
          }
          columnThreeContent={
            <>
              <Link href="#">
                <img
                  src="/static/img/home.png"
                  width={130}
                  style={{ maxWidth: "130px" }}
                />
              </Link>
              <Heading as="h3">HTML Email</Heading>
              <Text style={{ fontSize: 15, lineHeight: "20px" }}>
                Responsive HTML Email Template course to master email
                development
              </Text>
            </>
          }
        />
        <DualColumn
          styles={{ background: "#26292b" }}
          pY={25}
          columnOneContent={
            <>
              <Link href="#">
                <img
                  src="/static/img/keyboard.jpg"
                  width={260}
                  style={{ maxWidth: "260px" }}
                />
              </Link>
            </>
          }
          columnOneStyles={{ padding: "0 20px" }}
          columnTwoContent={
            <>
              <Heading as="h3">Create Custom Designs</Heading>
              <Text>
                Over the years we have built up a massive portfolio our client
                website and email designs
              </Text>
              <Button
                href="#"
                style={{
                  background: "white",
                  color: "#171a1b",
                  borderRadius: 5,
                  fontWeight: "bold",
                }}
                pY={12}
                pX={20}
              >
                Read More
              </Button>
            </>
          }
          columnTwoStyles={{
            color: "white",
            textAlign: "left",
            padding: "0 20px",
          }}
        />
        <SingleColumn
          style={{ textAlign: "center", padding: "20px 20px 40px" }}
        >
          <Heading as="h3">HTML Email Template Course</Heading>
          <Text style={{ padding: "0 0 15px" }}>
            Responsive HTML Email Templates that you can build around.
            Responsive HTML Email Templates that you can build around.
            Responsive HTML Email Templates that you can build around.
            Responsive HTML Email Templates that you can build around.
          </Text>
          <Button
            pY={12}
            pX={20}
            style={{
              background: "#171a1b",
              color: "white",
              borderRadius: 5,
              fontWeight: "bold",
            }}
          >
            View Course
          </Button>
        </SingleColumn>
        <SingleColumn
          style={{
            textAlign: "center",
            color: "white",
            background: "#171a1b",
            padding: "20px 20px 40px",
          }}
        >
          <img src="/static/img/modern-white.png" width={180} />
          <Text>Modern HTML Email</Text>
          <Text style={{ marginBottom: 10 }}>
            123 Street Road City, State 55555
          </Text>
          <div style={{ padding: "20px 0" }}>
            <Link href="#" style={{ fontSize: 0 }}>
              <img src="/static/img/white-facebook.png" width={30} />
            </Link>
            <Link href="#" style={{ fontSize: 0 }}>
              <img src="/static/img/white-twitter.png" width={30} />
            </Link>
            <Link href="#" style={{ fontSize: 0 }}>
              <img src="/static/img/white-youtube.png" width={30} />
            </Link>
            <Link href="#" style={{ fontSize: 0 }}>
              <img src="/static/img/white-linkedin.png" width={30} />
            </Link>
            <Link href="#" style={{ fontSize: 0 }}>
              <img src="/static/img/white-instagram.png" width={30} />
            </Link>
          </div>
          <Link href="#" style={{ textTransform: "uppercase", color: "white" }}>
            Subscribe
          </Link>
        </SingleColumn>
      </Container>
    </Body>
  </Html>
);

export default MixedLayoutTemplate;

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  background: "#ccc",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
};
