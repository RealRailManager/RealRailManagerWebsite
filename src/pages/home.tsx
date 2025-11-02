import "../Global.css";
import DataTable from "react-data-table-component";
import { fetchMinimalMods } from "../APIRequests";
import type { Mod } from "../APIRequests";
import { useEffect, useState } from "react";

const SortIcon = () => <span style={{fontSize: 12}}>⇅</span>;

const customStyles = {
  table: {
    style: {
      backgroundColor: '#a5a5a5ff',
    },
  },
  headRow: {
    style: {
      backgroundColor: '#a5a5a5ff',
      color: 'white',
    },
  },
  headCells: {
    style: {
      color: 'white',
      fontWeight: 'bold',
    },
  },
  rows: {
    style: {
      backgroundColor: '#a5a5a5ff',
      color: 'white',
    },
  },
  pagination: {
    style: {
      backgroundColor: '#a5a5a5ff',
    },
  },
};

export default function home() {

  const [data, setData] = useState<Mod[]>([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const mods = await fetchMinimalMods() as Mod[];
        if (mounted) {
          setData(mods);
          for (const mod of mods) {
            console.log(mod);
          }
        }
      } catch (err) {
        console.error("Failed to fetch mods: ", err);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const columns: TableColumn<Mod>[] = [
    {
      name: "Name",
      selector: row => row.name,
      sortable: true
    },
    {
      name: "Author",
      selector: row => row.author,
      sortable: true
    }
  ];

  const modsText = data.length + " Mods"

  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="derail.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="content">
        <h1>Real Rail Manager</h1>
        <DataTable
          title={modsText}
          columns={columns}
          data={data}
          defaultSortFieldId="name"
          sortIcon={<SortIcon />}
          pagination
          customStyles={customStyles}
        />
      </div>
    </>
  );
}