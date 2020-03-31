import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow, EditableLabel } from '@/index';
import data from '../mock/flow.json';
import styles from './index.less';

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <Flow
          className={styles.editorBd}
          data={data}
          graphConfig={
            {
              // renderer: 'svg'
              // defaultEdge: {
              //   shape: 'cubic-vertical',
              //   style: {
              //     startArrow: false,
              //     endArrow: {
              //       path: [['M', 3, 0], ['L', -3, -3], ['L', -3, 3], ['Z']],
              //       d: 3,
              //     },
              //     lineDash: false,
              //     stroke: '#333',
              //   },
              //   addEdgeStyle: {
              //     startArrow: false,
              //     lineDash: [5, 5],
              //     stroke: 'blue',
              //   },
              // },
            }
          }
        />
        <EditableLabel />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
