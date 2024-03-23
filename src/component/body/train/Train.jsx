import { Button, Col, DatePicker, Form, Input, Row, Table } from 'antd';
import moment from 'moment';
import React, { useState } from 'react'
const { RangePicker } = DatePicker;

function Train() {
  const [data, setData] = useState([]);
  const [relationship, setRelationship] = useState("");
  const [name, setName] = useState("");
  const [nganhhoc, setNganhhoc] = useState("");
  const [career, setCareer] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [startDate, setStartDate] = useState(null); // Trạng thái để lưu trữ tháng năm bắt đầu
  const [endDate, setEndDate] = useState(null); // Trạng thái để lưu trữ tháng năm kết thúc
  const columns = [
    {
      title: "Từ tháng năm đến tháng năm",
      dataIndex: "fromToMonthYear",
      key: "fromToMonthYear",

      render: (_, record) => (
        <span>
          Từ {record.startDate} đến {record.endDate}
        </span>
      ),
    },
    {
      title: "Tên trường hoặc cơ sở đào tạo",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngành học",
      dataIndex: "nganhhoc",
      key: "nganhhoc",
    },
    {
      title: "Hình thức đào tạo",
      dataIndex: "career",
      key: "career",
    },
    {
      title: "Văn bằng chứng chỉ",
      dataIndex: "workPlace",
      key: "workPlace",
    },
  ];

  const handleAddData = () => {
    setData([
      ...data,
      {
        key: data.length,
        relationship: relationship,
        name: name,
        nganhhoc: nganhhoc,
        career: career,
        workPlace: workPlace,
        startDate: startDate,
        endDate: endDate,
      },
    ]);
    setRelationship("");
    setName("");
    setNganhhoc("");
    setCareer("");
    setWorkPlace("");
    setStartDate(null);
    setEndDate(null);
  };
  return (
    <div data-aos="fade-up"
    data-aos-duration="1500" className="family">
      <h3 className="family__title">
      III. QUÁ TRÌNH ĐÀO TẠO, BỒI DƯỠNG.
      </h3>

      <Form requiredMark={false} className="formBody" onFinish={handleAddData}>
        <Form.Item label="Từ tháng năm đến tháng năm" className="formBody__item">
        <RangePicker
        picker="month"
        placeholder={['Bắt đầu','Kết thúc']}
        id={{
          start: 'Tháng năm',
          end: 'Tháng năm',
        }}
        onChange={(dates, dateStrings) => {
            setStartDate(dateStrings[0]);
            setEndDate(dateStrings[1]);
          }}
          format="MM-YYYY"

        />
        </Form.Item>

        <Row gutter={20}>
          <Col xl={16}>
            <Form.Item
            className="formBody__item"
              label="Tên trường hoặc cơ sở đào tạo"
              name="name" // Đặt name của trường dữ liệu là "name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên trường hoặc cơ sở đào tạo!",
                },
              ]}
            >
              <Input
              className="form__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên trường hoặc cơ sở đào tạo"
              />
            </Form.Item>
          </Col>
          <Col xl={8}>
          <Form.Item 
  label="Ngành học" 
  className="formBody__item"
  name="yearBirth" // Thêm name vào Form.Item nếu bạn đang sử dụng Form Validation
  rules={[
                {
                  required: true,
                  message: "Vui lòng nhập ngành học!",
                },
              ]}
>
  <Input className="form__input"
                value={nganhhoc}
                onChange={(e) => setNganhhoc(e.target.value)}
                placeholder="Nhập ngành học"
  />
</Form.Item>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col xl={12}>
          <Form.Item
          className="formBody__item"
          name="career"
          label="Hình thức đào tạo"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập hình thức đào tạo!",
            },
          ]}
        >
          <Input
          className="form__input"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            placeholder="Nhập hình thức đào tạo"
          />
        </Form.Item>
          </Col>
          <Col xl={12}>
          <Form.Item
          className="formBody__item"
          name="workPlace"
          label="Văn bằng chứng chỉ"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập văn bằng chứng chỉ!",
            },
          ]}
        >
          <Input
          className="form__input"
            value={workPlace}
            onChange={(e) => setWorkPlace(e.target.value)}
            placeholder="Nhập Văn bằng chứng chỉ"
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
  )
}

export default Train
