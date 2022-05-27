import React from "react";
import { Button, Col, Form, Row, Select, DatePicker } from "antd";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { cities } from "../../db.json";
const { Option } = Select;

export const SearchForm = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const config = {
    rules: [
      {
        type: "object" as const,
        required: true,
        message: "Please select departing Date!",
      },
    ],
  };
  const onFinish = (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
      flightDate: fieldsValue["flightDate"].format("YYYY-MM-DD"),
    };
    //call api search
    history.push({
      pathname: "/searchResult",
      state: { searchValues: values },
    });
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form w-100 "
      onFinish={onFinish}
      size="large"
    >
      <Row justify="center">
        <Col
          xs={{ span: 18, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
          className="ml-0"
        >
          <Form.Item
            name="leavingFrom"
            rules={[
              {
                required: true,
                message: "Please Select an origin",
              },
            ]}
          >
            <Select placeholder="Leaving From" allowClear>
              {cities.map(({ id, name }) => (
                <Option value={name} key={id}>
                  {name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={{ span: 18, offset: 1 }} lg={{ span: 5, offset: 1 }}>
          <Form.Item
            name="goingTo"
            rules={[
              {
                required: true,

                message: "Please Select a destination",
              },
            ]}
          >
            <Select placeholder="Going to" allowClear>
              {cities.map(({ id, name }) => (
                <Option value={name} key={id}>
                  {name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={{ span: 18, offset: 1 }} lg={{ span: 4, offset: 1 }}>
          <Form.Item
            name="flightDate"
            {...config}
            initialValue={moment(
              moment().add(1, "months").format("MM-DD"),
              "MM-DD"
            )}
            className="w-100"
          >
            <DatePicker allowClear className="w-100" />
          </Form.Item>
        </Col>
        <Col
          xs={{ span: 18, offset: 1 }}
          lg={{ span: 4, offset: 1 }}
          className="ml-0"
        >
          <Button type="primary" htmlType="submit" className="ml-5">
            Search Flights
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
