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
    <Table aria-label="Example static collection table" >
      <TableHeader>
        <TableColumn className="xl:px-6 xl:py-3 text-center font-bold text-white  shadow-md xl:text-xl">
          Day1 1/26
        </TableColumn>
        <TableColumn className="xl:px-6 xl:py-3 text-center font-bold text-white shadow-md xl:text-xl">
          Day2 1/27
        </TableColumn>
        <TableColumn className="xl:px-6 xl:py-3 text-center font-bold text-white  shadow-md xl:text-xl">
          Day3 1/28
        </TableColumn>
        <TableColumn className="xl:px-6 xl:py-3 text-center font-bold text-white  shadow-md xl:text-xl">
          Day4 1/29
        </TableColumn>
        <TableColumn className="xl:px-6 xl:py-3 text-center font-bold text-white  shadow-md xl:text-xl">
          Day5 1/30
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
          ["豪門千金綁架案", "瘋狂的亞洲富豪", "邱總在夜總會", "向陽而生", ""],
        ].map((row, index) => (
          <TableRow key={index} className="">
            {row.map((cell, cellIndex) => (
              <TableCell
                key={cellIndex}
                className={` xl:px-6 xl:py-4 whitespace-no-wrap text-center font-bold text-white  shadow-md xl:text-xl ${
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
  );
};
