import ExcelJS from 'exceljs';

export async function getExcelData(
  filePath: string,
  sheetName: string
) {

  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile(filePath);

  const worksheet = workbook.getWorksheet(sheetName);

  if (!worksheet) {
    throw new Error(`Sheet ${sheetName} not found`);
  }

  const data: any[] = [];

  const headers: string[] = [];

  worksheet.getRow(1).eachCell((cell, colNumber) => {
    headers[colNumber] = String(cell.value);
  });

  worksheet.eachRow((row, rowNumber) => {

    if (rowNumber === 1) return;

    const rowData: Record<string, string> = {};

    row.eachCell((cell, colNumber) => {

      rowData[headers[colNumber]] =
        String(cell.value ?? '');

    });

    data.push(rowData);
  });

  return data;
}