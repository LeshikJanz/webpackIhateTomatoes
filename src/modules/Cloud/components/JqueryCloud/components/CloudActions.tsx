import * as React from 'react';
import Hint from "components/Hint/containers";
import { Search } from "components/Search/Search";
const SVG = require('react-svg');

export const CloudActions: any = ({ cloud, handleSearch, updateCloudName, updateCloud, handleKeyPress, cloudNameInput, tags }: any) => (
  <div className="cloud-actions">
    <Hint text="You can search by knowledge name">
      <Search onChange={ handleSearch } name="name" numberFounded={tags.length}/>
    </Hint>
    <Hint text="This is current cloud name">
      <div className="cloud-name">
        <input className="cloud-name-input"
               ref={(input) => cloudNameInput = input}
               disabled={cloud.accountId !== localStorage.getItem('UserId')}
               value={cloud.name} onChange={updateCloudName} onKeyPress={handleKeyPress}/>
        {
          !(cloud.name === cloud.initialName && cloud.isNameSaved) &&
          <div onClick={updateCloud}>
            <SVG path="assets/icons/save-icon-mark.svg"
                 className="save-button" placeholder="save"
            />
          </div>
        }
      </div>
    </Hint>
  </div>
)