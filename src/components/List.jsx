

function List(props) {


    props.items.sort((a, b) => a.calories > b.calories);


    const listItems = props.items.map((fruit) => (
        <li key={fruit.id}>
            {fruit.name}: &nbsp;<b>{fruit.calories}</b>
        </li>
    ));

    return (
        <>
            <h3>List</h3>
            <ol>{listItems}</ol>
        </>
    );
}

export default List;