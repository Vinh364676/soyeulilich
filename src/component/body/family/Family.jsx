import React, { useState } from "react";
import "./Family.scss";
import { Button, Col, DatePicker, Form, Input, Radio, Row, Select, Table } from "antd";
import moment from "moment";

function Family() {
  const [data, setData] = useState([]);
  const [relationship, setRelationship] = useState("");
  const [name, setName] = useState("");
  const [yearBirth, setYearBirth] = useState(null);
  const [career, setCareer] = useState("");
  const [workPlace, setWorkPlace] = useState("");

  const columns = [
    {
      title: "Quan hệ",
      dataIndex: "relationship",
      key: "relationship",
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Năm sinh",
      dataIndex: "yearBirth",
      key: "yearBirth",
    },
    {
      title: "Nghề nghiệp",
      dataIndex: "career",
      key: "career",
    },
    {
      title: "Nơi công tác",
      dataIndex: "workPlace",
      key: "workPlace",
    },
  ];

  const option = [
    {
      value: "Cha",
      label: "Cha",
    },
    {
      value: "Mẹ",
      label: "Mẹ",
    },
    {
      value: "Anh",
      label: "Anh",
    },
    {
      value: "Chị",
      label: "Chị",
    },
    {
      value: "Em",
      label: "Em",
    },
  ];
  const handleAddData = () => {
    setData([
      ...data,
      {
        key: data.length,
        relationship: relationship,
        name: name,
        yearBirth: yearBirth,
        career: career,
        workPlace: workPlace,
      },
    ]);
    setRelationship("");
    setName("");
    setYearBirth("");
    setCareer("");
    setWorkPlace("");
  };
  return (
    <div data-aos="fade-up"
    data-aos-duration="1500" className="family">
      <h3 className="family__title">
        II. Quan hệ gia đình{" "}
        <span className="family__title__desc">
          (Ghi rõ họ tên, năm sinh, nghề nghiệp, nơi công tác của bố mẹ đẻ, anh
          chị em ruột)
        </span>
      </h3>

      <Form requiredMark={false} className="formBody" onFinish={handleAddData}>
        <Form.Item label="Quan hệ" className="formBody__item">
          <Select

            value={relationship || undefined} // Đặt giá trị là undefined nếu relationship là null
            onChange={(value) => setRelationship(value)}
            placeholder="Chọn mối quan hệ"
            style={{ width: 170 }}
            options={option}
          />
        </Form.Item>

        <Row gutter={20}>
          <Col xl={16}>
            <Form.Item
            className="formBody__item"
              label="Họ và tên"
              name="name" // Đặt name của trường dữ liệu là "name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập họ và tên!",
                },
              ]}
            >
              <Input
              className="form__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập họ và tên"
              />
            </Form.Item>
          </Col>
          <Col xl={8}>
          <Form.Item 
  label="Năm sinh" 
  className="formBody__item"
  name="yearBirth" // Thêm name vào Form.Item nếu bạn đang sử dụng Form Validation
  rules={[
    {
      validator: (_, value) => {
        if (value && value > moment()) {
          return Promise.reject(
            new Error("Năm sinh không được lớn hơn năm hiện tại!")
          );
        }
        return Promise.resolve();
      },
    }
  ]}
>
  <DatePicker
    className="formBody__item__date"
    picker="year"
    value={yearBirth ? moment(yearBirth, "YYYY") : null}
    onChange={(date, dateString) => setYearBirth(dateString)}
    placeholder="Chọn năm sinh"
  />
</Form.Item>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col xl={12}>
          <Form.Item
          className="formBody__item"
          name="career"
          label="Nghề nghiệp"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập nghề nghiệp!",
            },
          ]}
        >
          <Input
          className="form__input"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            placeholder="Nhập nghề nghiệp"
          />
        </Form.Item>
          </Col>
          <Col xl={12}>
          <Form.Item
          className="formBody__item"
          name="workPlace"
          label="Nơi công tác"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập nơi công tác!",
            },
          ]}
        >
          <Input
          className="form__input"
            value={workPlace}
            onChange={(e) => setWorkPlace(e.target.value)}
            placeholder="Nhập nơi công tác"
          />
        </Form.Item>
          </Col>
        </Row>
       
     
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}

export default Family;
