/* ============================================================================
   CONTEÚDO DO SITE
   ----------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar para mudar textos, horários,
   contatos e datas. Nada aqui é código complicado: é só texto entre aspas.

   REGRAS AO EDITAR:
   1. Mantenha as aspas "   " em volta dos textos.
   2. Mantenha a vírgula no fim de cada linha.
   3. Não apague os nomes antes dos dois-pontos (ex.: titulo:).
   ============================================================================ */

export const projeto = {
  nome: "Escolinha Top Vôlei",
  assinatura: "Top Vôlei Club",
  resumo:
    "Projeto social gratuito de vôlei de areia para crianças e adolescentes em João Pessoa.",
  descricaoSeo:
    "Escolinha Top Vôlei: aulas gratuitas de vôlei de areia para crianças e adolescentes de 6 a 16 anos na Praça Tenente Lucena, Castelo Branco, João Pessoa/PB. Esporte e educação caminhando juntos.",
  // Endereço do site depois de publicado. Trocar quando tiver domínio próprio.
  site: "https://escolinha-top-volei.pages.dev",
  // Arquivos da logo, dentro da pasta "public".
  logo: "/logo-192.webp",
  logoGrande: "/logo-512.webp",
  // Os quatro valores que aparecem no brasão
  valores: ["Formação", "Disciplina", "Superação", "Amizade"],
};

export const contato = {
  // Número no formato internacional, só dígitos: 55 + DDD + número
  whatsappNumero: "5583986989725",
  whatsappExibicao: "(83) 98698-9725",
  // Mensagem que já vem escrita quando a pessoa clica no botão
  whatsappMensagem:
    "Olá! Vi o site e quero saber mais sobre a Escolinha Top Vôlei.",
  email: "ra4contato@gmail.com",
  instagram: "escolinhatopvolei4",
  instagramUrl: "https://instagram.com/escolinhatopvolei4",
  grupoComunidade:
    "https://chat.whatsapp.com/EfUYdbEImb5FRdqjcp8cBu?s=cl&p=a&mlu=4&ilr=4",
};

export const local = {
  nome: "Praça Tenente Lucena",
  bairro: "Castelo Branco",
  cidade: "João Pessoa",
  estado: "PB",
  cep: "58050-055",
  enderecoCompleto:
    "Praça Tenente Lucena, Castelo Branco, João Pessoa/PB, CEP 58050-055",
  // Busca pelo endereço no Google Maps (não precisa de chave de API)
  mapaUrl:
    "https://www.google.com/maps?q=Pra%C3%A7a+Tenente+Lucena,+Castelo+Branco,+Jo%C3%A3o+Pessoa+-+PB,+58050-055&output=embed",
  mapaLink:
    "https://www.google.com/maps/search/?api=1&query=Pra%C3%A7a+Tenente+Lucena,+Castelo+Branco,+Jo%C3%A3o+Pessoa+-+PB,+58050-055",
};

export const aulas = {
  idadeMinima: 6,
  idadeMaxima: 16,
  dias: "Sábados e domingos",
  horario: "15h às 17h",
  observacaoHorario:
    "Pode haver turmas pela manhã. O horário de cada fim de semana é confirmado no grupo do WhatsApp.",
  valor: "Gratuito",
  nivel: "Todos os níveis — não é preciso saber jogar",
};

/* ----------------------------------------------------------------------------
   TORNEIO
   ATENÇÃO: confira o ANO nas datas abaixo antes de publicar.
   O formato é "AAAA-MM-DDTHH:MM:SS-03:00" (ano-mês-dia T hora:minuto:segundo).
   A contagem regressiva do site usa a data de "inicioISO".
---------------------------------------------------------------------------- */
export const torneio = {
  ativo: true,
  nome: "I Copinha Maria de Fátima de Vôlei Solidário",
  nomeCurto: "I Copinha Maria de Fátima",
  motivo: "Em comemoração ao Dia das Crianças",
  inicioISO: "2026-10-17T08:00:00-03:00",
  datasExibicao: "17 e 18 de outubro",
  detalheDias: [
    { dia: "17/10", publico: "Meninas" },
    { dia: "18/10", publico: "Meninos" },
  ],
  inscricoesAteISO: "2026-10-05T23:59:59-03:00",
  inscricoesAteExibicao: "05 de outubro",
  taxa: "1 kg de aveia + 1 caixa de maizena",
  destinoDoacao: "Lar de idosos",
  formularioUrl: "https://forms.gle/Q8zxmkvtxU9rDDnR7",
};

export const historia = {
  titulo: "Por que a Escolinha existe",
  paragrafos: [
    "O projeto nasceu de uma história pessoal. Alisson, idealizador da Escolinha, foi atleta de vôlei e conquistou uma bolsa de estudos em colégio particular por causa do esporte. Aquela bolsa mudou o rumo da vida dele e abriu o caminho até a engenharia civil.",
    "A Escolinha Top Vôlei existe para devolver essa oportunidade a outras crianças. Não é só sobre vôlei: é sobre mostrar que o esporte pode abrir portas que pareciam fechadas.",
    "A rede de contatos do projeto já conquistou três bolsas de estudo em colégios particulares da cidade. Apenas uma criança conseguiu ingressar — as outras duas famílias não tinham como pagar o transporte até a escola.",
  ],
  // Esta frase aparece em destaque, como um alerta ao leitor
  chamadaApoio:
    "Duas bolsas de estudo foram perdidas por falta de dinheiro para o ônibus. É esse tipo de barreira que o apoio de patrocinadores derruba.",
};

export const diferenciais = [
  {
    titulo: "100% gratuito",
    texto:
      "Nenhuma mensalidade, nenhuma taxa de inscrição. O projeto é mantido com recursos próprios e trabalho voluntário.",
  },
  {
    titulo: "Esporte e educação juntos",
    texto:
      "Boas notas e frequência escolar fazem parte do compromisso de quem treina. O vôlei é a porta; a escola é o caminho.",
  },
  {
    titulo: "Aberto a todos os níveis",
    texto:
      "Não é preciso saber jogar nem ter experiência. Quem nunca tocou numa bola é bem-vindo do mesmo jeito.",
  },
  {
    titulo: "Prioridade a quem mais precisa",
    texto:
      "O projeto é aberto a todos, com prioridade para crianças e adolescentes em situação de vulnerabilidade social.",
  },
];

export const documentos = [
  {
    nome: "Ficha de inscrição",
    descricao: "Dados da criança e do responsável.",
  },
  {
    nome: "Termo de responsabilidade",
    descricao: "Assinado pelo responsável legal.",
  },
  {
    nome: "Autorização de uso de imagem",
    descricao:
      "Permite que o projeto registre e divulgue as atividades. É opcional e pode ser recusada sem prejuízo à participação.",
  },
];

export const comoParticipar = [
  {
    numero: "01",
    titulo: "Chame no WhatsApp",
    texto:
      "Mande uma mensagem para a coordenação. Responde uma pessoa de verdade, não é robô.",
  },
  {
    numero: "02",
    titulo: "Receba os documentos",
    texto:
      "A coordenação envia a ficha de inscrição, o termo de responsabilidade e a autorização de uso de imagem.",
  },
  {
    numero: "03",
    titulo: "Entre no grupo",
    texto:
      "No grupo da comunidade você acompanha horários, avisos de chuva e novidades de cada fim de semana.",
  },
  {
    numero: "04",
    titulo: "Apareça na quadra",
    texto:
      "Traga água, boné e protetor solar. O resto a gente resolve na areia.",
  },
];

export const apoio = {
  titulo: "Apoie o projeto",
  texto:
    "A Escolinha é mantida com recursos próprios e voluntariado. Todo apoio vira bola, rede, uniforme, água, transporte e oportunidade de estudo para uma criança.",
  formas: [
    {
      titulo: "Patrocínio",
      texto:
        "Sua empresa associa a marca a um projeto social real, com retorno em visibilidade e impacto na comunidade.",
    },
    {
      titulo: "Doação de material",
      texto:
        "Bolas, redes, uniformes, cones, garrafas de água e protetor solar são sempre necessários.",
    },
    {
      titulo: "Voluntariado",
      texto:
        "Professores, estudantes de educação física e pessoas dispostas a ajudar nos fins de semana.",
    },
    {
      titulo: "Bolsas de estudo",
      texto:
        "Escolas parceiras que ofereçam vagas, e apoiadores que ajudem com o transporte até elas.",
    },
  ],
};

export const faq = [
  {
    pergunta: "A escolinha é realmente gratuita?",
    resposta:
      "Sim. Não há mensalidade nem taxa de inscrição. O projeto é mantido com recursos próprios e trabalho voluntário.",
  },
  {
    pergunta: "Qual a idade para participar?",
    resposta: "De 6 a 16 anos, meninos e meninas.",
  },
  {
    pergunta: "Precisa saber jogar vôlei?",
    resposta:
      "Não. A escolinha recebe todos os níveis, inclusive quem nunca jogou. Os professores ensinam desde o começo.",
  },
  {
    pergunta: "Quais são os horários?",
    resposta:
      "Sábados e domingos, normalmente das 15h às 17h. Pode haver turmas pela manhã. O horário de cada fim de semana é confirmado no grupo do WhatsApp.",
  },
  {
    pergunta: "O que preciso levar?",
    resposta:
      "Água, boné e protetor solar. Roupa confortável e vontade de aprender.",
  },
  {
    pergunta: "Quais documentos são exigidos?",
    resposta:
      "Ficha de inscrição, termo de responsabilidade e autorização de uso de imagem, todos assinados pelo responsável legal. A coordenação envia tudo pelo WhatsApp.",
  },
  {
    pergunta: "E se chover?",
    resposta:
      "Os avisos de cancelamento ou mudança de horário são publicados no grupo da comunidade no WhatsApp.",
  },
  {
    pergunta: "Como faço para apoiar o projeto?",
    resposta:
      "Fale com a coordenação pelo WhatsApp. O projeto aceita patrocínio, doação de material, voluntariado e parcerias para bolsas de estudo.",
  },
];

/* ----------------------------------------------------------------------------
   LINK DO WHATSAPP
   Monta o endereço com a mensagem já escrita. Não precisa editar.
---------------------------------------------------------------------------- */
export function linkWhatsApp(
  mensagem: string = contato.whatsappMensagem,
): string {
  return `https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
}
