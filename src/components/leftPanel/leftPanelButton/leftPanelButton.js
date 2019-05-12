import React from 'react';
import { DragSource } from 'react-dnd'

const itemDragCycle = {
  beginDrag(props) {
    console.log(`Dragging ${props.itemNumber}`);
    return props;
  },
  endDrag(props,monitor,component) {
    if(monitor.didDrop()) {
      console.log(`Droped in Target! ${props.itemNumber}`);
      console.log(component)
    }
  }
}

function collect(connect,monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

function LeftPanelButton(props) {
  const {connectDragSource} = props;
  return connectDragSource(
    <div 
    style={{
      width: '100px',
      margin: '10px',
      border: '1px solid black',
      backgroundColor: 'lightgray',
      textAlign: 'center'
    }}>
      Button - {props.itemNumber}
    </div>
    );
}

export default DragSource('buttons', itemDragCycle, collect)(LeftPanelButton)