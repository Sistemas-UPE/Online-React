import React from 'react';
import {Button} from 'react-bootstrap';


export function Contenido({year, data}) {
    return (
      <div className='iconnMenu'>
      <h4>{year}</h4>
      <div>
        {data.map(report => (
          <Button variant='' href={report.url} className='btnGob2'>
            {report.Trimestre }
          </Button>
        ))}
      </div>
    </div>
    );
  }
  