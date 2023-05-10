"use client";

import { useState, useEffect, JSX } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import styled from "@emotion/styled";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import {
  Container,
  Unstable_Grid2 as Grid,
  Stack,
  Box,
  Paper,
  Typography as Text,
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const background =
  "https://source.unsplash.com/1600x900/?landscape,nature,water";
const Title = styled.div`
  position: relative;
  color: rgb(255, 255, 255);
  background-color: var(--background-rgb);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${background});
  border-radius: 0 0 5px 5px;
  height: 50vh;
`;
const TitleText = styled.div`
  display: grid;
  position: absolute;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  z-index: 2;
  height: 100%;
  width: 100%;
`;
const TitleBackground = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  height: 100%;
  width: 100%;
`;

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Title>
        {
          <picture>
            <img
              style={{ display: "none" }}
              src={background}
              alt={"背景圖片"}
            />
          </picture>
        }
        <TitleBackground />
        <TitleText>
          <Text variant="h2">Night Star Blog</Text>
        </TitleText>
      </Title>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "44vh",
        }}
      >
        <Grid container spacing={3} sx={{ mt: 0 }}>
          <Grid xs={12} sm={8}>
            <Timeblock />
          </Grid>
          <Grid xs={12} sm={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

function Timeblock(): JSX.Element {
  const [time, setTime] = useState("獲取中...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text variant="h4">現在時間</Text>
      <Text variant="h5">{time}</Text>
    </Box>
  );
}

function Sidebar(): JSX.Element {
  return (
    <Stack spacing={2}>
      <Paper
        sx={{ p: 2, display: "flex", flexDirection: "column" }}
        elevation={0}
      >
        <Text variant="h5">快速導航</Text>
        <Stack
          spacing={1}
          sx={{
            pt: 1,
            pl: 2,
          }}
        >
          <Link href="/">
            <Text variant="body1">Home</Text>
          </Link>
          <Link href="/blog">
            <Text variant="body1">Blog</Text>
          </Link>
          <Link href="/about">
            <Text variant="body1">About</Text>
          </Link>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default Home;
