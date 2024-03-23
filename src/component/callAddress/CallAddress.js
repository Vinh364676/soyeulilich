import React, { useState, useEffect } from 'react';
import { Cascader } from 'antd';

const YourComponent = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch('https://vietnam-administrative-division-json-server-swart.vercel.app/province');
        const data = await response.json();
        const provinceOptions = data.map(province => ({
          value: province.idProvince,
          label: province.name,
          isLeaf: false, // Chỉ đánh dấu là false cho tỉnh/thành phố
        }));
        setOptions(provinceOptions);
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };

    fetchProvinces();
  }, []);

  const loadData = async selectedOptions => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    if (selectedOptions.length === 1) {
      try {
        const response = await fetch('https://vietnam-administrative-division-json-server-swart.vercel.app/district');
        const data = await response.json();
        const filteredDistricts = data.filter(district => district.idProvince === targetOption.value);
        const districtOptions = filteredDistricts.map(district => ({
          value: district.idDistrict,
          label: district.name,
          isLeaf: false, // Chỉ đánh dấu là false cho quận/huyện
        }));
        targetOption.children = districtOptions;
        setOptions([...options]);
      } catch (error) {
        console.error('Error loading districts:', error);
      }
    } else if (selectedOptions.length === 2) {
      try {
        const response = await fetch('https://vietnam-administrative-division-json-server-swart.vercel.app/commune');
        const data = await response.json();
        const filteredCommunes = data.filter(commune => commune.idDistrict === targetOption.value);
        const communeOptions = filteredCommunes.map(commune => ({
          value: commune.idCommune,
          label: commune.name,
        }));
        targetOption.children = communeOptions;
        setOptions([...options]);
      } catch (error) {
        console.error('Error loading communes:', error);
      }
    }

    targetOption.loading = false;
  };

  return (
    <Cascader
      options={options}
      loadData={loadData}
      onChange={(value, selectedOptions) => {
        // Handle change here if needed
        console.log(value, selectedOptions);
      }}
      placeholder="Chọn địa điểm"
      changeOnSelect
    />
  );
};

export default YourComponent;
