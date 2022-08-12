
import './To do list/style.css';
import './To do list/script.js';

function App() {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Task List</title>
    <link rel="stylesheet" href="style.css" />
    <header>
      <h1>Task List</h1>
      <form id="new-task-form">
        <input type="text" id="new-task-input" placeholder="What do you have planned?" />
        <input type="submit" id="new-task-submit" Value="Add task" />
      </form>
    </header>
    <main>
      <section className="task list">
        <h2>Tasks</h2>
        <div id="tasks">
          {/*  <div class="task">
                <div class="content">
                    <input type="text" class="text" value="A new task" readonly></div>
                    <div class="actions">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>
            </div>*/}
        </div>
      </section>
    </main>
  </div>
);
}

export default App;
