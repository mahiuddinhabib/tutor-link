"use client";

import React from "react";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Form from "@/components/forms/Form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateProfileSchema } from "@/schemas/updateProfile";
import { FormInputText } from "@/components/forms/FormInputText";
import CommonProfileImg from "@/assets/profile.png";
import Image from "next/image";

const UpdateTutorPage = ({ params }: { params: { tutorId: string } }) => {
  const tutorId = params.tutorId;

  const { data: tutorData, isLoading } = useGetSingleUserQuery(tutorId);
  //   console.log(tutorData);

  const [updateUser] = useUpdateUserMutation();

  const onSubmit = async (values: any) => {
    try {
      const res = await updateUser({ id: tutorId, body: values }).unwrap();
      //   console.log(res);
      if (res?.id) {
        // message.success("Tutor Updated!");
      }
    } catch (err: any) {
      //   console.error(err.message);
    }
  };

  const defaultValues = {
    name: tutorData?.name || "",
    email: tutorData?.email || "",
    contactNo: tutorData?.contactNo || "",
    address: tutorData?.address || "",
    profileImg: tutorData?.profileImg || "",
  };
  return (
    <Box sx={{ mt: 3, maxWidth: "sm", mx: "auto" }}>
      <Paper sx={{ p: 3 }}>
        <Box
          sx={{
            border: "1px solid",
            height: "180px",
            width: "180px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            // backgroundColor:"red",
            borderColor: (theme) =>
              theme.palette.mode === "dark" ? "grey.800" : "grey.300",
            borderRadius: "50%",
          }}
        >
          <Image
            src={CommonProfileImg}
            width={0}
            height={0}
            sizes="100vw"
            alt="card image"
            style={{ width: 170, height: 170, borderRadius: "50%" }}
          />
        </Box>
        <Form
          submitHandler={onSubmit}
          defaultValues={defaultValues}
          resolver={yupResolver(updateProfileSchema)}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box my={1}>
              <FormInputText
                name="name"
                label="Full Name"
                placeholder="Your Full Name"
                required
                // fullWidth
                // autoFocus
              />
            </Box>
            <Box my={1}>
              <FormInputText
                name="email"
                label="Email"
                placeholder="Your Email"
                required
                // fullWidth
                // autoFocus
              />
            </Box>

            <Box my={1}>
              <FormInputText
                name="contactNo"
                label="Contact No"
                placeholder="Your Contact No"
                required
              />
            </Box>
            <Box my={1}>
              <FormInputText
                name="address"
                label="Address"
                placeholder="Your Address"
              />
            </Box>
            <Box my={1}>
              <FormInputText
                name="profileImg"
                label="Profile Image"
                placeholder="Your Profile Image"
              />
            </Box>
            <Button
              type="submit"
              //   fullWidth
              variant="contained"
              sx={{ mt: 1 }}
            >
              Update
            </Button>
          </Box>
        </Form>
      </Paper>
    </Box>
  );
};

export default UpdateTutorPage;
