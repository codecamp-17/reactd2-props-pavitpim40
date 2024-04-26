/******************************************************************
 * Render Lists
 *
 *
 * --------------------------------------------------------------
 * Concept : Render Array of React Element / React Component
 * --------------------------------------------------------------
 * - data : [1,2,3,4,5]
 * - render : [<li>1</li>,<li>2</li>,<li>3</li>,<li>4</li>,<li>5</li>]
 * --------------------------------------------------------------
 * - data : ['HW','Hangout','Sleep']
 * - render : [<TodoItem todo="HW" />, <TodoItem todo="Hangout" />, <TodoItem todo="Sleep" />]
 *****************************************************************/

/**********************************************
 *  create root from ReactDOM
 **********************************************/
const root = ReactDOM.createRoot(document.getElementById('root'));

/**********************************************
 * Ex-1 : Render Array of React Element
 **********************************************/

// ##1
// function TodoList() {
//   const todoData = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'];

//   // INPUT(DATA) : Array<String> ['item-1', 'item-2', 'item-3'];
//   // OUTPUT(UI) : Array<HTMLTag> [<li>item-1</li>, <li>item-2</li>, <li>item-2</li>]
//   const todoUI = todoData.map((item) => <li>{item}</li>);

//   return <ul>{todoUI}</ul>;
// }

// ##2

function TodoList() {
  const todoData = ['item-1', 'item-2', 'item-3'];

  // INPUT(DATA) : Array<String> ['item-1', 'item-2', 'item-3'];
  // OUTPUT(UI) : Array<HTMLTag> [<li>item-1</li>, <li>item-2</li>, <li>item-2</li>]

  return (
    <ul>
      {todoData.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// root.render(<TodoList />);

/**********************************************
 * Ex-2 : Render Array of React Component (Function Component)
 **********************************************/

// Child
function Movie(props) {
  return <li>{props.name}</li>;
}

// Parent
function MovieList() {
  const movies = ['3Idiot', 'Forest Gump', 'Pursuit of Happiness'];

  // INPUT(DATA) : Array<string> :['3Idiot', 'Forest Gump', 'Pursuit of Happiness'];

  // OUTPUT(UI) : Array< Movie /> : [<Movie/>,<Movie/>,<Movie/>]
  // const movieUI = movies.map((movie) => <Movie />);

  // OUTPUT(UI) : Array< Movie />
  // [<Movie name="3Idiot"/>,<Movie name="Forest Gump"/>,<Movie name="Pursuit of Happiness"/>]
  const movieUI = movies.map((movie, index) => <Movie key={index} name={movie} />);

  // OUTPUT(UI) : Array< Movie > : [<li>3Idiot</li>,<li>Forest Gump</li>,<li>Pursuit of Happiness</li>]

  return <ul>{movieUI}</ul>;
}
{
  /* <Movie key={0} name={"3idiot"} /> */
}
{
  /* <Movie key={1} name={"Forest Gump"} /> */
}
{
  /* <Movie key={2} name={'Pursuit of Happiness'} /> */
}

// root.render(<MovieList />);

/**********************************************
 * Ex-3 : More Example : Quote App
 **********************************************/

function Card(props) {
  return (
    <li>
      <h5>{props.quote}</h5>
      <h6>author : {props.source}</h6>
      <br />
    </li>
  );
}

function Board() {
  // Schema : Array <{quote:string, source:string} >
  const quotes = [
    {
      quote: 'The only sin is ignorance',
      source: 'Christopher Marlowe',
    },
    {
      quote:
        'A man is his own easiest dupe, for what he wishes to be true he generally believes to be true',
      source: 'Demosthenes',
    },
    {
      quote: 'A lie can travel halfway around the world while the truth is putting on its shoes',
      source: 'Mark Twain',
    },
    {
      quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people',
      source: 'Eleanor Roosevelt',
    },
    {
      quote: 'If you have a garden and a library, you have everything you need',
      source: 'Marcus Tullius Cicero',
    },
    {
      quote: 'Truth comes out in wine',
      source: 'Pliny the Elder',
    },
    {
      quote: 'Everything in the universe is within you. Ask all from yourself',
      source: 'Rumi',
    },
    {
      quote: 'When I get a little money I buy books; and if any is left I buy food and clothes',
      source: 'Desiderius Erasmus',
    },
  ];

  return (
    <ul>
      {quotes.map((item, index) => (
        <Card key={index} quote={item.quote} source={item.source} />
      ))}
    </ul>
  );
}
root.render(<Board />);

/**********************************************
 * Ex-4 : More Example : Avatar Group
 **********************************************/
const peopleLists = [
  {
    id: 1,
    name: 'Arya',
    age: 18,
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    name: 'Ned',
    age: 45,
    src: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 3,
    name: 'Rob',
    age: 25,
    src: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 4,
    name: 'John',
    age: 25,
    src: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  },
];

/******************************************************************
 * 🚀 CodeCamp Thailand - Relearn Solution Co. 🌐
 *
 * 👤 Author: Pavit Pimchanagul
 * 📅 Date: 2023-12 (CC16)
 *
 * 📜 Description:
 *    [Brief description of the code or file]
 *
 * 🛠️ Modification History:
 *    [Date] - 🧑‍💻 [ModifiedBy]
 *       [Description of changes]
 *
 * 🌟 Elevate your coding journey with Relearn Solution!
 *    Happy coding, fellow CodeCampers! 🚀✨
 ******************************************************************/
