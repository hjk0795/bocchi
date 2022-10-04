import React from "react";
import Circle from "../components/Circle";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import _ from "lodash";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


function Category() {
  var categoryList = ["Sushi", "Donburi", "Ramen", "Burger"];

  return (
    <div className="categoryContainer">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={15}>
          {categoryList.map((category, index) => {
            return (
              <Grid item xs={6} key={index}>
                <Item
                  key={index}
                  style={{ backgroundColor: "transparent", boxShadow: "none" }}
                >
                  <Link to={_.lowerCase(`${category}`)}>
                    <Circle id={index} key={index} name={category} width="200px" height="200px" lineHeight="200px" backgroundImage=""/>
                  </Link>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default Category;
