import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const inputs = [
  {
    ID: "aei90cacad89fvfvw",
    type: "pressure",
    timestamp: "2026-02-28T19:20+01:00",
  },
  {
    ID: "hjkl2570cnf348cnd2",
    type: "temperature",
    timestamp: "2026-02-28T19:20+01:00",
  },
  {
    ID: "mklcm92345tnclerk0",
    type: "temperature",
    timestamp: "2026-02-28T19:20+01:00",
  },
  {
    ID: "34290vrneio93niow0",
    type: "humidity",
    timestamp: "2026-02-28T19:20+01:00",
  },
  {
    ID: "207vpsu42kcnwh4920sjn",
    type: "pressure",
    timestamp: "2026-02-28T19:20+01:00",
  },{
    ID: "1890cnewe9wzb0134rio",
    type: "temperature",
    timestamp: "2026-02-28T19:20+01:00",
  },{
    ID: "cke943891394njifo34",
    type: "pressure",
    timestamp: "2026-02-28T19:20+01:00",
  },{
    ID: "cdfka8923n8jdm29dmd9",
    type: "pressure",
    timestamp: "2026-02-28T19:20+01:00",
  },{
    ID: "m8c73n38chwwix83",
    type: "temperature",
    timestamp: "2026-02-28T19:20+01:00",
  },{
    ID: "kieje83718e73nkskql",
    type: "humidity",
    timestamp: "2026-02-28T19:20+01:00",
  },{
    ID: "dle02815dnowmepxe",
    type: "temperature",
    timestamp: "2026-02-28T19:20+01:00",
  },
]

export function TableFooterExample() {
  return (
    <Table>
      <TableCaption>List of collected data by the sensor.</TableCaption>
      <TableHeader className="bg-secondary">
        <TableRow>
          <TableHead className="w-[100px]">Identificator</TableHead>
          <TableHead>Data type</TableHead>
          <TableHead>Time and date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {inputs.map((invoice) => (
          <TableRow key={invoice.ID}>
            <TableCell>{invoice.ID}</TableCell>
            <TableCell>{invoice.type}</TableCell>
            <TableCell>{invoice.timestamp}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total number of collected data</TableCell>
          <TableCell className="text-right">{inputs.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
