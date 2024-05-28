const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const iniciar = async (req, res) => {
    const professores = await prisma.professor.findMany({
        select: {
            id: true,
            nome: true,
            especialidade: true,
            turmas: {
                select: {
                    turma: true,
                }
            }
        }
    });
    res.render('professor', { professores: professores });
}

module.exports = {
    iniciar
}