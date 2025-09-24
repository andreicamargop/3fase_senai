import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
  await prisma.usuario.createMany({
    data: [
      { nome:"Joao", 
        email: "joao34@email.com", 
        senha: "123",
        cargo: "Médico"
      },
      { nome: "Bianca",
        email: "bianca12@email.com",
        senha:"345",
        cargo: "Dentista"
      },
      {
        nome: "Carlos",
        email: "carlos123@email.com",
        senha: "abc",
        cargo: "Motorista"
      },
    ],
  });

     await prisma.paciente.createMany({
    data: [
      {
        nome: "João",
        sexo: "Masculino",
        data_nascimento: new Date("1980-12-11"),
        cpf: "958.521.251.65",
        telefone: 952556232,
        email: "joao@email.com"
      },
      {
        nome: "Bianca",
        sexo: "Feminino",
        data_nascimento: new Date("1996-04-19"),
        cpf: "987.654.321.54",
        telefone: 984732556,
        email: "bianca123@email.com"
      },
      {
        nome: "Carlos",
        sexo: "Masculino",
        data_nascimento: new Date("1995-05-10"),
        cpf: "987,654.654.45",
        telefone: 978452165,
        email: "carlos43@email.com"
      },
    ],
    }),

    await prisma.exame.createMany({
      data: [
        {
          tipo_exame: "Densiometro",
          data_exame: new Date("2023-08-25"),
          resultado: "deu ruim",
          link_arquivo: "url.com.br/exame.pdf",
          observacoes: "",
          paciente_id: 1

        },
        {
          tipo_exame: "Sangue",
          data_exame: new Date("2023-08-25"),
          resultado: "tudo ok",
          link_arquivo: "url.com.br/exame.pdf",
          observacoes: "coletado",
          paciente_id: 1
          

        }
      ],
    }),

    await prisma.consulta.createMany({
      data: [
        {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        },
        {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        }, {
          motivo: "Dor nas costas",
          data_consulta: new Date("2023-08-25"),
          observacoes: "Ibuprofeno 3 vezes ao dia",
          medico_responsavel_id: 1,
          paciente_id: 1
        },
      ]
    }),

    await prisma.prontuario.createMany({
    data: [
      {
        descricao: "aa",
        data: new Date("2025-09-19"), 
        medico_responsavel_id: 1,
        paciente_id: 1
    },
      {
        descricao: "aa",
        data: new Date("2025-09-19"), 
        medico_responsavel_id: 1,
        paciente_id: 1
    },
      {
        descricao: "aa",
        data: new Date("2025-09-19"), 
        medico_responsavel_id: 1,
        paciente_id: 1
    },
      {
        descricao: "aa",
        data: new Date("2025-09-19"), 
        medico_responsavel_id: 1,
        paciente_id: 1
    },
      {
        descricao: "aa",
        data: new Date("2025-09-19"), 
        medico_responsavel_id: 1,
        paciente_id: 1
    },
      {
        descricao: "aa",
        data: new Date("2025-09-19"), 
        medico_responsavel_id: 1,
        paciente_id: 1
    },
      {
        descricao: "aa",
        data: new Date("2025-09-19"), 
        medico_responsavel_id: 1,
        paciente_id: 1
    },
      {
        descricao: "aa",
        data: new Date("2025-09-19"), 
        medico_responsavel_id: 1,
        paciente_id: 1
    },
      {
        descricao: "aa",
        data: new Date("2025-09-19"), 
        medico_responsavel_id: 1,
        paciente_id: 1
    },
      {
        descricao: "aa",
        data: new Date("2025-09-19"), 
        medico_responsavel_id: 1,
        paciente_id: 1
    },
      {
        descricao: "aa",
        data: new Date("2025-09-19"), 
        medico_responsavel_id: 1,
        paciente_id: 1
    },
      {
        descricao: "aa",
        data: new Date("2025-09-19"), 
        medico_responsavel_id: 1,
        paciente_id: 1
    },
  ]
  })

}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
