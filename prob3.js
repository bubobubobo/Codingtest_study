/**
 *
 * @param {imageList} [[imageId, imageHeight, imageWidth]]
 * @param {labelList} [[imageId, itemId, itemHeight, itemWidth, boundingBoxLeft(x1), boundingBoxTop(y1), boundingBoxRight(x2), boundingBoxBottom(y2), imageHeight, imageWidth]]
 *
 * @return {labeledImageList} [[imageId, itemId, itemHeight, itemWidth, boundingBoxLeft(x1), boundingBoxTop(y1), boundingBoxRight(x2), boundingBoxBottom(y2), imageHeight, imageWidth]]
 *
 * 같은 이미지 ID를 가진 수식 item 들은 배열에서 인접해야하며, 같은 이미지 ID들끼리는 오름차순, 이미지 ID로 내림차순 정렬
 */

// TODO: 데이터 중복 제거와 스케일 조정 등을 할 때 쓸데없이 새로운 배열을 생성하여 작동하기 때문에 불필요한 메모리 사용 => 다른 방법 찾을 것
// TODO: 데이터 중복 제거의 경우 brute force 방식으로 찾기 때문에 비효율적 => 좀 더 효율적인 방법 찾을 것
// TODO: class 말고 모듈 혹은 라이브러리화 할 것

class OrganizeImage {
  constructor(imageList, labelList) {
    this.imageList = imageList;
    this.labelList = labelList;
    this.imageIds = this.getImageIds();
  }

  // helper function
  getImageIds() {
    return this.imageList.map(image => image[0]);
  }

  getImageItems(imageId) {
    return this.labelList.filter(label => label[0] === imageId);
  }

  isOverLap(item1, item2) {
    // 정상적인 box data가 들어왔다고 가정
    const [l1, t1, r1, b1] = [item1[4], item1[5], item1[6], item1[7]];
    const [l2, t2, r2, b2] = [item2[4], item2[5], item2[6], item2[7]];
    return l1 < r2 && r1 > l2 && t1 < b2 && b1 > t2;
  }

  isWrongItem(item) {
    const [itemh, itemw, l, t, r, b, imgh, imgw] = [
      item[2],
      item[3],
      item[4],
      item[5],
      item[6],
      item[7],
      item[8],
      item[9],
    ];
    return r - l > imgw && b - t > imgh && r - l !== itemw && b - t !== itemh && r < l && b < t;
  }

  // implementation
  // 데이터 중복 제거
  deleteRepeatedItem() {
    let newLabelList = [];

    this.imageIds.forEach(id => {
      const items = this.getImageItems(id);
      const nonOverlappingImgs = [];

      for (let i = 0; i < items.length; i++) {
        let selectedImg = items[i];
        for (let j = 0; j < items.length; j++) {
          if (i !== j && this.isOverLap(items[i], items[j])) {
            const [h1, w1] = [selectedImg[2], selectedImg[3]];
            const [h2, w2] = [items[j][2], items[j][3]];
            selectedImg = h1 * w1 > h2 * w2 ? selectedImg : items[j];
          }
        }
        nonOverlappingImgs.push(selectedImg);
      }
      newLabelList = [...newLabelList, ...Array.from(new Set(nonOverlappingImgs))];
    });

    this.labelList = newLabelList;
  }

  // 위치값 스케일 조정
  setOriginalItemPos() {
    let newLabelList = [];

    // 배수를 계산해 1/k의 위치 새롭게 계산
    this.imageIds.forEach(id => {
      const items = this.getImageItems(id);
      const [_, imgHeight, imgWidth] = this.imageList.find(image => image[0] === id);
      const scaledImgs = [];

      for (let i = 0; i < items.length; i++) {
        const h = items[i][8];
        if (imgHeight !== h) {
          const scale = h / imgHeight;
          const [imgId, itemId, itemH, itemW, l, t] = items[i];
          scaledImgs.push([
            imgId,
            itemId,
            itemH / scale,
            itemW / scale,
            l / scale,
            l / scale + itemW / scale,
            t / scale,
            t / scale + itemH / scale,
            imgHeight,
            imgWidth,
          ]);
        } else scaledImgs.push(items[i]);
      }
      newLabelList = [...newLabelList, ...scaledImgs];
    });

    this.labelList = newLabelList;
  }

  // 없는 이미지 수식 아이템 삭제
  deleteNonExistingImageItem() {
    const imageIdList = this.imageList.map(image => image[0]);
    this.labelList = this.labelList.filter(label => imageIdList.includes(label[0]));
  }

  // 위치값이 잘못된 경우 아이템 삭제
  deleteWrongPosItem() {
    this.labelList = this.labelList.filter(label => !this.isWrongItem(label));
  }

  getSortedImageItems() {
    let sortedImageItems = [];

    [...this.imageIds]
      .sort((a, b) => b - a)
      .forEach(id => {
        const items = this.getImageItems(id);
        sortedImageItems = [...sortedImageItems, ...items.sort((a, b) => a - b)];
      });

    return sortedImageItems;
  }
}

const solution = (imageList, labelList) => {
  const organizeObj = new OrganizeImage(imageList, labelList);
  // 1. preprocessing
  organizeObj.deleteNonExistingImageItem();
  organizeObj.deleteWrongPosItem();
  organizeObj.deleteRepeatedItem();

  // 2. scaling
  organizeObj.setOriginalItemPos();

  // 3. sorting
  return organizeObj.getSortedImageItems();
};

// imageID는 중복되지 않음
const imageList = [
  [6, 703, 1040],
  [7, 666, 1078],
];
// itemID는 중복되지 않음
const labelList = [
  [6, 6001, 51, 151, 487, 131, 638, 182, 703, 1040],
  [6, 6002, 58, 418, 37, 261, 455, 319, 703, 1040],
  [6, 6003, 51, 81, 716, 265, 797, 316, 703, 1040],
  [6, 6004, 57, 321, 30, 328, 351, 385, 703, 1040],
  [6, 6005, 51, 87, 587, 331, 674, 382, 703, 1040],
  [6, 6006, 91, 93, 88, 421, 181, 512, 703, 1040],
  [6, 6007, 91, 95, 417, 421, 512, 512, 703, 1040],
  [6, 6008, 273, 279, 2232, 1263, 2511, 1536, 2109, 3120],
  [6, 6009, 85, 85, 92, 538, 177, 623, 703, 1040],
  [6, 6010, 95, 97, 416, 533, 513, 628, 703, 1040],
  [7, 7001, 232, 353, 137, 412, 490, 644, 666, 1078],
  [7, 7002, 86, 47, 114, 527, 161, 613, 666, 1078],
  [708, 708002, 86, 47, 114, 527, 161, 613, 666, 1078],
];
console.log(solution(imageList, labelList));
