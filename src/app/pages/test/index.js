import React from 'react';
import {observer} from "mobx-react"
import {observable} from "mobx"
import  Select from  './select'
import DevTools from 'mobx-react-devtools';


class IndexContainer extends React.Component {
  render() {
    return (
      <div>
        <DevTools />
        <Select
          values={["State.", "Should.", "Be.", "Synchronous."]}
          onSelect={value => console.log(value)}
        />
      </div>

    )
  }


}

export default IndexContainer;
