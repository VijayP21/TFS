// Commercial version
import React from "react";
import { XGrid } from '@material-ui/x-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

export default function ListGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
  });

  return (
    <div style={{ height: 520, width: '100%' }}>
      <XGrid
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
      />
    </div>
  );
}
