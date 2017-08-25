import * as React from 'react';
import '../styles/style.scss';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const GridLayout = (props) => {

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

  return (

    <ResponsiveReactGridLayout className="layout" onDragStop={handleDrag}
                               breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                               cols={{lg: 12, md: 8, sm: 4, xs: 2, xxs: 1}}>

      <div key="1" data-grid={{w: 2, h: 3, x: 0, y: 0}}><span className="text">1</span></div>
      <div key="2" data-grid={{w: 2, h: 3, x: 4, y: 1}}><span className="text">2</span></div>
      <div key="3" data-grid={{w: 2, h: 3, x: 4, y: 0}}><span className="text">3</span></div>
      <div key="4" data-grid={{w: 2, h: 3, x: 6, y: 0}}><span className="text">4</span></div>
      <div key="5" data-grid={{w: 2, h: 3, x: 8, y: 0}}><span className="text">5</span></div>
    </ResponsiveReactGridLayout>
  )
}