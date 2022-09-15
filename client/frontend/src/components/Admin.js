import React from "react";
import {Admin,Resource,ListGuesser}from "react-admin"
import restProvider from "ra-data-simple-rest"
import PostList from './PostList'
import PostCreate from "./PostCreate";
import PostEdit from "./PostEdit";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import UserList from "./UserList";
export const Adminn =()=>{
  return (
    <Admin basename='/admin' dataProvider={restProvider('http://localhost:8800/api')}>
       <Resource
        name="services" list={PostList} create={PostCreate} edit={PostEdit}
    
       />
        <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      
    </Admin>
  );
}

