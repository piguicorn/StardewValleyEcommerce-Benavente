export default function ItemListContainer({greeting}) {
    return (
        <h1 style={{
            color: "#282828",
            fontWeight: 500,
            marginTop: "5em"
        }}>
            {greeting}
        </h1>
    )
}