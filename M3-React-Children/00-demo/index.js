/******************************************************************
 * Children Props
 * - ส่ง Props โดยการเขียนเป็น Children ของ Component
 * - Example 1 : <Parent>ChildrenText</Parent>
 * - Example 2 : <Parent><Children/></Parent>
 * - Example 3 : <Parent><Children/><Children/></Parent>
 * - Example 4 : <Parent><Children1/><Children2/></Parent>
 *****************************************************************/

/**********************************************
 *  create root from ReactDOM
 **********************************************/
const root = ReactDOM.createRoot(document.getElementById('root'));

/**********************************************
 * Ex-1 : Card Component
 **********************************************/
function Card(props) {
  console.log(props);
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-header'>{props.title}</div>
        <div className='card-body'>{props.children}</div>
        <div className='card-footer'>
          <button>Click</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='container'>
      <Card title='table'>
        <p>Detail of Table</p>
        <p>Picture</p>
        <button>Buy Item</button>
      </Card>
    </div>
  );
}

root.render(<App />);
