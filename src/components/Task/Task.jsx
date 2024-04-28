import React from 'react'
import './AllTasks.css'
export default function Task({title, desc}) {
  return (
    <div className="task">
    <input
      className="getTaskCheckbox"
      type="checkbox"
      name="taskDone"
      id=""
      onClick={() => console.log('sfdkjsdfskjdfh')}
    />
    <div className="taskContent">
      <h2 style={{
        color : "#b57d0d"
      }}>The first heading is almost first heading</h2>

      <span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptas inventore eveniet laboriosam placeat incidunt distinctio nihil suscipit, animi eum obcaecati. Quam cumque perspiciatis ducimus doloremque at sit quisquam soluta.</span>
    </div>
    <h3 onClick={() => console.log("sdfjskjdfhkffskdfjhskfdjhskjdfhskldjfhslkdjfhljf")} id="crossSign">X</h3>
  </div>
  )
}
