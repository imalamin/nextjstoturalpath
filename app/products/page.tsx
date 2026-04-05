export default function ProductsList()  {
    return (
        <div>{
            [1, 2, 3].map((id) => (
                <div key={id}>
                    <h2>Product {id}</h2>
                    <p>This is product {id}.</p>
                </div>
            ))
        }</div>
    );
}
