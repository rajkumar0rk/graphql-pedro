import {userList,movieList} from '../DB/sample-data.js'
import _ from 'lodash'


const resolver={
Query:{
  users:()=>{
    return userList;
  },
  user:(parent:any,args:any,context:any,info:any)=>{
    const {id}=args
    return userList.find((user)=>user.id===id)
  },
  movies:()=>{
    return movieList;
  },
  movie:(parent:any,args:any)=>{
    const {name}=args;
    return _.find(movieList,{name})
  },
  
},
User:{
  favoriteMovie:()=>{
    return _.filter(movieList,(movie:any)=>movie.yearOfPublication >=2000 && movie.yearOfPublication <=2010);
  }
},
Mutation:{
  createUser(parent:any,args:any){
    const {user}=args;
    user.id=userList.length+1+""
    userList.push(user);
    return user
  },
  updateUserName(parent:any,args:any){
    const {id,username}=args.user;
    let updatedUser;
    userList.forEach((user)=>{
      if(user.id===id){
        user.username=username;
        updatedUser=user
      }

    })
    return updatedUser;
  },
  deleteUser(parent:any,args:any){
    const {userID}=args;
    _.remove(userList,(user)=>user.id===userID)
    return userList;
  }
}
}

export default resolver;