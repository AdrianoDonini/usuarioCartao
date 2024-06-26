import prismaClient from "../../prisma";

interface VerifyCard{
    numero:string
    id_Usersession:string
}

class VerifyCardService{
    async execute({numero, id_Usersession}:VerifyCard){
        const Card = await prismaClient.cartao.findFirst(
            {
                where:{
                    numero:numero
                }
            }
        )
        if(!Card){
            throw new Error("Esse cartão não está cadastrado!");   
        }
        if(Card.id_usuario == id_Usersession){
            return {ok:true};
        }else{
            return {nok:"Não foi dessa vez Joás :("};
        }
    }
}

export {VerifyCardService}