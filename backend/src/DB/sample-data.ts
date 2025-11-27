const userList = [
  {
    id: "1",
    name: "Alice",
    age: 30,
    username: "alice123",
    nationality: "USA",
    friends: [
      {
        id: "2",
        name: "Bob",
        age: 25,
        username: "bob123",
        nationality: "CANADA",
      },
      {
        id: "1",
        name: "Alice",
        age: 30,
        username: "alice123",
        nationality: "USA",
      },
    ],
  },
  {
    id: "2",
    name: "Bob",
    age: 25,
    username: "bob123",
    nationality: "CANADA",
  },
  {
    id: "3",
    name: "Charlie",
    age: 28,
    username: "charlie123",
    nationality: "USA",
  },
  {
    id: "4",
    name: "David",
    age: 32,
    username: "david123",
    nationality: "GERMANY",
  }
];

const movieList=[
  {
    id:"1",
    name:"Inception",
    yearOfPublication:2010,
    isInTheaters:false
  },
  {
    id:"2",
    name:"The Dark Knight",
    yearOfPublication:2008,
    isInTheaters:false
  },
  {
    id:"3",
    name:"Interstellar",
    yearOfPublication:2014,
    isInTheaters:false
  },
  {
    id:"4",
    name:"Tenet",
    yearOfPublication:2020,
    isInTheaters:true
  },
  {
    id:"5",
    name:"Dunkirk",
    yearOfPublication:2017,
    isInTheaters:false
  }
]

export  {userList, movieList};