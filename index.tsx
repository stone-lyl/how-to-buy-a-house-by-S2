import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Button } from 'antd';
import { SheetComponent } from '@antv/s2-react';
import { EXTRA_FIELD, TOTAL_VALUE, SpreadSheet } from '@antv/s2';

import insertCss from 'insert-css';
import data from './data';

import 'antd/dist/antd.css';
import '@antv/s2-react/dist/style.min.css';

//  'https://gw.alipayobjects.com/os/bmw-prod/2a5dbbc8-d0a7-4d02-b7c9-34f6ca63cff6.json',
// https://gw.alipayobjects.com/os/bmw-prod/ad982192-a708-4732-99af-153f422e7b75.json

// sort by measure  is error
const dataCfg = {
  ...data,
  fields: {
    ...data.fields,
  },
  sortParams: [
    // {
    //   sortFieldId: 'city',
    //   sortByMeasure: 'price',
    //   sortMethod: 'asc',
    //   query: {
    //     type: '纸张',
    //     [EXTRA_FIELD]: 'price',
    //   },
    // },
  ],
};
const s2Options = {
  width: 800,
  height: 880,
  // hierarchyType: 'grid',
  // totals: {
  // row: {
  //   reverseSubLayout: true,
  //   // showSubTotals: true,
  //   showGrandTotals: true,
  //   subTotalsDimensions: ['province', 'city'],
  //   calcSubTotals: {
  //     aggregation: 'SUM',
  //   },
  //   calcTotals: {
  //     aggregation: 'SUM',
  //   },
  // },
  // col: {
  //   // showSubTotals: true,
  //   // showGrandTotals: true,
  //   subTotalsDimensions: ['type'],
  //   calcTotals: {
  //     aggregation: 'SUM',
  //   },
  //   calcSubTotals: {
  //     aggregation: 'SUM',
  //   },
  // },
  // },
};

const ButtonDemo = () => {
  const [status, setStatus] = useState('asc');
  const s2Ref = React.useRef<SpreadSheet>();

  const getSpreadSheet1 = (instance: SpreadSheet) => {
    s2Ref.current = instance;
    console.log(instance.facet.layoutResult.rowLeafNodes, '111');
    window.s2 = instance;
  };
  const onChange = (checked: boolean) => {
    setStatus(checked ? 'asc' : 'desc');
  };
  const sortParams = dataCfg.sortParams.map((item) => {
    return {
      ...item,
      sortMethod: status,
    };
  });

  return (
    <div>
      {/* <Switch
        checkedChildren="asc"
        unCheckedChildren="desc"
        checked={status === 'asc'}
        onChange={onChange}
      /> */}
      <SheetComponent
        sheetType={'pivot'}
        adaptive={false}
        dataCfg={{ ...dataCfg, sortParams }}
        options={s2Options}
        getSpreadSheet={getSpreadSheet1}
      />
    </div>
  );
};

ReactDOM.render(<ButtonDemo />, document.getElementById('root'));

// We use 'insert-css' to insert custom styles
// It is recommended to add the style to your own style sheet files
// If you want to copy the code directly, please remember to install the npm package 'insert-css
insertCss(`
  .antv-s2-switcher-item.checkable-item {
    align-items: center;
  }
`);
