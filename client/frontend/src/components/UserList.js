import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
      <TextField source='id' />
        <TextField source='username' />
        <TextField source='email' />
        <TextField source='password' />
        <TextField source='city' />
        <TextField source='phone' />
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
  )
}

export default UserList