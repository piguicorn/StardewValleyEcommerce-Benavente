import ItemList from "./ItemList"

export default function ItemListContainer({greeting}) {
    return (
        <main>
            <h1 style={{
                color: "#282828",
                fontWeight: 500,
                textAlign: "center"
            }}>
                Products:
            </h1>
            <ItemList/>
        </main>
    )
}