import React, { useState } from "react";
import { Button, IconButton, Stack } from "@mui/material";
//icons
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckIcon from "@mui/icons-material/Check";

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
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
                onClick={handleDeleteFile}
                fontSize="small"
                sx={{ color: "lightgreen" }}
              />
            </IconButton>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default FileUpload;
