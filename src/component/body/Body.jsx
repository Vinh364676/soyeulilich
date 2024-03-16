import React, { useState } from "react";
import "./Body.scss";
import {
  Button,
  Cascader,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  message,
} from "antd";
import moment from "moment";
import Family from "./family/Family";
import Train from "./train/Train";
import Mission from "./mission/Mission";
const Body = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onChangeCas = (value) => {
    console.log(value);
  };
  const [form] = Form.useForm();
  const [showComponents, setShowComponents] = useState(false); // State để kiểm soát việc hiển thị các thành phần

  const onFinish = async (values) => {
    try {
      await form.validateFields(); // Kiểm tra lỗi từ các rules
      setShowComponents(true); // Nếu không có lỗi, hiển thị các thành phần
      message.success('Thông tin cá nhân hợp lệ!');
    } catch (error) {
      // Nếu có lỗi, hiển thị thông báo lỗi
      // message.error('Vui lòng hoàn thiện đúng thông tin cần thiết.');
    }
  };
  const options = [
    {
      value: "tphcm",
      label: "Thành phố Hồ Chí Minh",
      children: [
        {
          value: "quan1",
          label: "Quận 1",
          children: [
            {
              value: "phuong1",
              label: "Phường 1",
            },
            {
              value: "phuong2",
              label: "Phường 2",
            },
            {
              value: "phuong3",
              label: "Phường 3",
            },
          ],
        },
        {
          value: "quan2",
          label: "Quận 2",
          children: [
            {
              value: "phuong1",
              label: "Phường 1",
            },
            {
              value: "phuong3",
              label: "Phường 3",
            },
            {
              value: "phuong5",
              label: "Phường 5",
            },
          ],
        },
        {
          value: "quan3",
          label: "Quận 3",
          children: [
            {
              value: "phuong3",
              label: "Phường 3",
            },
            {
              value: "phuong6",
              label: "Phường 6",
            },
            {
              value: "phuong9",
              label: "Phường 9",
            },
          ],
        },
      ],
    },
    {
      value: "hanoi",
      label: "Hà Nội",
      children: [
        {
          value: "quanbadinh",
          label: "Quận Ba Đình",
          children: [
            {
              value: "phuongxa",
              label: "Phường Phúc Xá",
            },
            {
              value: "phuongbach",
              label: "Phường Trúc Bạch",
            },
          ],
        },
      ],
    },
  ];
  const disabledDate = (current) => {
    // Kiểm tra xem ngày hiện tại có lớn hơn hoặc bằng ngày được chọn không
    return current && current >= moment().endOf("day");
  };

  return (
    <div className="bodyApp">
      <h3 className="bodyApp__title">I. Thông tin bản thân.</h3>
      <div>
        <Form
          className="formBody"
          name="basic"
          style={
            {
              // maxWidth: 600,
            }
          }
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
        >
          {/* 1 */}
          <Row gutter={20}>
            <Col xl={18}>
              <Form.Item
                label="1. Họ và tên (chữ in hoa) "
                name="name"
                className="formBody__item"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập họ và tên!",
                  },
                ]}
              >
                <Input
                  className="form__input form__input__textName"
                  placeholder="Nhập họ và tên"
                />
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item className="formBody__item">
                <Radio.Group
                  onChange={onChange}
                  value={value}
                  className="formBody__item__radio"
                >
                  <Radio value={1}>Nam</Radio>
                  <Radio value={2}>Nữ</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>

          {/* 2 */}
          <Form.Item
            className="formBody__item"
            label="2. Họ tên thường dùng"
            name="nickname"
          >
            <Input className="form__input" placeholder="Nhập tên thường dùng" />
          </Form.Item>

          {/* 3 */}
          <Form.Item
            className="formBody__item"
            label="3. Sinh ngày"
            name="dateofBirth"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn ngày sinh!",
              },
              {
                validator: (_, value) => {
                  if (value && value > moment()) {
                    return Promise.reject(
                      new Error("Ngày sinh không được lớn hơn ngày hiện tại!")
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <DatePicker
              format="DD-MM-YYYY"
              placeholder="Chọn ngày sinh"
              className="formBody__item__date"
            />
          </Form.Item>

          {/* 4 */}
          <Form.Item
            className="formBody__item"
            label="4. Nơi sinh"
            name="noisinh"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn nơi sinh",
              },
            ]}
          >
            <Cascader
              options={options}
              onChange={onChangeCas}
              placeholder="Chọn nơi sinh"
              className="formBody__item__cascader"
            />
          </Form.Item>

          {/* 5 */}
          <Form.Item
            className="formBody__item"
            label="5. Nguyên quán"
            name="nguyenquan"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn nguyên quán",
              },
            ]}
          >
            <Cascader
              options={options}
              onChange={onChangeCas}
              placeholder="Chọn nguyên quán"
              className="formBody__item__cascader"
            />
          </Form.Item>

          {/* 6 */}
          <Form.Item
            className="formBody__item"
            label="6. Nơi đăng ký hộ khẩu thường trú"
            name="hokhau"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn nơi đăng ký hộ khẩu thường trú",
              },
            ]}
          >
            <Cascader
              options={options}
              onChange={onChangeCas}
              placeholder="Chọn nơi đăng ký hộ khẩu thường trú"
              className="formBody__item__cascader"
            />
          </Form.Item>

          {/* 7 */}
          <Form.Item
            className="formBody__item"
            label="7. Chỗ ở hiện nay"
            name="choo"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn chỗ ở hiện nay",
              },
            ]}
          >
            <Cascader
              options={options}
              onChange={onChangeCas}
              placeholder="Chọn chỗ ở hiện nay"
              className="formBody__item__cascader"
            />
          </Form.Item>

          {/* 8 */}
          <Row gutter={20}>
            <Col xl={12}>
              <Form.Item
                label="8. Điện thoại"
                name="phone"
                className="formBody__item"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại!",
                  },
                  {
                    validator: (_, value) => {
                      if (!value) {
                        return Promise.resolve();
                      }
                      if (!/^0\d{9,10}$/.test(value)) {
                        return Promise.reject(
                          "Số điện thoại không hợp lệ! Số điện thoại phải bắt đầu bằng số 0 và có độ dài là 10 hoặc 11 số."
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input
                  className="form__input"
                  placeholder="Nhập số điện thoại"
                />
              </Form.Item>
            </Col>
            <Col xl={12}>
              <Form.Item
                label="Email"
                name="email"
                className="formBody__item"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email",
                  },
                  {
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email chưa đúng định dạng! Vd. abc@example.com",
                  },
                ]}
              >
                <Input className="form__input" placeholder="Nhập email" />
              </Form.Item>
            </Col>
          </Row>

          {/* 9 */}
          <Row gutter={20}>
            <Col xl={12}>
              <Form.Item
                label="9. Dân tộc"
                name="dantoc"
                className="formBody__item"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập dân tộc!",
                  },
                ]}
              >
                <Input className="form__input" placeholder="Nhập dân tộc" />
              </Form.Item>
            </Col>
            <Col xl={12}>
              <Form.Item
                label="Tôn giáo"
                name="tongiao"
                className="formBody__item"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tôn giáo",
                  },
                ]}
              >
                <Input className="form__input" placeholder="Nhập tôn giáo" />
              </Form.Item>
            </Col>
          </Row>

          {/* 10 */}
          <Form.Item
            className="formBody__item"
            label="10. Thành phần gia đình"
            name="thanhphan"
          >
            <Input
              className="form__input"
              placeholder="Nhập thành phần gia đình"
            />
          </Form.Item>

          {/* 11 */}
          <Form.Item
            className="formBody__item"
            label="17. Cơ quan công tác hiện nay (nếu có)"
            name="congtac"
          >
            <Input
              className="form__input"
              placeholder="Nhập cơ quan công tác (nếu có)"
            />
          </Form.Item>
          {/* 10 */}
          <Form.Item
            className="formBody__item"
            label="18. Chức vụ hiện nay (nếu có)"
          >
            <Input
              className="form__input"
              placeholder="Nhập chức vụ (nếu có)"
            />
          </Form.Item>
          {/* 10 */}
          <Form.Item
            className="formBody__item"
            label="20. Khen thưởng"
            name="khenthuong"
          >
            <Input
              className="form__input"
              placeholder="Nhập khen thưởng (nếu có)"
            />
          </Form.Item>
          {/* 10 */}
          <Form.Item
            className="formBody__item"
            label="21. Kỷ luật"
            name="kyluat"
          >
            <Input
              className="form__input"
              placeholder="Nhập kỷ luật (nếu có)"
            />
          </Form.Item>
          {/* 22 */}
          <Form.Item
            className="formBody__item"
            label="22. Sở trường"
            name="sotruong"
          >
            <Input
              className="form__input"
              placeholder="Nhập sở trường (nếu có)"
            />
          </Form.Item>
          <Form.Item
           
          >
            <Button type="primary" htmlType="submit" className="form__buttonSubmit">
              Xác nhận
            </Button>

          </Form.Item>
        </Form>
        {showComponents?<div>
          <Family/>
          <Train/>
          <Mission/>
        </div>:null}
        <div data-aos="fade-up"
     data-aos-duration="1500">
        <p className="formBody__promise"><span></span>Tôi xin cam đoan bản khai sơ yếu lý lịch trên đúng sự thật, nếu có điều gì không đúng tôi chịu trách nhiệm trước pháp luật về lời khai của mình.</p>
          <div className="footer__date">
          <div className="footer__date__container">
          <Input className="form__input footer__date__input" placeholder="Nhập tỉnh">

</Input>
<DatePicker className="footer__date__inputTime" placeholder="Chọn ngày" format={"DD-MM-YYYY"} disabledDate={disabledDate}/>
          </div>
          
          </div>
          <Row className="formBody__footer" >
            <Col xl={12}>
            <h5 className="formBody__footer__title">
            Xác nhận của cơ quan đang công tác hoặc địa phương nơi đăng ký hộ khẩu
            </h5>
            </Col>
            <Col xl={12}>
              <h5 className="formBody__footer__title ">Người khai</h5>
              <p className="formBody__footer__title__right">(ký vã ghi rõ họ tên)</p>
              <Input
                  className="form__input form__input__textName formBody__footer__text"
                  placeholder="Nhập họ và tên"
                />
            </Col>
          </Row>
        </div>
        
      </div>
     
    </div>
  );
};

export default Body;
