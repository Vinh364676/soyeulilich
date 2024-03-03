import logo from './logo.svg';
import './App.css';
import { Input, Radio,DatePicker  } from 'antd';
import React, { useState } from 'react'
function App() {
  const [image, setImage] = useState(null);

  // Handle file input change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="App">
    <div className='header'>
    <div>
    <div className='img_profile'>
        {/* Input for image upload */}
        {/* Display uploaded image */}
        {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
      </div>
        <input type="file" onChange={handleImageChange} accept="image/*" />
    </div>

  
    <div>
        <h3 className="title_Profile">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h3>
        <h3 className="title_Profile">Độc lập - Tự do- Hạnh phúc</h3>
        <p className="title_Profile">----------------------------</p>
        <h1 className="profile">sơ yếu lý lịch</h1>
    </div>
    </div>

   <div className='content_app'>
   <form>
   <h4>I. THÔNG TIN BẢN THÂN.</h4>
   {/* 1 */}
   <div style={{display:"flex",justifyContent:"space-between", marginBottom:"15px"}}>
   <div style={{ width: "50%", display: "flex" }}>
  <label style={{ whiteSpace: "nowrap",marginRight:"10px" }}>1. Họ và tên (chữ in hoa) </label>
  <Input
    type="text"
    id="hoTen"
    className="inputform uppercase"
    placeholder="Nhập họ và tên..."
  />
</div>
  
      <div>
        <label style={{paddingRight:"10px"}}>Giới tính </label>
        <Radio.Group>
          <Radio value="nam">Nam</Radio>
          <Radio value="nu">Nữ</Radio>
        </Radio.Group>
      </div>
    </div>
    {/* 2 */}
    <div style={{ display: "flex" , marginBottom:"15px"}}>
  <label style={{ whiteSpace: "nowrap",marginRight:"10px" }}>2. Họ và tên thường dùng:</label>
  <Input
    type="text"
    id="hoTenthuongdung"
    className="inputform uppercase"
    placeholder="Nhập họ và tên..."
  />
</div>
{/* 3 */}
 <div style={{display:"flex", marginBottom:"15px"}}>
      <label style={{ whiteSpace: "nowrap",marginRight:"10px" }}>3. Sinh ngày</label>
      <DatePicker
        format="DD/MM/YYYY"
        placeholder="Chọn ngày"
        style={{ width: '150%' }}
      />
    </div>
    {/* 4 */}
    <div style={{ display: "flex" , marginBottom:"15px"}}>
  <label style={{ whiteSpace: "nowrap",marginRight:"10px" }}>4. Nơi sinh:</label>
  <Input
    type="text"
    id="hoTenthuongdung"
    className="inputform uppercase"
    placeholder="Nhập nơi sinh..."
  />
</div>
{/* 5 */}
  <div style={{  display: "flex" , marginBottom:"15px"}}>
  <label style={{ whiteSpace: "nowrap",marginRight:"10px" }}>5. Nguyên quán:</label>
  <Input
    type="text"
    id="hoTenthuongdung"
    className="inputform uppercase"
    placeholder="Nhập nguyên quán..."
  />
</div>
{/* 6 */}
 <div style={{  display: "flex", marginBottom:"15px" }}>
  <label style={{ whiteSpace: "nowrap",marginRight:"10px" }}>6. Nơi đăng ký hộ khẩu thường trú:</label>
  <Input
    type="text"
    id="hoTenthuongdung"
    className="inputform uppercase"
    placeholder="Nhập nơi đăng ký họ khẩu thường trú..."
  />
</div>
{/* 7 */}
 <div style={{  display: "flex" , marginBottom:"15px"}}>
  <label style={{ whiteSpace: "nowrap",marginRight:"10px" }}>7. Chỗ ở hiện nay:</label>
  <Input
    type="text"
    id="hoTenthuongdung"
    className="inputform uppercase"
    placeholder="Nhập chỗ ở hiện nay..."
  />
</div>
{/* 8 */}
<div style={{display:"flex",justifyContent:"space-between"  ,gap:"20px", marginBottom:"15px"}}>
   <div style={{ display: "flex", width:"50%"}}>
  <label style={{ whiteSpace: "nowrap",marginRight:"10px" }}>8. Điện thoại liên hệ:</label>
  <Input
  style={{width:"100%"}}
    type="text"
    id="hoTen"
    className=""
    placeholder="Nhập điện thoại..."
  />
</div>
  
      <div style={{ display: "flex", width:"50%" }}>
      <div style={{ display: "flex", alignItems:"center",width:"100%"}}>
      <label style={{ whiteSpace: "nowrap",marginRight:"10px" }}>Email:</label>
  <Input
    type="Email"
    id="hoTen"
    className="inputform uppercase"
    placeholder="Nhập email..."
  />
      </div>
   
      </div>
    </div>
    {/* 9 */}
    <div style={{display:"flex",justifyContent:"space-between " ,marginBottom:"15px" ,gap:"20px"}}>
   <div style={{ display: "flex", width:"50%"}}>
  <label style={{ whiteSpace: "nowrap",marginRight:"10px" }}>9. Dân tộc</label>
  <Input
    type="text"
    id="hoTen"
    className="inputform uppercase"
    placeholder="Nhập họ và tên..."
  />
</div>
  
      <div style={{width:"50%"}}>
      <div style={{ display: "flex", alignItems:"center" }}>
      <label style={{ whiteSpace: "nowrap",marginRight:"10px" }}>Tôn giáo</label>
  <Input
    type="text"
    id="hoTen"
    className="inputform uppercase"
    placeholder="Nhập họ và tên..."
  />
      </div>
   
      </div>
    </div>
    <div style={{  display: "flex", marginBottom:"15px"}}>
  <label style={{ whiteSpace: "nowrap",marginRight:"10px" }}>10. Thành phần gia đình:</label>
  <Input
    type="text"
    id="hoTenthuongdung"
    className="inputform uppercase"
    placeholder="Nhập thành phần gia đình..."
  />
</div>
   </form>
   </div>
    </div>
  );
}

export default App;
