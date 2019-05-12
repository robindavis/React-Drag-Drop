import React,{Component} from 'react';
import { DropTarget } from 'react-dnd'

let childs=[];

const itemDragCycle = {
  drop(props, monitor, component) {
    console.log(`Dropped`);
    console.log(monitor.getItemType())
  }
}

function collect(connect,monitor) {
  return {
    conectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
    dropped: monitor.didDrop(),
    res: monitor.getDropResult()
  }
}

class CenterPanel extends Component {

  render() {    
    const { conectDropTarget, hovered } = this.props;
    if(dropped)console.log('centeral render called')
    return (
        <div 
        style={{
          display: 'flex',
          flex:'1',
          border: '1px solid black'
        }}>
          {conectDropTarget(<div style={{
            display: 'flex',
            border: '1px solid black',
            flex:'1',
            margin: '50px',
            backgroundColor: hovered ? 'green':'white'
          }}
          >
            Target Area
          </div>)}
        </div>
    );
  }
}

export default DropTarget('buttons',itemDragCycle,collect)(CenterPanel);