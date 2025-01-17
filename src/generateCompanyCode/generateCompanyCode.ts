export function generateCompanyCode(): string {
    const caracteres: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    
    let code = ''
    
    for (let i: number = 0; i < 6; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length)
    
        code += caracteres[indiceAleatorio]
    }

    return code
}