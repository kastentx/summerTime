import React from 'react';

export default function Prompt(props) {
  return (
      <form onSubmit={props.onSubmitTag}>
      <div className="form-group col-sm-2 col-sm-offset-5" style={{paddingTop : '20px'}}>
        <input
          style={{maxWidth: '240px', marginLeft: 'auto', marginRight: 'auto'}}
          onChange={props.onUpdateTag}
          value={props.value}
          className="form-control"
          placeholder="battleTag-1234"
          type="text" />
      </div>
      <div className="form-group col-sm-2 col-sm-offset-5">
        <button
          className="btn"
          style={{backgroundColor : '#f51aff', color: 'white'}}
          type="submit">
          Lookup
        </button>
      </div>
    </form>
  )
}
