import { type NextPage } from "next";
import Head from "next/head";
import {
  Center,
  Card,
  CardHeader,
  Flex,
  CardBody,
  CardFooter,
  Text,
  Heading,
  SimpleGrid,
  useBreakpointValue,
  Button,
  Box,
  Divider,
} from "@chakra-ui/react";

const benefits = [
  { text: "Lender Benefit", key: 1 },
  { text: "Lender Benefit", key: 2 },
  { text: "Lender Benefit", key: 3 },
];

const Home: NextPage = () => {
  const variant = useBreakpointValue({
    base: "bagsNormal",
    desktop: "bagsDesktop",
  });

  return (
    <>
      <Head>
        <title>Bags Technical Asignment</title>
        <meta name="description" content="assignment for securebags" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center h="100vh" w="full" bg="gray.50" p="4">
        <Card
          maxWidth="432px"
          rounded="12px"
          boxShadow="inset 0px 0px 0px 2.25px #C8C6C6"
        >
          <Card
            rounded="12px"
            position="relative"
            border="2.25px solid #868686"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            mb="4"
          >
            <Box
              position="absolute"
              right="24px"
              top="-12px"
              bg="#7B5BE4"
              py="2px"
              px="32px"
              rounded="6px"
              textColor="white"
              fontFamily="sans-serif"
              fontWeight="medium"
              fontSize="14px"
            >
              Good Fit
            </Box>
            <CardHeader mb="-8">
              <Heading
                fontFamily="sans-serif"
                fontWeight="700"
                fontSize={{ base: "16px", md: "20px", lg: "24px" }}
                lineHeight="33px"
                textColor="black"
              >
                Revenue Based Financing
              </Heading>
            </CardHeader>
            <CardBody>
              <SimpleGrid columns={1} spacing={2}>
                <Text
                  fontFamily="sans-serif"
                  fontWeight="medium"
                  fontSize="16px"
                  textColor="black"
                  lineHeight="22px"
                >
                  By Lendistry
                </Text>
                <Text
                  fontFamily="sans-serif"
                  fontWeight="medium"
                  fontSize="16px"
                  textColor="black"
                  lineHeight="22px"
                  display="flex"
                  gap="2"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2857 8.24993C15.2857 12.7499 9.49999 16.6071 9.49999 16.6071C9.49999 16.6071 3.71428 12.7499 3.71428 8.24993C3.71428 6.71547 4.32384 5.24385 5.40888 4.15881C6.49391 3.07378 7.96553 2.46422 9.49999 2.46422C11.0345 2.46422 12.5061 3.07378 13.5911 4.15881C14.6761 5.24385 15.2857 6.71547 15.2857 8.24993Z"
                      stroke="#020202"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 10.1785C10.5651 10.1785 11.4286 9.31505 11.4286 8.24993C11.4286 7.18481 10.5651 6.32136 9.5 6.32136C8.43488 6.32136 7.57143 7.18481 7.57143 8.24993C7.57143 9.31505 8.43488 10.1785 9.5 10.1785Z"
                      stroke="#020202"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Location
                </Text>
                <Text
                  fontFamily="sans-serif"
                  fontWeight="medium"
                  fontSize="16px"
                  textColor="black"
                  lineHeight="22px"
                >
                  Get Funded in <b>12 days</b>.
                </Text>
              </SimpleGrid>
            </CardBody>
            <Divider border="1px solid #868686" />
            <CardFooter py="3">
              <Text
                fontFamily="sans-serif"
                fontWeight="700"
                fontSize="22px"
                lineHeight="30px"
                textColor="#7B5BE4"
              >
                $10,000 - $1,000,000
              </Text>
            </CardFooter>
          </Card>
          <CardHeader mb="-6">
            <Flex
              justifyContent="space-between"
              alignItems="center"
              wrap="wrap"
              gap="2"
            >
              <Heading
                fontFamily="sans-serif"
                fontSize="20px"
                fontWeight="700"
                lineHeight="20px"
                textColor="black"
              >
                About the Lender
              </Heading>
              <Button
                variant={variant}
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight="700"
                lineHeight="20px"
              >
                Learn More
              </Button>
            </Flex>
          </CardHeader>
          <CardBody pr="8">
            <Text
              fontFamily="sans-serif"
              fontWeight="400"
              fontSize="16px"
              lineHeight="22px"
              mb="26px"
            >
              Fill with Lorem ipsum dhfe ndwufiu fheh u2en i19h ueu2 0 he ns
              asabsqh sw whhdi dw ppwd euy4h dbdjq jeeoi nd.
            </Text>
            <SimpleGrid columns={1} spacing="20px">
              {benefits.map((v) => (
                <Flex
                  alignItems="center"
                  key={v.key}
                  justifyContent="start"
                  bg="#ECEAF2"
                  rounded="full"
                  py="1"
                  px="4"
                  maxWidth="311px"
                  cursor="pointer"
                >
                  <Text
                    textColor="#7B5BE4"
                    fontFamily="sans-serif"
                    fontWeight="700"
                    fontSize="16px"
                    lineHeight="22px"
                  >
                    {v.text}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Center>
    </>
  );
};

export default Home;
