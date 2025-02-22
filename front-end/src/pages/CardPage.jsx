import Card from "../Card.jsx"

export default function CardPage(){
    return(
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            padding: "20px"
          }}>
            <Card title={"Card1"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quaerat harum perspiciatis doloribus aspernatur optio autem, distinctio quos, excepturi a blanditiis accusamus molestias vero! Quisquam quidem explicabo impedit dolore sed"} image={"/lebron.png"}></Card>
            <Card title={"Card2"}></Card>
            <Card title={"Card3"}></Card>
            <Card title={"Card4"}></Card>
        </div>
    );
}