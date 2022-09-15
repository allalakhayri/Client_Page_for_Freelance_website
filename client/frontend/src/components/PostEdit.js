import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='username' />
        <TextInput source='email' />
        <TextInput source='password' />
        <TextInput source='experience' />
        <TextInput source='speciality' />
        <TextInput source='city' />
        <TextInput source='phone' />
       
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit