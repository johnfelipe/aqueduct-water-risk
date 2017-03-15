import React from 'react';
import classnames from 'classnames';
import { Timeline, Radio } from 'aqueduct-components';
import { points } from 'constants/points';

export default function AdvancedList(props) {
  function getLayers(layers, deep) {
    return (
      <ul className="layerlist-list -advanced">
        {layers.map((l, index) => {
          const cNames = classnames('layerlist-item', {
            '-selected': props.activeLayers.includes(l.id)
          });
          return (
            <li className={cNames} key={index}>
              {Array.isArray(l.ponderation) ?
                <span>
                  <span className="timeline-title">{l.name}</span>
                  <Timeline className="-rate -bloqued" items={points} selected={{ value: '3' }} onChange={() => {}} />
                </span> :
                <span className={deep < 2 ? 'title -upper' : 'title'}>
                  <Radio
                    label={l.name}
                    onChange={i => props.onSelectLayer([i])}
                    name="layer"
                    value={l.id}
                    selected={props.activeLayers[0]}
                  />
                </span>
                }
              {l.children && l.children.length &&
                getLayers(l.children, deep + 1)
              }
            </li>
          );
        })}
      </ul>
    );
  }

  return getLayers(props.layers, 0);
}

AdvancedList.propTypes = {
  layers: React.PropTypes.array,
  activeLayers: React.PropTypes.array,
  onSelectLayer: React.PropTypes.func
};

AdvancedList.defaultProps = {
  layers: [],
  activeLayers: []
};
