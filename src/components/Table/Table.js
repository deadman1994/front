import React from 'react';

function Table() {
  return (
    <div>
      <table className="table  table-bordered col-lg-12 m-auto">
        <thead style={{ backgroundColor: '#A71A1A', color: '#fff' }}>
          <tr>
            <th scope="col">Code Agence</th>
            <th scope="col">Lib Agence</th>
            <th scope="col">Code Devise</th>
            <th scope="col">Lib Devise</th>
            <th scope="col">Encaisse Min</th>
            <th scope="col">Encaisse Opt</th>
            <th scope="col">Encaisse Max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <input />
            </th>
            <td></td>
            <td>
              <input />
            </td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
