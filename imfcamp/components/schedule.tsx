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
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn className="xl:px-6 xl:py-3 text-center font-bold text-brand-primary shadow-md xl:text-xl">
          Day1 2/05
        </TableColumn>
        <TableColumn className="xl:px-6 xl:py-3 text-center font-bold text-brand-primary shadow-md xl:text-xl">
          Day2 2/06
        </TableColumn>
        <TableColumn className="xl:px-6 xl:py-3 text-center font-bold text-brand-primary shadow-md xl:text-xl">
          Day3 2/07
        </TableColumn>
        <TableColumn className="xl:px-6 xl:py-3 text-center font-bold text-brand-primary shadow-md xl:text-xl">
          Day4 2/08
        </TableColumn>
        <TableColumn className="xl:px-6 xl:py-3 text-center font-bold text-brand-primary shadow-m d xl:text-xl">
          Day5 2/09
        </TableColumn>
      </TableHeader>
      <TableBody>
        {[
          ["芝麻開門", "解鎖財富之謎", "達文西密碼", "巴菲特的啟示？", "破城之路"],
          [
            "迷城初探",
            "大冒險家",
            "一擲千金",
            "環遊城邦",
            "財富自由",
          ],
          ["噩夢迷途", "狂歡之城", "華爾街之夜", "火盃的考驗", "萬歲！"],
        ].map((row, index) => (
          <TableRow key={index}>
            {row.map((cell, cellIndex) => (
              <TableCell
                key={cellIndex}
                className={`xl:px-6 xl:py-4 whitespace-no-wrap text-center font-bold text-brand-primary shadow-md xl:text-xl ${
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
