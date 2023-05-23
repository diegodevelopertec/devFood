import { CardDoubt } from "../../Components/CardDoubt"
import { BoxContent, BoxDoubts, BoxDoubtsList } from "./style"
import { Box } from "./style"



let doubts=[
    {
        id:1,
        title:'Como funciona o pagamento?',
        response:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
        incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
        incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
        incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.
        `
    },
    {
        id:2,
        title:'Como funciona o pagamento?',
        response:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
        incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
        incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
        incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.`
    }
    ,
    {
        id:3,
        title:'Como funciona o pagamento?',
        response:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
        incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
        incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
        incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.`
    }
]

export const AboutPage=()=>{
    return <Box>
        <h2>Sobre Nós | DevFood</h2>
        <BoxContent>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sOnrHUJxM7HJWL6twlwxKM45iQbZEvXojw&usqp=CAU" alt="" />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
                incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
                incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
                incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
                incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perferendis quae itaque? Iste mollitia voluptatem quo ad 
                incidunt recusandae voluptatibus corrupti. Magnam doloribus deleniti, modi autem maiores pariatur tempora.
            </p>
        </BoxContent>
        <BoxDoubts>
            <h3>Perguntas Frequentes</h3>
            <BoxDoubtsList>
               {
                doubts.map((i,k)=>(
                <CardDoubt doubt={i} key={k} />
                ))
               }
            </BoxDoubtsList>
        </BoxDoubts>
    </Box>
}