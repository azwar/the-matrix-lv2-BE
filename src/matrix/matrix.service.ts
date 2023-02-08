import { Injectable } from '@nestjs/common';
import { Matrix } from '../database/models/Matrix';
import { MatrixResult } from '../dto/MatrixResultDTO';

@Injectable()
export class MatrixService {
  async findCoordinate(id: number): Promise<MatrixResult | boolean> {
    // query matrix with limit, for further can be set dynamicaly
    const listMatrix = await Matrix.query().limit(100);
    let foundIndex = -1;
    let result: MatrixResult;

    listMatrix.forEach((item, index) => {
      if (foundIndex === -1) {
        const strMatrix = item.matrix;
        const objMatrix = JSON.parse(strMatrix);
        // const coordinate = this.searchItem2DArray(objMatrix, id);
        const coordinate = this.searchItemBinary(objMatrix, id);

        if (coordinate) {
          foundIndex = index;
          result = Object.assign(new MatrixResult(), {
            dbrow: index,
            coordinate: coordinate,
          });
        }
      }
    });

    if (result) {
      return result;
    }

    return false;
  }

  /**
   * Binary Serch - Per Row Block jump
   * Time complexity O(N + M), where N is the number of rows and M is the number of columns
   */
  searchItem2DArray(
    matrix: number[][],
    target: number,
  ): [number, number] | boolean {
    const row = matrix.length;
    const col = matrix[0].length;
    let r = 0,
      c = col - 1;
    let i = 1; // to track iteration

    while (r < row && c >= 0) {
      console.log('iteration:' + i);

      if (matrix[r][c] === target) {
        return [r, c];
      } else if (matrix[r][c] > target) {
        c--;
      } else {
        r++;
      }

      i++;
    }

    return false;
  }

  /**
   * Binary Search - Improved version
   * Time complexity O(log N)
   */
  searchItemBinary(
    arr: number[][],
    target: number,
  ): [number, number] | boolean {
    const row = arr.length;
    const col = arr[0].length;
    let l = 0,
      h = row * col - 1;
    let i = 1; // to track iteration

    while (l <= h) {
      const mid = l + Math.floor((h - l) / 2);
      const tC = mid % col;
      const tR = Math.floor(mid / col);
      const val = arr[tR][tC];
      if (val == target) return [tR, tC];

      if (val < target) l = mid + 1;
      else h = mid - 1;

      i++;
    }

    return false;
  }
}
