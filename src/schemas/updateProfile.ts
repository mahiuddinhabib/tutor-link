import * as yup from "yup";

export const updateProfileSchema = yup.object().shape({
  name: yup.string().optional(),
  email: yup.string().email("Invalid email").optional(),
  contactNo: yup.string().optional(),
  address: yup.string().optional(),
  profileImg: yup.string().optional(),
});
