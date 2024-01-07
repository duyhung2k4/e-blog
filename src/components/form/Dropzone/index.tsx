import React, { useEffect, useState } from "react";
import { ActionIcon, AspectRatio, Box, Group, Stack, Text, Image, Grid } from '@mantine/core';
import { IconUpload, IconPhoto, IconX, IconTrash } from '@tabler/icons-react';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export interface CustomDropzoneProps {
  label?: string
  value?: any
  onChange?: any
  defaultUrl?: string
  readOnly?: boolean
}
const CustomDropzone: React.FC<CustomDropzoneProps> = (props) => {
  const [urlImage, setUrlImage] = useState<string>("");

  useEffect(() => {
    const urlImage = props.value !== undefined ? URL.createObjectURL(props.value) : "";
    setUrlImage(urlImage);
  }, [props.value]);

  useEffect(() => {
    if (props.defaultUrl) {
      const baseUrl = `${import.meta.env.VITE_REACT_APP_URL}/api/v1`;
      const newUrlImage = `${baseUrl}/${props.defaultUrl}`;
      setUrlImage(newUrlImage);
    }
  }, [props.defaultUrl]);

  return (
    <Grid.Col xs={12} md={6}>
      {!urlImage ? (
        <Stack spacing={3}>
          <Text
            align="left"
            fz={14}
            fw={500}
          >
            {props.label || ""}
          </Text>
          <Dropzone
            disabled={props.readOnly}
            onDrop={(files) => props.onChange(files[0])}
            onReject={(files) => console.log("rejected", files)}
            maxSize={3 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            style={{ borderStyle: "solid" }}
          >
            <Group
              position="center"
              spacing="xl"
              style={{ minHeight: 150, pointerEvents: "none" }}
            >
              <Dropzone.Accept>
                <IconUpload size="3.2rem" stroke={1.5} />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX size="3.2rem" stroke={1.5} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto size="3.2rem" stroke={1.5} />
              </Dropzone.Idle>

              <Text size="md" inline>
                Drag images here or click to select files
              </Text>
            </Group>
          </Dropzone>
        </Stack>
      ) : (
        <Stack spacing={3} h={"100%"}>
          <Text
            align="left"
            fz={14}
            fw={500}
          >
            {props.label || ""}
          </Text>

          {urlImage && (
            <AspectRatio
              ratio={16 / 9}
              mah={"185px"}
              w="auto"
              sx={{ position: "relative" }}
            >
              <Box
                sx={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  textAlign: "center",
                  zIndex: 200,
                }}
              >
                <ActionIcon
                  variant="filled"
                  color="error"
                  sx={{ position: "absolute", top: 10, right: 10 }}
                  onClick={() => {
                    if (urlImage.includes("https")) {
                      setUrlImage("");
                      props.onChange(undefined);
                    } else {
                      props.onChange(undefined);
                    }
                  }}
                >
                  <IconTrash />
                </ActionIcon>
              </Box>

              <Image
                src={urlImage}
                onLoad={() => URL.revokeObjectURL(urlImage)}
              />
            </AspectRatio>
          )}
        </Stack>
      )}
    </Grid.Col>
  );
}

export default CustomDropzone;