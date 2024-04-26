/******************************************************************
 * What's Props (React Props)
 * Definition :  JSX Attribute / Component Attribute as a Javascript Object
 *
 * --------------------------------------------------------------
 * Syntax : Component with Props
 * --------------------------------------------------------------
 * <MyComponent name="John Doe" age={30} isAdmin onClick={()=>{}}/>
 *
 * --------------------------------------------------------------
 * Mental Model of Props (Attribute -> JS Object)
 * --------------------------------------------------------------
 * props = {
 *  name: "John Doe",
 *  age: 30,
 *  isAdmin :true,
 *  onClick : () => {}
 * }
 *
 * --------------------------------------------------------------
 * Mental Model when Component Render with Props
 * --------------------------------------------------------------
 *
 * #1 <MyComponent name="John Doe" age={30} isAdmin onClick={()=>{}}/>
 *
 * ==============================================================
 *
 * #2 MyComponent(props) or
 *
 * ==============================================================
 *
 * #3 MyComponent({
 *  name: "John Doe",
 *  age: 30,
 *  isAdmin :true,
 *  onClick : () => {}
 * })
 * ==============================================================
 * --------------------------------------------------------------
 * Benefits
 * --------------------------------------------------------------
 * | 1 | More Reusable Component ⭐️
 * --------------------------------------------------------------
 *****************************************************************/

/**********************************************
 *  create root from ReactDOM
 **********************************************/
const root = ReactDOM.createRoot(document.getElementById('root'));

/**********************************************
 * Ex-0 : Review HTML Attribute
 **********************************************/

{
  /* <a href="https://google.com">This is a link</a>
<img src="" />
<input /> */
}

/**********************************************
 * Ex-0 : Review JS Function
 **********************************************/
// function createProfile() {
//   return 'John Doe'; // string | boolean etc.
// }

function createProfile(name) {
  return name; // string | boolean etc.
}
// alert(createProfile('John'));

/**********************************************
 * Ex-1 : UserInfo (Pass a single String)
 **********************************************/

// คนสร้างฟังก์ชัน
function UserProfile(props) {
  console.log(props);
  // props.age = 2;
  return (
    <h1>
      {props.name} : {props.age}
    </h1>
  ); // JSX | Component
}

function App() {
  return (
    <>
      <UserProfile name='Jim Carry' age={30} isAdmin={false} />
      {/* props = { name:"Jim Carry",age:30} */}
      <UserProfile name='John Doe' age={25} isAdmin={true} />
    </>
  );
}

// คนเรียกใช้ฟังก์ชัน Caller
// root.render(<App />);
// ข้อควรระวัง
// - Don't Modify Prop in Function Component (Read Only)
// - Missing Props : จะได้ undefined (object missing key)

/**********************************************
 * Ex-2 : Pass String and Number
 **********************************************/

/**********************************************
 * Ex-3 : Custom ClassName (Pass String)
 **********************************************/

/**********************************************
 * Ex-3 : Pass Boolean
 **********************************************/

/**********************************************
 * Ex-4 : Pass Array
 **********************************************/

// function List(props) {
//   return <h3>{props.data}</h3>;
// }
// const friend = ['John', 'Jack', 'Jane'];

// root.render(<List data={friend} />);

/**********************************************
 * Ex-5 : Pass Object
 **********************************************/
// function ProductDetail(props) {
//   return (
//     <>
//       <h2>Name : {props.name} </h2>
//       <h2>Price : {props.price} </h2>
//       <h2>Quantity : {props.quantity}</h2>
//     </>
//   );
// }

// root.render(<ProductDetail name='TV' price={20000} quantity={2} />);

function ProductDetail(props) {
  return (
    <>
      <h2>Name : {props.detail?.name}</h2>
      <h2>Price : {props.detail?.price} </h2>
      <h2>Quantity : {props.detail?.quantity} </h2>
    </>
  );
}

const data = {
  name: 'TV',
  price: 20000,
  quantity: 2,
};
// undefined.name == JS Crash
root.render(<ProductDetail detail={data} />);

/**********************************************
 * Ex-6 : Pass Object
 **********************************************/

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
