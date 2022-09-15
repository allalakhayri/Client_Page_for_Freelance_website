import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
      <TextField source='id' />
        <TextField source='username' />
        <TextField source='email' />
        <TextField source='password' />
        <TextField source='experience' />
        <TextField source='speciality' />
        <TextField source='city' />
        <TextField source='phone' />
        <EditButton basePath='/services' />
        <DeleteButton basePath='/services' />
      </Datagrid>
    </List>
  )
}

export default PostList