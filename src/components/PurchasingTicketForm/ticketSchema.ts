import moment from "moment";
import * as yup from "yup";
import valid from "card-validator";
export const TicketSchema = yup.object({
  firstName: yup.string().required().label("First name"),
  lastName: yup.string().required().label("Last name"),
  email: yup
    .string()
    .email(({ value }) => `${value} is invalid Email`)
    .required()
    .label("Email"),
  phone: yup
    .string()
    .matches(
      /^(01)([0125]){1}[0-9]{8}$/,
      ({ value }) => ` ${value} is an invalid phone number `
    )
    .required()
    .label("Phone Number"),
  date_of_birth: yup
    .date()
    .required("Birth Date is Requerd")
    .label("Birth Date")
    .max(moment(), () => "Entered value is not a previous date."),
  gender: yup.string().required().label("Gender"),
  countryId: yup.number().required().label("Passport"),
  name_on_card: yup.string().required().label("Name On Card"),
  creditNumber: yup
    .string()
    .test(
      "test-number",
      "Credit Card number is invalid",
      (value) => valid.number(value).isValid
    ),
});
