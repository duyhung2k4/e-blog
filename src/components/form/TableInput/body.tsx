import React, { useContext } from "react";
import { TableInputRow } from "./row";
import { TableInputContext } from ".";

const TableInputBody: React.FC = () => {
  const context = useContext(TableInputContext);

  if(context === null) return <></>

  const render = () => {
    let index = 0;
    
    return (
      <>
        {
          context.data.map((d, i) => {
            if(d.deleted === true) return <></>
            
            index+=1;
            
            return (
              <TableInputRow
                key={i}
                data={d}
                index={index}
              />
            )
          })
        }
      </>
    )
  }

  return (
    <tbody>{render()}</tbody>
  )
}

export default TableInputBody;