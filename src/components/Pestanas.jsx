import React from 'react';
import {Accordion} from 'react-bootstrap';
import {Contenido} from './Contenido'

export function Pestanas({data}) {

  return (
    <Accordion  defaultActiveKey="0">
      {data.map((item, index) => (
        <Accordion.Item eventKey={index}>
          <Accordion.Header>{item.name}</Accordion.Header>
          <Accordion.Body>

            <div className='divmenu'>
            {Object.keys(item).filter(key => key !== 'name').map(year => (
                <Contenido year={year} data={item[year]} />
                ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion >
  );
  };