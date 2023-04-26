import { useGetEntriesQuery } from "../../../../services/Entries";

function Dinner() {
  const { data: entries } = useGetEntriesQuery();
  const date = new Date().toDateString();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {!entries ? (
            <></>
          ) : (
            entries
              .filter((entry) => new Date(entry.date).toDateString() === date)
              .filter((entry) => entry.category === "dinner")
              .map((entry) => {
                return (
                  <tr key={entry.id}>
                    <td>{entry.name}</td>
                    <td>{entry.calories}</td>
                  </tr>
                );
              })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dinner;
