"use client";

import { NextPage } from "next";
import Link from "next/link";

import styled from "@emotion/styled";

import { Unstable_Grid2 as Grid, Stack } from "@mui/material";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  border-top: rgb(50, 50, 50) solid 1px;
  padding: 2vh 0;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
`;

const Footers: NextPage = () => {
  return (
    <Footer>
      <Grid
        xs={12}
        container
        disableEqualOverflow
        spacing={{ xs: 2, sm: 4 }}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "1200px",
        }}
      >
        <Grid xs={12} sm={4}>
          Copyright &copy; NightStar {new Date().getFullYear()}.
        </Grid>
        <Grid
          xs={12}
          md={8}
          sx={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Stack direction="row" spacing={{ xs: 2, sm: 4 }}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
          </Stack>
        </Grid>
      </Grid>
    </Footer>
  );
};

export default Footers;
