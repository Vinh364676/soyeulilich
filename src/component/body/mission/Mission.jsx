import { Button, Col, DatePicker, Form, Input, Row, Table } from 'antd';
import React, { useState } from 'react'
const { RangePicker } = DatePicker;
function Mission() {
    const [data, setData] = useState([]);
    const [donvi, setDonvi] = useState("");
    const [chucvu, setChucvu] = useState("");
    const [startDate, setStartDate] = useState(null); // Trạng thái để lưu trữ tháng năm bắt đầu
  const [endDate, setEndDate] = useState(null); // Trạng thái để lưu trữ tháng năm kết thúc
  const [form] = Form.useForm();
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
        title: "Đơn vị công tác",
        dataIndex: "donvi",
        key: "donvi",
      },
      {
        title: "Chức vụ",
        dataIndex: "chucvu",
        key: "chucvu",
      },
    ];
  
    const handleAddData = () => {
      if (donvi.trim() === "" || chucvu.trim() === "" || !startDate || !endDate) {
        // Nếu có bất kỳ trường nào rỗng, không thêm dữ liệu và kết thúc hàm
        return;
      }else{ setData([
        ...data,
        {
          key: data.length,
          donvi: donvi,
          chucvu: chucvu,
          startDate: startDate,
        endDate: endDate,
        },
      ]);
     
      setDonvi("");
      setChucvu("");
      setStartDate(null);
    setEndDate(null);}
     
    form.resetFields();
    form.setFieldsValue({ dateRange: [null, null] });
    };
    return (
      <div data-aos="fade-up"
      data-aos-duration="1500" className="family">
        <h3 className="family__title">
        IV. QUÁ TRÌNH CÔNG TÁC
        </h3>
  
        <Form form={form}  onFinish={() => {
        handleAddData();
      }} requiredMark={false} className="formBody">
          <Form.Item
  label="Từ tháng năm đến tháng năm"
  className="formBody__item"
  name="dateStrings"
  rules={[
    {
      required: true,
      message: 'Vui lòng chọn ngày!',
      type: 'array',
    },
  ]}
>
  <RangePicker
    picker="month"
    placeholder={['Bắt đầu', 'Kết thúc']}
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
                label="Đơn vị công tác"
                name="donvi" // Đặt name của trường dữ liệu là "name"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập đơn vị công tác!",
                  },
                ]}
              >
                <Input
                className="form__input"
                  value={donvi}
                  onChange={(e) => setDonvi(e.target.value)}
                  placeholder="Nhập đơn vị công tác"
                />
              </Form.Item>
            </Col>
            <Col xl={8}>
            <Form.Item 
    label="Chức vụ" 
    className="formBody__item"
    name="chucvu" // Thêm name vào Form.Item nếu bạn đang sử dụng Form Validation
    rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập chức vụ!",
                  },
                ]}
  >
    <Input className="form__input"
                  value={chucvu}
                  onChange={(e) => setChucvu(e.target.value)}
                  placeholder="Nhập chức vụ"
    />
  </Form.Item>
            </Col>
          </Row>
  
         
          <Form.Item>
            <Button type="primary"  htmlType="submit">
              Thêm
            </Button>
          </Form.Item>
        </Form>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    )
}

export default Mission
