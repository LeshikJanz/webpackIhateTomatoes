import * as React from 'react';
import './styles/style.scss';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const GridLayout = (props) => {
  const layout = [
    { i: 'a', x: 0, y: 1, w: 100, width: 300, h: 200, static: true },
    { i: 'b', x: 1, y: 2, w: 3, h: 2, width: 300,  minW: 200, maxW: 400 },
    { i: 'c', x: 2, y: 1, w: 3, h: 2, width: 300,  minW: 2, maxW: 4 },
    { i: 'd', x: 3, y: 3, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'e', x: 4, y: 4, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'f', x: 5, y: 5, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'g', x: 6, y: 6, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'h', x: 7, y: 79, w: 30, h: 2, minW: 2, maxW: 4 },
    { i: 'i', x: 8, y: 5, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'k', x: 9, y: 5, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'l', x: 10, y: 3, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'm', x: 11, y: 2, w: 1, h: 2 }
  ];

  const handleDrag = (layout, oldItem, newItem, placeholder, e, element) => {
    console.log('layout');
    console.log(layout);
    console.log('oldItem');
    console.log(oldItem);
    console.log('newItem');
    console.log(newItem);
    console.log('placeholder');
    console.log(placeholder);
    console.log('e');
    console.log(e);
    console.log('element');
    console.log(element);
  }

  const layouts = layout;

  return (

    <ResponsiveReactGridLayout className="layout" layouts={layouts} onDragStop={handleDrag}
                               breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                               cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
      <div key={'a'}>a</div>
      <div key={'b'}>b</div>
      <div key={'c'}>c</div>
      <div key={'d'}>d</div>
      <div key={'e'}>e</div>
      <div key={'f'}>f</div>
      <div key={'g'}>g</div>
      <div key={'h'}>h</div>
      <div key={'i'}>i</div>
      <div key={'k'}>k</div>
      <div key={'l'}>l</div>
      <div key={'m'}>m</div>
    </ResponsiveReactGridLayout>
  )
}