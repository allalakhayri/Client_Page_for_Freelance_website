import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const UserCreate = (props) => {
  return (
    <Create title='Create a service' {...props}>
      <SimpleForm>
        <TextInput source='username' />
        <TextInput source='email' />
        <TextInput source='password' />
        <TextInput source='city' />
        <TextInput source='phone' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate