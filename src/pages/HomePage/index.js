import React from 'react';
import { reduxForm } from 'redux-form';
import Navbar from 'components/Navbar/Navbar';
import Table from 'components/Table/Table';
function Home() {
  return (
    <div style={{ width: '100vw' }}>
      <Table />
    </div>
  );
}

export default reduxForm({ form: 'Homeform' })(Home);
