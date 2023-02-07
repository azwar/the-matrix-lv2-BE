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
        const coordinate = this.searchItem2DArray(objMatrix, id);

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

  searchItem2DArray(
    matrix: number[][],
    target: number,
  ): [number, number] | boolean {
    const row = matrix.length;
    const col = matrix[0].length;
    let r = 0,
      c = col - 1;

    while (r < row && c >= 0) {
      if (matrix[r][c] === target) {
        return [r, c];
      } else if (matrix[r][c] > target) {
        c--;
      } else {
        r++;
      }
    }

    return false;
  }
}
