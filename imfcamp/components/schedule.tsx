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
    <div className=" p-4">
      <Table
        aria-label="Example static collection table"
        className="min-w-full  divide-y "
      >
        <TableHeader>
          <TableColumn className="px-6 py-3 text-center font-bold text-white  shadow-md text-xl">
            Day1 2/1
          </TableColumn>
          <TableColumn className="px-6 py-3 text-center font-bold text-white shadow-md text-xl">
            Day2 2/2
          </TableColumn>
          <TableColumn className="px-6 py-3 text-center font-bold text-white  shadow-md text-xl">
            Day3 2/3
          </TableColumn>
          <TableColumn className="px-6 py-3 text-center font-bold text-white  shadow-md text-xl">
            Day4 2/4
          </TableColumn>
          <TableColumn className="px-6 py-3 text-center font-bold text-white  shadow-md text-xl">
            Day5 2/5
          </TableColumn>
        </TableHeader>
        <TableBody>
          {[
            ["資本遊戲啟動", "新手教學", "腦力激盪", "誰是知識王?", "股海尋奇"],
            [
              "踏進華爾街的第一步",
              "邪惡董事的陰謀",
              "狂歡的拉斯維加斯",
              "逆風翻盤的機會",
              "人生勝利超派",
            ],
            [
              "豪門千金綁架案",
              "瘋狂的亞洲富豪",
              "邱總在夜總會",
              "向陽而生",
              "",
            ],
          ].map((row, index) => (
            <TableRow key={index} className="">
              {row.map((cell, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  className={`px-6 py-4 whitespace-no-wrap text-center font-bold text-white  shadow-md text-xl ${
                    cellIndex === 0 ? "" : "border-l"
                  }`}
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
