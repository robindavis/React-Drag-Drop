import React from 'react';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import AppHub from './components/apphub/apphub'

function App(props) {
  return (
    <AppHub />
  );
}

export default DragDropContext(HTML5Backend)(App);
