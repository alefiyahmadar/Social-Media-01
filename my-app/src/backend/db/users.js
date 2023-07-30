import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    follow:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },{

    _id:uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamsoni456",
    follow:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),


  },{
    
    _id:uuid(),
    firstName: "Soham",
    lastName: "Shah",
    username: "sohamshah",
    follow:false,
    password: "sohamshah789",
    createdAt: formatDate(),
    updatedAt: formatDate(),



  },{

    _id:uuid(),
    firstName: "Mary",
    lastName: "Jane",
    username: "maryjane",
    password: "maryjane098",
    follow:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),



  }
];
