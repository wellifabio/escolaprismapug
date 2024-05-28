const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const iniciar = async (req, res) => {
    const turmas = await prisma.turma.findMany({
        select: {
            id: true,
            nome: true,
            abreviacao: true,
            alunos: {
                select: {
                    ra: true,
                    nome: true,
                    nascimento: true
                }
            },
            professores: {
                select: {
                    professor: true,
                }
            },
        }
    });
    res.render('index', { turmas: turmas });
}

const create = async (req, res) => {
    const turma = await prisma.turma.create({
        data: req.body
    });
    res.redirect('/');
}

module.exports = {
    iniciar,
    create
}