import { last } from 'lodash';

export const ID_SEPARATOR = '[&]';
export const defaultHouseInfo = {
  name: ['15#', '16#', '21#', '22#'],
  unit: [1, 2],
  building: [1, 2, 3, 4, 5],
  nearStreet: [true, false],
  property: ['公寓', '住宅'],
  toward: ['东', '南', '西', '北'],
  level: [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39,
  ],
  area: [92, 111, 114, 119, 120, 123, 125, 135, 138],
};

export const s2Options = {
  width: 700,
  height: 580,
  pagination: {
    pageSize: 50,
    current: 1,
  },
  conditions: {
    // 背景 (background) 字段标记
    background: [
      {
        field: 'area',
        mapping(value) {
          if (value === 123 || value === 119) {
            return {
              // fill 是背景字段标记下唯一必须的字段，用于指定文本颜色
              fill: '#b8e1ff',
            };
          }
          return {
            fill: '#fff',
          };
        },
      },
    ],
  },
};

const defaultSortParams = [
  {
    sortFieldId: 'name',
    sortMethod: 'ASC',
  },
  {
    sortFieldId: 'unit',
    sortMethod: 'ASC',
  },
  {
    sortFieldId: 'level',
    sortFunc: (params) => {
      const { data } = params;
      return data.sort((a, b) => {
        const aNum = last(a.split(ID_SEPARATOR));
        const bNum = last(b.split(ID_SEPARATOR));
        return aNum - bNum;
      });
    },
  },
];

export const dataConfig = {
  data: [],
  describe: '如何使用 S2 买房',
  fields: {
    rows: [
      'name',
      'unit',
      'building',
      'level',
      'nearStreet',
      'toward',
      'property',
    ],
    columns: [],
    values: ['area'],
    valueInCols: true,
  },
  meta: [
    {
      field: 'name',
      name: '楼栋',
    },
    {
      field: 'unit',
      name: '单元号',
    },
    {
      field: 'building',
      name: '房号',
    },
    {
      field: 'level',
      name: '楼层',
    },
    {
      field: 'property',
      name: '房屋类型',
    },
    {
      field: 'nearStreet',
      name: '是否临街',
    },
    {
      field: 'toward',
      name: '朝向',
    },
    {
      field: 'area',
      name: '面积',
    },
    {
      field: 'note',
      name: '备注',
    },
    {
      field: 'score',
      name: '评分',
    },
  ],
  sortParams: defaultSortParams,
};
