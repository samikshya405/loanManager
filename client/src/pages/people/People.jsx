import React from "react";

import PeoplesTable from "../../component/table/PeoplesTable";
import MainLayout from "../../component/layout/MainLayout";
import { Box, Button } from "@mui/material";
import AddPeople from "../../component/table/AddPeople";

const People = () => {
  return (
    <MainLayout title="People">
      <Box p={2}>
        <Box sx={{ textAlign: "end", p: 2 }}>
          <AddPeople/>
        </Box>
        <PeoplesTable />
      </Box>
    </MainLayout>
  );
};

export default People;
