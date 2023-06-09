import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// type Props = {}

const Action = () => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="update" sx={{ color: "white" }} size="small">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete" sx={{ color: "red" }} size="small">
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default Action;
