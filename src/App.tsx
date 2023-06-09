// import { useState } from "react";
//components
import Table from "./components/Table";
import FileUpload from "./components/FileUpload";
import { Container, Stack } from "@mui/material";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Container sx={{ mt: 20 }}>
      <Stack direction="column" alignItems="center" spacing={6}>
        <FileUpload />
        {/* <Divider /> */}
        <Table />
      </Stack>
    </Container>
  );
}

export default App;
