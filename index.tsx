import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Select, InputNumber, Space } from 'antd';
import { every, filter, isNil, last, map, omit } from 'lodash';
import { SheetComponent } from '@antv/s2-react';
import insertCss from 'insert-css';
import { defaultHouseInfo, dataConfig, s2Options } from './config';

const SelectItem = (props) => {
  const { data, dataName, onChange } = props;

  return (
    <Select
      allowClear={true}
      placeholder="全部"
      style={{ width: '150px' }}
      onChange={(value) => {
        onChange({
          key: dataName,
          value: value,
        });
      }}
    >
      {map(data, (item) => (
        <Select.Option key={`${item}`} value={item}>
          {`${item}`}
        </Select.Option>
      ))}
    </Select>
  );
};

const RangeSelect = (props) => {
  const { data, dataName, onChange } = props;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const [info, setInfo] = useState({ min, max });
  const handleChange = (value, key) => {
    const tempInfo = Object.assign({}, info);
    tempInfo[key] = value;
    setInfo(tempInfo);

    onChange({
      key: dataName,
      value: [tempInfo.min, tempInfo.max],
    });
  };

  return (
    <Space>
      <InputNumber
        placeholder={'最小值'}
        min={min}
        max={max}
        defaultValue={min}
        onChange={(e) => handleChange(e, 'min')}
      />
      <InputNumber
        placeholder={'最大值'}
        min={min}
        max={max}
        defaultValue={max}
        onChange={(e) => handleChange(e, 'max')}
      />
    </Space>
  );
};

const SelectList = (props) => {
  const { filterData } = props;
  const [filterInfo, setFilterInfo] = useState({});

  const onChange = ({ key, value }) => {
    let tempHouseInfo = Object.assign({}, filterInfo);
    if (isNil(value)) {
      tempHouseInfo = omit(tempHouseInfo, key);
    } else {
      tempHouseInfo[key] = value;
    }
    setFilterInfo(tempHouseInfo);
    filterData(tempHouseInfo);
  };

  return (
    <div className="select-list">
      {map(defaultHouseInfo, (item, key) => {
        return (
          <Space className="select-item" key={key}>
            <span className="select-label"> {key}</span>
            {key === 'area' || key === 'level' ? (
              <RangeSelect data={item} dataName={key} onChange={onChange} />
            ) : (
              <SelectItem data={item} dataName={key} onChange={onChange} />
            )}
          </Space>
        );
      })}
    </div>
  );
};

const Sheet = ({ data }) => {
  const [dataSource, setDataSource] = useState(data);

  const filterData = (filterInfo) => {
    const result = filter(data, (item) => {
      return every(filterInfo, (value, key) => {
        if (key === 'area') {
          return value[0] <= item.area && value[1] >= item.area;
        }
        if (key === 'level') {
          return value[0] <= item.level && value[1] >= item.level;
        }
        if (key === 'nearStreet') {
          console.log(item.nearStreet, 'item.nearStreet', value, 'value');
          console.log(item.nearStreet === value, 'item.nearStreet === value');
        }
        return item[key] === value;
      });
    });
    setDataSource(result);
  };

  return (
    <div>
      <SelectList filterData={filterData} />
      <SheetComponent
        sheetType={'pivot'}
        dataCfg={{ ...dataConfig, data: dataSource }}
        options={s2Options}
        showPagination={true}
      />
    </div>
  );
};

fetch(
  'https://gw.alipayobjects.com/os/bmw-prod/6420f338-9169-4b1f-b0f0-35f1a8295e67.json'
)
  .then((res) => res.json())
  .then((data) => {
    ReactDOM.render(<Sheet data={data} />, document.getElementById('root'));
  });

// We use 'insert-css' to insert custom styles
// It is recommended to add the style to your own style sheet files
// If you want to copy the code directly, please remember to install the npm package 'insert-css
insertCss(`
  .select-item {
      margin: 5px 16px 0 0;
  }
  .select-list {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
  }
  .select-label {
    display: inline-block;
    width: 80px;
  }
`);
