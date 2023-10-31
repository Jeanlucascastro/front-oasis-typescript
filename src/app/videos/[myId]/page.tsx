import Link from "next/link"

export default async function video({ params }: {
    params: { myId: string}
}) {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const video = data.json()
    return(
        <><h1>Video - {params.myId}</h1><ul>
            <li><Link href={"/"}>Voltar</Link></li>
        </ul></>
    )
}
