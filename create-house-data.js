/**
 *  用于购房
 */
import _ from 'lodash';
/**
 * 1.
 */

const propertyType = {
  house: '住宅',
  apartment: '公寓',
};
const towardType = {
  north: '北',
  south: '南',
  east: '东',
  west: '西',
};

class House {
  constructor(
    name = '100#1',
    nearStreet = false,
    level = 0,
    area = 100,
    property = propertyType.house,
    toward = towardType.north,
    unit,
    building,
    note,
    score
  ) {
    this.name = name;
    this.level = level;
    this.property = property;
    this.nearStreet = nearStreet;
    this.toward = toward;
    this.area = area;
    this.unit = unit;
    this.building = building;
    this.note = note;
    this.score = score;
  }
}

const create811House = () => {
  const houses = [];
  const getProperty = (building, level) => {
    let property = propertyType.house;
    switch (building) {
      case 0:
        property = level > 34 ? propertyType.house : propertyType.apartment;
        break;
      case 4:
        property = propertyType.apartment;
        break;
      default:
        property = propertyType.house;
    }
    return property;
  };

  // 层级，临街，面积
  const areaList = [111, 123, 111, 111, 119];
  const noteList = [
    '客厅比较窄，公共卫生间有个狭长通道',
    '多了5平米的入户花园',
    '客厅窄了，公共卫生间小',
    '客厅窄了，公共卫生间小',
    '没啥问题',
  ];
  const scoreList = [7, 7, 7, 7, 8];
  const towardList = [
    towardType.east,
    towardType.east,
    towardType.west,
    towardType.west,
    towardType.east,
  ];
  const nearStreetList = [false, true, true, true, true];
  for (let j = 0; j < 5; j++) {
    for (let i = 2; i <= 39; i++) {
      if (i === 17 || i === 33) {
        continue;
      }
      const property = getProperty(j, i);
      const building = j + 1;
      const unit = 1 + '单元';
      const name = '81#';
      const house = new House(
        name,
        nearStreetList[j],
        i,
        areaList[j],
        property,
        towardList[j],
        unit,
        building,
        noteList[j],
        scoreList[j]
      );
      houses.push(house);
    }
  }
  return houses;
};
const create812House = () => {
  const houses = [];
  const getProperty = (building, level) => {
    let property = propertyType.house;
    switch (building) {
      case 0:
        property = level > 25 ? propertyType.house : propertyType.apartment;
        break;
      case 1:
        property = level > 36 ? propertyType.house : propertyType.apartment;
        break;
      case 4:
        property = propertyType.apartment;
        break;
      default:
        property = propertyType.house;
    }
    return property;
  };

  // 层级，临街，面积
  const areaList = [111, 119, 111, 111, 123];
  const towardList = [
    towardType.east,
    towardType.east,
    towardType.west,
    towardType.west,
    towardType.east,
  ];
  const nearStreetList = [false, true, true, true, true];
  const noteList = [
    '客厅比较窄，公共卫生间有个狭长通道',
    '没啥问题',
    '客厅窄了，公共卫生间小',
    '客厅窄了，公共卫生间小',
    '没啥问题',
    '多了5平米的入户花园',
  ];
  const scoreList = [7, 8, 7, 7, 7];
  for (let j = 0; j < 5; j++) {
    for (let i = 2; i <= 39; i++) {
      if (i === 17 || i === 33) {
        continue;
      }
      const property = getProperty(j, i);
      const building = j + 1;
      const unit = 2 + '单元';
      const name = '81#';
      const house = new House(
        name,
        nearStreetList[j],
        i,
        areaList[j],
        property,
        towardList[j],
        unit,
        building,
        noteList[j],
        scoreList[j]
      );
      houses.push(house);
    }
  }
  return houses;
};

const create822House = () => {
  const houses = [];
  const getProperty = (building, level) => {
    let property = propertyType.house;
    switch (building) {
      case 0:
        property = propertyType.apartment;
        break;
      case 1:
        property = level > 16 ? propertyType.house : propertyType.apartment;
        break;
      case 2:
        property = level > 10 ? propertyType.house : propertyType.apartment;
        break;
      case 3:
        property = level > 13 ? propertyType.house : propertyType.apartment;
        break;
      case 4:
        property = level > 19 ? propertyType.house : propertyType.apartment;
    }
    return property;
  };
  const noteList = [
    '客厅比较窄，公共卫生间有个狭长通道',
    '没啥问题',
    '客厅窄了，公共卫生间小',
    '客厅窄了，公共卫生间小',
    '没啥问题',
    '多了5平米的入户花园',
  ];
  const scoreList = [7, 8, 7, 7, 7];
  const areaList = [111, 119, 111, 111, 123];
  const towardList = [
    towardType.north,
    towardType.south,
    towardType.south,
    towardType.south,
    towardType.south,
  ];
  // 层级，临街，面积
  for (let j = 0; j < 5; j++) {
    const area = areaList[j];
    const toward = towardList[j];
    for (let i = 2; i <= 39; i++) {
      if (i === 17 || i === 33) {
        continue;
      }
      const property = getProperty(j, i);
      const building = j + 1;
      const unit = 2 + '单元';
      const name = '82#';
      const nearStreet = false;
      const house = new House(
        name,
        nearStreet,
        i,
        area,
        property,
        toward,
        unit,
        building,
        noteList[j],
        scoreList[j]
      );
      houses.push(house);
    }
  }
  return houses;
};

const create821House = () => {
  const noteList = [
    '客厅比较窄，公共卫生间有个狭长通道',
    '多了5平米的入户花园',
    '客厅窄了，公共卫生间小',
    '客厅窄了，公共卫生间小',
    '没啥问题',
  ];
  const scoreList = [7, 7, 7, 7, 8];
  const getProperty = (building, level) => {
    let property = propertyType.house;
    switch (building) {
      case 0:
        property = propertyType.apartment;
        break;
      case 4:
        property = level > 18 ? propertyType.house : propertyType.apartment;
    }
    return property;
  };
  const houses = [];
  // 层级，临街，面积
  for (let j = 0; j < 5; j++) {
    const areaList = [111, 123, 111, 111, 119];
    const towardList = [
      towardType.north,
      towardType.south,
      towardType.south,
      towardType.south,
      towardType.south,
    ];
    const propertyList = [
      propertyType.apartment,
      propertyType.house,
      propertyType.house,
      propertyType.house,
      propertyType.apartment,
    ];
    const area = areaList[j];
    const toward = towardList[j];
    let property = propertyList[j];
    for (let i = 2; i <= 39; i++) {
      if (i === 17 || i === 33) {
        continue;
      }
      property = getProperty(j, i);
      const building = j + 1;
      const unit = 1 + '单元';
      const name = '82#';
      const level = i;
      const nearStreet = false;
      const house = new House(
        name,
        nearStreet,
        level,
        area,
        property,
        toward,
        unit,
        building,
        noteList[j],
        scoreList[j]
      );
      houses.push(house);
    }
  }
  return houses;
};
let houses = [];

const create751House = () => {
  const houses = [];
  const getProperty = (building, level) => {
    let property = propertyType.house;
    switch (building) {
      case 2:
        property = level > 23 ? propertyType.house : propertyType.apartment;
        break;
      case 3:
        property = level > 21 ? propertyType.house : propertyType.apartment;
        break;
      case 4:
        property = propertyType.apartment;
        break;
      default:
        property = propertyType.house;
    }
    return property;
  };

  // 层级，临街，面积
  const areaList = [120, 119, 92, 92, 125];
  const towardList = [
    towardType.east,
    towardType.east,
    towardType.west,
    towardType.west,
    towardType.east,
  ];
  const nearStreetList = [true, true, false, false, true];
  const noteList = [
    '厅比较窄，公共卫生间有个狭长通道',
    '没啥问题',
    '小于100平',
    '小于100平',
    '多了5平米的入户花园',
  ];
  const scoreList = [6, 8, 1, 1, 7];
  for (let j = 0; j < 5; j++) {
    for (let i = 2; i <= 29; i++) {
      const building = j + 1;
      const unit = 1 + '单元';
      const name = '75#';
      const house = new House(
        name,
        nearStreetList[j],
        i,
        areaList[j],
        getProperty(j, i),
        towardList[j],
        unit,
        building,
        noteList[j],
        scoreList[j]
      );
      houses.push(house);
    }
  }
  return houses;
};

const create752House = () => {
  const houses = [];
  const getProperty = (building, level) => {
    let property = propertyType.house;
    switch (building) {
      case 3:
        property = level > 27 ? propertyType.house : propertyType.apartment;
        break;
      case 4:
        property = level > 27 ? propertyType.house : propertyType.apartment;
        break;
      default:
        property = propertyType.house;
    }
    return property;
  };

  // 层级，临街，面积
  const areaList = [120, 125, 92, 92, 119];
  const towardList = [
    towardType.east,
    towardType.east,
    towardType.west,
    towardType.west,
    towardType.east,
  ];
  const nearStreetList = [true, true, false, false, true];
  const noteList = [
    '厅比较窄，公共卫生间有个狭长通道',
    '多了5平米的入户花园',
    '小于100平',
    '小于100平',
    '多了5平米的入户花园',
    '没啥问题',
  ];
  const scoreList = [6, 7, 1, 1, 8];
  for (let j = 0; j < 5; j++) {
    for (let i = 2; i <= 29; i++) {
      const building = j + 1;
      const unit = 2 + '单元';
      const name = '75#';
      const house = new House(
        name,
        nearStreetList[j],
        i,
        areaList[j],
        getProperty(j, i),
        towardList[j],
        unit,
        building,
        noteList[j],
        scoreList[j]
      );
      houses.push(house);
    }
  }
  return houses;
};

const create761House = () => {
  const houses = [];
  const getProperty = (building, level) => {
    return propertyType.house;
  };

  // 层级，临街，面积
  const areaList = [135, 138, 114, 114];
  const towardList = [
    towardType.east,
    towardType.east,
    towardType.east,
    towardType.west,
  ];
  const nearStreetList = [false, true, true, true];
  const noteList = [
    '不朝南',
    '临两条街，亏了两平米玄关',
    '两条街，玄关长，客厅短',
    '玄关长，客厅短',
  ];
  const scoreList = [9, 6, 4, 6];
  for (let j = 0; j < 4; j++) {
    for (let i = 2; i <= 32; i++) {
      const building = j + 1;
      const unit = 1 + '单元';
      const name = '76#';
      const house = new House(
        name,
        nearStreetList[j],
        i,
        areaList[j],
        getProperty(j, i),
        towardList[j],
        unit,
        building,
        noteList[j],
        scoreList[j]
      );
      houses.push(house);
    }
  }
  return houses;
};

houses = _(houses)
  .concat(
    create811House(),
    create812House(),
    create822House(),
    create821House(),
    create761House(),
    create752House(),
    create751House()
  )
  .value();

// require('fs').writeFileSync('./houses.json', JSON.stringify(houses));
