import React, { useState } from "react";
//mui
import { Button, IconButton, Snackbar, Stack } from "@mui/material";
//icons
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckIcon from "@mui/icons-material/Check";
//hooks
import { useAppDispatch } from "../redux/redux-hooks";
import { uploadFile } from "../redux/item-actions";

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
  };

  const handleUploadFile = () => {
    if (selectedFile) {
      dispatch(uploadFile(selectedFile))
        .then(() => {
          setSelectedFile(null);
          setSuccessSnackbarOpen(true);
        })
        .catch(() => {
          setErrorSnackbarOpen(true);
        });
    }
  };

  const handleSnackbarClose = () => {
    setErrorSnackbarOpen(false);
    setSuccessSnackbarOpen(false);
  };

  return (
    <Stack alignItems="center">
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
      >
        Upload File
        <input type="file" hidden onChange={handleFileChange} />
      </Button>
      {selectedFile && (
        <Stack direction="row" alignItems="center" spacing={6}>
          <span>{selectedFile.name}</span>
          <Stack direction="row" spacing={0}>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon
                onClick={handleDeleteFile}
                fontSize="small"
                sx={{ color: "red" }}
              />
            </IconButton>
            <IconButton aria-label="delete" size="small">
              <CheckIcon
                onClick={handleUploadFile}
                fontSize="small"
                sx={{ color: "lightgreen" }}
              />
            </IconButton>
          </Stack>
        </Stack>
      )}
      <Snackbar
        open={errorSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Error uploading file"
        sx={{ backgroundColor: "red" }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
      <Snackbar
        open={successSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="File uploaded successfully"
        sx={{ backgroundColor: "green" }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </Stack>
  );
};

export default FileUpload;
