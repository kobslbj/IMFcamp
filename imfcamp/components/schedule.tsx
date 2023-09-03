import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
  } from "@nextui-org/react";
  
  export const Schedule = () => {
    return (
      <div className="bg-sky-950 p-4">
        <Table
          aria-label="Example static collection table"
          className="min-w-full bg-sky-950 divide-y divide-gray-700"
        >
          <TableHeader>
            <TableColumn className="px-6 py-3 text-center font-bold text-white bg-sky-950 shadow-md text-xl">
              Day1 2/1
            </TableColumn>
            <TableColumn className="px-6 py-3 text-center font-bold text-white bg-sky-950 shadow-md text-xl">
              Day2 2/2
            </TableColumn>
            <TableColumn className="px-6 py-3 text-center font-bold text-white bg-sky-950 shadow-md text-xl">
              Day3 2/3
            </TableColumn>
            <TableColumn className="px-6 py-3 text-center font-bold text-white bg-sky-950 shadow-md text-xl">
              Day4 2/4
            </TableColumn>
            <TableColumn className="px-6 py-3 text-center font-bold text-white bg-sky-950 shadow-md text-xl">
              Day5 2/5
            </TableColumn>
          </TableHeader>
          <TableBody>
            {[
              ["童話世界", "課程時間", "課程時間", "課程時間", "反派崛起"],
              ["辛巴の部落衝突", "午夜的玻璃鞋", "灰姑娘逆襲", "同化中的倖存者", "Eternity"],
              ["一千零一夜怪談", "失序的同化世界", "紅心皇后的騙局", "賣火柴的小女孩", ""]
            ].map((row, index) => (
              <TableRow key={index} className="bg-sky-950">
                {row.map((cell, cellIndex) => (
                  <TableCell 
                    key={cellIndex}
                    className={`px-6 py-4 whitespace-no-wrap text-center font-bold text-white bg-sky-950 shadow-md text-xl ${cellIndex === 0 ? '' : 'border-l'} border-gray-700`}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  