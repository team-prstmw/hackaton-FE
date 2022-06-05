import { useEffect, useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";

import styles from "./TopScoresTable.module.scss";
import { useApiGet } from "../../hooks/useApi";
import { SCORES_ENDPOINT } from "../../urls/api";

interface Highscore {
  username: string;
  score: number;
}

function Table({ columns, data }: any) {
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: { pageSize: 10 },
      },
      usePagination
    );

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function TopScoresTable() {
  const [highscores, setHighscores] = useState<Highscore[]>([]);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "username",
      },
      {
        Header: "Score",
        accessor: "score",
      },
    ],
    []
  );

  const { data: payload } = useApiGet({ path: SCORES_ENDPOINT });
  useEffect(() => {
    const data = payload
      ? [...payload.data].sort((a, b) => (a.score < b.score ? 1 : -1))
      : [];
    setHighscores(data);
  }, [payload]);

  return <Table columns={columns} data={highscores} />;
}
