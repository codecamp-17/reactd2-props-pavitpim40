/**********************************************
 * 🚀 Welcome to the React Lab 🚀
 *
 * 🎯 Objective
 * - การ Render ข้อมูลจาก Array ใน JSX
 *
 * 📝 Task:
 * - สร้างหน้า UI สำหรับแสดงผล Feed ของเพื่อน
 * - รูป Feed อยู่ใน images/
 *
 * Suggestion 🧘🏻 :
 *
 *
 * 🚧 Challenge :
 *
 * 🌈 Enjoy the coding journey, and remember:
 *    "The more you code, the more you learn!" 🚀🌐
 **********************************************/

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

function Card(props) {
  // dynamic : title,author,DateTime
  return (
    <div class='card'>
      <h3>{props.title}</h3>
      <div class='card__footer'>
        <p>Author : {props.author}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
function App() {
  const data = [
    {
      title: 'Happy new year',
      author: 'John',
      date: '2022',
    },
    {
      title: 'Programming is Fun',
      author: 'Jame',
      date: '2023',
    },
    {
      title: 'Oh Amazing !!',
      author: 'Jin',
      date: '2024',
    },
  ];

  return (
    <div class='container'>
      {data.map((item) => (
        <Card title={item.title} author={item.author} date={item.date} />
      ))}
    </div>
  );
}

root.render(<App />);
