const Content = ({ parts }) => parts.map(item => <p>{item.name} {item.exercises}</p>)

export default Content;