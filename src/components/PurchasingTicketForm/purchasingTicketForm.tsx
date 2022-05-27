import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Space, Button, Radio } from "antd";
import { Formik } from "formik";
import {
  SubmitButton,
  Input,
  DatePicker,
  Form,
  FormItem,
  Select,
} from "formik-antd";
import moment from "moment";
import { countries } from "../../db.json";
import { TicketSchema } from "./ticketSchema";
import { Gender, Ticket } from "../../models/ticket";
import { FlightCard } from "../Card/flightsCard";
import { Flight } from "../../models/flight";
type PurchasingTicketFormProps = {
  availableFlight: Flight;
};
export const PurchasingTicketForm = ({
  availableFlight,
}: PurchasingTicketFormProps) => {
  const [initialValues, setInitialValues] = useState<Ticket>({
    firstName: "",
    lastName: "",
    creditNumber: "",
    email: "",
    name_on_card: "",
    countryId: 1,
    date_of_birth: "",
    phone: "",
    gender: Gender.MALE,
  });
  const history = useHistory();
  const onSubmitHandler = async (fieldValues: Ticket) => {
    const values = {
      ...fieldValues,
      date_of_birth: moment(fieldValues.date_of_birth).format("YYYY-MM-DD"),
    };
    //CALL API
    if (values) history.push("/sucess");
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validateOnMount
      validationSchema={TicketSchema}
      onSubmit={onSubmitHandler}
      render={({ setFieldValue, validateOnChange }) => (
        <Form
          style={{ display: "grid", gridTemplateColumns: "1fr" }}
          layout="vertical"
          labelCol={{ xs: 8 }}
          wrapperCol={{ xs: 20 }}
          hideRequiredMark={true}
        >
          <div style={{ background: "white", flex: 1, padding: 40 }}>
            <h1 className={"section-header-font"}>Purchase your Ticket</h1>
            <br />

            <Row justify={"space-between"} gutter={8} wrap={true}>
              <Col xs={24} lg={12} className="gutter-row">
                <FormItem
                  name="firstName"
                  label="First name"
                  required={true}
                  className="form-label-font"
                >
                  <Input name="firstName" placeholder="Please add First Name" />
                </FormItem>
              </Col>
              <Col xs={24} lg={12} className="gutter-row">
                <FormItem
                  name="lastName"
                  label="Last Name"
                  required={true}
                  className="form-label-font"
                >
                  <Input name="lastName" placeholder="Please add Last Name" />
                </FormItem>
              </Col>
            </Row>
            <Row justify={"space-between"} gutter={8} wrap={true}>
              <Col xs={24} lg={12} className="gutter-row">
                <FormItem
                  name="phone"
                  label="Phone number"
                  className="form-label-font"
                >
                  <Input name="phone" placeholder="Please add Phone Number" />
                </FormItem>
              </Col>
              <Col xs={24} lg={12} className="gutter-row">
                <FormItem
                  name="email"
                  label="Email"
                  className="form-label-font"
                >
                  <Input name="email" placeholder="Please add Email" />
                </FormItem>
              </Col>
            </Row>
            <Row justify={"space-between"} gutter={8} wrap={true}>
              <Col xs={24} lg={12} className="gutter-row">
                <FormItem
                  name="name_on_card"
                  label="Name on Card"
                  required={true}
                  className="form-label-font"
                >
                  <Input
                    name="name_on_card"
                    placeholder="Please add Name on Card"
                  />
                </FormItem>
              </Col>
              <Col xs={24} lg={12} className="gutter-row">
                <FormItem
                  name="creditNumber"
                  label="Debit/Credit card number"
                  className="form-label-font"
                >
                  <Input
                    name="creditNumber"
                    placeholder="Please add Debit/Credit card number"
                  />
                </FormItem>
              </Col>
            </Row>
            <Row justify={"space-between"} gutter={8} wrap={true}>
              <Col xs={24} lg={6} className="gutter-row">
                <FormItem
                  name="gender"
                  label="Gender"
                  required={true}
                  className="form-label-font"
                >
                  <Radio.Group
                    name="gender"
                    onChange={({ target }) => {
                      setFieldValue("gender", target.value);
                    }}
                    defaultValue={Gender.MALE}
                  >
                    <Radio name="gender" value={Gender.MALE}>
                      Male
                    </Radio>
                    <Radio name="gender" value={Gender.FEMALE}>
                      Female
                    </Radio>
                  </Radio.Group>
                </FormItem>
              </Col>
              <Col xs={24} lg={6} className="gutter-row">
                <FormItem
                  name="date_of_birth"
                  label="Date of Birth"
                  required={true}
                  className="form-label-font"
                >
                  <DatePicker name="date_of_birth" placeholder="mm/dd/yyyy" />
                </FormItem>
              </Col>
              <Col xs={24} lg={12} className="gutter-row">
                <FormItem
                  name="countryId"
                  label="Passport"
                  required={true}
                  className="form-label-font"
                >
                  <Select
                    name="countryId"
                    showArrow
                    size="large"
                    placeholder="Please Select Nationality on Passport"
                    allowClear
                  >
                    {countries?.map(({ id, name }) => (
                      <Select.Option key={id} value={id}>
                        {name}
                      </Select.Option>
                    ))}
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row justify={"space-between"} gutter={8} wrap={true}>
              <Col xs={24} lg={24} className="gutter-row">
                <FlightCard availableFlight={availableFlight} />
              </Col>
            </Row>

            <Row
              gutter={{ lg: 12 }}
              style={{ marginTop: 60 }}
              className="justify-content-end"
            >
              <Space>
                <Col span={24}>
                  <Button
                    style={{ marginRight: 20 }}
                    className="btn ICForm--btn-pre"
                    onClick={history.goBack}
                  >
                    Cancel
                  </Button>
                  <SubmitButton
                    className="btn btn-primary submitBtn"
                    disabled={!validateOnChange}
                  >
                    Purchase
                  </SubmitButton>
                </Col>
              </Space>
            </Row>
          </div>
        </Form>
      )}
    />
  );
};
