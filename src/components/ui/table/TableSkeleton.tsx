export const RowSkeleton = ({ rows, columns }: Readonly<{ rows: number, columns: number }>) => {
  return (<>
    {
      [...Array(rows)].map((_, index: number) => (
        <tr key={index} className="hover:bg-gray-50">
          {
            [...Array(columns)].map((_, index: number) => (
              <td key={index} className="p-3">
                <p className="animate-pulse w-full h-2 rounded-md bg-gray-400"></p>
              </td>
            ))
          }
        </tr>
      ))
    }
  </>)
}